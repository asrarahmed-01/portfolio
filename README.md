# Portfolio

Personal portfolio built with **React 18 + TypeScript + Tailwind CSS + Vite**.

## Features

- 🌓 Light / dark mode (persisted)
- ⚡ Lazy loaded sections (React.lazy + Suspense)
- 📱 Mobile-first responsive design
- 🎯 Scroll-triggered fade animations
- 👁️ Visitor counter
- 💬 Quote section
- 🔗 Social links (GitHub, LinkedIn, Mail, Phone, Behance, LeetCode, AtCoder, Codeforces, CodeChef)
- 3 fonts: Space Grotesk (display) + Inter (body) + JetBrains Mono (code)
- Scroll progress bar

## Getting started

```bash
npm install
npm run dev
```

## Customise

| File | What to edit |
|---|---|
| `src/data/experience.ts` | Work history |
| `src/data/projects.ts` | Projects |
| `src/data/freelance.ts` | Freelance work |
| `src/data/education.ts` | Education |
| `src/data/technologies.ts` | Tech stack |
| `src/data/social.ts` | Social links & visibility |
| `src/sections/Hero.tsx` | Name, bio, CTAs |
| `src/sections/About.tsx` | About text & quick facts |
| `src/sections/Quote.tsx` | Favourite quote |

## Visitor counter (production)

The default visitor counter uses `localStorage` (demo only).
For a real counter, replace the logic in `src/hooks/useVisitorCount.ts` with:

```ts
// Vercel KV / Supabase / countapi
const res = await fetch('https://api.countapi.xyz/hit/your-namespace/visits')
const data = await res.json()
setCount(data.value)
```

## Build

```bash
npm run build
npm run preview
```
