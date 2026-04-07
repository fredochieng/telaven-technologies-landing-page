import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Layers, 
  GitBranch, 
  TestTube, 
  ArrowRight,
  CheckCircle,
  Monitor,
  Cpu,
  Lock,
  RefreshCw
} from "lucide-react"
import { LandingNavbar } from "../../landing/components/navbar"
import { LandingFooter } from "../../landing/components/footer"

export const metadata: Metadata = {
  title: "Custom Software Development | Telaven Solutions",
  description: "Tailored software solutions built to match your unique business requirements and workflows. Enterprise-grade applications designed for scale.",
}

const softwareServices = [
  {
    icon: Monitor,
    title: "Web Applications",
    description: "Scalable web apps with modern architectures, responsive design, and seamless user experiences."
  },
  {
    icon: Layers,
    title: "Enterprise Software",
    description: "Custom ERP, CRM, and business management systems tailored to your operations."
  },
  {
    icon: Cpu,
    title: "API Development",
    description: "Robust REST and GraphQL APIs that power integrations and microservices architectures."
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization",
    description: "Transform outdated systems into modern, cloud-native applications."
  }
]

const benefits = [
  "Software tailored to your exact business processes",
  "Scalable architecture that grows with your business",
  "Integration with existing systems and third-party tools",
  "Full ownership and control of your technology",
  "Ongoing support and maintenance included",
  "Security and compliance built-in from day one"
]

const techStack = [
  { category: "Frontend", tools: "React, Next.js, Vue.js, TypeScript, Tailwind CSS" },
  { category: "Backend", tools: "Node.js, Python, Java, Go, PostgreSQL, MongoDB" },
  { category: "Cloud", tools: "AWS, Azure, GCP, Docker, Kubernetes" },
  { category: "DevOps", tools: "CI/CD, Terraform, GitHub Actions, Jenkins" }
]

const processSteps = [
  { step: "01", title: "Requirements", desc: "Deep dive into your business needs and goals" },
  { step: "02", title: "Design", desc: "UI/UX design and technical architecture planning" },
  { step: "03", title: "Development", desc: "Agile sprints with regular demos and feedback" },
  { step: "04", title: "Deployment", desc: "Production release with monitoring and support" }
]

export default function SoftwareDevelopmentPage() {
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
                <Code2 className="w-3 h-3 mr-2" />
                Core Service
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Custom Software
                <span className="block text-primary mt-2">Development</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Build software that perfectly fits your business. From web applications to 
                enterprise systems, we create solutions that drive efficiency and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Start Your Project
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Software Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Custom-built applications designed for your unique requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {softwareServices.map((service, index) => (
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
                  Why Custom Software?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Off-the-shelf solutions force you to adapt your business to their limitations. 
                  Custom software adapts to you, giving you a competitive edge.
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
                  <Code2 className="w-16 h-16 text-primary mb-6" />
                  <blockquote className="text-lg italic text-muted-foreground mb-6">
                    &ldquo;Telaven delivered our custom software on time and within budget. 
                    Their technical expertise and understanding of our business needs was impressive.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">PO</span>
                    </div>
                    <div>
                      <p className="font-medium">Peter Ochieng</p>
                      <p className="text-sm text-muted-foreground">CTO, FinServe Ltd</p>
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
                We use industry-leading technologies for robust, scalable applications
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

        {/* Process */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
              <p className="text-lg text-muted-foreground">
                Agile methodology ensuring transparency and quality
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((item, index) => (
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
                Ready to Build Your Custom Solution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your requirements and create software that perfectly fits your business.
              </p>
              <Button size="lg" className="px-8" asChild>
                <Link href="/landing/#contact">
                  Get a Free Quote
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
