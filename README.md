# bbsp

Static site: **Better Bike Share Partnership — A Legacy, 2014–2026.**

A single-page editorial retrospective of BBSP's twelve years of work in shared
micromobility equity. Built from a Claude Design handoff bundle.

## What's in the repo

- `index.html` — the full page. Self-contained: inline CSS, inline JS, fonts
  and `d3` / `topojson` / `us-atlas` loaded from CDN. Sections: hero with
  kinetic headline, origin + timeline, the 92% takeover, impact grid with
  scroll-triggered counters, four-pillar programs, sticky-map case studies
  (Chicago / Cincinnati / Honolulu), ripple map with nine ripple-city cards,
  national legacy, archive shelf, footer. Nav has a language picker, search
  overlay (⌘K), and back-to-top.
- `assets/images/` — editorial photos (hero, origin team shot, case-study
  heroes for Chicago/Cincinnati/Honolulu, nine ripple-card photos, seven
  team headshots). All pulled from the original BBSP / NABSA / Freedom
  Together source URLs and rehosted locally so the page renders even if
  the upstream URLs ever move or 404.
- `assets/logos/` — partner logos (BBSP icon is shared with the favicon
  at `assets/favicon.svg`; PeopleForBikes, City of Philadelphia, NACTO,
  NABSA, Freedom Together).
- `robots.txt` + `sitemap.xml` — explicit allows for major search-engine
  and AI crawlers (Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot,
  Applebot-Extended, CCBot, Google-Extended, etc.) and a single-URL
  sitemap. Update the `loc` and `Sitemap:` lines if the site moves off
  `bbsp.vercel.app`.

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

CDN assets and remote images require an internet connection.

## Deploy

Auto-deploys to Vercel from `main`. No build step — Vercel serves the static
files as-is.

## Credits

- Icons: [Phosphor Icons](https://phosphoricons.com/) (MIT license) —
  `bicycle` (rider-voice badge), `users-three` (fellowship-voice badge),
  `arrow-right` (inline CTA arrows), and `article` / `book-open` /
  `folder-open` / `chart-bar` / `chats-circle` in the archive shelf.

