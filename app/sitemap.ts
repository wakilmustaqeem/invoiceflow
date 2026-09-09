import type { MetadataRoute } from 'next';

const base = 'https://invoiceflow-red-nine.vercel.app';

const paths = [
  '/',
  '/invoice-generator',
  '/invoice-template',
  '/free-invoice-generator',
  '/invoice-maker',
  '/online-invoice-generator',
  '/freelance-invoice',
  '/contractor-invoice',
  '/small-business-invoice',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
