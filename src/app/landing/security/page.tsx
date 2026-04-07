import type { Metadata } from 'next'
import { SecurityPageContent } from './security-content'

export const metadata: Metadata = {
  title: 'Security - Telaven Solutions',
  description: 'Learn about the security measures Telaven Solutions implements to protect your data and accounts.',
}

export default function SecurityPage() {
  return <SecurityPageContent />
}
