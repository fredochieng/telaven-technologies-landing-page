import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Zap,
  BarChart3,
  Lock,
  Users,
  Bell
} from "lucide-react"
import { LandingNavbar } from "../../landing/components/navbar"
import { LandingFooter } from "../../landing/components/footer"

export const metadata: Metadata = {
  title: "Bulk SMS | Telaven Solutions",
  description: "Reach thousands of customers instantly with reliable, high-delivery-rate SMS campaigns — OTPs, alerts, promotions, and transactional messages.",
}

const smsServices = [
  {
    icon: Bell,
    title: "Transactional SMS",
    description: "Automated one-time passwords (OTPs), order confirmations, delivery updates, and account alerts delivered in milliseconds."
  },
  {
    icon: Users,
    title: "Bulk Promotional Campaigns",
    description: "Send targeted offers, announcements, and promotions to segmented contact lists with scheduling and personalisation support."
  },
  {
    icon: Zap,
    title: "Two-Way SMS",
    description: "Enable customers to reply to your messages, gather feedback, run surveys, and trigger automated response flows."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time delivery reports, click-through tracking, and campaign performance dashboards to measure every send."
  }
]

const benefits = [
  "99%+ delivery rates on major networks across Africa and globally",
  "Sender ID branding so customers recognise your business instantly",
  "Unicode support for local language messaging",
  "Scheduled sends, drip campaigns, and automated triggers",
  "Simple REST API for integration into any application",
  "Dedicated short codes and long codes available"
]

const useCases = [
  { title: "OTP & 2FA", desc: "Secure account verification and two-factor authentication" },
  { title: "Order Notifications", desc: "Confirmation, shipping, and delivery updates" },
  { title: "Appointment Reminders", desc: "Reduce no-shows with automated SMS reminders" },
  { title: "Promotional Campaigns", desc: "Flash sales, new arrivals, and customer re-engagement" },
  { title: "Internal Alerts", desc: "Staff notifications, incident alerts, and shift reminders" },
  { title: "Customer Support", desc: "Case updates, feedback collection, and satisfaction surveys" }
]

export default function BulkSmsPage() {
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
                <MessageSquare className="w-3 h-3 mr-2" />
                Communications & Integrations
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Bulk SMS
                <span className="block text-primary mt-2">Reach Everyone, Instantly</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Reach thousands of customers instantly with reliable, high-delivery-rate SMS
                campaigns — OTPs, alerts, promotions, and transactional messages that land
                every time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Get Started
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SMS Services</h2>
              <p className="text-lg text-muted-foreground">
                Every type of message your business needs to send
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {smsServices.map((service, index) => (
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
                  Why SMS Still Wins
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  SMS has a 98% open rate. No app install needed. No internet required.
                  It&apos;s the most direct channel you have to your customers.
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
                  <Lock className="w-16 h-16 text-primary mb-6" />
                  <blockquote className="text-lg italic text-muted-foreground mb-6">
                    &ldquo;We send over 50,000 OTPs and order updates a month through Telaven&apos;s
                    SMS platform. Delivery rates are consistently above 98% and the API was
                    trivial to integrate.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">AN</span>
                    </div>
                    <div>
                      <p className="font-medium">Amina Njoroge</p>
                      <p className="text-sm text-muted-foreground">CTO, FinTech Startup</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Use Cases</h2>
              <p className="text-lg text-muted-foreground">
                SMS works for every industry and every stage of the customer journey
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

        {/* CTA */}
        <section className="py-20 lg:py-32" id="contact">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Sending?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get set up with a dedicated sender ID, API credentials, and support —
                so your first campaign is live within days.
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
