import { config, fields, collection } from '@keystatic/core';

const isProduction = process.env.NODE_ENV === 'production';

const articleSchema = {
  title: fields.text({ label: 'Judul' }),
  description: fields.text({ label: 'Deskripsi SEO (150–160 karakter)', multiline: true }),
  publishDate: fields.date({ label: 'Tanggal Publikasi' }),
  lastUpdated: fields.date({ label: 'Terakhir Diperbarui' }),
  author: fields.text({ label: 'Penulis', defaultValue: 'Tim PanduanHosting' }),
  category: fields.select({
    label: 'Kategori',
    options: [
      { label: 'Panduan', value: 'panduan' },
      { label: 'Tutorial', value: 'tutorial' },
      { label: 'Rekomendasi', value: 'rekomendasi' },
      { label: 'Review', value: 'review' },
      { label: 'Perbandingan', value: 'perbandingan' },
      { label: 'Promo', value: 'promo' },
    ],
    defaultValue: 'panduan',
  }),
  tags: fields.array(fields.text({ label: 'Tag' }), {
    label: 'Tags',
    itemLabel: (props) => props.value,
  }),
  featuredImage: fields.image({
    label: 'Gambar Utama',
    directory: 'public/images',
    publicPath: '/images',
  }),
  keyword: fields.text({ label: 'Keyword Utama (SEMrush)' }),
  volume: fields.integer({ label: 'Volume Pencarian Bulanan' }),
  kd: fields.integer({ label: 'Keyword Difficulty (0–100)' }),
  schema: fields.select({
    label: 'Schema.org',
    options: [
      { label: 'Article', value: 'Article' },
      { label: 'ItemList', value: 'ItemList' },
      { label: 'HowTo', value: 'HowTo' },
      { label: 'Review', value: 'Review' },
      { label: 'FAQPage', value: 'FAQPage' },
    ],
    defaultValue: 'Article',
  }),
  affiliateLinks: fields.array(
    fields.object({
      name: fields.text({ label: 'Nama Penyedia' }),
      url: fields.text({ label: 'URL Afiliasi' }),
      cta: fields.text({ label: 'Teks CTA' }),
    }),
    { label: 'Link Afiliasi', itemLabel: (props) => props.fields.name.value }
  ),
  body: fields.markdoc({ label: 'Konten', extension: 'md' }),
};

export default config({
  storage: isProduction
    ? {
        kind: 'github',
        repo: {
          owner: 'jordimariezcurrena',
          name: 'panduanhosting',
        },
      }
    : { kind: 'local' },

  ui: {
    brand: { name: 'PanduanHosting.id' },
    navigation: {
      Konten: ['panduan', 'tutorial'],
      Rekomendasi: ['rekomendasi', 'review', 'perbandingan'],
      Promosi: ['promo'],
    },
  },

  collections: {
    panduan: collection({
      label: 'Panduan (Informasional)',
      slugField: 'title',
      path: 'src/content/panduan/*',
      format: { contentField: 'body' },
      schema: articleSchema,
    }),

    tutorial: collection({
      label: 'Tutorial',
      slugField: 'title',
      path: 'src/content/tutorial/*',
      format: { contentField: 'body' },
      schema: articleSchema,
    }),

    rekomendasi: collection({
      label: 'Rekomendasi (Roundup)',
      slugField: 'title',
      path: 'src/content/rekomendasi/*',
      format: { contentField: 'body' },
      schema: articleSchema,
    }),

    review: collection({
      label: 'Review',
      slugField: 'title',
      path: 'src/content/review/*',
      format: { contentField: 'body' },
      schema: articleSchema,
    }),

    perbandingan: collection({
      label: 'Perbandingan (Komparatif)',
      slugField: 'title',
      path: 'src/content/perbandingan/*',
      format: { contentField: 'body' },
      schema: articleSchema,
    }),

    promo: collection({
      label: 'Promo & Diskon',
      slugField: 'title',
      path: 'src/content/promo/*',
      format: { contentField: 'body' },
      schema: articleSchema,
    }),
  },
});
