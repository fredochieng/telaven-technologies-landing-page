import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  ArrowRight,
  CheckCircle,
  Target,
  RefreshCw,
  BarChart3,
  Users,
  Zap
} from "lucide-react"
import { LandingNavbar } from "../../landing/components/navbar"
import { LandingFooter } from "../../landing/components/footer"

export const metadata: Metadata = {
  title: "Email Marketing | Telaven Solutions",
  description: "Design and deliver targeted email campaigns, automated sequences, and transactional emails that drive engagement and convert leads into customers.",
}

const emailServices = [
  {
    icon: Target,
    title: "Campaign Design & Delivery",
    description: "Beautifully designed email campaigns built for high deliverability — newsletters, promotions, product launches, and re-engagement flows."
  },
  {
    icon: RefreshCw,
    title: "Automated Email Sequences",
    description: "Drip campaigns, welcome sequences, abandoned cart flows, and lifecycle emails that nurture leads and convert customers on autopilot."
  },
  {
    icon: Zap,
    title: "Transactional Emails",
    description: "Instant order confirmations, password resets, invoices, and account notifications delivered reliably via a robust sending infrastructure."
  },
  {
    icon: BarChart3,
    title: "Analytics & Optimisation",
    description: "Open rates, click maps, conversion tracking, A/B testing, and deliverability monitoring to continuously improve campaign performance."
  }
]

const benefits = [
  "Custom HTML email templates that match your brand perfectly",
  "Audience segmentation for highly targeted, relevant messaging",
  "SPF, DKIM, and DMARC configured for maximum inbox placement",
  "Automated workflows triggered by user behaviour and events",
  "List hygiene and unsubscribe management built in",
  "Integration with your CRM, e-commerce platform, or custom system"
]

const useCases = [
  { title: "Welcome Series", desc: "Onboard new subscribers and convert them into buyers" },
  { title: "Abandoned Cart", desc: "Recover lost revenue with timely, personalised reminders" },
  { title: "Product Launches", desc: "Build anticipation and drive sales with launch sequences" },
  { title: "Customer Retention", desc: "Re-engage inactive customers with win-back campaigns" },
  { title: "Transactional", desc: "Order receipts, shipping updates, and account notifications" },
  { title: "Newsletters", desc: "Consistent brand presence with curated content and updates" }
]

export default function EmailMarketingPage() {
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
                <Mail className="w-3 h-3 mr-2" />
                Communications & Integrations
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Email Marketing
                <span className="block text-primary mt-2">Campaigns That Convert</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Design and deliver targeted email campaigns, automated sequences, and
                transactional emails that drive engagement and convert leads into
                long-term customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Start a Campaign
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Email Services</h2>
              <p className="text-lg text-muted-foreground">
                Everything from a single campaign to a fully automated email engine
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {emailServices.map((service, index) => (
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
                  Email Marketing That Lands
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Email delivers an average ROI of $36 for every $1 spent — but only when
                  it&apos;s done right. We build the infrastructure, strategy, and creative
                  that gets your emails opened, read, and acted on.
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
                  <Users className="w-16 h-16 text-primary mb-6" />
                  <blockquote className="text-lg italic text-muted-foreground mb-6">
                    &ldquo;Telaven redesigned our email flows from scratch. Our open rates went from
                    12% to 38% and the automated abandoned cart sequence now recovers over
                    20% of lost sales every month.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">PO</span>
                    </div>
                    <div>
                      <p className="font-medium">Peter Odhiambo</p>
                      <p className="text-sm text-muted-foreground">E-commerce Manager</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Campaign Types</h2>
              <p className="text-lg text-muted-foreground">
                The right email at the right moment for every stage of the customer lifecycle
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

        {/* Process */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-muted-foreground">
                Strategy-first, data-driven, and built to scale with your business
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: "01", title: "Audit & Strategy", desc: "Review your current emails, list health, and define goals and audience segments" },
                { step: "02", title: "Design & Copy", desc: "Create on-brand templates and compelling copy optimised for mobile and desktop" },
                { step: "03", title: "Automation Build", desc: "Set up triggers, sequences, and integrations with your platform" },
                { step: "04", title: "Send & Optimise", desc: "Launch, monitor deliverability, and iterate based on performance data" }
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
                Ready to Turn Emails into Revenue?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s audit your current email strategy and build a roadmap to better
                engagement and more conversions.
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
