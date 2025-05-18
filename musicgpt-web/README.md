# MusicGPT Upgrade Modal

## Overview

MusicGPT subscription popup modal is created for take home assessment

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

## This project is for demonstration purposes only.
