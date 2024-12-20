import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Free Plan",
    description: "Free forever",
    price: "$0",
    features: [
      "Multiple search engine support",
      "Recent searches history",
      "Google search integration",
      "Bing search integration",
      "Ecosia search integration",
      "DuckDuckGo search integration",
    ],
    link: "https://chromewebstore.google.com/detail/quickpeek-spotlight-alfre/ebcfioefbiighecapdcndkojahlhambn",
    buttonText: "Download Now",
    highlight: false,
  },
  {
    name: "Individual Plan",
    description: "1 time Activation",
    price: "$5.99",
    features: ["1 License Key", "Lifetime Access", "All premium features"],
    link: "https://pollux.lemonsqueezy.com/buy/6916e832-7744-4f66-bfdb-831a7185aeca",
    buttonText: "Buy Now",
    highlight: true,
  },
  {
    name: "Supporter PowerUser Plan",
    description: "3 times Activations",
    price: "$14.99",
    features: [
      "3 License Keys",
      "Save $3.98 compared to individual purchases",
      "All premium features",
    ],
    link: "https://pollux.lemonsqueezy.com/buy/1f99db5f-7444-4e72-80d9-d1a6ba3cc2c0",
    buttonText: "Buy Now",
    highlight: true,
  },
];

const features = [
  "Universal Search Bar: Instantly search across tabs, history, bookmarks, and more.",
  "Recent Searches: Quickly access your most recent searches.",
  "Manage Tabs: Quickly find, close, or organize your tabs with ease.",
  "Supercharged Bookmarks: Search and access bookmarks at lightning speed.",
  "History Search: Find any page from your browser history in seconds.",
  "Download Finder: Locate downloaded files without digging through folders.",
  "Fast & Lightweight: Optimized for speed with minimal memory usage.",
  "Sleek Design: A clean, simple, and intuitive interface.",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Pricing
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Choose the plan that's right for you
          </p>
          <div className="text-center p-4 border rounded-lg bg-primary/10 mt-4">
            <p className="font-medium">
              Try all premium features free for 30 days!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col mx-auto w-full ${
                plan.highlight ? "border-primary/50" : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.highlight ? "default" : "outline"}
                >
                  <Link href={plan.link}>{plan.buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Key Features</h3>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Shortcuts</h3>
          <p className="text-lg">
            [CTRL + M] (Windows) | [Command + M] (MacOS) | [CTRL + M] (Linux)
          </p>
        </div>
      </div>
    </section>
  );
}
