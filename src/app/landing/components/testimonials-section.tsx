"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Kimani',
    role: 'CEO',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-1',
    quote:
      'Telaven Solutions built our school management system from scratch. The platform has streamlined our operations and improved parent-teacher communication significantly.',
  },
  {
    name: 'David Mwangi',
    role: 'Operations Director',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-1',
    quote: 'Their data analytics solution gave us insights we never had before. We can now make informed decisions based on real-time data.',
  },
  {
    name: 'Amina Hassan',
    role: 'Founder',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-2',
    quote:
      'The mobile app they developed for our retail business has increased customer engagement by 60%. Professional team, quality work.',
  },
  {
    name: 'Peter Ochieng',
    role: 'CTO',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-2',
    quote:
      'Telaven delivered our custom software on time and within budget. Their technical expertise and understanding of our business needs was impressive.',
  },
  {
    name: 'Grace Wanjiru',
    role: 'Managing Director',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-3',
    quote:
      'Their IT consultancy helped us modernize our infrastructure. The team is knowledgeable, responsive, and truly invested in our success.',
  },
  {
    name: 'James Otieno',
    role: 'Head of Digital',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-3',
    quote: 'The website they built for us is fast, modern, and exactly what we needed. Our online conversions have doubled since launch.',
  },
  {
    name: 'Linda Njeri',
    role: 'Business Owner',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-4',
    quote:
      'Working with Telaven was seamless. They understood our vision and delivered a solution that exceeded our expectations.',
  },
  {
    name: 'Michael Kariuki',
    role: 'Product Manager',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-4',
    quote: 'Their machine learning solution automated our inventory forecasting. We have reduced waste by 40% and improved stock availability.',
  },
  {
    name: 'Faith Akinyi',
    role: 'VP of Operations',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-5',
    quote:
      'Telaven Solutions transformed our manual processes into an efficient digital workflow. The ROI has been remarkable.',
  },
  {
    name: 'Robert Kamau',
    role: 'Startup Founder',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-5',
    quote: 'As a startup, we needed a reliable technology partner. Telaven delivered quality work at a fair price and continues to support us.',
  },
  {
    name: 'Christine Mutua',
    role: 'HR Director',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-6',
    quote:
      'The custom HR management system they built has simplified our recruitment and employee management processes completely.',
  },
  {
    name: 'Daniel Omondi',
    role: 'CFO',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-6',
    quote: 'Their business intelligence dashboard gives us real-time financial insights. Decision-making has never been easier.',
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex w-[380px] shrink-0 flex-col justify-between rounded-xl border bg-card p-6">
      <div>
        <Quote className="size-8 text-muted-foreground/30 mb-4" />
        <p className="text-sm leading-relaxed text-foreground">
          {testimonial.quote}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Avatar className="size-9">
          <AvatarImage
            alt={testimonial.name}
            src={testimonial.image}
            loading="lazy"
          />
          <AvatarFallback>
            {testimonial.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground mt-1">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const row1 = testimonials.slice(0, 6)
  const row2 = testimonials.slice(6, 12)

  return (
    <section id="testimonials" className="py-24 sm:py-32">
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Businesses Across Industries
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1 — scrolls left */}
        <div className="relative mb-4 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex animate-marquee-left gap-4 hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((testimonial, i) => (
              <TestimonialCard key={`r1-${i}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex animate-marquee-right gap-4 hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((testimonial, i) => (
              <TestimonialCard key={`r2-${i}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
