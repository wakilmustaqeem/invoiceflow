import Link from 'next/link';

const templates = [
  { name: 'Modern', slug: 'modern', description: 'Clean SaaS-style layout for freelancers and modern businesses.' },
  { name: 'Classic', slug: 'classic', description: 'Traditional professional format with clear invoice sections.' },
  { name: 'Minimal', slug: 'minimal', description: 'Simple, spacious design focused on readability.' },
];

export default function InvoiceTemplates() {
  return <main>
    <header className="nav"><div className="brand">Invoice<span>Flow</span></div><nav><Link href="/invoice-generator">Invoice Generator</Link><Link href="/">Home</Link></nav></header>
    <section className="content template-page">
      <p className="eyebrow">FREE INVOICE TEMPLATES</p>
      <h1>Professional invoice templates</h1>
      <p className="lead">Choose a clean starting point, then customize your invoice and download it as a PDF.</p>
      <div className="template-grid">
        {templates.map((template) => <article className={`template-card ${template.slug}`} key={template.slug}>
          <div className="template-preview"><span>INVOICE</span><strong>$1,250.00</strong><hr/><p>Business Name</p><p>Professional services</p><p>Client Name</p></div>
          <h2>{template.name}</h2><p>{template.description}</p>
          <Link className="btn primary" href="/invoice-generator">Use this template</Link>
        </article>)}
      </div>
    </section>
  </main>;
}
