import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Smartphone, 
  Apple, 
  Play,
  Crosshair,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  TrendingUp
} from "lucide-react"
import { LandingNavbar } from "../../landing/components/navbar"
import { LandingFooter } from "../../landing/components/footer"

export const metadata: Metadata = {
  title: "Mobile App Development | Telaven Solutions",
  description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences and drive business results.",
}

const mobileServices = [
  {
    icon: Apple,
    title: "iOS Development",
    description: "Native iOS apps built with Swift and SwiftUI for iPhone, iPad, and Apple Watch."
  },
  {
    icon: Play,
    title: "Android Development",
    description: "Native Android apps using Kotlin and Jetpack Compose for phones, tablets, and wearables."
  },
  {
    icon: Crosshair,
    title: "Cross-Platform",
    description: "React Native and Flutter apps that work seamlessly on both iOS and Android."
  },
  {
    icon: Zap,
    title: "App Optimization",
    description: "Performance tuning, app store optimization, and ongoing maintenance services."
  }
]

const benefits = [
  "Reach customers on their preferred devices",
  "Increase engagement with push notifications",
  "Enable offline functionality for constant access",
  "Integrate with device features (camera, GPS, biometrics)",
  "Build brand loyalty through mobile presence",
  "Generate revenue through in-app purchases and subscriptions"
]

const processSteps = [
  { step: "01", title: "Strategy", desc: "Define goals, target audience, and feature roadmap" },
  { step: "02", title: "Design", desc: "Create intuitive UI/UX with user-centered design principles" },
  { step: "03", title: "Develop", desc: "Build with agile methodology and regular testing" },
  { step: "04", title: "Launch", desc: "Deploy to App Store and Google Play with ASO" }
]

export default function MobileAppDevelopmentPage() {
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
                <Smartphone className="w-3 h-3 mr-2" />
                Core Service
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Mobile App
                <span className="block text-primary mt-2">Development</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Build exceptional mobile experiences for iOS and Android. From concept to app store, 
                we create apps that users love and businesses rely on.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Build Your App
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile Development Services</h2>
              <p className="text-lg text-muted-foreground">
                End-to-end mobile solutions for every platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {mobileServices.map((service, index) => (
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
                  Why Mobile Apps Matter
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Mobile apps put your business in customers&apos; pockets. With the right strategy, 
                  your app becomes an essential tool for your users.
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
                  <Smartphone className="w-16 h-16 text-primary mb-6" />
                  <blockquote className="text-lg italic text-muted-foreground mb-6">
                    &ldquo;The mobile app they developed for our retail business has increased 
                    customer engagement by 60%. Professional team, quality work.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">AH</span>
                    </div>
                    <div>
                      <p className="font-medium">Amina Hassan</p>
                      <p className="text-sm text-muted-foreground">Founder, RetailHub</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Features We Build</h2>
              <p className="text-lg text-muted-foreground">
                Modern mobile app capabilities for enhanced user experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: "Security", desc: "Biometric auth, encryption, secure APIs" },
                { icon: TrendingUp, title: "Analytics", desc: "User behavior tracking, crash reporting" },
                { icon: Star, title: "Engagement", desc: "Push notifications, in-app messaging" }
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

        {/* Process */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our App Development Process</h2>
              <p className="text-lg text-muted-foreground">
                From idea to app store in structured phases
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
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s bring your app idea to life. From concept to launch, we&apos;ll guide you every step of the way.
              </p>
              <Button size="lg" className="px-8" asChild>
                <Link href="/landing/#contact">
                  Start Your App Project
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
