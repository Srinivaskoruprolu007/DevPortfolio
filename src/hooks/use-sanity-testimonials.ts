import { client, testimonialsQuery, urlFor } from '@/lib/sanity'
import { SanityTestimonial, TestimonialFromSanity } from '@/types/sanity'
import { useEffect, useState } from 'react'

export const useSanityTestimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialFromSanity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true)
        setError(null)

        const sanityTestimonials: SanityTestimonial[] = await client.fetch(testimonialsQuery)

        // Transform Sanity data to match app structure
        const transformedTestimonials: TestimonialFromSanity[] = sanityTestimonials.map((testimonial) => ({
          name: testimonial.name,
          role: testimonial.role,
          company: testimonial.company,
          image: testimonial.image?.asset ? urlFor(testimonial.image.asset).url() : '',
          imageAlt: testimonial.image?.alt || testimonial.name,
          content: testimonial.content,
          rating: testimonial.rating || 5,
          featured: testimonial.featured,
          date: testimonial.date,
        }))

        setTestimonials(transformedTestimonials)
      } catch (err) {
        console.error('Error fetching testimonials from Sanity:', err)
        setError(err instanceof Error ? err : new Error('Failed to fetch testimonials'))
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  return { testimonials, loading, error }
}