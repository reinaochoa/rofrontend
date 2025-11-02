import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "My Frontend", template: "%s • My Frontend" },
  description: "Next.js + TypeScript starter"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <nav aria-label="Primary" className="p-4">
        <ul className="flex gap-4">
          <li><a className="underline" href="/">Home</a></li>
          <li><a className="underline" href="/about">About</a></li>
        </ul>
      </nav>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-2">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
