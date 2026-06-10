import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Next Steps Pro · When Opportunity Arrives, Be Ready.",
  description: 'Your Next Step. All In One Place. Next Steps Pro organizes everything into one powerful, professional presence built around you.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Barlow+Condensed:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
