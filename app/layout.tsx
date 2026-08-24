import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://babylon-world-garden.amysterling.chatgpt.site'),
  title: 'Babylon — A World Garden',
  description: 'A modern Hanging Garden, imagined and built by the world.',
  openGraph: {
    title: 'BABYLON',
    description: 'A world wonder, imagined and built by the world.',
    url: 'https://babylon-world-garden.amysterling.chatgpt.site',
    siteName: 'Babylon',
    type: 'website',
    images: [{ url: '/og.png', width: 1732, height: 899, alt: 'Babylon — a world garden at golden hour' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BABYLON',
    description: 'A world wonder, imagined and built by the world.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
