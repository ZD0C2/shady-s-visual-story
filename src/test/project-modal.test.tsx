import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ProjectModal from "@/components/ProjectModal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";

// jsdom implements neither the Fullscreen API nor media playback.
beforeEach(() => {
  Object.defineProperty(document, "fullscreenElement", {
    configurable: true,
    writable: true,
    value: null,
  });
  Element.prototype.requestFullscreen = vi.fn().mockResolvedValue(undefined);
  document.exitFullscreen = vi.fn().mockResolvedValue(undefined);
  window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
  window.HTMLMediaElement.prototype.pause = vi.fn();
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

const sample = projects[0];

describe("ProjectCard", () => {
  it("invokes onClick when a card is clicked", () => {
    const onClick = vi.fn();
    render(<ProjectCard project={sample} onClick={onClick} />);
    fireEvent.click(screen.getByRole("button", { name: /view case study/i }));
    expect(onClick).toHaveBeenCalledWith(sample);
  });

  it("opens via keyboard (Enter and Space)", () => {
    const onClick = vi.fn();
    render(<ProjectCard project={sample} onClick={onClick} />);
    const card = screen.getByRole("button", { name: /view case study/i });
    fireEvent.keyDown(card, { key: "Enter" });
    fireEvent.keyDown(card, { key: " " });
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("shows category and year chips over the thumbnail", () => {
    render(<ProjectCard project={sample} onClick={vi.fn()} />);
    expect(screen.getByText(sample.category)).toBeInTheDocument();
    expect(screen.getByText(sample.year)).toBeInTheDocument();
  });
});

describe("ProjectModal", () => {
  it("renders nothing when no project is selected", () => {
    const { container } = render(<ProjectModal project={null} onClose={vi.fn()} />);
    expect(container).toBeEmptyDOMElement();
  });

  // Exercise several different projects, per the request to test 3+ cards.
  const cases = [projects[0], projects[1], projects[2]];
  it.each(cases.map((p) => [p.title, p] as const))(
    "opens %s with a muted, controllable video",
    (_title, project) => {
      render(<ProjectModal project={project} onClose={vi.fn()} />);

      const dialog = screen.getByRole("dialog");
      expect(dialog).toHaveAttribute("aria-modal", "true");

      const video = dialog.querySelector("video") as HTMLVideoElement;
      expect(video).toBeTruthy();
      expect(video.muted).toBe(true);
      expect(video).toHaveAttribute("controls");
      expect(video).toHaveAttribute("playsinline");
      expect(video.getAttribute("src")).toBe(project.previewVideo);
    },
  );

  it("closes on the close button", () => {
    const onClose = vi.fn();
    render(<ProjectModal project={sample} onClose={onClose} />);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(onClose).toHaveBeenCalled();
  });

  it("closes on ESC", () => {
    const onClose = vi.fn();
    render(<ProjectModal project={sample} onClose={onClose} />);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });

  it("closes when clicking the backdrop, but not the panel", () => {
    const onClose = vi.fn();
    const { container } = render(<ProjectModal project={sample} onClose={onClose} />);

    const backdrop = container.querySelector(".fixed.inset-0.bg-black\\/85");
    expect(backdrop).toBeTruthy();
    fireEvent.click(backdrop!);
    expect(onClose).toHaveBeenCalledTimes(1);

    // Clicking inside the details panel must not close the modal.
    fireEvent.click(screen.getByRole("heading", { name: sample.title }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("requests fullscreen from the enlarge button", () => {
    render(<ProjectModal project={sample} onClose={vi.fn()} />);
    const enlarge = screen.getByRole("button", { name: /enlarge video to fullscreen/i });
    fireEvent.click(enlarge);
    expect(Element.prototype.requestFullscreen).toHaveBeenCalled();
  });

  it("always renders a close button pinned to the viewport", () => {
    render(<ProjectModal project={sample} onClose={vi.fn()} />);
    const btn = screen.getByRole("button", { name: /close/i });
    expect(btn).toBeInTheDocument();
    // Fixed positioning + a high z-index keep it reachable while the modal is
    // scrolled. (Not asserting toBeVisible: Framer Motion's initial opacity of
    // 0 never animates in jsdom, so that check would test the environment.)
    expect(btn.className).toContain("fixed");
    expect(btn.className).toContain("z-[120]");
  });

  it("lists related snippets and swaps the main media when one is chosen", () => {
    const withSnippets = projects.find((p) => (p.snippets?.length ?? 0) > 0)!;
    expect(withSnippets).toBeTruthy();

    render(<ProjectModal project={withSnippets} onClose={vi.fn()} />);
    expect(screen.getByText(/more from this project/i)).toBeInTheDocument();

    const first = withSnippets.snippets![0];
    fireEvent.click(screen.getByRole("button", { name: new RegExp(first.title, "i") }));

    const dialog = screen.getByRole("dialog");
    const shown = first.isStill
      ? dialog.querySelector("img[src='" + first.src + "']")
      : dialog.querySelector("video[src='" + first.src + "']");
    expect(shown).toBeTruthy();
  });

  it("shows a styled fallback instead of a blank frame when media fails", () => {
    render(<ProjectModal project={sample} onClose={vi.fn()} />);
    const video = screen.getByRole("dialog").querySelector("video") as HTMLVideoElement;
    fireEvent.error(video);
    expect(screen.getByText(/couldn’t be loaded/i)).toBeInTheDocument();
  });

  it("locks background scroll while open and restores it on close", () => {
    const { rerender } = render(<ProjectModal project={sample} onClose={vi.fn()} />);
    expect(document.body.style.overflow).toBe("hidden");
    rerender(<ProjectModal project={null} onClose={vi.fn()} />);
    expect(document.body.style.overflow).not.toBe("hidden");
  });
});
