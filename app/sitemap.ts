import type { MetadataRoute } from 'next';

const base = 'https://invoiceflow-red-nine.vercel.app';

const paths = [
  '/',
  '/invoice-generator',
  '/invoice-template',
  '/invoice-templates',
  '/free-invoice-generator',
  '/invoice-maker',
  '/online-invoice-generator',
  '/freelance-invoice',
  '/contractor-invoice',
  '/small-business-invoice',
  '/pdf-invoice-template',
  '/word-invoice-template',
  '/excel-invoice-template',
  '/printable-invoice',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
