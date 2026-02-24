# Kingsley Chibueze — Portfolio

Minimalist portfolio site. Built with vanilla HTML, Tailwind CSS (CDN), and JavaScript.

## Structure

```
portfolio/
├── index.html              # Entry point
├── vercel.json             # Vercel config
├── css/
│   ├── reset.css           # Base resets
│   ├── tokens.css          # Design tokens / CSS variables
│   ├── layout.css          # Nav, sections, grid
│   ├── components.css      # Reusable components (cards, tags, buttons)
│   ├── animations.css      # All keyframes and transitions
│   └── responsive.css      # Mobile breakpoints
├── js/
│   ├── main.js             # Init + orchestration
│   ├── terminal.js         # Typewriter terminal animation
│   ├── scroll.js           # Intersection observer / fade-ins
│   └── nav.js              # Nav scroll behaviour
├── assets/
│   ├── docs/
│   │   └── resume.pdf      # Your resume
│   └── images/             # OG image, favicon etc.
└── sections/               # HTML partials (for reference/editing)
    ├── hero.html
    ├── work.html
    ├── skills.html
    ├── experience.html
    └── contact.html
```

## Deploy to Vercel

1. Push this folder to GitHub
2. Import repo on vercel.com
3. No build step needed — it's static HTML
4. Vercel will serve `index.html` automatically

## Customise

- **Tokens**: Edit `css/tokens.css` to change colors, fonts, spacing
- **Content**: Edit `index.html` sections directly
- **Animation timing**: Edit `js/terminal.js`
