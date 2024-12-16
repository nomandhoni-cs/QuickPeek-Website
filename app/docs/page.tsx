import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Chrome,
  Search,
  History,
  Bookmark,
  Download,
  Settings,
} from "lucide-react";

export default function DocsPage() {
  const sections = [
    {
      title: "Installation",
      icon: Chrome,
      description: "Learn how to install QuickPeek in your browser",
      href: "/docs/installation",
    },
    {
      title: "Search",
      icon: Search,
      description: "Master the powerful search capabilities",
      href: "/docs/search",
    },
    {
      title: "History",
      icon: History,
      description: "Browse and search your history efficiently",
      href: "/docs/history",
    },
    {
      title: "Bookmarks",
      icon: Bookmark,
      description: "Manage your bookmarks with ease",
      href: "/docs/bookmarks",
    },
    {
      title: "Downloads",
      icon: Download,
      description: "Access your downloaded files quickly",
      href: "/docs/downloads",
    },
    {
      title: "Settings",
      icon: Settings,
      description: "Configure QuickPeek to your needs",
      href: "/docs/settings",
    },
  ];

  return (
    <div className="">
      <main className="container mx-auto px-4 py-2">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Card key={section.title} className="p-6">
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {section.description}
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={section.href}>Learn More</a>
                </Button>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
