# CCTV & Security Camera Solutions — Website Portfolio Demonstration

A premium, modern, responsive website demonstrating CCTV installation and surveillance solutions built for **TSCG Technologies**.

> **Note:** This website is a frontend portfolio demonstration project. It is designed to demonstrate professional surveillance architecture, camera selection, installation workflows, and privacy-conscious security practices. It contains dummy demonstration contact details and does not store or transmit user information.

---

## 1. Project Overview & Website Identity

- **Identity:** CCTV & SECURITY CAMERA SOLUTIONS
- **Business Category:** CCTV Installation, Security Camera Systems, Surveillance Solutions, Maintenance & Upgrades.
- **Pages:** Exactly 6 comprehensive static pages:
  1. `index.html` — Home (Cinematic Hero, Highlights, Solutions, Who We Serve, 6-Step System Architecture, Featured Projects, CTA)
  2. `about.html` — About (Planning Approach, Hardware Spectrum, Illustrative Team Profiles, Privacy-Conscious Practices)
  3. `solutions.html` — CCTV Solutions (HD, IP, Wireless, Dome, Bullet, PTZ, Night Vision, DVR/NVR, Interactive Comparison Matrix)
  4. `services.html` — Installation Services (Residential, Commercial, IP, DVR/NVR, Remote Viewing, Troubleshooting, Upgrades, AMC, 6-Step Process Timeline)
  5. `projects.html` — Projects Gallery (8 Filterable Illustrative Showcases, Category Filter Tabs, Project Detail Modal, Image Lightbox)
  6. `contact.html` — Contact / Site Survey (Dummy Contact Information, Interactive Site Survey Form with Dynamic Validation, FAQ Accordion)

---

## 2. Technology Stack & Strict Compliance

Strictly engineered with **zero external frameworks or dependencies**:
- **HTML5:** Semantic, accessible markup with Open Graph metadata and ARIA attributes.
- **CSS3:** Custom stylesheet (`assets/css/style.css`) incorporating the brand palette, CSS grid, flexbox, HUD graphics, custom range sliders, modal styles, and `prefers-reduced-motion` compliance.
- **Vanilla JavaScript:** Custom interaction engine (`assets/js/main.js`) handling sticky navigation, mobile drawer, project category filtering, project detail modals, image lightbox, FAQ accordion, range counter, and form validation simulation.
- **Pure Vector Placeholders:** 28 SVG placeholders with technical reticles, circuit motifs, and aspect ratio stability.

**Strictly Prohibited & Excluded:**
- ❌ No React, Next.js, Angular, Vue
- ❌ No Bootstrap, Tailwind CSS
- ❌ No jQuery, GSAP, Three.js
- ❌ No WordPress, PHP, MySQL, Node.js backend
- ❌ No build tools (npm, webpack, vite)

---

## 3. Directory Structure

```text
cctv-installation/
├── index.html
├── about.html
├── solutions.html
├── services.html
├── projects.html
├── contact.html
├── images/
│   ├── cctv-bullet-camera.jpg
│   ├── cctv-camera-maintenance.jpg
│   ├── cctv-camera-monitoring-system.jpg
│   ├── cctv-commercial-installation.jpg
│   ├── cctv-dome-camera.jpg
│   ├── cctv-dvr-recorder.jpg
│   ├── cctv-hero-security-camera.jpg
│   ├── cctv-ip-camera.jpg
│   ├── cctv-night-vision-camera.jpg
│   ├── cctv-nvr-recorder.jpg
│   ├── cctv-project-warehouse.jpg
│   ├── cctv-ptz-camera.jpg
│   ├── cctv-residential-installation.jpg
│   └── cctv-technician-installation.jpg
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   └── placeholders/
│   │       ├── cctv-hero-security-camera.svg
│   │       ├── cctv-residential-installation.svg
│   │       ├── cctv-commercial-installation.svg
│   │       ├── cctv-technician-installation.svg
│   │       ├── cctv-ip-camera.svg
│   │       ├── cctv-hd-camera.svg
│   │       ├── cctv-wireless-camera.svg
│   │       ├── cctv-dome-camera.svg
│   │       ├── cctv-bullet-camera.svg
│   │       ├── cctv-ptz-camera.svg
│   │       ├── cctv-night-vision-camera.svg
│   │       ├── cctv-dvr-recorder.svg
│   │       ├── cctv-nvr-recorder.svg
│   │       ├── cctv-camera-monitoring-system.svg
│   │       ├── cctv-remote-viewing.svg
│   │       ├── cctv-camera-maintenance.svg
│   │       ├── cctv-camera-upgrade.svg
│   │       ├── cctv-installation-team.svg
│   │       ├── cctv-project-residential.svg
│   │       ├── cctv-project-apartment.svg
│   │       ├── cctv-project-retail.svg
│   │       ├── cctv-project-office.svg
│   │       ├── cctv-project-warehouse.svg
│   │       ├── cctv-project-ip-camera.svg
│   │       ├── cctv-project-recorder.svg
│   │       ├── cctv-project-outdoor.svg
│   │       ├── cctv-about-mission.svg
│   │       └── cctv-privacy-surveillance.svg
│   └── icons/
├── IMAGE-GENERATION-GUIDE.md
└── README.md
```

---

## 4. Visual Identity & Color Palette

| Color Role | Hex Code | Purpose |
|:---|:---|:---|
| **Midnight Navy** | `#080F1D` | Primary deep canvas background |
| **Deep Charcoal** | `#111B2A` | Cards, elevated surfaces, alternating sections |
| **Secondary Navy** | `#17263A` | Structural borders, dividers, HUD circuit accents |
| **Electric Blue** | `#3478F6` | Primary action buttons, brand focus accents |
| **Cyan Tech** | `#28C7E8` | HUD reticles, live indicator dots, glow effects |
| **Soft Grey** | `#E9EEF5` | Body typography, high readability contrast |
| **White** | `#FFFFFF` | High-impact headings and highlights |
| **Accent Amber** | `#F5A623` | Demonstration indicators, caution tags, notes |

---

## 5. Local Preview Instructions

Because this website is built with vanilla HTML, CSS, and JavaScript, no build process or package installation is required.

### Method 1: Direct Browser Launch
1. Navigate to the project directory: `p:\TSCG\2027 Demo Websites\CCTV Installation`.
2. Double-click `index.html` to open it in Chrome, Edge, Firefox, or Safari.

### Method 2: Local HTTP Server (Recommended)
Using Python:
```bash
# In the project root directory:
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 6. Hostinger Static Hosting Deployment

The website is 100% compatible with Hostinger Static Web Hosting, Hostinger Business Web Hosting, and Cloudflare Pages.

### Step-by-Step Deployment to Hostinger:
1. Log in to your **Hostinger hPanel**.
2. Navigate to **Websites** → Select your domain → Open **File Manager** (or connect via SFTP).
3. Access the root web directory: `public_html/`.
4. Upload all files and folders directly into `public_html/`:
   - `index.html`
   - `about.html`
   - `solutions.html`
   - `services.html`
   - `projects.html`
   - `contact.html`
   - `images/` (containing high-resolution photography assets)
   - `assets/` (containing `css/`, `js/`, `images/`)
   - `README.md` and `IMAGE-GENERATION-GUIDE.md` (optional)
5. Ensure `index.html` is situated directly inside `public_html/`.
6. Visit your domain in a browser. All navigation, scripts, modals, and responsive layouts will function immediately.

---

## 7. Image Asset Generation & Replacement

All 28 placeholders are currently rendered with crisp, scalable vector SVG art that maintains correct 16:9 aspect ratios.

When ready to generate photorealistic imagery:
1. Open `IMAGE-GENERATION-GUIDE.md`.
2. Copy the corresponding **Google Flow** prompt for each image.
3. Save the generated images with the specified filenames (e.g., `cctv-hero-security-camera.jpg`) inside `assets/images/placeholders/`.
4. Update the image file extensions in the HTML files from `.svg` to `.jpg`.

---

## 8. Quality & Compliance Checklist

- [x] All 6 HTML pages exist with cohesive headers, active navigation, and identical footers.
- [x] 100% Vanilla HTML5, CSS3, and JavaScript — no prohibited frameworks or dependencies.
- [x] Abstract original shield/lens logo symbol without text inside it.
- [x] Dummy phone number (`0000000000`) and contact details clearly marked as demonstration data.
- [x] Strict security & privacy disclaimers: no real customer addresses, passwords, or live feeds.
- [x] Interactive camera comparison table and 6-step CCTV architecture workflow.
- [x] Working category filter on Projects page with Project Detail Modal and Lightbox.
- [x] Fully responsive site survey enquiry form with dynamic range slider and demo simulation modal.
- [x] Fully responsive from 360px mobile to 1440px+ ultra-wide desktop.
- [x] Complete `IMAGE-GENERATION-GUIDE.md` detailing all 28 placeholders with 17 attributes and copy-ready prompts.
