import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  PieChart, 
  LineChart, 
  Table2, 
  ArrowRight,
  CheckCircle,
  Eye,
  TrendingUp,
  Target
} from "lucide-react"
import { LandingNavbar } from "../../landing/components/navbar"
import { LandingFooter } from "../../landing/components/footer"

export const metadata: Metadata = {
  title: "Data Analytics & Business Intelligence | Telaven Solutions",
  description: "Transform raw data into actionable insights. Comprehensive analytics and BI solutions that provide real-time visibility into your business performance.",
}

const analyticsServices = [
  {
    icon: PieChart,
    title: "Business Intelligence",
    description: "Interactive dashboards and reports that reveal insights across your entire organization."
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecast trends, anticipate customer behavior, and make data-driven decisions."
  },
  {
    icon: Table2,
    title: "Data Visualization",
    description: "Beautiful, interactive charts and graphs that make complex data easy to understand."
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "Live dashboards tracking KPIs and metrics as they happen."
  }
]

const benefits = [
  "Make decisions based on data, not guesswork",
  "Identify trends and opportunities early",
  "Monitor business performance in real-time",
  "Uncover hidden patterns in your data",
  "Share insights across your organization",
  "Track and improve key performance indicators"
]

const tools = [
  "Tableau", "Power BI", "Looker", "Metabase",
  "Google Analytics", "Mixpanel", "Amplitude",
  "Apache Superset", "Grafana", "dbt"
]

export default function DataAnalyticsPage() {
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
                <BarChart3 className="w-3 h-3 mr-2" />
                Core Service
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Data Analytics &
                <span className="block text-primary mt-2">Business Intelligence</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transform your data into actionable insights. From interactive dashboards 
                to predictive analytics, we help you make smarter business decisions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Get Data Insights
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Services</h2>
              <p className="text-lg text-muted-foreground">
                End-to-end analytics solutions for every business need
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {analyticsServices.map((service, index) => (
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
                  Why Data Analytics?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  In today&apos;s competitive landscape, data is your most valuable asset. 
                  We help you unlock its potential with powerful analytics solutions.
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
                  <BarChart3 className="w-16 h-16 text-primary mb-6" />
                  <blockquote className="text-lg italic text-muted-foreground mb-6">
                    &ldquo;Their business intelligence dashboard gives us real-time financial 
                    insights. Decision-making has never been easier.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">DO</span>
                    </div>
                    <div>
                      <p className="font-medium">Daniel Omondi</p>
                      <p className="text-sm text-muted-foreground">CFO, AgriTech Co</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools We Use</h2>
              <p className="text-lg text-muted-foreground">
                Industry-leading analytics and visualization platforms
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <div key={index} className="bg-background px-6 py-3 rounded-full border">
                  <span className="font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics in Action</h2>
              <p className="text-lg text-muted-foreground">
                Real-world applications across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: TrendingUp, title: "Sales Analytics", desc: "Track performance, forecast revenue, optimize pipelines" },
                { icon: Target, title: "Marketing Analytics", desc: "Measure campaign ROI, understand customer journeys" },
                { icon: Eye, title: "Operational Analytics", desc: "Monitor efficiency, reduce costs, improve quality" }
              ].map((item, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
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
                Ready to Unlock Your Data Potential?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s build analytics solutions that turn your data into competitive advantage.
              </p>
              <Button size="lg" className="px-8" asChild>
                <Link href="/landing/#contact">
                  Get Started with Analytics
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
