# Cartelux Landing Page � Rebuild Plan (PHP + Static Assets)

## Goal
Rebuild the Cartelux marketing homepage inside the existing PHP project structure, without introducing a JavaScript framework or a Node build pipeline. The project should remain easy to edit and serve from the current Laragon/PHP setup already present in this workspace.

## Stack
- PHP 8 + HTML5 + CSS3
- Plain CSS with CSS variables and responsive media queries
- Minimal vanilla JavaScript only if needed for small interactions
- No React, no Vite, no npm install step required
- No backend/API dependency for the landing page itself

## Current folder scaffolding
This workspace already reflects the intended structure:

- `index.php` � page entry point / full landing page shell
- `css/` � sitewide styles and responsive layout rules
- `js/` � small front-end enhancements or custom scripts
- `images/` � product imagery, logos, marketing assets, and placeholders
- `fonts/` � local font/icon assets used by the site
- `includes/` � reusable partials such as header, footer, and content blocks
- `includes/utils/` � existing mailer/smtp utilities if the contact CTA needs backend support
- `ajax-load/` � reserved for dynamic or partial loading if needed later

This means the rebuild should follow the repository�s actual architecture rather than replacing it with a separate React app structure.

## Source content
Pulled from the live Cartelux homepage and the existing text references used in the original plan. The only figures still missing are the two stat values that need confirmation before launch:
- `[XX]% reduction in marketing spend` � placeholder, needs real number
- `60 seconds to launch a campaign` � confirmed figure
- `[XX]% global brand compliance` � placeholder, needs real number

## Design note
This plan does not assume the exact visual design of the original site. It uses a clean B2B SaaS direction with the confirmed brand colors and a production-safe structure that can be tightened once a screenshot or original assets are available.

## Content structure

### Header
Sticky nav bar. Logo text "Cartelux" on the left, links (`Solutions`, `About`, `Investors`, `Careers`) center/right, and a "Get in touch" button on the far right that anchors to `#contact`.

### Hero
- Eyebrow tag: "Adtech for retail networks"
- H1: "There's no one-size-fits-all approach to retail marketing � but Cartelux can ensure your global brand stays locally relevant"
- Subtext: "Cartelux empowers automotive retailers to create and measure hyper-local, brand-compliant digital marketing campaigns in less than 60 seconds."
- Two CTAs: "Book a demo" (primary) and "See how it works" (outline, linking to `#solutions`)
- A 4-column pillar row with short benefit cards:
  1. "Effective marketing across your network that compounds over time"
  2. "Simplified retail marketing processes saving time and money"
  3. "Effortless scaling of digital marketing campaigns from global to hyper-local"
  4. "Powerful analytics to ensure network-performance transparency"

### Stats
- Section heading: "How brands and their network benefit from the Cartelux solution"
- 3-column stat row:
  - `[XX]%` reduction in marketing spend
  - `60` seconds to launch a campaign
  - `[XX]%` global brand compliance

### Feature blocks (reusable)
Each feature section uses the same structure and is rendered twice.

1. Tag: "Flexible by design"  
   Title: "Customisable for your business"  
   Body: "Cartelux is a unique, tailorable, automated marketing solution built for all brands, regardless of industry, retail model, tech stack, business size or location."

2. Tag: "Built for your network"  
   Title: "Empowerment for your network"  
   Body: "The Cartelux platform is a source of truth for creative, video and display assets, empowering local marketers to run automated, professional, affordable and on-brand digital campaigns in just a few clicks. In fact, it condenses a typical four-week campaign management process into just 60 seconds."

Each row includes a visual placeholder block on the opposite side to be replaced with real product screenshots later.

### Testimonials
Section heading: "Trusted by the world's leading automotive brands".

Grid of testimonial cards, each with a quote, name, and role.

| Quote | Name | Role |
|---|---|---|
| "The Cartelux platform is a true evolution in automotive retail marketing." | Alex McLean | Head of Marketing, BMW ANZ |
| "Cartelux is enabling MINI to deliver cohesive, integrated digital campaigns in a way that was previously much more laborious." | Victoria Abbass | Retail and Network Marketing Manager, Mini ANZ |
| "Cartelux is the future of performance-driven retail marketing, offering an entirely new playground of marketing alignment across tiers." | Nikolas Souliotis | Digital Marketing Manager, Kia Australia |
| "Working with Cartelux we have been able to provide a new way for Kia to create engaging video content for its dealers at scale." | Randy Han | Global Lead Automotive, Google |
| "Being able to innovate and deliver campaigns quickly will enhance our agility within a complex and highly competitive retail market." | Saruth Ingkavat | Marketing Director, Ford Thailand |
| "The pilot showcased the competitive advantage we gained by using the Cartelux software." | Elena Woods | Marketing Communications Manager, Renault Australia |

### CTA band
Closing call-to-action band: "Want to test drive the Cartelux platform?" with a "Get started" button that can link to `mailto:` or `#contact`.

### Footer
"� 2026 Cartelux. All rights reserved." with links: Press, Careers, Contact.

## Design tokens
```css
:root {
  --ink: #101828;
  --ink-soft: #4B5468;
  --line: #E6E8EC;
  --bg: #FFFFFF;
  --bg-alt: #F7F8FA;
  --accent: #EA555C;
  --footer-bg: #1F1F1E;
  --footer-ink: #FFFFFF;
  --radius: 14px;
}
```

Fonts: `Sora` for headings and `Plus Jakarta Sans` for body copy, loaded via Google Fonts in the document head.

### Styling constraints
- Keep colors in CSS variables for easy fine-tuning.
- Maintain high contrast in the dark footer block.
- Add a dedicated light section tint for alternating content blocks.
- Use border and spacing tokens consistently across sections.

## Recommended build approach
1. Create a single `index.php` page layout and keep global sections in reusable partials under `includes/`.
2. Add a shared content array or include file for testimonials, stats, and feature data so copy stays centralized.
3. Build the page sections in this order: header, hero, stats, feature blocks, testimonials, CTA, footer.
4. Use CSS variables and a simple utility class system for spacing, section wrappers, buttons, and cards.
5. Add responsive breakpoints so the layout stacks cleanly under approximately 860px.
6. Validate the page in a local PHP environment using Laragon or a PHP dev server.

## Deployment guidance
- Local development: run the site in Laragon or an equivalent PHP server pointed at the repo root.
- Shared hosting: upload the PHP files and static assets as-is; no Node build step is required.
- Cloudflare Pages: this project can still be deployed as a static site only if the final output is flattened to HTML/CSS/JS. It does not need a Vite React setup and should not be forced into one.

## Open items before launch
- [ ] Real values for the two `[XX]%` stats
- [x] Dominant accent color confirmed: `#EA555C`
- [x] Footer background color confirmed: `#1F1F1E`
- [ ] Final neutrals and logo/wordmark treatment from a screenshot or original asset
- [ ] Confirm heading/body fonts against the live site
- [ ] Real product screenshots for the feature placeholders
- [ ] Confirm whether the `Get started` CTA should be `mailto:` or a contact/demo form

## Summary
The correct rebuild path for this repo is a PHP landing page that matches the existing scaffold in `index.php`, `includes/`, `css/`, `js/`, `images/`, and `fonts/`, rather than a Vite/React application. The plan above keeps the design flexible while maintaining a clean static structure that can be implemented directly in the current project.
