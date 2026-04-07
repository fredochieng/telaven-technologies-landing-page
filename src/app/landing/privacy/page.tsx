import type { Metadata } from 'next'
import { PrivacyPageContent } from './privacy-content'

export const metadata: Metadata = {
  title: 'Privacy Policy - Telaven Solutions',
  description: 'Learn how Telaven Solutions collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return <PrivacyPageContent />
}
