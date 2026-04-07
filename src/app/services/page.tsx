import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Database,
  Code2,
  Smartphone,
  Globe,
  BarChart3,
  Headphones,
  Plug,
  MessageSquare,
  MessageCircle,
  Mail,
  Zap,
  ArrowRight,
  ArrowUpRight
} from "lucide-react"
import { LandingNavbar } from "../landing/components/navbar"
import { LandingFooter } from "../landing/components/footer"

export const metadata: Metadata = {
  title: "Our Services | Telaven Solutions",
  description: "Explore our full range of technology services: AI & Machine Learning, Data Engineering, Custom Software, Mobile Apps, Web Development, Analytics, and IT Consultancy.",
}

const serviceGroups = [
  {
    label: "AI, Data & Custom Software",
    description: "Intelligent systems, data infrastructure, and tailor-made enterprise software that put automation at the core of your operations.",
    services: [
      {
        icon: Brain,
        title: "AI & Machine Learning",
        description: "Intelligent solutions including machine learning models, NLP, computer vision, and predictive analytics that automate decisions and unlock new capabilities.",
        href: "/services/ai",
        color: "bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400"
      },
      {
        icon: Database,
        title: "Data Engineering",
        description: "End-to-end data engineering — pipelines, warehouses, ETL/ELT, and real-time streaming — turning raw data into structured, actionable intelligence.",
        href: "/services/data-engineering",
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
      },
      {
        icon: Code2,
        title: "Custom Software Development",
        description: "Custom-built ERP, CRM, POS, and business management systems engineered precisely to your workflows, replacing costly off-the-shelf limitations.",
        href: "/services/custom-software",
        color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
      },
      {
        icon: BarChart3,
        title: "Data Analytics & BI",
        description: "Interactive dashboards and business intelligence solutions that give you real-time visibility and the insights needed to make faster, smarter decisions.",
        href: "/services/data-analytics",
        color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
      }
    ]
  },
  {
    label: "Web, Mobile & Consultancy",
    description: "From stunning digital experiences to strategic technology guidance — everything you need to build, launch, and grow.",
    services: [
      {
        icon: Globe,
        title: "Web Development",
        description: "Beautiful, performant websites and web applications — from marketing sites to complex SaaS platforms — built with modern frameworks and best practices.",
        href: "/services/web-development",
        color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400"
      },
      {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android, built with React Native and Flutter for seamless, high-performance experiences.",
        href: "/services/mobile-apps",
        color: "bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400"
      },
      {
        icon: Headphones,
        title: "IT Consultancy",
        description: "Strategic technology guidance to architect the right solutions, choose the right stack, and navigate digital transformation with confidence.",
        href: "/services/consultancy",
        color: "bg-rose-100 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400"
      }
    ]
  },
  {
    label: "Communications & Integrations",
    description: "Connect your systems and reach your customers at scale — bulk SMS, WhatsApp Business API, email marketing, and seamless third-party integrations.",
    services: [
      {
        icon: Zap,
        title: "Communications & Integrations",
        description: "Overview of all our communications and integration services — one partner for every channel and every connection your business needs.",
        href: "/services/communications",
        color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
      },
      {
        icon: Plug,
        title: "System Integrations",
        description: "Seamlessly connect your existing tools, platforms, and third-party APIs — ERP, CRM, payment gateways, and more — into one unified workflow.",
        href: "/services/system-integrations",
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
      },
      {
        icon: MessageSquare,
        title: "Bulk SMS",
        description: "Reach thousands of customers instantly with reliable, high-delivery-rate SMS campaigns — OTPs, alerts, promotions, and transactional messages.",
        href: "/services/bulk-sms",
        color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
      },
      {
        icon: MessageCircle,
        title: "WhatsApp Business API",
        description: "Automate customer conversations, send notifications, and run support at scale through the official WhatsApp Business API with rich messaging support.",
        href: "/services/whatsapp",
        color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
      },
      {
        icon: Mail,
        title: "Email Marketing",
        description: "Design and deliver targeted email campaigns, automated sequences, and transactional emails that drive engagement and convert leads into customers.",
        href: "/services/email-marketing",
        color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
      }
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6" variant="outline">
                What We Do
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Our Services
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Full-stack technology solutions for modern businesses. From AI and data engineering
                to custom software, mobile apps, and business communications — everything you need to compete and scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/landing/#features">
                    View on Homepage
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Grouped Services */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive technology services under one roof
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-16">
              {serviceGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{group.label}</h3>
                    <p className="text-muted-foreground max-w-2xl">{group.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {group.services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="group p-8 bg-background rounded-2xl border hover:shadow-lg transition-all duration-300 flex items-start gap-4"
                      >
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${service.color}`}>
                          <service.icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">{service.title}</h4>
                            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                          </div>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {groupIndex < serviceGroups.length - 1 && (
                    <div className="mt-16 border-b border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Telaven?</h2>
              <p className="text-lg text-muted-foreground">
                Partner with a team that understands technology and business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: "Full-Stack Expertise", desc: "From AI to mobile apps, we handle it all" },
                { title: "Business-Focused", desc: "Solutions designed for your bottom line" },
                { title: "Enterprise Ready", desc: "Scalable, secure, and production-grade" }
              ].map((item, index) => (
                <div key={index} className="text-center p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-muted/30" id="contact">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how our services can help transform your business.
                Get a free consultation today.
              </p>
              <Button size="lg" className="px-8" asChild>
                <Link href="/landing/#contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  )
}
