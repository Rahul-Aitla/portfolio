import type { Metadata } from 'next';
import { Geist, Pixelify_Sans } from 'next/font/google';
import '@/index.css';
import { ThemeProvider } from '@/components/landing/theme-provider';
import Container from '@/components/layouts/Container';
import Layout from '@/components/common/Layout';
import { Quote } from '@/components/common/Quote';
import Footer from '@/components/common/Footer';
import PageTracker from '@/components/common/PageTracker';
import { Analytics } from '@vercel/analytics/react';


const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const pixelifySans = Pixelify_Sans({
  variable: '--font-pixelify',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rahul-aitla.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Rahul Aitla | Portfolio',
    template: '%s | Rahul Aitla',
  },
  description: 'Full Stack Developer portfolio showcasing projects, blog posts, and work experience.',
  keywords: [
    'Rahul Aitla',
    'Developer Portfolio',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Python',
    'JavaScript',
    'TypeScript',
  ],
  authors: [{ name: 'Rahul Aitla', url: 'https://github.com/Rahul-Aitla' }],
  creator: 'Rahul Aitla',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Rahul Aitla | Portfolio',
    description: 'Full Stack Developer portfolio showcasing projects, blog posts, and work experience.',
    siteName: 'Rahul Aitla Portfolio',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Rahul Aitla | Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Aitla | Portfolio',
    description: 'Full Stack Developer portfolio showcasing projects, blog posts, and work experience.',
    images: ['/og-image.webp'],
    creator: '@RahulA14530317',
  },

  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-custom" suppressHydrationWarning>
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var key = "vite-ui-theme";
                  var theme = localStorage.getItem(key);
                  if (theme === "dark" || (!theme && "dark" === "dark")) {
                    document.documentElement.classList.add("dark");
                  } else if (theme === "light") {
                    document.documentElement.classList.add("light");
                  } else if (theme === "system") {
                    var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    document.documentElement.classList.add(dark ? "dark" : "light");
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${pixelifySans.variable} min-h-screen font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <PageTracker />
          <Analytics />
          <div className="min-h-screen">
            <Container>
              <Layout>
                {children}
                <Quote />
                <Footer />
              </Layout>
            </Container>
            <div className="from-background pointer-events-none fixed inset-x-0 bottom-0 z-40 h-10 bg-linear-to-t to-transparent [mask-image:linear-gradient(to_top,black_10%,transparent)] opacity-100 backdrop-blur-[5px] select-none dark:[mask-image:linear-gradient(to_top,black_20%,transparent)]" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
