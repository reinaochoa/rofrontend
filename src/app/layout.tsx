import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "My Frontend", template: "%s • My Frontend" },
  description: "Next.js + TypeScript starter"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Skip link for keyboard users */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-2 bg-white">
          Skip to main content
        </a>

        <header role="banner">
          <nav aria-label="Primary" className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
          <div className="mx-auto max-w-6xl px-4">
            <ul className="flex items-center gap-6 py-3 font-medium">
              <li>
                <a
                  href="/"
                  aria-current="page"  // put on the active page only
                  className="block py-2 px-1 text-blue-700 dark:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-1 text-gray-900 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 px-1 text-gray-900 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        </header>

        <main id="main" role="main" tabIndex={-1}>
          {children}
        </main>

        <footer role="contentinfo" className="p-4 text-sm text-gray-500">
          © 2025 My Frontend
        </footer>
      </body>
    </html>
  );
}
