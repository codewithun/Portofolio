import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Untara Eka Saputra • Backend Developer & Data Engineer',
  description:
    'Personal portfolio of Untara Eka Saputra — Backend Developer & Data Engineer based in Semarang, Indonesia. Specializing in Laravel, React, and data engineering.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth dark'>
      <head>
        <link rel='icon' href='/assets/favicon.ico' type='image/x-icon' />
        <link
          rel='shortcut icon'
          href='/assets/favicon.ico'
          type='image/x-icon'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap'
        />
      </head>
      <body style={{ fontFamily: "'Google Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
