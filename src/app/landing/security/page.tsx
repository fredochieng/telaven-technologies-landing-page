import type { Metadata } from 'next'
import { SecurityPageContent } from './security-content'

export const metadata: Metadata = {
  title: 'Security - Telaven Technologies',
  description: 'Learn about the security measures Telaven Technologies implements to protect your data and accounts.',
}

export default function SecurityPage() {
  return <SecurityPageContent />
}
