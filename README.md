# Aquila Repair

A practical information directory for repair knowledge and local expertise across African cities. Aquila does not perform repairs, hold devices, guarantee work, process payments or certify repairers. Users contract directly with independent providers.

## Setup

Use Node 24 (`nvm use`), copy `.env.example` to `.env.local`, then run `npm ci` and `npm run dev`. Run `npm run typecheck`, `npm run build`, and `npm audit --audit-level=high` before deployment. The static Colorlib Auto Repair template CSS and animation utilities are retained in `public/template`.

## Deployment notes and limitations

The original template is static HTML, not a Next.js application. Its Poppins typography, blue and charcoal palette, CSS and animation file inform the adaptation. NextAuth is updated to 5.0.0-beta.32 to address the critical advisories in the originally requested beta. The site does not implement authentication or collect submissions directly. Suggestions instead go to WhatsApp, so no reCAPTCHA claim is made. Add a consent-aware, verified backend and configure reCAPTCHA before accepting direct form submissions. Directory entries are intentionally empty until real providers and their contact preferences can be verified. Language switching covers the global shell; page content remains English. Local images could not be obtained in the restricted network environment. See `image-credits.md`.

Repair expertise exists in both informal and formal economies. Listing people requires permission, accurate contact details and respect for the way they work. Impact notes are qualitative, not measured claims.

## Deploy on Vercel

1. Import this repository into Vercel and select the repository root as the root directory. The uploaded ZIP is the source template; do not select it as the application root.
2. Use the Next.js framework preset and Node.js 24.x in the Vercel project settings. The committed `vercel.json` uses `npm ci`, `npm run build`, the `cdg1` function region, and the security headers.
3. Optionally set `NEXT_PUBLIC_WHATSAPP_NUMBER` to `254112272061` in the Vercel environment variables for Production, Preview and Development. If omitted, the application uses that same number by default. Redeploy after changing it: public Next.js environment variables are embedded at build time.
4. Deploy. No database, authentication secret or reCAPTCHA keys are needed for the current WhatsApp-only version. Do not set up an auth route or direct submission form without first addressing the security and implementation limitations above.

Vercel does not run `npm audit` automatically during its build. Run the full verification gate before deploying. Authentication remains unimplemented and requires a separate security review before use.
