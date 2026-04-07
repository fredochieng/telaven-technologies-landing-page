import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Database, 
  Layers, 
  Workflow, 
  Server, 
  ArrowRight,
  CheckCircle,
  Cloud,
  Search,
  Globe,
  Clock,
  Shield
} from "lucide-react"
import { LandingNavbar } from "../../landing/components/navbar"
import { LandingFooter } from "../../landing/components/footer"

export const metadata: Metadata = {
  title: "Data Engineering & Web Scraping Services | Telaven Solutions",
  description: "Build robust data pipelines, warehouses, and web scraping solutions. Collect online data from any source and transform it into actionable business insights.",
}

const dataServices = [
  {
    icon: Workflow,
    title: "Data Pipelines",
    description: "Automated ETL/ELT pipelines that reliably move and transform data from source to destination."
  },
  {
    icon: Server,
    title: "Data Warehousing",
    description: "Design and implement scalable data warehouses optimized for analytics and reporting."
  },
  {
    icon: Search,
    title: "Web Scraping",
    description: "Advanced web scraping solutions to collect online data from any source. Transform web content into structured datasets for competitive intelligence and market research."
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamlessly migrate your data infrastructure to AWS, Azure, or Google Cloud platforms."
  }
]

const benefits = [
  "Centralize data from multiple sources into unified repositories",
  "Enable real-time data processing for instant insights",
  "Ensure data quality, consistency, and reliability",
  "Scale infrastructure as your data grows",
  "Reduce storage and processing costs through optimization",
  "Maintain data security and compliance standards"
]

const industries = [
  { name: "Finance", desc: "Real-time trading data, risk analytics, fraud detection systems" },
  { name: "Healthcare", desc: "Patient data integration, clinical analytics, compliance reporting" },
  { name: "Retail & E-commerce", desc: "Inventory management, customer analytics, pricing optimization" },
  { name: "Manufacturing", desc: "IoT data pipelines, predictive maintenance, supply chain analytics" },
  { name: "Telecommunications", desc: "Network monitoring, customer usage analytics, billing systems" },
  { name: "Logistics", desc: "Route optimization, fleet tracking, demand forecasting" }
]

const dataUseCases = [
  { title: "Real-Time Analytics", desc: "Process streaming data for instant insights and dashboards" },
  { title: "Data Migration", desc: "Seamlessly move legacy data to modern cloud warehouses" },
  { title: "ML Data Pipelines", desc: "Prepare and feed clean data to machine learning models" },
  { title: "Master Data Management", desc: "Unify customer and product data across systems" },
  { title: "IoT Data Processing", desc: "Handle high-volume sensor and device data at scale" },
  { title: "Compliance Reporting", desc: "Automated regulatory reports with audit trails" }
]

export default function DataEngineeringServicePage() {
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
                <Database className="w-3 h-3 mr-2" />
                Core Service
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Data Engineering
                <span className="block text-primary mt-2">Services</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Build robust data infrastructure that powers your analytics and AI initiatives. 
                From pipelines to warehouses to advanced web scraping, we engineer data systems that scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Start Your Data Project
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Engineering Solutions</h2>
              <p className="text-lg text-muted-foreground">
                End-to-end data infrastructure services designed for modern analytics needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {dataServices.map((service, index) => (
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

        {/* Benefits Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Data Engineering Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  In the era of big data and AI, robust data infrastructure is the foundation 
                  of competitive advantage. We build systems that turn your data chaos into 
                  structured insights.
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
                  <Database className="w-16 h-16 text-primary mb-6" />
                  <blockquote className="text-lg italic text-muted-foreground mb-6">
                    &ldquo;Their data engineering team built our entire analytics infrastructure. 
                    We went from scattered spreadsheets to real-time dashboards in months.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">DO</span>
                    </div>
                    <div>
                      <p className="font-medium">David Otieno</p>
                      <p className="text-sm text-muted-foreground">Operations Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Scraping Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4" variant="outline">
                <Search className="w-3 h-3 mr-2" />
                Advanced Capability
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Scraping Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Collect valuable data from any website and transform it into actionable business intelligence
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-8">
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                Our comprehensive web scraping services extract structured data from any online source. 
                Whether you need competitive pricing, market research, lead generation, or content aggregation, 
                we build robust scraping solutions that deliver clean, reliable data.
              </p>
              
              <div className="bg-background rounded-xl p-8 border">
                <h3 className="font-semibold mb-6 text-foreground text-xl">Popular Scraper Solutions:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Google Reviews & Maps</span>
                      <p className="text-sm text-muted-foreground mt-1">Extract customer reviews, ratings, and business data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Trustpilot & Review Platforms</span>
                      <p className="text-sm text-muted-foreground mt-1">Monitor brand reputation and competitor reviews</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Job Boards (LinkedIn, Indeed, Glassdoor)</span>
                      <p className="text-sm text-muted-foreground mt-1">Aggregate job postings, salary data, and market trends</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">E-commerce Platforms (Amazon, eBay, Shopify)</span>
                      <p className="text-sm text-muted-foreground mt-1">Track pricing, inventory, and product data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Social Media (Twitter, Facebook, Instagram)</span>
                      <p className="text-sm text-muted-foreground mt-1">Collect posts, engagement metrics, and sentiment data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Real Estate Listings</span>
                      <p className="text-sm text-muted-foreground mt-1">Aggregate property data, pricing, and market trends</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Common Use Cases:</h3>
                  <div className="grid gap-3">
                    {[
                      "E-commerce price monitoring",
                      "Real estate listings aggregation",
                      "Social media sentiment analysis",
                      "News and content aggregation",
                      "Job market data collection",
                      "Financial data extraction",
                      "Product review analysis",
                      "Competitor intelligence"
                    ].map((useCase, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Our Web Scraping Features:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Handle JavaScript-heavy sites and dynamic content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Automatic proxy rotation and anti-blocking measures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Scheduled scraping with automated data delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Data cleaning, validation, and format conversion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries & Use Cases */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Industries */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-muted-foreground">
                Data solutions tailored for your specific industry challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
              {industries.map((industry, index) => (
                <div key={index} className="bg-background p-6 rounded-xl border">
                  <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.desc}</p>
                </div>
              ))}
            </div>

            {/* Data Use Cases */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Use Cases</h2>
              <p className="text-lg text-muted-foreground">
                Common scenarios we solve with data engineering
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {dataUseCases.map((useCase, index) => (
                <div key={index} className="bg-background p-6 rounded-xl border">
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Data Engineering Process</h2>
              <p className="text-lg text-muted-foreground">
                A proven methodology for building reliable data infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: "01", title: "Discovery", desc: "Understand your data sources and requirements" },
                { step: "02", title: "Design", desc: "Architect scalable data infrastructure" },
                { step: "03", title: "Build", desc: "Implement pipelines, warehouses, and integrations" },
                { step: "04", title: "Optimize", desc: "Monitor, tune, and continuously improve" }
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

        {/* CTA Section */}
        <section className="py-20 lg:py-32" id="contact">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Modernize Your Data Infrastructure?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s build a data foundation that supports your analytics and AI initiatives. 
                From strategy to implementation, we&apos;ve got you covered.
              </p>
              <Button size="lg" className="px-8" asChild>
                <Link href="/landing/#contact">
                  Schedule a Free Consultation
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
