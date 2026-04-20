import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'About YegnaBridge | Our Mission & History',
  description: 'Learn about YegnaBridge\'s mission, history, and commitment to community compassion and family values.',
}

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About YegnaBridge</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Discover the story behind our mission to create bridges of compassion and community care.
            </p>
          </div>
        </section>

        {/* Organization History */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Story</h2>
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  YegnaBridge was founded on the belief that compassion is a bridge that connects us all. Our organization emerged from a simple yet powerful vision: to create spaces where communities come together, not as charity, but as family.
                </p>
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  What started as small acts of kindness has grown into meaningful outreach programs that touch the lives of families and individuals in need. We believe that every person deserves dignity, respect, and genuine connection.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Today, YegnaBridge stands as a testament to what's possible when communities unite with love and purpose.
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-24_04-18-12-PQoqWATQsX724F2sdaPVCJc8FQsmrp.jpg"
                  alt="YegnaBridge event"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: 'Compassion',
                    desc: 'We lead with empathy, understanding the struggles and joys of those we serve. Compassion is at the heart of everything we do.',
                  },
                  {
                    title: 'Dignity',
                    desc: 'Every person has inherent worth and deserves to be treated with respect. We honor the humanity in all we encounter.',
                  },
                  {
                    title: 'Share Love',
                    desc: 'Community is built through shared experiences and genuine connection. We create moments of joy and belonging.',
                  },
                  {
                    title: 'Empowerment',
                    desc: 'We support growth and independence, believing in the potential of every individual to create positive change.',
                  },
                ].map((value) => (
                  <div key={value.title} className="bg-card border border-border rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
                    <p className="text-foreground leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-foreground leading-relaxed">
                  To create bridges of care and compassion within communities by providing meaningful support, genuine connection, and shared resources that remind families and individuals that they are valued and not alone.
                </p>
              </div>

              <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-foreground leading-relaxed">
                  A world where communities thrive through genuine human connection, where dignity is honored, compassion is abundant, and families support families in creating lasting positive change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Meal Sharing Programs',
                  desc: 'We organize regular meal sharing initiatives that bring communities together, providing both nourishment and connection.',
                },
                {
                  title: 'Community Outreach',
                  desc: 'Through direct engagement and support, we identify and respond to community needs with compassion and respect.',
                },
                {
                  title: 'Volunteer Network',
                  desc: 'We build a community of passionate individuals who dedicate their time and skills to making a meaningful difference.',
                },
                {
                  title: 'Family Support',
                  desc: 'We provide resources and encouragement to families, helping them build stronger connections and secure futures.',
                },
              ].map((program) => (
                <div key={program.title} className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                  <p className="text-foreground leading-relaxed">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
