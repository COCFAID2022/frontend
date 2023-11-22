import '@/styles/reset.scss';
import '@/styles/globals.scss';

import classNames from 'classnames';
import { Inter, Montserrat_Alternates } from 'next/font/google';
import { ReactNode } from 'react';

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
  display: 'fallback',
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
      </body>
    </html>
  );
}
