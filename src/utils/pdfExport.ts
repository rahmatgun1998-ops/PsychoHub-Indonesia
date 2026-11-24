import { jsPDF } from 'jspdf';
import { JournalArticle, ScaleAdaptation } from '../types';

const PAGE_MARGIN = 18;
const CONTENT_WIDTH = 174; // A4 width (210mm) - 36mm margins
const PAGE_BOTTOM = 276;

function sanitizeFilename(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 64);
}

function addHeaderBanner(doc: jsPDF, kicker: string, title: string, subtitle: string): number {
  // Deep violet banner matching app visual identity
  doc.setFillColor(91, 33, 182);
  doc.rect(0, 0, 210, 38, 'F');

  doc.setTextColor(221, 214, 254);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text(kicker.toUpperCase(), PAGE_MARGIN, 12);

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  const titleLines = doc.splitTextToSize(title, CONTENT_WIDTH);
  doc.text(titleLines.slice(0, 2), PAGE_MARGIN, 19);

  doc.setTextColor(237, 233, 254);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(subtitle, PAGE_MARGIN, 33);

  return 48;
}

function ensurePageSpace(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > PAGE_BOTTOM) {
    doc.addPage();
    return 20;
  }
  return y;
}

function addSectionHeading(doc: jsPDF, y: number, heading: string): number {
  y = ensurePageSpace(doc, y, 14);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(91, 33, 182);
  doc.text(heading, PAGE_MARGIN, y);
  doc.setDrawColor(221, 214, 254);
  doc.setLineWidth(0.4);
  doc.line(PAGE_MARGIN, y + 2, PAGE_MARGIN + CONTENT_WIDTH, y + 2);
  return y + 7.5;
}

function addParagraph(doc: jsPDF, y: number, text: string, fontSize = 9.5, isItalic = false): number {
  doc.setFont('helvetica', isItalic ? 'italic' : 'normal');
  doc.setFontSize(fontSize);
  doc.setTextColor(30, 27, 75);
  const lines = doc.splitTextToSize(text, CONTENT_WIDTH);
  for (const line of lines) {
    y = ensurePageSpace(doc, y, 5.5);
    doc.text(line, PAGE_MARGIN, y);
    y += 4.8;
  }
  return y + 2;
}

function addKeyValueRow(doc: jsPDF, y: number, label: string, value: string): number {
  doc.setFontSize(9.2);
  const labelWidth = 44;
  const valWidth = CONTENT_WIDTH - labelWidth;
  const valLines = doc.splitTextToSize(value, valWidth);
  const blockHeight = Math.max(valLines.length * 4.7, 5.5);
  y = ensurePageSpace(doc, y, blockHeight + 2);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(76, 29, 149);
  doc.text(label, PAGE_MARGIN, y);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(30, 27, 75);
  valLines.forEach((line: string, idx: number) => {
    doc.text(line, PAGE_MARGIN + labelWidth, y + idx * 4.7);
  });

  return y + blockHeight + 2;
}

function addFooterToAllPages(doc: jsPDF, footerNote: string): void {
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(PAGE_MARGIN, 283, PAGE_MARGIN + CONTENT_WIDTH, 283);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(100, 116, 139);
    doc.text(footerNote, PAGE_MARGIN, 288);
    doc.text(`Halaman ${i} dari ${pageCount}`, PAGE_MARGIN + CONTENT_WIDTH, 288, { align: 'right' });
  }
}

export function exportScaleAdaptationPDF(scale: ScaleAdaptation): void {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  let y = addHeaderBanner(
    doc,
    'Ruang Belajar Psikologi · Dossier Adaptasi Skala Indonesia',
    `${scale.acronym} — ${scale.titleId}`,
    `Sumber Jurnal: ${scale.journalName} (${scale.year}) · DOI: ${scale.doi}`
  );

  y = addSectionHeading(doc, y, '1. Identitas Instrumen & Publikasi Adaptasi');
  y = addKeyValueRow(doc, y, 'Nama Skala (ID)', scale.titleId);
  y = addKeyValueRow(doc, y, 'Skala Asli (EN)', `${scale.titleEn} (${scale.originalAuthors})`);
  y = addKeyValueRow(doc, y, 'Tim Adaptasi', `${scale.adapterAuthors} (${scale.year})`);
  y = addKeyValueRow(doc, y, 'Jurnal Sumber', `${scale.journalName} [${scale.journalAccreditation}]`);
  y = addKeyValueRow(doc, y, 'Bidang & Konstruk', `${scale.category} · ${scale.construct}`);
  y = addKeyValueRow(doc, y, 'Tautan DOI', `https://doi.org/${scale.doi}`);
  y += 2;

  y = addSectionHeading(doc, y, '2. Properti Psikometrik & Metodologi Adaptasi');
  y = addKeyValueRow(doc, y, 'Jumlah Aitem', `${scale.itemCount} butir pernyataan`);
  y = addKeyValueRow(doc, y, 'Sampel Validasi', `${scale.sampleSize} (${scale.population})`);
  y = addKeyValueRow(doc, y, 'Prosedur Adaptasi', scale.adaptationMethod);
  y = addKeyValueRow(doc, y, 'Metode Analisis', scale.psychometricMethod);
  y = addKeyValueRow(doc, y, 'Angka Validitas', scale.fitIndices);
  y = addKeyValueRow(doc, y, 'Angka Reliabilitas', scale.reliability);
  y = addKeyValueRow(doc, y, 'Format Respons', scale.responseScale);
  y = addKeyValueRow(doc, y, 'Skoring & Norma', scale.scoringNorms);
  y += 2;

  y = addSectionHeading(doc, y, '3. Ringkasan Studi Adaptasi');
  y = addParagraph(doc, y, scale.summary);

  y = addSectionHeading(doc, y, '4. Butir Aitem & Rujukan Naskah Resmi');
  if (scale.adaptedItems.length > 0) {
    scale.adaptedItems.forEach((item) => {
      const reverseNote = item.reverseScored ? ' [Reverse-Scored / Unfavorable]' : '';
      const subscaleNote = item.subscale ? ` (${item.subscale})` : '';
      const lineText = `${item.number}. ${item.textId}${subscaleNote}${reverseNote}`;
      y = addParagraph(doc, y, lineText, 9.2);
    });
  } else {
    y = addParagraph(
      doc,
      y,
      `Daftar butir aitem verbatim beserta tabel statistik lengkap dirujuk langsung ke publikasi resmi artikel jurnal melalui tautan https://doi.org/${scale.doi} untuk menjaga akurasi redaksional instrumen penelitian.`,
      9.2
    );
  }

  y = addSectionHeading(doc, y, '5. Referensi Sitasi APA Edisi ke-7');
  y = addParagraph(doc, y, `Adaptasi Indonesia: ${scale.citationAdaptationApa7}`, 9, true);
  y = addParagraph(doc, y, `Instrumen Asli: ${scale.citationOriginalApa7}`, 9, true);

  addFooterToAllPages(
    doc,
    'Ruang Belajar Psikologi · Referensi Akademik & Psikometri Indonesia (Gunakan sesuai etika & izin penulis)'
  );

  doc.save(`adaptasi-skala-${sanitizeFilename(scale.acronym)}.pdf`);
}

export function exportJournalArticlePDF(article: JournalArticle): void {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  let y = addHeaderBanner(
    doc,
    `Ruang Belajar Psikologi · Ringkasan Artikel Jurnal (${article.scope} Open Access)`,
    article.title,
    `${article.journalName} (${article.year}) · ${article.subfield} · DOI: ${article.doi}`
  );

  y = addSectionHeading(doc, y, '1. Informasi Bibliografi & Akses Terbuka');
  y = addKeyValueRow(doc, y, 'Penulis', `${article.authors} (${article.year})`);
  y = addKeyValueRow(doc, y, 'Jurnal', `${article.journalName}, ${article.volumeIssue}`);
  y = addKeyValueRow(doc, y, 'Sub-Bidang', `${article.subfield} (${article.scope})`);
  y = addKeyValueRow(doc, y, 'Penerbit / SINTA', article.publisherOrAccreditation);
  y = addKeyValueRow(doc, y, 'Lisensi Akses', article.license);
  y = addKeyValueRow(doc, y, 'DOI / Tautan OA', `https://doi.org/${article.doi}`);
  y = addKeyValueRow(doc, y, 'Kata Kunci', article.keywords.join(', '));
  y += 2;

  y = addSectionHeading(doc, y, '2. Ringkasan Abstrak & Konteks Studi');
  y = addParagraph(doc, y, article.abstractSummaryId);

  y = addSectionHeading(doc, y, '3. Desain Penelitian & Partisipan');
  y = addKeyValueRow(doc, y, 'Metodologi', article.methodology);
  y = addKeyValueRow(doc, y, 'Sampel & Konteks', article.sampleContext);
  y += 2;

  y = addSectionHeading(doc, y, '4. Temuan Utama Penelitian');
  article.keyFindings.forEach((finding, idx) => {
    y = addParagraph(doc, y, `${idx + 1}. ${finding}`, 9.3);
  });

  y = addSectionHeading(doc, y, '5. Implikasi Teoretis & Praktis');
  y = addParagraph(doc, y, article.implications);

  y = addSectionHeading(doc, y, '6. Sitasi Format APA Edisi ke-7');
  y = addParagraph(doc, y, article.citationApa7, 9, true);

  addFooterToAllPages(
    doc,
    `Ruang Belajar Psikologi · Direktori Jurnal Open Access (${article.license})`
  );

  doc.save(`artikel-jurnal-${sanitizeFilename(article.id)}.pdf`);
}
