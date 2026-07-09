# 🍔 Food Dev — Food Delivery App

A modern, responsive food delivery web application built with **React** and **Vite**. Browse a variety of food items by category, add them to your cart, and place orders seamlessly.

## ✨ Features

- 🍕 **Browse Menu** — Explore food items organized by categories (Salad, Rolls, Desserts, Sandwiches, Cake, Pure Veg, Pasta, Noodles)
- 🔍 **Search & Filter** — Search for dishes and filter by category
- 🛒 **Shopping Cart** — Add / remove items with real-time quantity controls
- 📱 **Mobile Responsive** — Fully responsive design that works on all devices
- 🔐 **Login Popup** — User authentication modal
- 📋 **Order Placement** — Streamlined checkout process with delivery details
- 📲 **App Download Promo** — Promotional section for mobile app downloads

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI framework |
| [Vite 8](https://vitejs.dev/) | Build tool & dev server |
| [React Router 7](https://reactrouter.com/) | Client-side routing |
| [ESLint](https://eslint.org/) | Code linting |
| CSS | Styling (component-level stylesheets) |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/AshrithAppari/food_dev.git

# Navigate to the project directory
cd food_dev/frontend

# Install dependencies
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Build the app for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
frontend/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images and icon assets
│   ├── components/
│   │   ├── AppDownload/     # App download promotional section
│   │   ├── ExploreMenu/     # Category filter menu
│   │   ├── FoodDisplay/     # Food items grid display
│   │   ├── FoodItem/        # Individual food item card
│   │   ├── Footer/          # Site footer with contact info
│   │   ├── Header/          # Hero banner section
│   │   ├── LoginPopup/      # Login/signup modal
│   │   └── Navbar/          # Top navigation bar
│   ├── context/
│   │   └── StoreContext.jsx # Global state management
│   ├── pages/
│   │   ├── Cart/            # Shopping cart page
│   │   ├── Home/            # Home page
│   │   └── PlaceOrder/      # Order checkout page
│   ├── App.jsx              # Root app component
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
└── vite.config.js           # Vite configuration
```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📞 Contact

- **Phone:** 9490479199
- **Email:** ashrithsri12@gmail.com

---

Built with ❤️ using React & Vite.
