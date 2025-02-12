import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Team from './ui/@analytics/page';
import Analytics from './ui/@team/page';


export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {
        // By adding Inter to the <body> element, the font will be applied throughout your application. Here, you're also adding the Tailwind antialiased class which smooths out the font. It's not necessary to use this class, but it adds a nice touch.
      }
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
