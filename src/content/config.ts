import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.string().optional(),
      lastUpdated: z.string().optional(),
      author: z.string().default('Tim PanduanHosting'),
      category: z.enum(['panduan', 'tutorial', 'rekomendasi', 'review', 'perbandingan', 'promo']),
      tags: z.array(z.string()).default([]),
      featuredImage: image().optional(),
      keyword: z.string(),
      volume: z.number().optional(),
      kd: z.number().optional(),
      schema: z
        .enum(['Article', 'ItemList', 'HowTo', 'Review', 'FAQPage'])
        .default('Article'),
      affiliateLinks: z
        .array(
          z.object({
            name: z.string(),
            url: z.string(),
            cta: z.string(),
          })
        )
        .optional()
        .default([]),
    }),
});

export const collections = {
  panduan: articleCollection,
  tutorial: articleCollection,
  rekomendasi: articleCollection,
  review: articleCollection,
  perbandingan: articleCollection,
  promo: articleCollection,
};
