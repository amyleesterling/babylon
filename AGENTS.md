# Babylon project instructions

## Deployment

- Deploy Babylon to GitHub Pages only.
- The canonical live website is https://amyleesterling.github.io/babylon/.
- Publish production changes by pushing the validated commit to `main` in https://github.com/amyleesterling/babylon.
- Use `.github/workflows/deploy-pages.yml`; it builds with `npm run build:pages` and publishes `out/`.
- A release is complete only after the **Deploy Babylon to GitHub Pages** workflow succeeds.
- Do not create or use OpenAI Sites, Vercel, Netlify, Cloudflare Pages, or another deployment target unless Amy explicitly replaces this instruction.
- Do not add `.openai/hosting.json` or alternate-host deployment configuration.
