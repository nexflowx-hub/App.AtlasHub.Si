import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AtlasHub Workspace",
  description: "The intelligent operating workspace for AtlasHub.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
