import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Untara Eka Saputra | Portfolio',
  description:
    'Personal portfolio of Untara Eka Saputra, Backend Developer & Network Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link rel='icon' href='/assets/favicon.ico' type='image/x-icon' />
        <link
          rel='shortcut icon'
          href='/assets/favicon.ico'
          type='image/x-icon'
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
