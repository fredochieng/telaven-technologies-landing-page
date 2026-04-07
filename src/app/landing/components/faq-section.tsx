"use client"

import { CircleHelp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

type FaqItem = {
  value: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    value: 'item-1',
    question: 'What is custom enterprise software and how is it different from off-the-shelf solutions?',
    answer:
      'Custom enterprise software is built from the ground up specifically for your business — covering ERP, CRM, POS, HR management, and other systems tailored precisely to your workflows. Unlike generic off-the-shelf tools, custom software is engineered around how your business actually operates, eliminating costly workarounds, unused features, and per-seat licensing fees that balloon as your team grows.',
  },
  {
    value: 'item-2',
    question: 'What AI and machine learning services do you offer?',
    answer:
      'We build end-to-end AI/ML solutions including predictive analytics models, natural language processing (NLP) systems, computer vision applications, recommendation engines, and intelligent automation workflows. We work with your existing data or help you build the data infrastructure needed to power AI effectively.',
  },
  {
    value: 'item-3',
    question: 'How do your data solutions work?',
    answer:
      'Our data solutions cover the full stack: data pipeline engineering, ETL/ELT processes, data warehousing (BigQuery, Snowflake, Redshift), real-time streaming, and business intelligence dashboards. We help you collect, process, store, and visualize data so your team can make faster, smarter decisions.',
  },
  {
    value: 'item-4',
    question: 'Do you build both iOS and Android mobile apps?',
    answer:
      'Yes. We develop native iOS (Swift) and Android (Kotlin) applications, as well as cross-platform apps using React Native and Flutter. We handle the full lifecycle — design, development, testing, App Store/Play Store submission, and ongoing maintenance.',
  },
  {
    value: 'item-5',
    question: 'What does your web design and development service include?',
    answer:
      'We build everything from marketing websites and e-commerce platforms to complex SaaS web applications. Our web services include UI/UX design, front-end and back-end development, CMS integration, performance optimization, and ongoing support. We use modern frameworks like Next.js, React, and Node.js.',
  },
  {
    value: 'item-6',
    question: 'How long does a typical project take and what does it cost?',
    answer:
      'Project timelines and costs vary based on complexity and scope. A simple website can be delivered in 2–4 weeks, while a full custom enterprise system or AI solution may take 3–6 months. We offer flexible engagement models including fixed-price projects, time-and-materials, and ongoing retainer arrangements. Contact us for a free consultation and tailored quote.',
  },
  {
    value: 'item-7',
    question: 'Do you offer Bulk SMS and WhatsApp Business API solutions?',
    answer:
      'Yes. We provide bulk SMS services for mass messaging campaigns — OTPs, alerts, promotions, and transactional notifications — with high delivery rates across all major carriers. We also implement the official WhatsApp Business API, enabling you to automate customer conversations, send rich media notifications, run support at scale, and integrate WhatsApp directly into your existing systems.',
  },
  {
    value: 'item-8',
    question: 'What does your email marketing service include?',
    answer:
      'Our email marketing service covers campaign design, audience segmentation, automated drip sequences, transactional email setup, and performance analytics. We integrate with leading platforms or build custom solutions depending on your needs — helping you nurture leads, retain customers, and drive repeat business through well-timed, targeted email communication.',
  },
  {
    value: 'item-9',
    question: 'Can you integrate our existing tools and platforms?',
    answer:
      'Absolutely. We specialize in system integrations — connecting your CRM, ERP, payment gateways, e-commerce platforms, third-party APIs, and other business tools into a unified, automated workflow. Whether you need a simple webhook setup or a complex multi-system integration, we architect it to be reliable, maintainable, and scalable.',
  },
]

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our services — AI/ML, data solutions, custom software, web development, and mobile apps. Still have questions? We&apos;re here to help!
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className='bg-transparent'>
            <div className='p-0'>
              <Accordion type='single' collapsible className='space-y-5'>
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className='rounded-md !border bg-transparent'>
                    <AccordionTrigger className='cursor-pointer items-center gap-4 rounded-none bg-transparent py-2 ps-3 pe-4 hover:no-underline data-[state=open]:border-b'>
                      <div className='flex items-center gap-4'>
                        <div className='bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full'>
                          <CircleHelp className='size-5' />
                        </div>
                        <span className='text-start font-semibold'>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-4 bg-transparent'>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We&apos;re here to help.
            </p>
            <Button className='cursor-pointer' asChild>
              <a href="#contact">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FaqSection }
