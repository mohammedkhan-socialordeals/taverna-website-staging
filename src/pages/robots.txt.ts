import type { APIRoute } from 'astro';

// Staging (default): pages carry a "noindex" tag, which crawlers must be able
// to read, so pages are not blocked here. The menu PDF can't carry that tag,
// so it is blocked from crawling instead.
// Production (PUBLIC_ALLOW_INDEXING=true): everything is open.
const allowIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';

export const GET: APIRoute = () =>
  new Response(allowIndexing ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /menus/\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
