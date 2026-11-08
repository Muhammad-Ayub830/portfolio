# Portfolio site

Personal portfolio for Muhammad Ayub. Built with Next.js 14 (App Router), TypeScript and Tailwind CSS 3. Built from the approved Figma design (Home page, desktop plus responsive mobile and tablet layouts).

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## Where things are

- `app/page.tsx` assembles the home page from the sections in `components/`.
- `lib/site.ts` holds name, title, description, domain, email and social links. Edit the TODO values first.
- `lib/data.ts` holds the featured projects, process steps and skills.
- `tailwind.config.ts` holds the design tokens from Figma (colors, font).

## Before launch (TODO)

1. `lib/site.ts`: set the real domain, email, GitHub and LinkedIn.
2. Replace the "MA" box in `components/About.tsx` with a real photo (put it in `public/`).
3. Replace the stand-in previews in `components/SitePreview.tsx` with real screenshots as projects are finished.
4. Point "View all projects" and "More about me" to real pages once they exist.
5. Add an Open Graph image and a favicon.

## Responsive rules used

- Nav links become a menu button below 768px.
- Hero stacks (text, then preview) below 1024px.
- Project cards: 1 column on mobile, 2 on tablet, 3 on desktop.
- Process steps: 1 column on mobile, 2 on tablet, 4 on desktop.
- About stacks (photo, then text) below 1024px.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial home page from Figma design"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio-site.git
git push -u origin main
```

## Hosting note

Vercel's free Hobby plan is for personal, non-commercial use only. Because this site exists to win paid work, check the hosting plan's terms before launch.
