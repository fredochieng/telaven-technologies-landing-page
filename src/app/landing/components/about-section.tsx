"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { ArrowRight, Target, Lightbulb, Award, Handshake } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable outcomes that directly impact your business objectives and bottom line.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We leverage cutting-edge technologies and modern development practices to build future-proof solutions.'
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Every solution undergoes rigorous testing and quality checks to ensure reliability and performance.'
  },
  {
    icon: Handshake,
    title: 'Partnership Approach',
    description: 'We work alongside you as a trusted technology partner, not just a vendor, throughout your digital journey.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Telaven Technologies
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Your Technology Partner for Digital Transformation
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Telaven Technologies is a full-service technology company delivering Costware (custom enterprise software), AI/ML solutions, data engineering, web development, and mobile apps. We partner with startups, SMEs, enterprises, and institutions to build technology that drives real business transformation.
          </p>
        </div>

        {/* Modern Values Grid with Enhanced Design */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 mb-12">
          {values.map((value, index) => (
            <Card key={index} className='group shadow-xs py-2'>
              <CardContent className='p-8'>
                <div className='flex flex-col items-center text-center'>
                  <CardDecorator>
                    <value.icon className='h-6 w-6' aria-hidden />
                  </CardDecorator>
                  <h3 className='mt-6 font-medium text-balance'>{value.title}</h3>
                  <p className='text-muted-foreground mt-3 text-sm'>{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-muted-foreground">Trusted by businesses across industries to deliver innovative technology solutions</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cursor-pointer" asChild>
              <Link href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer" asChild>
              <a href="#features">
                View Services
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
