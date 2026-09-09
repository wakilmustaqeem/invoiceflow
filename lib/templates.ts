export type InvoiceTemplate = 'modern' | 'classic' | 'minimal';

export const templateConfigs = {
  modern: { label: 'Modern', description: 'Clean SaaS-style invoice with a strong header.' },
  classic: { label: 'Classic', description: 'Traditional business invoice with clear sections.' },
  minimal: { label: 'Minimal', description: 'Simple, spacious invoice focused on readability.' },
} as const;

export const templateKeys = Object.keys(templateConfigs) as InvoiceTemplate[];
