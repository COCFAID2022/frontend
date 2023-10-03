import '@/shared/app/styles/globals.scss';
import { ReactNode } from 'react';
import { Header } from '@/widgets/header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className={'container'}>{children}</main>
      </body>
    </html>
  );
}
