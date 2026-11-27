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
| The logo                                     | `src/components/Wordmark.astro` |
| Photos                                       | `src/assets/` (keep the same file names to swap in place) |
| Downloadable menu PDF                        | `public/menus/taverna-menu.pdf` |
| Page copy                                    | `src/pages/*.astro`          |

## Before launch

- Swap the typeset wordmark for the real TAVERNA / dal 1969 logo file.
- Replace the stock photos in `src/assets/` with real dining-room, food and cocktail photography.
- Confirm the Toast e-gift card link in `src/data/site.ts`.
- Have Tasos review the story copy and the timeline in `src/pages/story.astro`.
