"use client"

import React from 'react'
import { LandingNavbar } from './components/navbar'
import { HeroSection } from './components/hero-section'
import { StatsSection } from './components/stats-section'
import { FeaturesSection } from './components/features-section'
import { TestimonialsSection } from './components/testimonials-section'
import { CTASection } from './components/cta-section'
import { ContactSection } from './components/contact-section'
import { LandingFooter } from './components/footer'
import { LandingThemeCustomizer } from './components/landing-theme-customizer'
import { AboutSection } from './components/about-section'

export function LandingPageContent() {
  const [themeCustomizerOpen, setThemeCustomizerOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-outfit)]">
      {/* Navigation */}
      <LandingNavbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>

      {/* Footer */}
      <LandingFooter />

      {/* Theme Customizer */}
      <LandingThemeCustomizer open={themeCustomizerOpen} onOpenChange={setThemeCustomizerOpen} />
    </div>
  )
}
