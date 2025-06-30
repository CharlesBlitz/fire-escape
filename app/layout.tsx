import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FireEscapeToys - Adventure Awaits!',
  description: 'Join us on exciting adventures with toys, games, and family fun! FireEscapeToys brings you the best in entertainment and play.',
  keywords: 'toys, games, family, fun, adventure, youtube, entertainment, kids',
  authors: [{ name: 'FireEscapeToys' }],
  creator: 'FireEscapeToys',
  publisher: 'FireEscapeToys',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fireescape-toys.com',
    siteName: 'FireEscapeToys',
    title: 'FireEscapeToys - Adventure Awaits!',
    description: 'Join us on exciting adventures with toys, games, and family fun!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FireEscapeToys',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FireEscapeToys - Adventure Awaits!',
    description: 'Join us on exciting adventures with toys, games, and family fun!',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dc267f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}