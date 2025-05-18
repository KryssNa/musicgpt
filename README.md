# MusicGPT Monorepo

This repository contains two main projects:

- **musicgpt-api**: A TypeScript/Express backend API for subscription plans and related services.
- **musicgpt-web**: A Next.js/React frontend featuring a dynamic upgrade modal and subscription plan UI.

---

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 1. Clone the Repository

```bash
git clone <repo-url>
cd <repo-root>
```

### 2. Install Dependencies

#### For the API:

```bash
cd musicgpt-api
npm install
```

#### For the Web App:

```bash
cd ../musicgpt-web
npm install
```

### 3. Running the Projects

#### Start the API (development):

```bash
cd musicgpt-api
npm run dev
```

- The API will typically run on [http://localhost:5000](http://localhost:5000) (check your config).

#### Start the Web App (development):

```bash
cd musicgpt-web
npm run dev
```

- The web app will run on [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
take-home/
├── musicgpt-api/         # Express/TypeScript backend
│   ├── src/
│   │   ├── config/       # Environment and config files
│   │   ├── controllers/  # Route controllers (e.g., plan.controller.ts)
│   │   ├── middleware/   # Express middleware
│   │   ├── models/       # Data models (e.g., plan.model.ts)
│   │   ├── routes/       # API route definitions
│   │   ├── services/     # Business logic (e.g., plan.service.ts)
│   │   ├── app.ts        # Express app setup
│   │   └── server.ts     # Entry point
│   ├── package.json      # API dependencies and scripts
│   └── ...
│
├── musicgpt-web/         # Next.js/React frontend
│   ├── public/assets/    # Images, SVGs, and plan data (plans.json)
│   ├── src/
│   │   ├── app/          # Next.js app directory (entry, layout, styles)
│   │   ├── components/   # UI components
│   │   │   └── UpgradeModal/  # Modal, features, utils, icons
│   │   ├── hooks/        # Custom React hooks
│   │   └── utils/        # Utility functions
│   ├── package.json      # Web dependencies and scripts
│   └── ...
└── README.md             # (This file)
```

---

## Design Decisions

### Monorepo Structure

- Both backend and frontend are kept in a single repository for easier development, versioning, and deployment.

### musicgpt-api

- **TypeScript** for type safety and maintainability.
- **Express** for a lightweight, flexible API server.
- **Modular structure**: Separation of concerns between config, controllers, models, routes, and services.
- **Environment variables** managed via dotenv.

### musicgpt-web

- **Next.js (App Router)** for modern React features, SSR, and routing.
- **Tailwind CSS** for rapid, utility-first styling.
- **Framer Motion** for smooth, declarative animations.
- **Dynamic modal**: Subscription plans and features are loaded from a JSON file for easy updates.
- **Component-driven**: Modal and feature displays are broken into reusable, well-documented components.
- **Assets**: All images and SVGs are stored in the public/assets directory for easy access and updates.

### General

- **Separation of concerns**: API and web are decoupled, allowing independent development and deployment.
- **Extensibility**: Both projects are structured for easy addition of new features, endpoints, or UI components.

---

## More Information

- See `musicgpt-web/README.md` for detailed frontend documentation, including modal features and customization.
- API endpoints and usage are documented in the code and can be extended as needed.

---

## License

This project is for demonstration purposes only.
