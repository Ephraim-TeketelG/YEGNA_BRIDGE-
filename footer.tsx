import Link from 'next/link'

const socialLinks = [
  { icon: 'telegram', href: 'https://t.me/yegnabridge' },
  { icon: 'instagram', href: 'https://instagram.com/yegna_bridge' },
  { icon: 'tiktok', href: 'https://tiktok.com/@yegna_bridge' },
  { icon: 'linkedin', href: 'https://linkedin.com/company/yegnabridge' },
]

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/events' },
  { name: 'Donate', href: '/donate' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">YegnaBridge</h3>
            <p className="text-sm opacity-90 mb-4">Not Charity. Family.</p>
            <p className="text-sm opacity-80">
              Creating bridges of compassion and community care. Building a better future together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>📍 Shinshicho, Ethiopia</p>
              <p>📞 +251-901-844-806</p>
              <p>📞 +251-990-187-037</p>
              <p>📧 yegnabridge.org@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <p className="text-sm opacity-90 mb-4">Follow Us On Social Media</p>
          <div className="flex gap-4 flex-wrap">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-primary-foreground flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
                aria-label={social.icon}
                title={social.icon}
              >
                {social.icon === 'telegram' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.91 3.79L2.04 10.86c-.82.33-1.48.66-1.48 1.3 0 .64.77.88 1.48 1.21l4.51 1.47 9.96-6.97c.41-.27.82-.14.5.27l-8.07 7.33 1.1 4.97c.33.82.66 1.3 1.48 1.3.55 0 1.1-.27 1.93-.82L22.4 4.61c.82-.64.33-1.48-.49-1.82z"/>
                  </svg>
                )}
                {social.icon === 'instagram' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                  </svg>
                )}
                {social.icon === 'tiktok' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.2 0 .41 0 .6.05V9.41a6.96 6.96 0 0 0-.6-.05A6 6 0 1 0 17.6 13.2v-3.5a7.1 7.1 0 0 0 3.99-1.23v-3.44z"/>
                  </svg>
                )}
                {social.icon === 'linkedin' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} YegnaBridge. All rights reserved. | Not Charity. Family.</p>
        </div>
      </div>
    </footer>
  )
}
