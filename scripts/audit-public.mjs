import { lstat, mkdir, readdir, writeFile } from "node:fs/promises";
import { dirname, isAbsolute, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");
const publicDirectory = resolve(repositoryRoot, "public");
const outputDirectory = resolve(repositoryRoot, "outputs");
const outputFile = resolve(outputDirectory, "public-audit.json");

function isWithin(parent, child) {
  const pathFromParent = relative(parent, child);
  return pathFromParent === "" || (!isAbsolute(pathFromParent) && !pathFromParent.startsWith(`..${sep}`) && pathFromParent !== "..");
}

function requireWithinRepository(path) {
  if (!isWithin(repositoryRoot, path)) {
    throw new Error("Audit path must remain within the repository.");
  }
}

async function requireDirectory(path, label) {
  const details = await lstat(path);
  if (details.isSymbolicLink() || !details.isDirectory()) {
    throw new Error(`${label} must be a real directory.`);
  }
}

async function prepareOutputDirectory() {
  try {
    await requireDirectory(outputDirectory, "Output directory");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    await mkdir(outputDirectory, { recursive: true });
    await requireDirectory(outputDirectory, "Output directory");
  }

  try {
    const outputDetails = await lstat(outputFile);
    if (outputDetails.isSymbolicLink() || !outputDetails.isFile()) {
      throw new Error("Audit output must be a regular file.");
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

async function inventory(directory, publicRelativeDirectory = "public") {
  const files = [];
  let skippedSymlinks = 0;
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = resolve(directory, entry.name);
    requireWithinRepository(entryPath);
    const details = await lstat(entryPath);

    if (details.isSymbolicLink()) {
      skippedSymlinks += 1;
      continue;
    }

    const publicRelativePath = `${publicRelativeDirectory}/${entry.name}`;
    if (details.isDirectory()) {
      const nested = await inventory(entryPath, publicRelativePath);
      files.push(...nested.files);
      skippedSymlinks += nested.skippedSymlinks;
    } else if (details.isFile()) {
      files.push({ path: publicRelativePath.replaceAll("\\", "/"), bytes: details.size });
    }
  }

  return { files, skippedSymlinks };
}

requireWithinRepository(publicDirectory);
requireWithinRepository(outputDirectory);
requireWithinRepository(outputFile);
await requireDirectory(repositoryRoot, "Repository root");
await requireDirectory(publicDirectory, "Public directory");

const { files, skippedSymlinks } = await inventory(publicDirectory);
files.sort((left, right) => left.path.localeCompare(right.path));

const audit = {
  schemaVersion: 1,
  publicFileCount: files.length,
  skippedSymlinkCount: skippedSymlinks,
  files,
};

await prepareOutputDirectory();
await writeFile(outputFile, `${JSON.stringify(audit, null, 2)}\n`, "utf8");
for (const file of files) {
  console.log(file.path);
}
