import type { Metadata } from 'next'
import { LandingPageContent } from './landing-page-content'

// Metadata for the landing page
export const metadata: Metadata = {
  title: 'Telaven Solutions — AI, Data, Web & Mobile Solutions',
  description: 'Telaven Solutions delivers enterprise technology: custom software (ERP, CRM, POS), AI/ML solutions, data engineering, web design & development, and mobile apps for startups, SMEs, and enterprises.',
  keywords: ['enterprise software', 'AI', 'machine learning', 'data engineering', 'web development', 'mobile apps', 'custom software', 'digital transformation', 'Telaven Solutions'],
  openGraph: {
    title: 'Telaven Solutions — AI, Data, Web & Mobile Solutions',
    description: 'Enterprise technology built for the future — AI/ML, Custom Software, Data Solutions, Web Development, and Mobile Apps.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telaven Solutions — AI, Data, Web & Mobile Solutions',
    description: 'Enterprise technology built for the future — AI/ML, Custom Software, Data Solutions, Web Development, and Mobile Apps.',
  },
}

export default function LandingPage() {
  return <LandingPageContent />
}
