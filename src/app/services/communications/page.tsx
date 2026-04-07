import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Plug,
  MessageSquare,
  MessageCircle,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Zap
} from "lucide-react"
import { LandingNavbar } from "../../landing/components/navbar"
import { LandingFooter } from "../../landing/components/footer"

export const metadata: Metadata = {
  title: "Communications & Integrations | Telaven Solutions",
  description: "Connect your systems and reach your customers at scale — bulk SMS, WhatsApp Business API, email marketing, and seamless third-party integrations.",
}

const services = [
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
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
  }
]

const highlights = [
  { title: "Unified Communications", desc: "All your channels — SMS, WhatsApp, email — managed from a single platform" },
  { title: "API-First Design", desc: "Every integration built on robust, well-documented APIs for maximum reliability" },
  { title: "Real-Time Delivery", desc: "Messages and data flowing instantly with delivery receipts and status tracking" },
  { title: "Enterprise Scale", desc: "Infrastructure that handles millions of messages and events without breaking" },
  { title: "Compliance Ready", desc: "GDPR, CAN-SPAM, and local data residency requirements covered by default" },
  { title: "Analytics & Reporting", desc: "Full visibility into delivery rates, open rates, conversions, and ROI" }
]

export default function CommunicationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6" variant="outline">
                <Zap className="w-3 h-3 mr-2" />
                Communications & Integrations
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Connect, Communicate
                <span className="block text-primary mt-2">at Scale</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Unify your systems and reach your customers through every channel — bulk SMS,
                WhatsApp Business API, email marketing, and seamless third-party integrations
                — all built to enterprise standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Talk to Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
              <p className="text-lg text-muted-foreground">
                Four specialised services to connect your business and delight your customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
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
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{service.title}</h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Business</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to communicate reliably and integrate seamlessly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {highlights.map((item, index) => (
                <div key={index} className="bg-muted/30 p-6 rounded-xl border">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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
                Ready to Connect Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s map out the integrations and communication channels that will move the needle for your business.
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
