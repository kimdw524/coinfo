import type { Metadata } from 'next';
import localFont from 'next/font/local';

import ThemeProvider from '@/components/theme/ThemeProvider';

export const metadata: Metadata = {
  title: 'Coinfo',
  description: 'Coinfo Website',
};

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={pretendard.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
