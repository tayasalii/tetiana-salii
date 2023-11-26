import { Montserrat, EB_Garamond } from 'next/font/google';

import { Header } from '@/layout/Header';
import { Footer } from '@/sections/Footer';

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
});

export const metadata = {
  // metadataBase: new URL('https://example.vercel.app/'),
  title: 'Title',
  description: 'Description',
};

export default async function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${montserrat.className} ${eb_garamond.className}`}>
        <Header />

        <main className="flex flex-col items-center min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
