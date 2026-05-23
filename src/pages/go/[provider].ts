export const prerender = false;
import type { APIRoute } from 'astro';
import affiliateLinks from '../../../data/affiliate-links.json';

export const GET: APIRoute = async ({ params, request }) => {
  const provider = params.provider as string;
  const link = (affiliateLinks as Record<string, { url: string }>)[provider];

  if (!link) {
    return new Response(null, { status: 404 });
  }

  const referer = request.headers.get('referer') ?? '';
  const siloMatch = referer.match(/panduanhosting\.id\/([^/]+)\//);
  const campaign = siloMatch ? siloMatch[1] : 'direct';

  const dest = new URL(link.url);
  dest.searchParams.set('utm_source', 'panduanhosting.id');
  dest.searchParams.set('utm_medium', 'affiliate');
  dest.searchParams.set('utm_campaign', campaign);

  return new Response(null, {
    status: 301,
    headers: { Location: dest.toString() },
  });
};
