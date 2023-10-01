import '@/shared/app/styles/globals.scss';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <main className={'container'}>{children}</main>
      </body>
    </html>
  );
}
