import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Headphones, 
  Lightbulb, 
  Compass, 
  Target, 
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Shield
} from "lucide-react"
import { LandingNavbar } from "../../landing/components/navbar"
import { LandingFooter } from "../../landing/components/footer"

export const metadata: Metadata = {
  title: "IT Consultancy | Telaven Solutions",
  description: "Strategic technology guidance to help you make the right decisions for your business. Expert advice on digital transformation, architecture, and technology strategy.",
}

const consultancyServices = [
  {
    icon: Compass,
    title: "Digital Strategy",
    description: "Roadmap for digital transformation aligned with your business goals and market opportunities."
  },
  {
    icon: Lightbulb,
    title: "Technology Assessment",
    description: "Evaluate your current tech stack and identify improvements, risks, and optimization opportunities."
  },
  {
    icon: Target,
    title: "Architecture Planning",
    description: "Design scalable, secure system architectures that support your growth objectives."
  },
  {
    icon: Shield,
    title: "Security Consulting",
    description: "Identify vulnerabilities and implement security best practices across your infrastructure."
  }
]

const benefits = [
  "Make informed technology investment decisions",
  "Avoid costly mistakes and technical debt",
  "Align IT initiatives with business strategy",
  "Access expert knowledge without hiring full-time",
  "Accelerate digital transformation initiatives",
  "Reduce operational risks and improve security"
]

const focusAreas = [
  { title: "Cloud Migration", desc: "Strategy and planning for moving to AWS, Azure, or GCP" },
  { title: "DevOps Implementation", desc: "CI/CD pipelines, automation, and modern development practices" },
  { title: "Data Strategy", desc: "Data governance, architecture, and analytics roadmap" },
  { title: "Security & Compliance", desc: "Risk assessment, security frameworks, and compliance readiness" },
  { title: "System Integration", desc: "Connecting disparate systems for seamless operations" },
  { title: "Performance Optimization", desc: "Improving speed, reliability, and cost efficiency" }
]

export default function ITConsultancyPage() {
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
                <Headphones className="w-3 h-3 mr-2" />
                Core Service
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                IT Consultancy
                <span className="block text-primary mt-2">Services</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Expert technology guidance to navigate complex decisions. We help you build 
                the right strategy, choose the right tools, and implement best practices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Get Expert Advice
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Consultancy Services</h2>
              <p className="text-lg text-muted-foreground">
                Strategic guidance across all aspects of your technology landscape
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {consultancyServices.map((service, index) => (
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
                  Why IT Consultancy?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Technology decisions have long-term impact. Our consultancy services 
                  provide the expertise you need to make confident, strategic choices.
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
                  <Headphones className="w-16 h-16 text-primary mb-6" />
                  <blockquote className="text-lg italic text-muted-foreground mb-6">
                    &ldquo;Their IT consultancy helped us modernize our infrastructure. 
                    The team is knowledgeable, responsive, and truly invested in our success.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">GW</span>
                    </div>
                    <div>
                      <p className="font-medium">Grace Wanjiru</p>
                      <p className="text-sm text-muted-foreground">Managing Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
              <p className="text-lg text-muted-foreground">
                Deep expertise across the technology spectrum
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {focusAreas.map((area, index) => (
                <div key={index} className="bg-background p-6 rounded-xl border">
                  <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-lg text-muted-foreground">
                A collaborative approach to delivering value
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: "01", title: "Discover", desc: "Understand your business, challenges, and goals" },
                { step: "02", title: "Assess", desc: "Evaluate current systems and identify opportunities" },
                { step: "03", title: "Recommend", desc: "Provide strategic recommendations and roadmap" },
                { step: "04", title: "Implement", desc: "Support execution and measure results" }
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
        <section className="py-20 lg:py-32" id="contact">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Technology Guidance?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your technology challenges and opportunities. 
                Our experts are ready to help you make the right decisions.
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
