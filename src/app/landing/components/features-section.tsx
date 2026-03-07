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
  Zap,
  Users,
  TrendingUp,
  Database
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Image3D } from '@/components/image-3d'

const mainFeatures = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions including machine learning models, NLP, computer vision, and predictive analytics that automate decisions and unlock new capabilities.'
  },
  {
    icon: Database,
    title: 'Data Solutions',
    description: 'End-to-end data engineering — pipelines, warehouses, ETL/ELT, and real-time streaming — turning raw data into structured, actionable intelligence.'
  },
  {
    icon: Code2,
    title: 'Costware (Enterprise Software)',
    description: 'Custom-built ERP, CRM, POS, and business management systems engineered precisely to your workflows, replacing costly off-the-shelf limitations.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android, built with React Native and Flutter for seamless, high-performance experiences.'
  }
]

const secondaryFeatures = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Beautiful, performant websites and web applications — from marketing sites to complex SaaS platforms — built with modern frameworks and best practices.'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & BI',
    description: 'Interactive dashboards and business intelligence solutions that give you real-time visibility and the insights needed to make faster, smarter decisions.'
  },
  {
    icon: Headphones,
    title: 'IT Consultancy',
    description: 'Strategic technology guidance to architect the right solutions, choose the right stack, and navigate digital transformation with confidence.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security & Scale',
    description: 'Secure, cloud-native architectures designed to meet compliance standards, handle enterprise workloads, and scale with your growth.'
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
            Five Core Services. One Technology Partner.
          </h2>
          <p className="text-lg text-muted-foreground">
            From AI/ML and data solutions to costware, web development, and mobile apps — we deliver the full technology stack your business needs to compete and scale.
          </p>
        </div>

        {/* First Feature Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-24">
          {/* Left Image */}
          <Image3D
            lightSrc="/feature-1-light.png"
            darkSrc="/feature-1-dark.png"
            alt="Project management dashboard"
            direction="left"
          />
          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                AI, Data & Costware — The Intelligence Layer of Your Business
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                We build AI-powered systems, data engineering pipelines, and custom enterprise software (Costware) that eliminate inefficiencies and put intelligent automation at the core of your operations.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer" asChild>
                <Link href="#contact" className='flex items-center'>
                  Get Started
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                <a href="#about">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Second Feature Section - Flipped Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Web, Mobile & Analytics — Your Digital Presence, Perfected
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                From stunning web platforms and mobile apps to business intelligence dashboards and IT strategy, we cover every touchpoint of your digital presence and help you extract maximum value from your technology investments.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {secondaryFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer" asChild>
                <a href="#contact" className='flex items-center'>
                  Contact Us
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                <a href="#about">
                  Our Approach
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <Image3D
            lightSrc="/feature-2-light.png"
            darkSrc="/feature-2-dark.png"
            alt="Data collection dashboard"
            direction="right"
            className="order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  )
}
