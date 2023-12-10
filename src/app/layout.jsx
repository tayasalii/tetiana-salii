import { Montserrat, EB_Garamond } from 'next/font/google';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

import '../styles/globals.css';

const montserrat = Montserrat({
  subsets: ['cyrillic-ext', 'latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
const eb_garamond = EB_Garamond({
  subsets: ['cyrillic-ext', 'latin'],
  display: 'swap',
  variable: '--font-eb_garamond',
  style: ['normal', 'italic'],
});

export function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const title = 'Тетяна Салій';
  const description =
    'Тетяна Салій - регресолог, гіпнотерапевт, парапсихолог, коуч, езотерик, засновниця Infinity school. Допомагаю людям знайти себе, отримати відповіді, зцілити душу і тіло, вибрати шлях, що веде до успіху, здоров’я та достатку.';

  return {
    metadataBase: new URL(baseUrl),
    title: title,
    description: description,
    locale: 'uk-UA',
    openGraph: {
      title: title,
      description: description,
      siteName: title,
      locale: 'uk-UA',
      type: 'website',
      images: [
        {
          url: '/meta/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: '/meta/opengraph-image.alt.txt',
        },
      ],
    },
    robots: 'all',
    manifest: '/meta/manifest.webmanifest',
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [
        {
          url: '/meta/twitter-image.jpg',
          width: 1200,
          height: 630,
          alt: '/meta/twitter-image.alt.txt',
        },
      ],
    },
    alternates: {
      canonical: baseUrl,
    },
    keywords:
      'регресолог, гіпнотерапевт, психосоматолог, коуч, парапсихолог, езотерик, хіромант, рунолог, таролог, кармолог, інтерферолог, Школа Infinity, Infinity school, читання Хронік Акаші, трансова та регресивна терапія, метафоричні асоціативні карти, трансформаційні ігри, енерготерапія, семінари, навчальні програми, робота з родом, чистка поля, діагностика',
    icons: {
      icon: [
        {
          url: '/meta/favicon.ico',
        },
        {
          url: '/meta/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/meta/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/meta/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          url: '/meta/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      shortcut: '/meta/favicon.ico',
      apple: '/meta/apple-touch-icon.png',
      other: {
        rel: '/meta/apple-touch-icon.png',
        url: '/meta/apple-touch-icon.png',
      },
    },
  };
}

export default async function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${montserrat.variable} ${eb_garamond.variable}`}>
        <Header />

        <main className="flex flex-col items-center min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
