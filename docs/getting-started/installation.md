---
id: installation
title: Installation Guide
sidebar_label: Installation
---

# Installation Guide

This guide walks you through installing the **World Plan and Milestone** application on your local machine or server.

## Prerequisites

Before installation, ensure you have the following:

- **Node.js**: Version 16.14 or higher (LTS recommended). [Download here](https://nodejs.org/).
- **Git**: For cloning the repository. [Download here](https://git-scm.com/).
- **Code Editor**: Recommended: Visual Studio Code or similar.
- **Internet Connection**: Required for initial setup and dependencies.

## Installation Steps

1. **Clone the Repository**:
   Open your terminal and run:
   ```bash
   git clone https://github.com/your-username/world-app.git
   cd world-app
   ```

- **Install Dependencies:**

  Install the required Node.js packages:bash

  ```
  npm install
  ```

- **Set Up Environment Variables:**

  - Create a `.env` file in the root directory.
  - Add necessary configurations (e.g., API keys, database URLs). Example:

  ```
  PORT=3000
  DATABASE_URL=your_database_url
  ```

  - Refer to the project README for specific environment variables.

- **Start the Application:**

  Launch the app in development mode:bash

  ```
  npm run start
  ```

  - The application should be accessible at http://localhost:3000.

## Troubleshooting

- Node.js Version Issue: Run `node -v` to check your version and update if needed.
- Dependency Errors: Delete `node_modules` and `package-lock.json`, then rerun npm install.
