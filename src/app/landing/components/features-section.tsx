"use client"

import {
  Code2,
  Smartphone,
  Globe,
  BarChart3,
  Brain,
  Headphones,
  ArrowRight,
  Shield,
  Database,
  Plug,
  MessageSquare,
  Mail,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const mainFeatures = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions including machine learning models, NLP, computer vision, and predictive analytics that automate decisions and unlock new capabilities.',
    href: '/services/ai'
  },
  {
    icon: Database,
    title: 'Data Solutions',
    description: 'End-to-end data engineering — pipelines, warehouses, ETL/ELT, and real-time streaming — turning raw data into structured, actionable intelligence.',
    href: '/services/data-engineering'
  },
  {
    icon: Code2,
    title: 'Custom Enterprise Software',
    description: 'Custom-built ERP, CRM, POS, and business management systems engineered precisely to your workflows, replacing costly off-the-shelf limitations.',
    href: '/services/custom-software'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android, built with React Native and Flutter for seamless, high-performance experiences.',
    href: '/services/mobile-apps'
  }
]

const secondaryFeatures = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Beautiful, performant websites and web applications — from marketing sites to complex SaaS platforms — built with modern frameworks and best practices.',
    href: '/services/web-development'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & BI',
    description: 'Interactive dashboards and business intelligence solutions that give you real-time visibility and the insights needed to make faster, smarter decisions.',
    href: '/services/data-analytics'
  },
  {
    icon: Headphones,
    title: 'IT Consultancy',
    description: 'Strategic technology guidance to architect the right solutions, choose the right stack, and navigate digital transformation with confidence.',
    href: '/services/consultancy'
  },
  {
    icon: Shield,
    title: 'Enterprise Security & Scale',
    description: 'Secure, cloud-native architectures designed to meet compliance standards, handle enterprise workloads, and scale with your growth.',
    href: '#contact'
  }
]

const communicationsFeatures = [
  {
    icon: Plug,
    title: 'System Integrations',
    description: 'Seamlessly connect your existing tools, platforms, and third-party APIs — ERP, CRM, payment gateways, and more — into one unified workflow.',
    href: '/services/system-integrations'
  },
  {
    icon: MessageSquare,
    title: 'Bulk SMS',
    description: 'Reach thousands of customers instantly with reliable, high-delivery-rate SMS campaigns — OTPs, alerts, promotions, and transactional messages.',
    href: '/services/bulk-sms'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Business API',
    description: 'Automate customer conversations, send notifications, and run support at scale through the official WhatsApp Business API with rich messaging support.',
    href: '/services/whatsapp'
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Design and deliver targeted email campaigns, automated sequences, and transactional emails that drive engagement and convert leads into customers.',
    href: '/services/email-marketing'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Full-Stack Technology Solutions. One Partner.
          </h2>
          <p className="text-lg text-muted-foreground">
            From AI/ML and data solutions to custom software, web development, mobile apps, and business communications — we deliver everything your business needs to compete and scale.
          </p>
        </div>

        {/* Group 1: AI, Data, Custom Software & Mobile */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-2">AI, Data & Custom Software</h3>
          <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
            We build AI-powered systems, data engineering pipelines, and custom enterprise software that eliminate inefficiencies and put intelligent automation at the core of your operations.
          </p>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mainFeatures.map((feature, index) => (
              <li key={index}>
                <Link 
                  href={feature.href}
                  className="group hover:bg-accent/5 flex items-start gap-3 p-4 rounded-lg border bg-background transition-colors h-full"
                >
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Group 2: Web, Mobile & Analytics */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-2">Web, Mobile & Analytics</h3>
          <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
            From stunning web platforms and mobile apps to business intelligence dashboards and IT strategy, we cover every touchpoint of your digital presence.
          </p>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryFeatures.map((feature, index) => (
              <li key={index}>
                <Link 
                  href={feature.href}
                  className="group hover:bg-accent/5 flex items-start gap-3 p-4 rounded-lg border bg-background transition-colors h-full"
                >
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Group 3: Communications & Integrations */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-2">Communications & Integrations</h3>
          <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
            Connect your systems and reach your customers at scale — bulk SMS, WhatsApp Business API, email marketing, and seamless third-party integrations.
          </p>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {communicationsFeatures.map((feature, index) => (
              <li key={index}>
                <Link
                  href={feature.href}
                  className="group hover:bg-accent/5 flex items-start gap-3 p-4 rounded-lg border bg-background transition-colors h-full"
                >
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="cursor-pointer" asChild>
            <Link href="#contact" className="flex items-center">
              Get Started
              <ArrowRight className="ms-2 size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="cursor-pointer" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
