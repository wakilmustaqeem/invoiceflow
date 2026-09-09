import { jsPDF } from 'jspdf';

export type PdfItem = { description: string; qty: number; rate: number };

export function downloadInvoicePdf(data: {
  business: string;
  client: string;
  currency: string;
  number: string;
  date: string;
  dueDate: string;
  items: PdfItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
}) {
  const doc = new jsPDF();
  const money = (value: number) => `${data.currency}${value.toFixed(2)}`;
  let y = 22;

  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('INVOICE', 20, y);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(data.number, 190, y, { align: 'right' });
  y += 14;

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(data.business || 'Your Business', 20, y);
  doc.setFont('helvetica', 'normal');
  doc.text(`Bill to: ${data.client || 'Client Name'}`, 20, y + 7);
  doc.text(`Issue: ${data.date}`, 190, y, { align: 'right' });
  doc.text(`Due: ${data.dueDate}`, 190, y + 7, { align: 'right' });
  y += 20;

  doc.line(20, y, 190, y);
  y += 10;
  doc.setFont('helvetica', 'bold');
  doc.text('Description', 20, y);
  doc.text('Amount', 190, y, { align: 'right' });
  y += 8;
  doc.setFont('helvetica', 'normal');

  data.items.forEach((item) => {
    doc.text(`${item.description} × ${item.qty}`, 20, y);
    doc.text(money(item.qty * item.rate), 190, y, { align: 'right' });
    y += 7;
    if (y > 265) { doc.addPage(); y = 20; }
  });

  y += 3;
  doc.line(110, y, 190, y);
  y += 8;
  doc.text('Subtotal', 130, y);
  doc.text(money(data.subtotal), 190, y, { align: 'right' });
  y += 7;
  doc.text('Discount', 130, y);
  doc.text(`-${money(data.discount)}`, 190, y, { align: 'right' });
  y += 7;
  doc.text(`Tax (${data.tax}%)`, 130, y);
  doc.text(money(Math.max(0, data.subtotal - data.discount) * data.tax / 100), 190, y, { align: 'right' });
  y += 10;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('TOTAL', 130, y);
  doc.text(money(data.total), 190, y, { align: 'right' });

  doc.save(`${data.number || 'invoice'}.pdf`);
}
