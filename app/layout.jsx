import { Nunito_Sans, Kalam, Lexend_Deca } from 'next/font/google';

import Navbar from '@/layouts/Navbar';
import './globals.css';
import Footer from '@/layouts/Footer';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
});

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend-deca',
  display: 'swap',
});

const kalam = Kalam({
  subsets: ['latin'],
  variable: '--font-kalam',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Full-stack Web Developer - Tamal Biswas',
  description:
    'I can help you build a brand, generate traffic, and grow your audience by building modern, responsive websites for your business.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-theme='lofi'
      className={`${nunitoSans.variable} ${kalam.variable} ${lexendDeca.variable}`}
    >
      <body className='bg-neutral-20 relative overflow-x-hidden'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
