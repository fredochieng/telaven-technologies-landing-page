import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Plug,
  ArrowRight,
  CheckCircle,
  RefreshCw,
  Shield,
  Zap,
  GitMerge,
  Layers
} from "lucide-react"
import { LandingNavbar } from "../../landing/components/navbar"
import { LandingFooter } from "../../landing/components/footer"

export const metadata: Metadata = {
  title: "System Integrations | Telaven Solutions",
  description: "Seamlessly connect your existing tools, platforms, and third-party APIs — ERP, CRM, payment gateways, and more — into one unified workflow.",
}

const integrationTypes = [
  {
    icon: Layers,
    title: "ERP & CRM Integration",
    description: "Connect your enterprise resource planning and CRM systems to eliminate data silos and automate cross-platform workflows."
  },
  {
    icon: Zap,
    title: "Payment Gateway Integration",
    description: "Integrate M-Pesa, Stripe, PayPal, Flutterwave, and other payment processors into your applications with full reconciliation support."
  },
  {
    icon: RefreshCw,
    title: "API & Webhook Development",
    description: "Custom REST and GraphQL APIs, webhook listeners, and event-driven integrations that keep your systems in sync in real time."
  },
  {
    icon: GitMerge,
    title: "Legacy System Modernisation",
    description: "Bridge the gap between older systems and modern platforms using middleware, adapters, and data transformation layers."
  }
]

const benefits = [
  "Eliminate manual data entry and reduce human error",
  "Get a single source of truth across all your platforms",
  "Automate cross-system workflows end to end",
  "Real-time data sync with event-driven architecture",
  "Secure, authenticated connections for every integration",
  "Full monitoring, alerting, and audit logs"
]

const platforms = [
  { title: "Accounting & Finance", desc: "QuickBooks, Xero, Sage, FreshBooks" },
  { title: "CRM Platforms", desc: "Salesforce, HubSpot, Zoho, Pipedrive" },
  { title: "E-commerce", desc: "Shopify, WooCommerce, Magento, BigCommerce" },
  { title: "Payment Gateways", desc: "M-Pesa, Stripe, PayPal, Flutterwave, Paystack" },
  { title: "Logistics & Shipping", desc: "DHL, FedEx, Sendy, custom courier APIs" },
  { title: "Cloud & Infrastructure", desc: "AWS, GCP, Azure, Twilio, SendGrid" }
]

export default function SystemIntegrationsPage() {
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
                <Plug className="w-3 h-3 mr-2" />
                Communications & Integrations
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                System Integrations
                <span className="block text-primary mt-2">One Unified Workflow</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Seamlessly connect your existing tools, platforms, and third-party APIs —
                ERP, CRM, payment gateways, and more — so your business runs as one
                coherent, automated system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Discuss Your Integration
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

        {/* Integration Types */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Integration Services</h2>
              <p className="text-lg text-muted-foreground">
                Every type of connection your business needs, built to last
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {integrationTypes.map((item, index) => (
                <div
                  key={index}
                  className="group p-8 bg-background rounded-2xl border hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
                  Why Integrate Your Systems?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Data trapped in silos slows decisions and costs money. Connecting your
                  platforms means your teams always have the right information at the right time.
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
                    &ldquo;Telaven integrated our ERP, payment gateway, and logistics platform in under 6 weeks.
                    Order fulfilment is now fully automated — zero manual data entry.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">JM</span>
                    </div>
                    <div>
                      <p className="font-medium">James Mutua</p>
                      <p className="text-sm text-muted-foreground">Head of Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Platforms We Integrate</h2>
              <p className="text-lg text-muted-foreground">
                Hundreds of integrations built. Any platform with an API is in scope.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-background p-6 rounded-xl border">
                  <h3 className="text-lg font-semibold mb-2">{platform.title}</h3>
                  <p className="text-sm text-muted-foreground">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-lg text-muted-foreground">From discovery to live integration in weeks, not months</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: "01", title: "Discovery", desc: "Map your systems, data flows, and integration requirements" },
                { step: "02", title: "Design", desc: "Architect the integration layer, data models, and error handling" },
                { step: "03", title: "Build", desc: "Develop, test, and stage the integration with your real data" },
                { step: "04", title: "Go Live", desc: "Deploy with monitoring, alerts, and ongoing support" }
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
                Ready to Unify Your Systems?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tell us which platforms you use and we&apos;ll show you how to connect them.
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
