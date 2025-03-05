# Portfolio Builder Website - Frontend Setup

## Step 1: Create a Vite React Project

Run the following command to set up a new Vite project:

```sh
npm create vite@latest .
cd frontend
npm install
```

## Step 2: Install Tailwind CSS

Run the following command to install Tailwind CSS and its Vite plugin:

```sh
npm install tailwindcss @tailwindcss/vite
```

## Step 3: Configure the Vite Plugin

Edit your `vite.config.ts` file and add the Tailwind CSS plugin:

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

## Step 4: Import Tailwind CSS

Add the following `@import` statement to your main CSS file (e.g., `index.css` or `globals.css`):

```css
@import "tailwindcss";
```

## Step 5: Configure Path Aliases

To enable absolute imports, create a `jsconfig.json` file in the root of your project and add the following:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Step 6: Update Vite Configuration

Modify your `vite.config.ts` file to resolve path aliases:

```ts
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Also, install `@types/node` to avoid any potential errors:

```sh
npm install -D @types/node
```

## Step 7: Set Up ShadCN

Run the following command to initialize ShadCN in your project:

```sh
npx shadcn@latest init
```

Follow the prompts to configure your ShadCN setup.

---

Your frontend setup for the **Portfolio Builder Website** is now complete! 🎉 You can start building your project with customizable themes, export features, and more.

