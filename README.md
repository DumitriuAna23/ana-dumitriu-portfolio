# Ana Dumitriu — Portfolio Website

This project contains the complete personal portfolio website created to present software, AI, embedded systems, robotics, engineering work and technical projects through a professional, responsive web experience.

The portfolio is designed as a presentation website rather than a simple online CV. It combines project case studies, real screenshots and photographs, technical information, work experience, education, a cover letter, downloadable CV and direct contact options.

## Responsive Architecture

The website contains two intentionally separate interfaces:

### Desktop

The desktop experience is optimized for laptops and larger screens.

It uses the full editorial layout, larger project visuals, animated navigation and more spacious technical case studies.

### Mobile

The mobile experience was designed independently for smaller screens instead of simply shrinking the desktop interface.

It keeps the same content, visual identity and real project assets while using a more compact structure, smaller typography, reduced spacing and mobile-focused navigation.

This makes the portfolio easier to explore on a phone without excessive vertical scrolling.

## Automatic Device Selection

The root `index.html` acts as a lightweight device router.

When the main portfolio URL is opened:

- screens up to **700 px** are sent to `/mobile/`
- wider screens are sent to `/desktop/`

This allows the same Vercel deployment and the same public portfolio URL to automatically open the appropriate interface.

The two versions can also be opened directly:

- `/desktop/`
- `/mobile/`

## Website Sections

The portfolio includes:

- Home
- Work
- Projects
- AutoDiagnose AI case study
- ELIO case study
- About
- Education
- Cover Letter
- CV access
- Contact

## Design Direction

The visual system uses a dark premium technology aesthetic with:

- dark neutral backgrounds
- soft blue accents
- editorial typography
- restrained animations
- subtle borders and rounded surfaces
- real project imagery
- consistent visual hierarchy

The goal is to remain modern and technical without relying on excessive neon effects or decorative elements that compete with the actual work.

## Technologies

The portfolio itself is built with:

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- responsive layouts
- media queries
- lightweight navigation and interaction animations

Typography:

- Manrope
- DM Serif Display

The site intentionally avoids a heavy frontend framework so that it remains lightweight, easy to deploy and straightforward to maintain.

## Featured Technical Work

The portfolio presents real projects including:

### AutoDiagnose AI

A full-stack automotive diagnostic platform combining vehicle data, symptoms, OBD-II / DTC information, adaptive questioning and diagnostic reasoning.

Technologies represented include Next.js, TypeScript, React, Python, FastAPI, PostgreSQL, REST APIs, authentication, session management and AI-ready diagnostic architecture.

### ELIO

An educational robotics platform combining a custom physical robot, embedded control, BLE communication, companion software, visual programming concepts and AI-assisted interaction.

Technologies represented include ESP32, C / C++, BLE, sensors, motor control, CAD and 3D printing.

## Deployment

The folder is prepared for direct static deployment on Vercel.

Deploy the **root of this project**, the folder that contains:

```text
index.html
vercel.json
desktop/
mobile/
```

The root router will then automatically select the appropriate version for the visitor's screen size.
