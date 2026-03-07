import type { Metadata } from 'next'
import { CookiesPageContent } from './cookies-content'

export const metadata: Metadata = {
  title: 'Cookie Policy - Telaven Technologies',
  description: 'Learn about how Telaven Technologies uses cookies and similar technologies.',
}

export default function CookiesPage() {
  return <CookiesPageContent />
}
