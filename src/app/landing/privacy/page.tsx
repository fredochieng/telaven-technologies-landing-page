import type { Metadata } from 'next'
import { PrivacyPageContent } from './privacy-content'

export const metadata: Metadata = {
  title: 'Privacy Policy - Telaven Technologies',
  description: 'Learn how Telaven Technologies collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return <PrivacyPageContent />
}
