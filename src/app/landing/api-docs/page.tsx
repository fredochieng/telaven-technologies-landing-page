import type { Metadata } from 'next'
import { ApiDocsPageContent } from './api-docs-content'

export const metadata: Metadata = {
  title: 'API Documentation - Telaven Solutions',
  description: 'Complete API reference for accessing your Telaven Solutions project data programmatically.',
}

export default function ApiDocsPage() {
  return <ApiDocsPageContent />
}
