# Completely Dogcare website

Astro + plain CSS. One responsive layout built from the approved design in `../completely-dogcare-homepage/`.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321. `npm run build` outputs the static site to `dist/`.

## Where things live

- `src/pages/index.astro`: the homepage, with sections in page order
- `src/components/sections/`: one file per homepage section
- `src/components/`: shared pieces (Polaroid, TimeNote, Button, Header, Footer, MobileBar)
- `src/data/site.ts`: phone, email, address, hours, social links, nav, and booking links
- `src/styles/global.css`: colour/type/spacing tokens, buttons, motion
- `src/assets/images/`: photos (optimised to WebP at build time); `public/images/`: logo

## Pages

`/` home · `/book` · `/daycare` · `/grooming` · `/first-timers` · `/about` · `/faq` · `/gallery`

Content comes from the old Wix site (completelydogcare.com.au) where it existed. FAQ answers are in
`src/data/faq.ts`, prices and daycare features in `src/data/site.ts`, and photos in `src/data/images.ts`.

## Still to fill in

Anything in `[square brackets]` is a placeholder. Search `src` for `[` to find them all.

- **Before switching the domain:** "Book a casual day" and "Buy a pack" link to Wix Bookings on the
  current domain. Those links break once the domain points here, so replace them first (`wix` in `src/data/site.ts`).
- Casual session price, and all grooming services and prices
- Grooming booking link (`/book#grooming`)
- Grooming and before/after photos, team photo, owner's story and name
- Connect the contact and first-timer forms to a backend (e.g. Formspree)
- Swap the drawn map for an embedded Google Map (`Contact.astro`)
- Confirm the testimonials are real reviews (`Testimonials.astro`)
- Decide on the "Groom & Stay" sticker and badge (`Hero.astro`, `Offer.astro`)

Meet the Team was taken out on purpose. It isn't on the site.
