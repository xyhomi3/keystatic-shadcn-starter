import "./globals.css";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'h-screen font-sans antialiased bg-background',
          montserrat.className
        )}>
        <main>{children}</main>
      </body>
    </html>
  );
}
