# Taverna website (Astro)

Static site for Taverna Italian Kitchen + Bar, Saskatoon. Dal 1969.

## Run it

```
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # production files land in dist/
```

## Where to change things

| To change…                                   | Edit                         |
| -------------------------------------------- | ---------------------------- |
| Hours, phone, address, OpenTable/Toast links | `src/data/site.ts`           |
| Dishes, prices, cocktails, home "classics"   | `src/data/menu.ts`           |
| Colours and fonts                            | `src/styles/global.css` (top) |
| The logo (inlined from the supplied SVG)     | `src/components/Wordmark.astro` |
| Photos                                       | `src/assets/` (keep the same file names to swap in place) |
| Downloadable menu PDF                        | `public/menus/taverna-menu.pdf` |
| Page copy                                    | `src/pages/*.astro`          |

## Before launch

- Add food, cocktail and more dining-room photography (only the Private Dining photos were supplied so far; the steak, antipasti board and bruschetta are still stock).
- Confirm the Toast e-gift card link in `src/data/site.ts`.
- Have Tasos review the story copy and the timeline in `src/pages/story.astro`.

Raw client files (`Taverna WebSite Project - 2026/`) are kept out of git; the web-ready copies live in `src/assets/room/`.
