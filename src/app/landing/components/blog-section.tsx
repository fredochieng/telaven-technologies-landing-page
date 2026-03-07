"use client"

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const blogs = [
    {
      id: 1,
      image: 'https://ui.shadcn.com/placeholder.svg',
      category: 'AI & Machine Learning',
      title: 'How AI is Transforming Business Operations in 2025',
      description:
        'From predictive analytics to intelligent automation, discover how businesses are leveraging machine learning to cut costs, reduce manual work, and scale faster.',
    },
    {
      id: 2,
      image: 'https://ui.shadcn.com/placeholder.svg',
      category: 'Costware',
      title: 'Why Off-the-Shelf Software Fails Growing Businesses',
      description:
        'Generic ERP and CRM tools are built for everyone — meaning they\'re perfect for no one. Learn how custom enterprise software (Costware) delivers a decisive competitive edge.',
    },
    {
      id: 3,
      image: 'https://ui.shadcn.com/placeholder.svg',
      category: 'Data Solutions',
      title: 'Building a Modern Data Stack from the Ground Up',
      description:
        'A practical guide to designing scalable data pipelines, choosing the right warehouse, and creating a data culture that drives smarter decisions across your organization.',
    },
  ]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Latest Insights</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            From the Telaven Technologies Blog
          </h2>
          <p className="text-lg text-muted-foreground">
            Technology insights, industry trends, and practical guides on AI, data, Costware, web development, and mobile apps.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blogs.map(blog => (
            <Card key={blog.id} className="overflow-hidden py-0">
              <CardContent className="px-0">
                <div className="aspect-video">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={225}
                    className="size-full object-cover dark:invert dark:brightness-[0.95]"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-muted-foreground text-xs tracking-widest uppercase">
                    {blog.category}
                  </p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="cursor-pointer"
                  >
                    <h3 className="text-xl font-bold hover:text-primary transition-colors">{blog.title}</h3>
                  </a>
                  <p className="text-muted-foreground">{blog.description}</p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer"
                  >
                    Read Article
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
