# tyler emanuel — personal site

Next.js 16 (App Router) + Tailwind v4. Fully static; no runtime dependencies beyond Next/React.

## Edit content
All copy lives in `src/content/` — no component changes needed:

| File | What |
| --- | --- |
| `profile.ts` | Name, headline, intro, about paragraphs, links, resume path |
| `experience.ts` | Roles; compact roles leave `highlights` empty |
| `projects.ts` | Projects (add GitHub/demo `links` here) |
| `education.ts` | Rice, coursework groups (with sources noted at top) |
| `skills.ts` | Skills list (shown at the end of About) |
| `site.ts` | SEO title/description, nav items, site URL resolution |

Replace `public/resume.pdf` to update the resume.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy (Vercel)
Import the repo at vercel.com/new (framework auto-detected), or `npx vercel --prod`.
Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://tyleremanuel.com`) once you have a custom domain;
otherwise canonical/OG URLs fall back to the Vercel production URL.
