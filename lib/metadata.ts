import { Metadata } from 'next'

type MetadataProps = {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
}

export function constructMetadata({
  title = 'EverestAI Hub - Premier Enterprise AI Solutions in Nepal',
  description = 'EverestAI Hub is Nepal\'s leading AI transformation company, offering cutting-edge artificial intelligence solutions, machine learning services, and enterprise AI consulting. Transform your business with our expert AI services.',
  keywords = 'EverestAI, EverestAI Hub, AI services Nepal, Enterprise AI solutions, Artificial Intelligence Nepal, Machine Learning services, AI consulting, Business AI transformation, Nepal AI company, AI development Nepal',
  ogImage = '/og-image.jpg',
}: MetadataProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: 'EverestAI Hub' }],
    creator: 'EverestAI Hub',
    metadataBase: new URL('https://everestai.vercel.app'),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://everestai.vercel.app',
      title,
      description,
      siteName: 'EverestAI Hub',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@EverestAIHub',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Add this after Google Search Console setup
    },
  }
}