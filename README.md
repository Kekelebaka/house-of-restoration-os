# House of Restoration OS

> Digital Operating System for Nkgono Mamoya - House of Restoration
> Ladybrand, Free State, South Africa

---

## Current Status: 40% Complete

**3 of 9 modules fully implemented**

| Module | Status | Components |
|--------|--------|------------|
| MODULE 01 - Public Website | Complete | 10 pages |
| MODULE 02 - WhatsApp Concierge | Complete | Intake form + Admin panel |
| MODULE 03 - Client Portal | Complete | Dashboard + 4 tabs |
| MODULE 04 - Wisdom Library | Pending | |
| MODULE 05 - Retreat System | Pending | |
| MODULE 06 - Corporate Wellness | Pending | |
| MODULE 07 - Content Engine | Pending | |
| MODULE 08 - KPI Dashboard | Pending | |
| MODULE 09 - Admin Dashboard | Pending | |

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
npm run preview    # Preview production
```

---

## Deploy to Cloudflare Pages

**Easiest method:**

1. Push to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) 
3. Workers & Pages → Create → Pages → Connect GitHub
4. Select repo, set:
   - Build: `npm run build`
   - Output: `dist`
5. Deploy!

**Full guide:** [DEPLOY.md](./DEPLOY.md)

---

## What's Working Now

### Public Website (`/`) 
- Hero with headline, subtitle, CTA
- Founder section
- Four Pillars (Healing Hands, River Renewal, Lion Strength, Wisdom Guidance)
- Services
- Testimonials
- Call to Action

### WhatsApp Concierge
- Client: 3-step intake form with voice note upload
- Admin: Review dashboard with AI summary, approve/reject, booking creation

### Client Portal (`/client`)
- Dashboard with stats
- Appointments (upcoming/past)
- Resources (Wisdom Library)
- Voice Notes upload
- Restoration journey

---

## Brand System

**Colors:** River Midnight `#0F1E33`, Lion Gold `#C79A3B`, Healing Green `#2F7D63`, Stone Ivory `#F5F1E8`

**Fonts:** Playfair Display (headings), Inter (body)

**Symbols:** Lion, River, Healing Hands, Restoration Circle

---

## Tech Stack

React 19 + TypeScript + Vite + Zustand + TanStack Query + Framer Motion + Axios

---

## After Deployment

Visit your Cloudflare Pages URL to see:
- Complete homepage
- Client intake form at `/book`
- Client portal at `/client`
- Admin dashboard at `/admin`

---

**Next:** Deploy, test, then continue with Wisdom Library (Module 04)
