import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Globe, 
  Monitor, 
  Search, 
  ShoppingCart, 
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Smartphone
} from "lucide-react"
import { LandingNavbar } from "../../landing/components/navbar"
import { LandingFooter } from "../../landing/components/footer"

export const metadata: Metadata = {
  title: "Web Development | Telaven Solutions",
  description: "Modern, responsive websites and web applications built with cutting-edge technologies. From corporate sites to complex web apps.",
}

const webServices = [
  {
    icon: Monitor,
    title: "Corporate Websites",
    description: "Professional business websites that establish credibility and convert visitors into customers."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Full-featured online stores with secure payments, inventory, and order management."
  },
  {
    icon: Zap,
    title: "Web Applications",
    description: "Complex web apps with user accounts, dashboards, and real-time functionality."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Built-in SEO best practices to help your site rank higher in search results."
  }
]

const benefits = [
  "Make a strong first impression with professional design",
  "Reach customers on any device with responsive layouts",
  "Load fast and rank higher with performance optimization",
  "Convert visitors with strategic UX and clear calls-to-action",
  "Easily update content with user-friendly CMS integration",
  "Scale securely with enterprise-grade hosting and security"
]

const techStack = [
  { category: "Frameworks", tools: "Next.js, React, Vue.js, Angular" },
  { category: "Styling", tools: "Tailwind CSS, Styled Components, SCSS" },
  { category: "CMS", tools: "WordPress, Strapi, Contentful, Sanity" },
  { category: "E-Commerce", tools: "Shopify, WooCommerce, Stripe" }
]

export default function WebDevelopmentPage() {
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
                <Globe className="w-3 h-3 mr-2" />
                Core Service
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Web Development
                <span className="block text-primary mt-2">Services</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Build a powerful online presence with modern, fast, and secure websites. 
                From corporate sites to complex web applications, we deliver excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Build Your Website
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/landing/#services">
                    View All Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive web development for every need
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {webServices.map((service, index) => (
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
                  Why Your Website Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Your website is often the first interaction customers have with your brand. 
                  We build sites that make that first impression count.
                </p>
                
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <div className="relative bg-background rounded-3xl p-8 border shadow-xl">
                  <Globe className="w-16 h-16 text-primary mb-6" />
                  <blockquote className="text-lg italic text-muted-foreground mb-6">
                    &ldquo;The website they built for us is fast, modern, and exactly what we needed. 
                    Our online conversions have doubled since launch.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">JO</span>
                    </div>
                    <div>
                      <p className="font-medium">James Otieno</p>
                      <p className="text-sm text-muted-foreground">Head of Digital</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Modern Tech Stack</h2>
              <p className="text-lg text-muted-foreground">
                Latest technologies for fast, secure, and scalable websites
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {techStack.map((tech, index) => (
                <div key={index} className="bg-background p-6 rounded-xl border">
                  <h3 className="text-lg font-semibold mb-2">{tech.category}</h3>
                  <p className="text-sm text-muted-foreground">{tech.tools}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get</h2>
              <p className="text-lg text-muted-foreground">
                Every website we build includes these essential features
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Smartphone, title: "Responsive Design", desc: "Perfect on desktop, tablet, and mobile" },
                { icon: Zap, title: "Performance", desc: "Optimized for speed and Core Web Vitals" },
                { icon: Shield, title: "Security", desc: "SSL, security headers, and best practices" }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
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
                Ready for a New Website?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s create a website that represents your brand and drives results.
              </p>
              <Button size="lg" className="px-8" asChild>
                <Link href="/landing/#contact">
                  Start Your Web Project
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
