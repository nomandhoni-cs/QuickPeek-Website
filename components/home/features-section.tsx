import { Search, AppWindowMac, History, Bookmark } from 'lucide-react';
import { FeatureCard } from './feature-card';

const features = [
  {
    icon: Search,
    title: 'Quick Search',
    description:
      'Search across all your browser data instantly with our powerful search engine.',
  },
  {
    icon: AppWindowMac,
    title: 'Tab Management',
    description:
      'Find and switch between tabs quickly, no matter how many you have open.',
  },
  {
    icon: History,
    title: 'Browse History',
    description:
      'Search through your browsing history with advanced filtering options.',
  },
  {
    icon: Bookmark,
    title: 'Bookmark Access',
    description:
      'Access your bookmarks instantly with powerful search capabilities.',
  },
] as const;

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
