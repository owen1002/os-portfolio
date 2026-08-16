# os-portfolio

Personal portfolio site for Owen Siu, built with [Next.js](https://nextjs.org) (App Router), React, and Tailwind CSS v4. Terminal-ink dark theme with an amber accent by default, with a paper-ledger light mode toggle.

## Development

```bash
pnpm install
pnpm dev      # start dev server at http://localhost:3000
pnpm lint     # run ESLint
pnpm build    # production build
```

## Editing content

All portfolio content (profile, experience, education) lives in `lib/profile.ts`. The Skills section is derived automatically from the tech stacks listed in each experience — see `lib/utils.ts` for the category mapping.
