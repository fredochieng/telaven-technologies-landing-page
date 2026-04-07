"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Brain,
  Database,
  Code2,
  Smartphone,
  Globe,
  BarChart3,
  Headphones,
  Plug,
  MessageSquare,
  MessageCircle,
  Mail,
  Zap,
} from 'lucide-react'

const menuSections = [
  {
    title: 'AI, Data & Custom Software',
    items: [
      {
        title: 'AI & Machine Learning',
        description: 'ML models, NLP, computer vision, and predictive analytics',
        icon: Brain,
        href: '/services/ai',
        color: 'text-violet-500'
      },
      {
        title: 'Data Engineering',
        description: 'Pipelines, warehouses, ETL/ELT, and real-time streaming',
        icon: Database,
        href: '/services/data-engineering',
        color: 'text-blue-500'
      },
      {
        title: 'Custom Software Development',
        description: 'ERP, CRM, POS, and tailor-made business systems',
        icon: Code2,
        href: '/services/custom-software',
        color: 'text-emerald-500'
      },
      {
        title: 'Data Analytics & BI',
        description: 'Interactive dashboards and business intelligence',
        icon: BarChart3,
        href: '/services/data-analytics',
        color: 'text-amber-500'
      }
    ]
  },
  {
    title: 'Web, Mobile & Consultancy',
    items: [
      {
        title: 'Web Development',
        description: 'Marketing sites to complex SaaS platforms',
        icon: Globe,
        href: '/services/web-development',
        color: 'text-cyan-500'
      },
      {
        title: 'Mobile App Development',
        description: 'iOS & Android with React Native and Flutter',
        icon: Smartphone,
        href: '/services/mobile-apps',
        color: 'text-pink-500'
      },
      {
        title: 'IT Consultancy',
        description: 'Strategic guidance for digital transformation',
        icon: Headphones,
        href: '/services/consultancy',
        color: 'text-rose-500'
      }
    ]
  },
  {
    title: 'Communications & Integrations',
    items: [
      {
        title: 'System Integrations',
        description: 'Connect ERP, CRM, payment gateways, and APIs',
        icon: Plug,
        href: '/services/system-integrations',
        color: 'text-blue-500'
      },
      {
        title: 'Bulk SMS',
        description: 'OTPs, alerts, promotions, and transactional messages',
        icon: MessageSquare,
        href: '/services/bulk-sms',
        color: 'text-green-500'
      },
      {
        title: 'WhatsApp Business API',
        description: 'Automate conversations and notifications at scale',
        icon: MessageCircle,
        href: '/services/whatsapp',
        color: 'text-emerald-500'
      },
      {
        title: 'Email Marketing',
        description: 'Targeted campaigns and automated email sequences',
        icon: Mail,
        href: '/services/email-marketing',
        color: 'text-yellow-500'
      },
      {
        title: 'All Communications',
        description: 'Overview of every communications service',
        icon: Zap,
        href: '/services/communications',
        color: 'text-orange-500'
      }
    ]
  }
]

export function MegaMenu() {
  const pathname = usePathname()

  return (
    <div className="w-[750px] max-w-[95vw] p-6 lg:p-8">
      <div className="grid grid-cols-3 gap-8">
        {menuSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {section.title}
            </h3>

            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`group flex items-start gap-3 rounded-md p-2 -mx-2 transition-colors ${pathname === item.href ? 'bg-accent' : 'hover:bg-accent'}`}
                >
                  <item.icon className={`w-4 h-4 mt-0.5 shrink-0 ${item.color} group-hover:scale-110 transition-transform`} />
                  <div>
                    <p className={`text-sm font-medium transition-colors leading-none mb-1 ${pathname === item.href ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <Link
          href="/services"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all services →
        </Link>
      </div>
    </div>
  )
}
