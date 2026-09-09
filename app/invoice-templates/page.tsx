import Link from 'next/link';

export const metadata={title:'Free Invoice Templates | InvoiceFlow',description:'Explore free invoice templates for freelancers, contractors and small businesses. Create, print or download a professional invoice.'};

const templates=[
  ['Modern Invoice','Clean SaaS-style layout for everyday business invoices.','/invoice-template'],
  ['Classic Invoice','Traditional structure that keeps billing information easy to scan.','/invoice-template'],
  ['Minimal Invoice','Simple, uncluttered format focused on the essential invoice details.','/invoice-template'],
];

const formats=[
  ['PDF Invoice Template','A finished, shareable PDF workflow.','/pdf-invoice-template'],
  ['Word Invoice Template','A structured alternative for Word-based workflows.','/word-invoice-template'],
  ['Excel Invoice Template','A spreadsheet-friendly alternative for structured billing data.','/excel-invoice-template'],
  ['Printable Invoice','Create and print a clean invoice from your browser.','/printable-invoice'],
];

export default function InvoiceTemplates(){return <main><header className="nav"><div className="brand">Invoice<span>Flow</span></div><nav><Link href="/invoice-generator">Generator</Link><Link href="/invoice-template">Templates</Link></nav></header><section className="content"><p className="eyebrow">FREE INVOICE TEMPLATES</p><h1>Choose an invoice template that fits your workflow</h1><p className="lead">Start with a clean layout, add your business and client details, and create a professional invoice with InvoiceFlow.</p><div className="actions"><Link className="btn primary" href="/invoice-generator">Create an Invoice</Link></div><h2>Popular templates</h2><div className="grid">{templates.map(([title,text,href])=><div key={title}><h3>{title}</h3><p>{text}</p><Link href={href}>View template →</Link></div>)}</div><h2>Invoice formats</h2><div className="grid">{formats.map(([title,text,href])=><div key={title}><h3>{title}</h3><p>{text}</p><Link href={href}>Explore →</Link></div>)}</div><h2>Who can use these templates?</h2><p>InvoiceFlow templates are useful for freelancers, contractors and small businesses that want a straightforward way to prepare client invoices.</p></section></main>}
