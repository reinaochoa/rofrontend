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
          <nav aria-label="Primary" className="bg-white border-gray-200 dark:bg-gray-900">
             <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="flex gap-4 font-medium flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li><a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home </a></li>
              <li><a href="/about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> About</a></li>
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
