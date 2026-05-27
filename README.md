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
- `assets/logos/` — partner logos (PeopleForBikes, City of Philadelphia,
  NACTO). Other partner logos and editorial photos load from remote URLs
  (`betterbikeshare.org`, `freedomtogether.org`, `nabsa.net`).

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

- Bicycle icon in the rider-voice section: [Phosphor Icons](https://phosphoricons.com/)
  (MIT license).

