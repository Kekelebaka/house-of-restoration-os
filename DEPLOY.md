# House of Restoration OS - Deployment Guide

## Quick Deploy to Cloudflare Pages

### Method 1: Direct GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   cd /Users/keke/House\ of\ Restoration\ OS
   git init
   git add .
   git commit -m "Initial commit - House of Restoration OS"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/house-of-restoration-os.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Workers & Pages → Create application → Pages
   - Connect your GitHub account
   - Select your repository: `house-of-restoration-os`
   - Project name: `House of Restoration OS`
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: (leave empty)
   - Click **Save and Deploy**

3. **Access Your Site**
   - Your site will deploy to: `https://house-of-restoration-os.pages.dev`
   - Custom domain: Add `yourdomain.com` in Cloudflare Pages settings

---

### Method 2: Manual Deployment with Wrangler

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build the Project**
   ```bash
   npm run build
   ```

4. **Deploy with Wrangler**
   ```bash
   npx wrangler pages deploy dist --project-name house-of-restoration-os
   ```

---

### Method 3: Cloudflare Pages CLI

1. **Install Pages CLI**
   ```bash
   npm install -g @cloudflare/pages-cli
   ```

2. **Deploy**
   ```bash
   pages deploy --project-name house-of-restoration-os
   ```

---

## Project Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## Environment Variables

For production, create a `.env.production` file:

```
VITE_API_BASE_URL=https://your-api-url.com/api
```

For development, create a `.env.development` file:

```
VITE_API_BASE_URL=http://localhost:3001/api
```

---

## Current Build Status

✅ **Build successful** - Run `npm run build` to verify
✅ **Vite configured** - Optimized for Cloudflare Pages
✅ **CSS fixed** - Comments converted to valid syntax

---

## After Deployment

1. Visit your deployed URL
2. You should see:
   - Homepage with hero, pillars, services
   - Client portal at `/client`
   - Admin dashboard at `/admin`
   - WhatsApp intake form at `/book`

---

## Troubleshooting

### Build fails with CSS error
- Make sure all comments in CSS files use `/* */` not `//`

### 404 on refresh
- Ensure `vite.config.ts` has `base: '/'` for root deployment

### Blank page
- Check browser console for errors
- Verify `dist/index.html` exists after build

---

## Project Structure

```
house-of-restoration-os/
├── src/
│   ├── components/
│   │   ├── whatsapp/           # WhatsApp Concierge components
│   │   └── ui/                # UI components (Button, Card, etc.)
│   ├── pages/
│   │   ├── client/            # Module 03: Client Portal
│   │   ├── admin/             # Module 09: Admin Dashboard
│   │   └── public/            # Module 01: Public Website
│   ├── services/              # API services (Module 02, etc.)
│   ├── store/                # Zustand state management
│   ├── hooks/                # Custom React hooks
│   └── styles/               # Design system & global styles
├── dist/                    # Production build (created by npm run build)
└── DEPLOY.md                # This file
```

---

## Need Help?

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Vite Docs: https://vitejs.dev/
- React Docs: https://react.dev/

---

**Next Steps:**
1. Deploy to Cloudflare Pages
2. Share the deployed URL
3. Continue building remaining modules (Wisdom Library, Retreats, Corporate, etc.)
