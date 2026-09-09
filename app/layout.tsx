import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'InvoiceFlow — Free Invoice Generator',
  description: 'Create professional invoices in seconds. Free invoice generator for freelancers and small businesses. No signup required.',
  keywords: ['invoice generator','free invoice generator','invoice template','invoice maker'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}