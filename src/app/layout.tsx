import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "My Frontend", template: "%s • My Frontend" },
  description: "Next.js + TypeScript starter"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-2">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
