import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shady Visual Story",
  description: "The portfolio of Shady Maged — editor, director and motion designer.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
