import './globals.scss';

import classNames from 'classnames';
import { Inter, Montserrat_Alternates } from 'next/font/google';
import { ReactNode } from 'react';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--fontInter',
});
const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--fontMontserratAlternates',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <body
        className={classNames(
          'layoutCss',
          inter.variable,
          montserratAlternates.variable
        )}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
