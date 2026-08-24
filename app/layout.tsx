import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Babylon — A World Garden',
  description: 'A modern Hanging Garden, imagined and built by the world.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
