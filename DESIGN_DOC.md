# Design Document: Nuviya Landing Page (Project Event Horizon)

**Version:** 1.2
**Status:** High-Fidelity / Production Ready
**Theme:** Cosmic Glass / Agentic Minimalism

## 1. Design Philosophy
The Nuviya interface is not a static web page; it is a simulation of a high-performance operating system floating in a deep void.
*   **Depth over Flatness:** Elements layer on top of each other using Z-axis manipulation, glassmorphism, and lighting effects.
*   **Motion as Meaning:** Things don't just move; they flow. Data travels along lines. Agents pulse when thinking. Motion indicates system activity, not decoration.
*   **The "Void":** We do not use solid black (`#000000`). We use "Obsidian" (`#030105`) to prevent OLED smearing while maintaining infinite depth.
*   **Signal vs. Noise:** High contrast is reserved for *active* elements (cursors, active agents, primary buttons). Passive elements recede into the glass.

---

## 2. Design Tokens & System

### 2.1 Color Palette
Strict adherence to these hex codes is required to maintain the "Ultraviolet" atmosphere.

| Token Name | Hex Value | Usage |
| :--- | :--- | :--- |
| **Void (Bg)** | `#030105` | Main body background. |
| **Obsidian** | `#0a0510` | Card backgrounds (opaque fallback). |
| **Deep Violet** | `#1A0B2E` | Active agent nodes, deep accents. |
| **Nuviya Primary** | `#7B2CBF` | Primary buttons, glows, borders, active states. |
| **Electric Accent** | `#9D4EDD` | Highlights, icons, beam effects, cursors. |
| **Text Muted** | `#A1A1AA` | Body copy, secondary labels (Zinc-400). |
| **Text Sub** | `#52525B` | Footers, placeholders (Zinc-600). |
| **White Low** | `rgba(255,255,255,0.05)` | Glass borders, grid lines. |
| **White Med** | `rgba(255,255,255,0.1)` | Secondary button backgrounds. |

### 2.2 Typography
*   **Font Family:** `Inter` (Body) and `Inter Tight` (Display/Headings).
*   **Headings:** Thin weights (300/400), tighter tracking (`-0.02em` to `-0.04em`). Large scale (`text-5xl` to `text-8xl`).
*   **Body:** Regular weight (400), relaxed leading.
*   **UI/Labels:** Medium weight (500), small size (`text-xs`), uppercase, wide tracking (`tracking-wider`).

### 2.3 Global Textures & Effects
*   **Noise Overlay:** A fixed SVG turbulence filter at `0.02` opacity overlaying the entire viewport to add film grain and reduce color banding.
*   **Cosmic Background:** A fixed layer containing three subtle radial gradients shifting in the deep violet spectrum to create a non-uniform black void.
*   **Glassmorphism (The "Nuviya Glass"):**
    *   Background: `bg-white/5`
    *   Backdrop Blur: `backdrop-blur-xl`
    *   Border: `border-white/10`
    *   Shadow: `shadow-xl`
    *   *Note:* Glass cards often contain an inner gradient overlay (`from-white/5 to-transparent`) for sheen.

---

## 3. Component Architecture

### 3.1 The GlassCard (`GlassCard.tsx`)
The fundamental building block.
*   **Behavior:** Must accept `children` and a `className`.
*   **Hover Effect:** Optional boolean. If true, scales to `1.02` and lightens background to `white/8`.
*   **Z-Indexing:** Always wraps children in a relative `z-10` div to ensure content sits above the glass background layer.

### 3.2 Buttons (`Button.tsx`)
*   **Primary:** Solid `#7B2CBF` with an internal distinct sheen animation (`group-hover:translate-x-full`) and a colored shadow glow.
*   **Ghost/Secondary:** Transparent or low-opacity white. Borders are `white/20`.
*   **Shape:** Always `rounded-full`.

### 3.3 The Bento Grid (`BentoGrid.tsx`)
A grid of "Mini-Apps," not static images. Each card must functionally demonstrate a feature.
*   **Calendar Card:** Uses a CSS grid to simulate a weekly view. Events are absolute positioned divs.
*   **Synthesizer:** Uses a visual "funnel" metaphor (Blurry blocks -> Arrow -> Sharp summary).
*   **Delegator:** Uses SVG paths to connect "Task" nodes (left) to an "Agent" node (right). Animated particles (`motion.circle`) travel the paths.
*   **Connected:** A "Hub and Spoke" layout. Nuviya Logo (Center) connected to App Icons (Orbit). **Crucial:** Uses a `100x100` SVG coordinate system for perfect alignment of lines and HTML elements.

---

## 4. Animation Guidelines (Motion Physics)

We use `framer-motion` exclusively.

### 4.1 "Data Flow" (SVG Paths)
Used in *Delegator* and *Connected* cards.
*   **Concept:** White or Purple dots traveling along thin bezier curves.
*   **Implementation:** `<animateMotion>` inside an SVG.
*   **Timing:** Linear easing, infinite loop, duration 3s-6s.
*   **Aesthetic:** The lines are faint (`opacity-20`), the dots are bright.

### 4.2 Scroll Transformations (`TransformationSection.tsx`)
*   **Trigger:** Sticky scroll container (`h-[250vh]`).
*   **Transition:** "Chaos" (Random scattered elements) fades out as "Order" (Aligned grid) fades in.
*   **The Scan Line:** A horizontal purple laser (`shadow-[0_0_50px_#9D4EDD]`) scans top-to-bottom to trigger the state change.

### 4.3 Hover States
*   **Cards:** Gentle lift (`y: -5px`) and scale (`1.02`).
*   **Interactivity:** Elements inside cards (like the calendar event or integration stack) should react to the card's hover state via the `group` utility class.

---

## 5. Technical Constraints & Patterns

### 5.1 SVG Coordinate Systems
When drawing connections between HTML elements (like in the Bento Grid):
*   **Do not** rely on pixels.
*   **Use Percentages:** Place HTML elements using `%` (e.g., `left-[80%]`).
*   **Use SVG viewBox:** Set `viewBox="0 0 100 100"`.
*   **Mapping:** An HTML element at `left: 80%`, `top: 30%` must connect to an SVG path coordinate `80,30`.

### 5.2 Tailwind Configuration
The following custom config is assumed present in the environment:
```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Inter Tight', 'sans-serif'],
    },
    colors: {
      nuviya: { ... } // See Color Palette
    },
    animation: {
      'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    }
  }
}
```

### 5.3 Iconography
*   **Library:** `lucide-react`
*   **Style:** Stroke width `1.5px` or `2px`.
*   **Coloring:** Usually `#9D4EDD` (Accent) when active, or `white/40` when passive.

---

## 6. Future Implementation Notes

If adding new sections or components, follow these rules:
1.  **Darkness Check:** Does the component look good on `#030105`? If it requires a white background, it is rejected.
2.  **Glow Strategy:** Use `box-shadow` and `drop-shadow` sparingly. Too much glow looks cheap. Reserve glows for *active* states (e.g., "Agent Thinking").
3.  **Border Subtlety:** Borders should almost always be `white/10` or `white/5`. Only active borders get color.
4.  **No Bitmaps:** Avoid raster images (PNG/JPG) unless absolutely necessary. Use CSS shapes, SVGs, and DOM elements to construct visuals (like the Mock Emails or Calendars). This ensures sharpness on all displays.
