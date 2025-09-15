import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/login/', '/signup/'],
    },
    sitemap: 'https://everestai.vercel.app/sitemap.xml',
  }
}