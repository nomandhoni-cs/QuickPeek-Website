import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-600 dark:text-gray-400 md:text-left">
              © 2024 QuickPeek. All rights reserved.
            </p>
          </div>
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="/privacy"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
