# 👨‍💻 N Hussain Ahamed — Software Developer Portfolio

A modern, high-performance personal portfolio built with **React**, **Vite**, and **Vanilla CSS**. Designed with an editorial light aesthetic, responsive micro-interactions, dynamic tech marquee, in-page PDF certificate viewers, and a direct Formspree API contact pipeline.

---

## 🌟 Key Features

- **⚡ Fast & Modern Architecture**: Powered by Vite and React 18 for instant hot-module reloading and sub-second production builds.
- **🎨 Premium Visual Design**: Custom light-theme design system using tailored CSS variables, subtle ambient shadows, and refined typography (Outfit & Plus Jakarta Sans).
- **🛠️ Interactive Tech Stack**:
  - Smooth infinite scrolling marquee featuring live technology logos and status dots.
  - Category cards with individual SVG technology icons and staggered viewport entrance animations.
- **📄 Curriculum Vitae & Embedded PDF Viewer**: In-browser dual-pane resume viewer with download capability and responsive preview frame.
- **📜 Verified Credentials Modal**: In-page popup modal enabling instant preview and full-page viewing of certifications (IBM SkillsBuild, NPTEL IIT Guwahati, Udemy).
- **📬 Working Contact Form**: Integrated with **Formspree API** with real-time submission states, network error handling, and clipboard one-click copy for email.
- **📱 Responsive & Accessible**: Crafted mobile-first with adaptive layouts for phones, tablets, and wide desktop screens. Respects `prefers-reduced-motion`.

---

## 🚀 Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Core** | React.js, JavaScript (ES6+), HTML5, Vanilla CSS3 |
| **Bundler & Tooling** | Vite, ESLint, Oxlint |
| **Backend & APIs** | Formspree Contact API, RESTful Endpoints |
| **Design System** | Custom CSS Tokens (Gradients, Glassmorphism, Micro-animations) |
| **Typography** | Google Fonts (*Outfit*, *Plus Jakarta Sans*, *JetBrains Mono*) |

---

## 📂 Project Structure

```
portfolio/
├── public/                     # Static assets served at root
│   ├── favicon.svg             # Website favicon
│   ├── profile.jpg             # Profile picture
│   ├── resume.pdf              # Downloadable and previewable resume
│   ├── ibm.pdf                 # IBM SkillsBuild AI Certificate
│   ├── mern_certificate.pdf    # Full-Stack Web Development Certificate
│   └── Fundamentals of Artificial Intelligence.pdf # NPTEL Certificate
├── src/
│   ├── assets/                 # Component assets
│   ├── components/             # Modular React UI components
│   │   ├── Header.jsx          # Fixed navigation with scroll-spy & mobile drawer
│   │   ├── Hero.jsx            # Introduction banner, live stats bar, social links
│   │   ├── About.jsx           # Engineering narrative & academic achievements
│   │   ├── Education.jsx       # Academic timeline & milestone tracking
│   │   ├── Skills.jsx          # Tech stack marquee & animated category cards
│   │   ├── Projects.jsx        # Project showcases, metrics & architecture tags
│   │   ├── Certifications.jsx  # Verified credentials & in-page popup modal
│   │   ├── Resume.jsx          # Interactive CV previewer & direct download
│   │   ├── Contact.jsx         # Formspree form & communication channels
│   │   ├── Footer.jsx          # Brand links, copyright & back-to-top action
│   │   └── Icons.jsx           # Lightweight custom SVG icon library
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all content
│   ├── App.jsx                 # Main layout orchestrator
│   ├── index.css               # Global styling, tokens, and component classes
│   └── main.jsx                # React DOM entry point
├── .gitignore                  # Git exclusions for builds, node_modules, and OS caches
├── index.html                  # HTML entry with SEO metadata and font preconnects
├── package.json                # Project dependencies and scripts
└── vite.config.js              # Vite configuration
```

---

## 🛠️ Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 1. Clone the repository
```bash
git clone https://github.com/nhussainahamed/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the live site.

---

## ✏️ How to Customize Content

All text, statistics, educational details, projects, and contact channels are centralized in:

📂 `src/data/portfolioData.js`

- **Personal Info**: Update `name`, `role`, `badge`, `email`, `github`, `linkedin`, and `stats`.
- **Education**: Add or update degrees, universities, periods, scores, and honor badges.
- **Skills**: Add or remove technologies under categorized arrays.
- **Projects**: Update names, summaries, metrics, tech tags, and repository links.
- **Certificates**: Add new certifications with paths referencing documents placed in `public/`.
- **Contact Form**: Update the Formspree form ID endpoint in `src/components/Contact.jsx`.

---

## 📦 Deployment

### Build Production Bundle
```bash
npm run build
```
This generates an optimized, minified production bundle in the `dist/` directory.

### Deploy to Hosting Services

- **Vercel**: Import the GitHub repo and choose the default Vite build preset (`npm run build`, output: `dist`).
- **Netlify**: Drag and drop the `dist` folder or connect your Git repository.
- **GitHub Pages**: Build the project and deploy the `dist/` folder using `gh-pages` or GitHub Actions.

---

## 📬 Contact & Connect

- **Name**: N Hussain Ahamed
- **Email**: [nhussainahamed19@gmail.com](mailto:nhussainahamed19@gmail.com)
- **LinkedIn**: [linkedin.com/in/n-hussain-ahamed-a3a3a7290](https://www.linkedin.com/in/n-hussain-ahamed-a3a3a7290)
- **GitHub**: [github.com/nhussainahamed](https://github.com/nhussainahamed)
