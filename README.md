# Ice Cream Kiosk

**Student Name:** Inon Guetta
**Course:** Kodkod FullStack
**Submission Date:** August 31, 2025

---

## Project Description

A minimal **React + TypeScript + Vite** frontend project, serving as the foundation for an interactive "Ice Cream Kiosk".
The app simulates an ice-cream stand where users can browse flavors, add/remove scoops, and view their order summary in real-time.

---

## Features

* 🍦 Browse a list of ice-cream flavors with images
* ➕ Add/remove scoops dynamically per flavor
* 📊 Order summary with real-time scoop count
* 🚫 "Sold Out" indicator for unavailable flavors

---

## Prerequisites

* Node.js v14 or higher
* npm or yarn

---

## Installation & Running the Project

```bash
# Clone the repository
git clone https://github.com/InonGuetta/ice_cream_kiosk.git

# Navigate into the project folder
cd ice_cream_kiosk

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open your browser at:
👉 [http://localhost:5173/](http://localhost:5173/)

---

## Project Structure

```
ice_cream_kiosk
│   .gitignore
│   eslint.config.js
│   index.html
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.app.json
│   tsconfig.json
│   tsconfig.node.json
│   vite.config.ts
│
├───public
│
└───src
    │   App.css
    │   App.tsx
    │   main.tsx
    │   vite-env.d.ts
    │
    ├───components
    │       Cart.tsx
    │       Header.tsx
    │       IceCreamCard.tsx
    │
    └───style
            cart.css
            header.css
            ice_cream_card.css
```

---

## Usage

1. Open the kiosk in your browser (`npm run dev`).
2. Select scoops for any ice-cream flavor.
3. Remove scoops if needed.
4. View the order summary in real-time.
5. Notice when a flavor is marked as "Sold Out" 

---

## Future Improvements

* 🔗 Connect to a backend for real inventory & orders
* 🎨 Improve responsive design for mobile screens
* 🌐 Add multi-language support
* 🧪 Write unit & integration tests

---

## Notes

This setup is ready for further development: adding components, state management, styling, or API integration.
ESLint is pre-configured to ensure consistent coding style and code quality.

## deploy

The project has been deployed and is now available at 
https://icecreamproj.netlify.app/
