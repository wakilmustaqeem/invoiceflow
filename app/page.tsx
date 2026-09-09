import Link from 'next/link';

export default function Home() {
  return <main>
    <header className="nav"><div className="brand">Invoice<span>Flow</span></div><nav><Link href="/invoice-generator">Invoice Generator</Link><Link href="/invoice-template">Templates</Link><Link href="/about">About</Link></nav></header>
    <section className="hero"><div><p className="eyebrow">FREE • NO SIGNUP • PDF</p><h1>Create professional invoices in seconds.</h1><p className="lead">A simple, privacy-friendly invoice generator for freelancers and small businesses.</p><div className="actions"><Link className="btn primary" href="/invoice-generator">Create Free Invoice</Link><Link className="btn secondary" href="/invoice-template">Browse Templates</Link></div></div><div className="invoice-card"><div className="invoice-top"><b>INVOICE</b><span>#INV-1001</span></div><p>Acme Studio</p><hr/><div className="invoice-row"><span>Website design</span><b>$850.00</b></div><div className="invoice-row"><span>Consulting</span><b>$250.00</b></div><hr/><div className="invoice-total"><span>Total</span><b>$1,100.00</b></div></div></section>
    <section className="tools"><h2>Everything you need to invoice</h2><div className="grid"><div><b>Live Preview</b><p>See your invoice update as you type.</p></div><div><b>PDF & Print</b><p>Download or print a clean professional invoice.</p></div><div><b>Save Locally</b><p>Keep invoices in your browser without an account.</p></div></div></section>
    <section className="content"><h2>Free invoice generator for modern businesses</h2><p>InvoiceFlow helps freelancers, contractors and small businesses create professional invoices quickly. Add your business details, client, line items, tax and discount, then download a polished invoice.</p></section>
    <footer>© {new Date().getFullYear()} InvoiceFlow · <Link href="/privacy-policy">Privacy</Link> · <Link href="/terms">Terms</Link> · <Link href="/contact">Contact</Link></footer>
  </main>;
}