import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function PricingComponent() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-4">
        Spotlight & Alfred like Search but for Browsers
      </h2>
      <p className="text-center text-lg mb-8">By Pollux LLC.</p>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Shortcuts:</h2>
        <p>[CTRL + M] (Windows)</p>
        <p>[Command + M] (MacOS)</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Individual Plan</CardTitle>
            <CardDescription>1 time Activation</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-3xl font-bold mb-4">$5.99</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Price: $5.99 for 1 License Key</li>
              <li>Lifetime Access</li>
              <li>All premium features</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-[#32CD32] hover:bg-[#2AB82A]">
              <Link href="https://pollux.lemonsqueezy.com/buy/6916e832-7744-4f66-bfdb-831a7185aeca">
                Buy Now
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Supporter PowerUser Plan</CardTitle>
            <CardDescription>3 times Activations</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-3xl font-bold mb-4">$14.99+</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Price: $14.99 for 3 License Keys</li>
              <li>Save $3.98 compared to individual purchases</li>
              <li>Same all premium features as Individual Plan</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-[#32CD32] hover:bg-[#2AB82A]">
              <Link href="https://pollux.lemonsqueezy.com/buy/1f99db5f-7444-4e72-80d9-d1a6ba3cc2c0">
                Buy Now
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          ✨ Key Features
        </h2>
        <ul className="list-none space-y-2 max-w-2xl mx-auto">
          <li>
            🌐 Universal Search Bar: Instantly search across tabs, history,
            bookmarks, and more.
          </li>
          <li>
            📂 Manage Tabs: Quickly find, close, or organize your tabs with
            ease.
          </li>
          <li>
            🔖 Supercharged Bookmarks: Search and access bookmarks at lightning
            speed.
          </li>
          <li>
            📜 History Search: Find any page from your browser history in
            seconds.
          </li>
          <li>
            📥 Download Finder: Locate downloaded files without digging through
            folders.
          </li>
          <li>
            ⚡ Fast & Lightweight: Optimized for speed with minimal memory
            usage.
          </li>
          <li>🎨 Sleek Design: A clean, simple, and intuitive interface.</li>
        </ul>
      </div>
    </div>
  );
}
