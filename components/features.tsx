import { MagnifyingGlassIcon, BookmarkIcon, ClockIcon, ArrowDownTrayIcon, BoltIcon, SparklesIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Universal Search Bar',
    description: 'Effortlessly search across tabs, history, bookmarks, and more—all from one place!',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Manage Open Tabs Like a Pro',
    description: 'Quickly locate that lost tab in a sea of windows. Close, switch, or organize tabs without breaking a sweat.',
    icon: BookmarkIcon,
  },
  {
    name: 'Supercharged Bookmarks',
    description: 'Search, view, and open bookmarks with lightning-fast speed. Rediscover saved treasures without rummaging through folders.',
    icon: ClockIcon,
  },
  {
    name: 'Browser History Search',
    description: 'Forget what you were reading last week? No problem! Search your entire browser history in seconds.',
    icon: ArrowDownTrayIcon,
  },
  {
    name: 'Blazing Fast and Lightweight',
    description: 'Optimized for performance, QuickPeek will not slow down your browser. Minimal memory footprint for smooth browsing.',
    icon: BoltIcon,
  },
  {
    name: 'Sleek and Intuitive Design',
    description: 'Designed with simplicity and elegance in mind. A clean interface that looks and feels natural.',
    icon: SparklesIcon,
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Discover the powerful features that make QuickPeek the ultimate browser companion.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-full flex-col items-center justify-start rounded-md p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold text-lg">{feature.name}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

