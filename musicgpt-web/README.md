This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# MusicGPT Upgrade Modal

## Overview

MusicGPT is a Next.js application that features a dynamic, animated upgrade modal for subscription plans. The modal is designed to closely match the provided Figma design, using Tailwind CSS for styling and Framer Motion for all animations. Subscription plan data is fetched from a JSON file, and all assets (SVGs, images) are loaded from the public assets folder.

## Features

- **Dynamic Content:** Subscription plans and features are loaded from a JSON file.
- **Loading State:** Displays a loading animation while fetching plan data.
- **Modal Animations:** Smooth entrance and exit animations using Framer Motion.
- **Feature Hover Animations:** Hovering over each feature animates the left pane image.
- **Responsive Design:** Modal is responsive and visually matches the Figma design.
- **Unlock Button:** Redirects to musicgpt.com with the selected plan.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. **Open the app:**
   Visit `http://localhost:3000` and click the "Open Upgrade Modal" button to view the modal.

## Project Structure

- `src/components/UpgradeModal/PricingModal.tsx` — Main modal component (UI, logic, and animation)
- `src/components/UpgradeModal/components/FeatureDisplays.tsx` — Animated feature display components
- `public/assets/` — All SVGs and images used in the modal
- `public/assets/subscriptionPlans.json` — Subscription plan data source
- `src/app/page.tsx` — Example usage and trigger for the modal
- `src/app/globals.css` — Tailwind CSS global styles

## Code Documentation & Comments

- All major components and functions are commented for clarity.
- Key logic, hooks, and animation variants are explained in the code.
- See `src/components/UpgradeModal/PricingModal.tsx` and `src/components/UpgradeModal/components/FeatureDisplays.tsx` for examples.

## Customization

- To update plans or features, edit `public/assets/subscriptionPlans.json`.
- To change images or icons, replace SVGs in `public/assets/`.

## Contributing

- Please ensure all new code is well-commented and follows the existing code style.
- Open issues or pull requests for suggestions and improvements.

## License

This project is for demonstration purposes only.
