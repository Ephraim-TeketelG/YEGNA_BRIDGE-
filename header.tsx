import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/events' },
  { name: 'Donate', href: '/donate' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-8">
        <Link href="/" className="flex-shrink-0 flex items-center gap-3">
          <div className="relative w-12 h-12 bg-white rounded-full p-1">
            <Image
              src="/logo.jpg"
              alt="YegnaBridge"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold">YegnaBridge</h1>
            <p className="text-xs opacity-90">Not Charity. Family.</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button className="text-primary-foreground hover:bg-primary-foreground hover:text-primary p-2 rounded">
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
