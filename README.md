# Sunny Singh — Software Developer Portfolio

## Stack
Next.js 16.3.4, React 19.2.6, TypeScript, custom responsive CSS and CSS 3D animation. Static export for fast CDN delivery.

## Edit and run
1. Install Node.js 22 or 24.
2. Run `npm install`.
3. Run `npm run dev`.
4. Edit content in `app/page.tsx`, base layout in `app/globals.css`, cinematic art direction in `app/cinematic.css`, metadata in `app/layout.tsx`.
5. Run `npm run build`; the publishable site is `out/`.

## Deployment
Vercel project: sunny-singh-sde-portfolio
Project ID: prj_SA2bK4JLs0pF2FElQwATAIGSrruh
Expected production alias: https://sunny-singh-sde-portfolio.vercel.app
The current deployment uses the compiled `out/` files. For source-based deployment, use the Next.js framework preset; do not use the static project's empty build command for source builds.

## Figma design concept
https://www.figma.com/design/GOYI7sJr6CT261P4LrUbeQ
The Figma file contains the editable content hierarchy and visual direction. The implemented responsive site extends this with the portrait, illustrations and animation.

## Content provenance
Content comes from Sunny_Singh_8299259508(2).pdf supplied by the owner. Chegg dates and metrics reflect that résumé. The profile portrait was AI-edited from the supplied photograph to add professional clothing and studio lighting.
Project visuals are illustrative, not screenshots of running applications. The RESCUE.NET rebuild has a working browser demo at https://rescue-net-sunny-demo.vercel.app, with Java backend source and architecture documentation available from that demo. Source repositories: https://github.com/sunnnyysingh001-stack/sunny-singh-portfolio and https://github.com/sunnnyysingh001-stack/rescue-net. The GitHub profile and Coursera verification URLs are copied from the résumé; availability has not been independently verified.

## Contact behavior
Email links open the visitor's mail application; copy email copies the address. No server-side contact form, analytics, or visitor database is configured.

## Verification
Production build and TypeScript checking passed. Browser verification covers navigation, project filters, case study dialogs, theme switching, motion pause and quiz interaction.

## Future updates from ChatGPT
Use this source archive and the Vercel project ID above. Edit, rebuild and publish to the same project to preserve the public link. Keep project URLs, résumé, credentials and employment dates current.

## Appearance
The portfolio adapts the owner’s October 23 video reference into a cinematic black/ivory design: a spotlight, sculptural portrait rings, kinetic typography, staggered project displays and oversized contact typography. It uses CSS 3D transforms rather than a heavy WebGL runtime. Motion can be paused and respects reduced-motion preferences. The floating light/dark switch remembers the visitor’s preference.

Quiz demo: `/quiz/` — a browser adaptation of the Android project, with Java/Web/CS categories, difficulty, timed rounds, scoring and answer review. Edit questions in `public/quiz/engine.mjs`.
