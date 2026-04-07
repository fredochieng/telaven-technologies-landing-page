import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Bot,
  Users,
  Bell,
  BarChart3,
  Shield
} from "lucide-react"
import { LandingNavbar } from "../../landing/components/navbar"
import { LandingFooter } from "../../landing/components/footer"

export const metadata: Metadata = {
  title: "WhatsApp Business API | Telaven Solutions",
  description: "Automate customer conversations, send notifications, and run support at scale through the official WhatsApp Business API with rich messaging support.",
}

const whatsappServices = [
  {
    icon: Bot,
    title: "Chatbot Automation",
    description: "Build intelligent chatbots that handle FAQs, order tracking, appointment booking, and lead qualification — available 24/7 without human intervention."
  },
  {
    icon: Bell,
    title: "Transactional Notifications",
    description: "Send order confirmations, delivery updates, payment receipts, and appointment reminders directly to customers on WhatsApp."
  },
  {
    icon: Users,
    title: "Customer Support at Scale",
    description: "Route conversations to agents, manage queues, and track resolution times with a full shared inbox built on the WhatsApp Business API."
  },
  {
    icon: BarChart3,
    title: "Campaigns & Broadcasts",
    description: "Send rich media campaigns — images, documents, buttons, and lists — to opted-in contacts and measure engagement in real time."
  }
]

const benefits = [
  "Official Meta-approved WhatsApp Business API access",
  "Rich messaging: images, videos, documents, buttons, and lists",
  "End-to-end encrypted conversations your customers trust",
  "Seamless handoff between chatbot and live agent",
  "Integrate with your existing CRM, helpdesk, or custom system",
  "Delivery receipts and read receipts for every message"
]

const useCases = [
  { title: "E-commerce", desc: "Order tracking, abandoned cart recovery, and post-purchase support" },
  { title: "Healthcare", desc: "Appointment booking, reminders, and patient follow-ups" },
  { title: "Finance & Banking", desc: "Account alerts, loan status updates, and secure OTPs" },
  { title: "Logistics", desc: "Driver-to-customer communication and delivery notifications" },
  { title: "Hospitality", desc: "Booking confirmations, check-in reminders, and guest requests" },
  { title: "Education", desc: "Student updates, fee reminders, and assignment notifications" }
]

export default function WhatsAppPage() {
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
                <MessageCircle className="w-3 h-3 mr-2" />
                Communications & Integrations
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                WhatsApp Business API
                <span className="block text-primary mt-2">Scale Your Conversations</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Automate customer conversations, send rich notifications, and run support at
                scale through the official WhatsApp Business API — on the platform your
                customers already use every day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Get API Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services/communications">All Comms Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
              <p className="text-lg text-muted-foreground">
                End-to-end WhatsApp solutions tailored to your customer journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whatsappServices.map((service, index) => (
                <div
                  key={index}
                  className="group p-8 bg-background rounded-2xl border hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why WhatsApp Business API?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  With over 2 billion active users, WhatsApp is where your customers are.
                  The Business API lets you engage them at scale — without losing the personal,
                  conversational feel they expect.
                </p>

                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <div className="relative bg-background rounded-3xl p-8 border shadow-xl">
                  <Shield className="w-16 h-16 text-primary mb-6" />
                  <blockquote className="text-lg italic text-muted-foreground mb-6">
                    &ldquo;Our customer support load dropped by 60% after Telaven deployed our WhatsApp
                    chatbot. Customers get instant answers and our agents handle only the complex cases.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">SK</span>
                    </div>
                    <div>
                      <p className="font-medium">Sarah Kamau</p>
                      <p className="text-sm text-muted-foreground">Customer Experience Lead</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Use Cases</h2>
              <p className="text-lg text-muted-foreground">
                WhatsApp Business API delivers value across every sector
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {useCases.map((item, index) => (
                <div key={index} className="bg-background p-6 rounded-xl border">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Get You Live</h2>
              <p className="text-lg text-muted-foreground">
                From API approval to your first automated message in weeks
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: "01", title: "Business Verification", desc: "We handle the Meta Business verification and WhatsApp API application on your behalf" },
                { step: "02", title: "Number Provisioning", desc: "Set up your dedicated WhatsApp business number with your brand name and profile" },
                { step: "03", title: "Integration & Flows", desc: "Build chatbot flows, notification templates, and CRM integrations" },
                { step: "04", title: "Launch & Optimise", desc: "Go live with monitoring and iterate on conversation flows based on real data" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
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
                Ready to Automate Your Customer Conversations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s design a WhatsApp experience your customers will love — and your team will thank you for.
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
