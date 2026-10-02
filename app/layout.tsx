import type { Metadata, Viewport } from 'next';
import { Fredoka } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/features/Header';
import { Footer } from '@/components/features/Footer';
import { PWARegister } from '@/components/ui/PWARegister';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#6d28d9',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'LearnBR – Brazilian Portuguese for Everyday Life',
  description:
    'Interactive and gamified platform to learn Brazilian Portuguese through authentic everyday scenarios: family lunches, street markets, botecos, football, and colloquial slang.',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'LearnBR',
  },
  keywords: [
    'learn Brazilian Portuguese',
    'Brazilian Portuguese everyday',
    'Portuguese for English speakers',
    'Portuguese vocabulary',
    'Portuguese flashcards',
    'Portuguese quiz',
    'Brazilian slang',
  ],
  authors: [{ name: 'LearnBR' }],
  openGraph: {
    title: 'LearnBR – Brazilian Portuguese for Everyday Life',
    description: 'Learn authentic Brazilian Portuguese with real cultural scenarios.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LearnBR – Brazilian Portuguese for Everyday Life',
    description: 'Learn authentic Brazilian Portuguese with real cultural scenarios.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <PWARegister />
      </body>
    </html>
  );
}
