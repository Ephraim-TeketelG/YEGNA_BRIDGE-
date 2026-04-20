import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-primary to-primary/80 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-24_04-18-09-ARNfayXRREWNkrNQjURTT8XysT9BCO.jpg"
              alt="Hero background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Not Charity.<br />Family.
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl mb-8 text-balance">
              YegnaBridge creates bridges of compassion, connecting communities with shared meals, shared hope, and shared humanity. We believe small acts of kindness create ripples of change.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/donate"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Donate Now
              </Link>
              <Link
                href="/join"
                className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Join Us
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Our Core Values</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              At YegnaBridge, we are guided by principles that shape everything we do
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Compassion', desc: 'Leading with empathy and understanding' },
                { title: 'Dignity', desc: 'Honoring the worth of every person' },
                { title: 'Share Love', desc: 'Building connections through kindness' },
                { title: 'Empowerment', desc: 'Supporting growth and independence' },
              ].map((value) => (
                <div key={value.title} className="bg-card border border-border rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Mission</h2>
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  YegnaBridge exists to create bridges of care within communities. We believe that compassion knows no boundaries and that every person deserves dignity, hope, and connection.
                </p>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Through meal sharing programs, community outreach, and meaningful engagement, we work to remind families and individuals that they are not alone. Together, we build not just food security, but genuine family bonds.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Learn More About Us
                </Link>
              </div>
              <div className="relative h-96">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-24_04-18-24-PvYnmYggJIsZ8qZoRo99coZ8A64qdl.jpg"
                  alt="YegnaBridge impact"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Whether through donations, volunteering, or simply sharing our mission, you can help us build bridges of compassion.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/donate"
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Donate
              </Link>
              <Link
                href="/join"
                className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Volunteer
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                See Our Impact
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
