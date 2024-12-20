import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="icon.png" alt="QuickPeek Logo" width={40} height={40} />

          <span className="text-xl font-bold">QuickPeek</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/posts">Posts</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/pricing">Pricing</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Support</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/docs">Documentation</Link>
          </Button>
          <ThemeToggle />
          <Button asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
