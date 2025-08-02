---
id: architecture
title: Architecture
description: Overview of the standardized architecture for the WORLDSymposium conference website
---

# Application Architecture

This document outlines the standardized architecture for the WORLDSymposium conference website, a React TypeScript application with a Node.js backend, designed for one annual conference with features like user sign-up, payments, personal profiles, travel recommendations, and editable text content stored in PostgreSQL.

## Overview

The application follows a modular, scalable architecture to support the extensive page structure derived from the website footer (e.g., Home, About, Program + Events). It leverages modern tools and libraries to ensure maintainability, type safety, and testability.

### Technologies

- **Frontend**:
  - **React**: Component-based UI framework.
  - **TypeScript**: Static typing for improved developer experience and code reliability.
  - **Formik**: Form management for user sign-up, profiles, payments, content editing, and newsletter subscriptions.
  - **TanStack Query**: Data fetching and caching for REST API interactions.
  - **React Router**: Client-side routing for navigation across pages.
  - **Jest**: Unit testing framework with React Testing Library.
  - **SCSS Modules**: Modular CSS for component and page-specific styling.
- **Backend**:
  - **Node.js with Express**: REST API server for handling requests.
  - **PostgreSQL**: Database for storing content, users, profiles, payments, and travel recommendations.
  - **Prisma (optional)**: ORM for database interactions.
- **Documentation**: Docusaurus for API, setup, and architecture documentation.

## File Structure

The application is organized into a monorepo with separate `client` and `server` directories, plus optional `shared` utilities and `docs` for documentation.

### Client (Frontend)

- **Location**: `client/src/`
- **Structure**:
  - `assets/`: Static assets like images (e.g., logo for footer) and global styles.
  - `components/`: Reusable components, grouped by type:
    - `common/`: Generic components (e.g., `Button`, `Card`) with `.tsx`, `.module.scss`, `.test.tsx`, and `utils/` (types, constants, functions).
    - `layout/`: Layout components like `Footer`, `Header`, and `Layout`, each with modular styles and tests.
    - `forms/`: Formik-based forms (e.g., `SignUpForm`, `ContentForm`, `NewsletterForm`) with modular structure.
  - `pages/`: Page components, one per footer item (e.g., `Home`, `About`, `ProgramAndEvents/Program`), each with:
    - `.tsx`: Main page component, using Formik for forms and TanStack Query for data fetching.
    - `.module.scss`: Modular styles.
    - `.test.tsx`: Jest tests for component logic and rendering.
    - `pageData.json`: Page-specific metadata, routing, and default content.
    - `utils/`: Types, constants, and functions for page-specific logic.
  - `routes/`: React Router configuration (`routes.tsx`) defining page paths.
  - `services/queries/`: TanStack Query hooks for API calls (e.g., `content.ts`, `user.ts`).
  - `types/`: Centralized TypeScript types for content, users, payments, etc.
  - `utils/`: Shared utilities for authentication, formatting, and search.
  - `App.tsx`: Main app component with React Router setup.
  - `index.tsx`: Entry point.

### Server (Backend)

- **Location**: `server/src/`
- **Structure**:
  - `controllers/`: Request handlers for content, users, payments, travel, newsletters, and search.
  - `models/`: Database models (e.g., `conference`, `user`, `content`) for PostgreSQL.
  - `routes/`: REST API endpoints (e.g., `/api/content/:conferenceId/:pageId`).
  - `services/`: Business logic for database operations and external integrations (e.g., Stripe for payments).
  - `middleware/`: Authentication (e.g., JWT) and error handling.
  - `utils/`: Database connection and logging.
  - `types/`: TypeScript types for backend data.
  - `app.ts`: Express app setup.
  - `server.ts`: Server entry point.

### Shared

- **Location**: `shared/`
- **Purpose**: Optional directory for shared types and utilities in a monorepo setup.
- **Structure**:
  - `types/`: Shared TypeScript types (e.g., `content`, `user`).
  - `utils/`: Shared constants and formatting functions.

### Documentation

- **Location**: `docs/`
- **Structure**:
  - `docs/architecture.md`: This document.
  - `docs/api.md`: API endpoint documentation.
  - `docs/setup.md`: Setup instructions.
  - `docusaurus.config.js`: Docusaurus configuration.

## Standardization Principles

1. **Modularity**:

   - Each page and component has its own folder with `.tsx`, `.module.scss`, `.test.tsx`, and `utils/` (types, constants, functions).
   - Pages include `pageData.json` for metadata, routing, and default content.
   - Components and forms are reusable across pages (e.g., `Button`, `ContentForm`).

2. **Type Safety**:

   - TypeScript types are defined in `utils/types.ts` for components and pages, and in `client/src/types/` or `server/src/types/` for shared data.
   - Types ensure consistency for content, users, payments, and other entities.

3. **Data Fetching**:

   - TanStack Query manages API calls with caching and optimistic updates.
   - Queries are organized in `client/src/services/queries/` (e.g., `content.ts`, `user.ts`).
   - REST API endpoints in `server/src/routes/` handle requests to PostgreSQL.

4. **Form Management**:

   - Formik is used for all forms (e.g., sign-up, profile, content editing, newsletter).
   - Forms are located in `client/src/components/forms/`, each with modular structure.

5. **Routing**:

   - React Router in `client/src/routes/routes.tsx` defines routes for all pages, matching the footer structure (e.g., `/about`, `/program-and-events/program`).
   - Route paths are derived from `pageData.json` for consistency.

6. **Testing**:

   - Jest and React Testing Library are used for unit tests in `.test.tsx` files.
   - Tests cover component rendering, user interactions, and API integration.

7. **Styling**:

   - SCSS modules (`*.module.scss`) ensure encapsulated styles for components and pages.
   - Global styles in `client/src/assets/styles/global.css` for shared design tokens.

8. **Database Integration**:

   - PostgreSQL stores dynamic content (`page_content`), users, profiles, payments, travel recommendations, and newsletter subscribers.
   - Prisma (optional) simplifies database interactions in `server/src/models/`.

9. **Footer**:
   - The `Footer` component in `client/src/components/layout/Footer/` renders grouped navigation links (e.g., Program + Events, Scholarships and Awards) and a newsletter Formik form.
   - Links are defined in `Footer/utils/constants.ts`, with paths matching `pageData.json`.

## Key Features

- **User Sign-Up and Profiles**: Handled via `SignUpForm` and `ProfileForm`, stored in `users` and `user_profiles` tables.
- **Payments**: Integrated with Stripe via `PaymentForm`, stored in `payments` table.
- **Text Content**: Stored in `page_content` table, editable via `ContentForm` with Formik and TanStack Query.
- **Travel Recommendations**: Stored in `travel_recommendations` table, managed via `TravelRecommendationForm`.
- **Newsletter**: Subscription form in `Footer` submits to `/api/newsletter`, stored in `newsletter_subscribers` table.
- **Search**: Implemented in `Search` page with TanStack Query, potentially using PostgreSQL full-text search or an external service.

## Example Page Structure

Each page in `client/src/pages/` follows this structure:

- **`<PageName>.tsx`**: Main component, using Formik for forms and TanStack Query for data fetching.
- **`<PageName>.module.scss`**: Modular styles for the page.
- **`<PageName>.test.tsx`**: Jest tests for rendering and interactions.
- **`pageData.json`**: Metadata, routing, and default content.
- **`utils/`**:
  - `types.ts`: Page-specific TypeScript types.
  - `constants.ts`: Page-specific constants (e.g., API endpoints).
  - `functions.ts`: Page-specific helpers (e.g., data formatting).

## Benefits

- **Scalability**: Supports one conference per year with `conference_id` linking data.
- **Maintainability**: Modular structure and standardized files simplify updates.
- **Testability**: Jest tests ensure reliability for components and pages.
- **Consistency**: Formik, TanStack Query, and SCSS modules provide a uniform development experience.
- **Documentation**: Docusaurus ensures clear documentation for developers and stakeholders.

This architecture ensures a robust, standardized foundation for the WORLDSymposium website, aligned with its extensive page structure and feature requirements.
