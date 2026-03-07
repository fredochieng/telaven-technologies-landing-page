import type { Metadata } from 'next'
import { TermsPageContent } from './terms-content'

export const metadata: Metadata = {
  title: 'Terms of Service - Telaven Technologies',
  description: 'Read the terms and conditions governing your use of the Telaven Technologies platform.',
}

export default function TermsPage() {
  return <TermsPageContent />
}
