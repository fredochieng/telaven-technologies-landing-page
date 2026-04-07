import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Sparkles, 
  MessageSquare, 
  TrendingUp, 
  Eye, 
  ArrowRight,
  CheckCircle,
  Bot,
  LineChart,
  Database
} from "lucide-react"
import { LandingNavbar } from "../../landing/components/navbar"
import { LandingFooter } from "../../landing/components/footer"

export const metadata: Metadata = {
  title: "Artificial Intelligence Solutions | Telaven Solutions",
  description: "AI-powered solutions including machine learning, natural language processing, and predictive analytics to automate and optimize your business operations.",
}

const aiServices = [
  {
    icon: Bot,
    title: "Machine Learning",
    description: "Custom ML models for prediction, classification, and pattern recognition tailored to your business needs."
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Text analysis, chatbots, sentiment analysis, and automated content processing solutions."
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast future trends, customer behavior, and business outcomes using advanced AI algorithms."
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image recognition, object detection, and visual analysis for automation and quality control."
  }
]

const benefits = [
  "Reduce operational costs through intelligent automation",
  "Make data-driven decisions with predictive insights",
  "Enhance customer experience with personalized interactions",
  "Scale operations without proportional increase in resources",
  "Gain competitive advantage with cutting-edge AI technology",
  "Improve accuracy and reduce human error in processes"
]

const useCases = [
  {
    industry: "Finance",
    application: "Fraud detection, risk assessment, algorithmic trading, credit scoring"
  },
  {
    industry: "Healthcare",
    application: "Diagnostic assistance, patient monitoring, drug discovery, medical imaging"
  },
  {
    industry: "Retail",
    application: "Demand forecasting, recommendation engines, inventory optimization"
  },
  {
    industry: "Manufacturing",
    application: "Predictive maintenance, quality control, supply chain optimization"
  }
]

export default function AIServicePage() {
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
                <Sparkles className="w-3 h-3 mr-2" />
                Core Service
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Artificial Intelligence
                <span className="block text-primary mt-2">Solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Harness the power of AI to transform your business operations. From machine learning 
                to natural language processing, we build intelligent systems that drive real results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Discuss Your AI Project
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

        {/* AI Services Grid */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Capabilities</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive AI solutions designed to solve your most complex business challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {aiServices.map((service, index) => (
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
                  Why Invest in AI?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Artificial Intelligence is no longer just for tech giants. We make AI accessible 
                  to businesses of all sizes, delivering measurable ROI through intelligent automation 
                  and data-driven insights.
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
                  <Brain className="w-16 h-16 text-primary mb-6" />
                  <blockquote className="text-lg italic text-muted-foreground mb-6">
                    &ldquo;Their machine learning solution automated our inventory forecasting. 
                    We have reduced waste by 40% and improved stock availability.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">MK</span>
                    </div>
                    <div>
                      <p className="font-medium">Michael Kariuki</p>
                      <p className="text-sm text-muted-foreground">Product Manager</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Applications</h2>
              <p className="text-lg text-muted-foreground">
                AI solutions tailored for your specific industry
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-background p-6 rounded-xl border">
                  <h3 className="text-lg font-semibold mb-2">{useCase.industry}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.application}</p>
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
                Ready to Leverage AI in Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how AI can transform your operations. Our experts will guide you 
                from strategy to implementation.
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
