# Shahzad Ali - Portfolio Website

A modern, animated portfolio website built with **Vite + React + TypeScript**.

## 🚀 Quick Start (Frontend Only)

To run this portfolio as a standard React development environment:

### Option 1: Using the frontend script
```bash
node dev-frontend.js
```

### Option 2: Direct Vite command
```bash
npx vite --host 0.0.0.0 --port 5173
```

### Option 3: Using frontend package.json
```bash
cp package-frontend.json package.json
npm install
npm run dev
```

## ✨ Features

- **Modern React 18** with TypeScript
- **Vite** for fast development and building
- **Three.js** animated particle background
- **GSAP** scroll-triggered animations
- **Tailwind CSS** with custom styling
- **Dark/Light theme** toggle
- **Responsive design** for all devices
- **3D project cards** with flip animations
- **Animated skill bars** and progress indicators
- **Contact form** with validation
- **SEO optimized** with meta tags

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS3 animations
- **Animations**: GSAP, Three.js, Framer Motion
- **UI Components**: Radix UI, shadcn/ui
- **Forms**: React Hook Form with Zod validation
- **Routing**: Wouter (lightweight React router)
- **Icons**: Lucide React, React Icons

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and animations
│   │   ├── hooks/          # Custom React hooks
│   │   └── assets/         # Images and static files
│   └── index.html          # HTML template
├── public/                 # Static assets
└── vite.config.ts         # Vite configuration
```

## 🎨 Customization

- **Colors**: Modify `client/src/index.css` for theme colors
- **Content**: Update component files in `client/src/components/`
- **Animations**: Customize GSAP animations in `client/src/lib/gsap-animations.ts`
- **3D Effects**: Modify Three.js settings in `client/src/lib/three-animations.ts`

## 📦 Build for Production

```bash
npx vite build
```

The built files will be in `dist/public/` directory.

## 🚀 Deploy

Deploy the `dist/public/` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

---

Built with ❤️ using modern web technologies.