# CLAUDE.md — Nuviya Website Cheatsheet

## Quick Context

- **What**: Nuviya Mail landing page — agentic email client marketing site
- **Stack**: Vite + React Router (NOT Next.js), Tailwind via CDN
- **Config**: Tailwind config lives in `index.html`, not a separate file
- **Routes**: `/mail` is the product page, `/` is placeholder homepage

---

## Critical Constraints

**Never use:**
- `#000000` — use `#030105` for OLED-safe void black
- Raster images (PNG/JPG) — use CSS shapes, SVGs, DOM elements
- Excessive glows — reserve for active states only
- Solid borders — use `white/10` or `white/5`, color only when active

**Always use:**
- `framer-motion` for all animations
- `lucide-react` for icons (stroke width 1.5-2px)
- Glass pattern for cards: `bg-white/5 backdrop-blur-xl border-white/10`

---

## Design Tokens — Copy-Paste Ready

### Colors
```
Void (bg):      #030105    →  bg-[#030105]
Obsidian:       #0a0510    →  bg-[#0a0510]
Primary:        #7B2CBF    →  bg-[#7B2CBF] text-[#7B2CBF] border-[#7B2CBF]
Accent:         #9D4EDD    →  text-[#9D4EDD] border-[#9D4EDD]
Text:           #A1A1AA    →  text-[#A1A1AA]
Text Sub:       #52525B    →  text-[#52525B]
```

### Glass & Borders
```
Glass card:     bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
Glass hover:    bg-white/8
Active border:  border-[#7B2CBF] or border-[#9D4EDD]
Passive border: border-white/10 or border-white/5
```

### Typography
```
Display:   font-display font-light tracking-tight
Body:      font-sans text-[#A1A1AA]
Labels:    text-xs uppercase tracking-wider font-medium
Headings:  font-light (300/400), text-5xl to text-8xl
```

### Buttons
```
Primary:     bg-[#7B2CBF] rounded-full shadow-[0_0_20px_rgba(123,44,191,0.5)]
Secondary:   bg-white/10 border-white/20 rounded-full
Ghost:       bg-transparent border-white/20
```

### Glows (use sparingly)
```
Primary glow:   shadow-[0_0_20px_rgba(123,44,191,0.5)]
Accent glow:    shadow-[0_0_50px_#9D4EDD]
Subtle glow:    shadow-[0_0_20px_rgba(123,44,191,0.15)]
```

---

## Animation Timing

| Type | Duration | Easing |
|------|----------|--------|
| Quick interactions | 0.2–0.3s | ease-out |
| Smooth transitions | 0.4–0.8s | ease-in-out |
| Ambient/continuous | 3–7s | linear |
| Data flow particles | 3–6s | linear, infinite |

### Entry Animation Pattern
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Hover Lift Pattern
```tsx
whileHover={{ scale: 1.02, y: -5 }}
transition={{ duration: 0.3 }}
```

---

## SVG Coordinate Gotcha

When connecting HTML elements with SVG paths:

1. Set SVG: `viewBox="0 0 100 100"` with `preserveAspectRatio="none"`
2. Position HTML with percentages: `left-[80%] top-[30%]`
3. Draw SVG path to `80,30` — coordinates map 1:1

See `BentoGrid.tsx` "Connected" card for reference implementation.

---

## File Reference

```
components/ui/GlassCard.tsx   — base glass container
components/ui/Button.tsx      — button variants
components/BentoGrid.tsx      — complex animations, SVG connections
components/Hero.tsx           — main hero section
index.html                    — Tailwind config, global CSS, fonts
constants.tsx                 — COLORS object, CONTENT strings
DESIGN_DOC.md                 — full design philosophy (verbose)
App.tsx                       — React Router setup
pages/MailPage.tsx            — main product page
```

---

## What NOT to Do

- Don't create `tailwind.config.js` — config is in `index.html`
- Don't use Next.js patterns (`app/`, server components, `use server`)
- Don't add bitmap images — build with CSS/SVG/DOM
- Don't duplicate prose from `DESIGN_DOC.md` — this file is for tokens
- Don't use `#000000` — always use `#030105`
