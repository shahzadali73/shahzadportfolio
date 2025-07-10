# 🚀 Local Development Setup

## Quick Fix for Your Error

The error you're getting is because the vite.config.ts contains Replit-specific plugins. Here's how to fix it:

### Option 1: Use the Local Config (Recommended)

1. **Replace your package.json:**
```bash
cp package-frontend.json package.json
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

### Option 2: Quick Command Fix

If you want to keep your current setup, just run:
```bash
npx vite --config vite.config.local.ts --host 0.0.0.0 --port 5173
```

### Option 3: Manual vite.config.ts Fix

Replace your `vite.config.ts` content with:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "client", "src", "assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    fs: {
      strict: false,
    },
  },
});
```

## 📁 File Structure

Make sure your project structure looks like this:
```
PersonalPortfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/
│   │   ├── hooks/
│   │   ├── assets/
│   │   │   └── shahzad-profile.jpg
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── public/
│   └── shahzad-ali-cv.pdf
├── vite.config.local.ts
├── package-frontend.json
└── tsconfig.json
```

## ✅ After Setup

Once you run `npm run dev`, you should see:
- ✅ Vite development server on http://localhost:5173
- ✅ Portfolio loads with animations
- ✅ Hot module replacement working
- ✅ All components rendering properly

## 🔧 Troubleshooting

**Issue: Module not found errors**
- Make sure you used `package-frontend.json` as your `package.json`
- Run `npm install` again

**Issue: Assets not loading**
- Check that `shahzad-profile.jpg` is in `client/src/assets/`
- Check that `shahzad-ali-cv.pdf` is in `public/`

**Issue: Animations not working**
- External scripts (GSAP, Three.js) are loaded via CDN in `client/index.html`
- Make sure you have internet connection for external dependencies

## 🎯 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

That's it! Your portfolio should now run perfectly with `npm run dev`! 🎉