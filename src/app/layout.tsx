import '@/shared/app/styles/globals.scss';

import { ReactNode } from 'react';

import { Header } from '@/widgets/header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <body className={'layout-css'}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
