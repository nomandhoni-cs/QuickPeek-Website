'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="w-full px-4 lg:px-6 h-20 flex items-center border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://utfs.io/f/93hqarYp4cDd494uez8ZdJvoUVieXchLkNyOIzPmF6l9nbqK"
            alt="QuickPeek Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-2xl font-bold text-primary">QuickPeek</span>
        </Link>
        <nav className="hidden md:flex space-x-10">
          <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
          <Link
            href="https://chromewebstore.google.com/detail/quickpeek-spotlight-alfre/ebcfioefbiighecapdcndkojahlhambn"
            className="hidden md:inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 rounded-md"
          >
            Download Now
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-background border-b border-gray-200 dark:border-gray-800 md:hidden">
          <nav className="container mx-auto py-4 flex flex-col space-y-4">
            <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
            <Link
              href="https://chromewebstore.google.com/detail/quickpeek-spotlight-alfre/ebcfioefbiighecapdcndkojahlhambn"
              className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 rounded-md"
            >
              Download Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

