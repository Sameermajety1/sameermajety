import React from 'react';
import '../styles/globals.css';
import 'remixicon/fonts/remixicon.css';
import { Inter, Raleway, Fira_Sans, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-fira-sans',
});

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'Pulse of Purpose | Sameer Majety',
  description: 'Beyond Medicine: A Journey of Passion, Precision, and Purpose.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable} ${fira_sans.variable} ${playfair_display.variable}`}>
      <body className="bg-primary text-light">
        {children}
      </body>
    </html>
  );
} 