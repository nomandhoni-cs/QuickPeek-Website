import { Search, Tabs, History, Bookmark } from "lucide-react"
import { type Feature } from "../types/features"

export const features: Feature[] = [
  {
    icon: Search,
    title: "Quick Search",
    description: "Search across all your browser data instantly with our powerful search engine."
  },
  {
    icon: Tabs,
    title: "Tab Management",
    description: "Find and switch between tabs quickly, no matter how many you have open."
  },
  {
    icon: History,
    title: "Browse History",
    description: "Search through your browsing history with advanced filtering options."
  },
  {
    icon: Bookmark,
    title: "Bookmark Access",
    description: "Access your bookmarks instantly with powerful search capabilities."
  }
]