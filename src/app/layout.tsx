import '@/styles/globals.scss';

import { ReactNode } from 'react';

import { Header } from '../components/layout/header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <body className={'layoutCss'}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
