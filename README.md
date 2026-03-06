# Cricket Texoma – Official Website

The official website for **Cricket Texoma (TCL)**, built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Framer Motion](https://www.framer.com/motion/).

**Live Site:** [crickettexoma.com](https://crickettexoma.com)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview locally.

---

## 📁 Project Structure

```
src/
├── app/                        # Pages (routes)
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx          # About page
│   ├── tournaments/page.tsx    # Tournaments page
│   ├── partners/page.tsx       # Partners page
│   ├── contact/page.tsx        # Contact page
│   ├── register/page.tsx       # Registration page
│   ├── privacy/page.tsx        # Privacy Policy
│   ├── terms/page.tsx          # Terms of Service
│   ├── disclaimer/page.tsx     # Disclaimer
│   ├── layout.tsx              # Global layout (fonts, metadata, SEO)
│   ├── globals.css             # Global CSS & color tokens
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── robots.ts               # Robots.txt config
│
├── components/
│   ├── layout/                 # Shared layout components
│   │   ├── Navbar.tsx          # Site navigation header
│   │   └── Footer.tsx          # Site footer
│   │
│   ├── sections/               # Homepage sections (in order)
│   │   ├── Hero.tsx            # Hero banner
│   │   ├── Programs.tsx        # Programs overview
│   │   ├── Mission.tsx         # Mission statement
│   │   ├── Values.tsx          # Core values
│   │   ├── Timeline.tsx        # Season timeline
│   │   ├── Membership.tsx      # Membership tiers
│   │   ├── AcademyPartners.tsx # Academy partners
│   │   ├── Testimonial.tsx     # Testimonials
│   │   ├── Facility.tsx        # Facility showcase
│   │   └── CTABanner.tsx       # Call-to-action banner
│   │
│   └── pages/                  # Page-specific components
│       ├── about/              # About page components
│       ├── tournaments/        # Tournament page components
│       ├── partners/           # Partners page components
│       ├── contact/            # Contact page components
│       ├── register/           # Registration form
│       └── legal/              # Legal page layout
│
public/                         # Static assets (images, logos, etc.)
├── cricket-texoma-logo-2026.png
├── hero-cricket.png
└── tournaments/                # Tournament card images
```

---

## ✏️ How to Update Content

### Updating Text Content

All text content lives directly in the component `.tsx` files. Here's where to find each section:

| What to Update | File Location |
|---|---|
| **Homepage hero text** | `src/components/sections/Hero.tsx` |
| **Mission statement** | `src/components/sections/Mission.tsx` |
| **Programs** | `src/components/sections/Programs.tsx` |
| **Membership tiers** | `src/components/sections/Membership.tsx` |
| **Testimonials** | `src/components/sections/Testimonial.tsx` |
| **Tournament names & descriptions** | `src/components/pages/tournaments/TournamentPortfolio.tsx` |
| **Tournament schedule/table** | `src/components/pages/tournaments/TournamentTable.tsx` |
| **Partner pricing tiers** | `src/components/pages/partners/Pricing.tsx` |
| **Contact info (phone, email, address)** | `src/components/pages/contact/ContactCore.tsx` |
| **Contact page hero** | `src/components/pages/contact/Hero.tsx` |
| **Privacy Policy** | `src/components/pages/legal/PrivacyPolicy.tsx` |
| **Terms of Service** | `src/components/pages/legal/TermsOfService.tsx` |
| **Disclaimer** | `src/components/pages/legal/Disclaimer.tsx` |
| **Footer links & contact** | `src/components/layout/Footer.tsx` |
| **Nav links** | `src/components/layout/Navbar.tsx` |
| **Site title & SEO metadata** | `src/app/layout.tsx` |

### Updating Images

1. Place new images in the `/public/` folder (or a subfolder like `/public/tournaments/`).
2. Reference them in components as `/your-image.png` (no `public/` prefix needed).
3. Tournament card images are in `/public/tournaments/`.

### Updating Colors

The color palette is defined in two places:

- **`tailwind.config.ts`** — Tailwind color tokens (`tcl-navy`, `tcl-crimson`, etc.)
- **`src/app/globals.css`** — CSS custom properties and utility classes

| Color | Token | Hex |
|---|---|---|
| Navy (primary) | `tcl-navy` | `#0B2C4D` |
| Crimson (accent) | `tcl-crimson` | `#C8102E` |
| Off-white (backgrounds) | `tcl-off-white` | `#F8F8F6` |
| Light gray (borders) | `tcl-light-gray` | `#E5E5E5` |

### Updating Fonts

Fonts are loaded in `src/app/layout.tsx`. The site uses:
- **Barlow Condensed** — Headings and navigation
- **Source Sans 3** — Body text

---

## 🔄 How to Deploy

### Automatic Deployment (Recommended)

The site is connected to **Vercel**. Any push to the `main` branch will automatically trigger a new deployment.

```bash
# Stage, commit, and push your changes
git add .
git commit -m "your change description"
git push origin main
```

The site will be live within ~60 seconds of pushing.

### Manual Build (Testing)

```bash
# Build for production locally
npm run build

# Check for lint errors
npm run lint
```

---

## ⚠️ Important Notes

### Editing Text in JSX

When editing text content in `.tsx` files, remember:
- **Apostrophes** must be written as `&apos;` (not `'`)
- **Quotation marks** must be written as `&ldquo;` and `&rdquo;` (not `"`)
- **Em dashes** must be written as `&mdash;` (not `—`)

Example:
```tsx
// ❌ Wrong
<p>We're the best. "Cricket" is life.</p>

// ✅ Correct
<p>We&apos;re the best. &ldquo;Cricket&rdquo; is life.</p>
```

### Adding New Pages

1. Create a new folder in `src/app/` with a `page.tsx` file.
2. The folder name becomes the URL route (e.g., `src/app/news/page.tsx` → `/news`).
3. Update the `navLinks` array in `Navbar.tsx` to add navigation.
4. Update `src/app/sitemap.ts` to include the new page.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | React framework & routing |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [Phosphor Icons](https://phosphoricons.com) | Icon library |
| [Vercel](https://vercel.com) | Hosting & deployment |

---

## 📞 Support

For technical issues, contact [Engaze Digital](https://engazedigital.com).
