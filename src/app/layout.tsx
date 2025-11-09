import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import { COMPANY_INFO } from '@/data/constants';
import "./globals.css";

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
  description: COMPANY_INFO.description,
  keywords: [
    'computer repair',
    'data recovery',
    'IT support',
    'Mississauga',
    'computer consultancy',
    'technical support',
    'network setup',
    'VOIP',
    'system optimization',
  ],
  authors: [{ name: COMPANY_INFO.name }],
  openGraph: {
    title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
    description: COMPANY_INFO.description,
    type: 'website',
    locale: 'en_CA',
    siteName: COMPANY_INFO.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Navigation />
            <main style={{ minHeight: 'calc(100vh - 400px)' }}>
              {children}
            </main>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
