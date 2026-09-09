import type { MetadataRoute } from 'next';
const base='https://invoiceflow-red-nine.vercel.app';
export default function sitemap(): MetadataRoute.Sitemap { const paths=['/','/invoice-generator','/invoice-template','/about','/contact','/privacy-policy','/terms']; return paths.map(path=>({url:`${base}${path}`,lastModified:new Date()})); }
