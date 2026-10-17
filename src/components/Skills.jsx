import { useEffect, useRef } from "react";
import {
  CodeIcon,
  SparklesIcon,
  AwardIcon,
  LayersIcon,
  ServerIcon,
  DatabaseIcon,
  WrenchIcon,
} from "./Icons";

/* ─── Category icon map ─────────────────────────────────────────── */
function getCategoryIcon(cat) {
  const c = cat.toLowerCase();
  if (c.includes("language"))                       return <CodeIcon     className="sk-cat-icon" />;
  if (c.includes("frontend"))                       return <LayersIcon   className="sk-cat-icon" />;
  if (c.includes("backend") || c.includes("server")) return <ServerIcon   className="sk-cat-icon" />;
  if (c.includes("database"))                       return <DatabaseIcon  className="sk-cat-icon" />;
  if (c.includes("ai") || c.includes("multimodal")) return <SparklesIcon  className="sk-cat-icon" />;
  if (c.includes("tools"))                          return <WrenchIcon   className="sk-cat-icon" />;
  return <AwardIcon className="sk-cat-icon" />;
}

/* ─── Inline tech logos ─────────────────────────────────────────── */
const TECH_LOGO_MAP = {
  /* Programming Languages */
  "Java": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M13 6s-1.5 7 2.5 9.5C19.5 18 14 23 14 23s5.5-1.5 6.5-6.5C21.5 11.5 13 6 13 6z" stroke="#ED8B00" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M10 24s-1.5 1.5 1.5 2c3.5 1 6.5 1 9 0 1.5-.7.5-1.5.5-1.5" stroke="#ED8B00" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M9 27s-1.5 1 2 1.5c4 .7 7.5.7 10.5-.2 1.3-.5.5-1.3.5-1.3" stroke="#ED8B00" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "JavaScript": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="4" fill="#F7DF1E" fillOpacity="0.18" stroke="#c8a900" strokeWidth="1.4"/>
      <text x="16" y="21" textAnchor="middle" fontSize="10" fill="#c8a900" fontWeight="800" fontFamily="monospace">JS</text>
    </svg>
  ),
  "JavaScript ": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="4" fill="#F7DF1E" fillOpacity="0.18" stroke="#c8a900" strokeWidth="1.4"/>
      <text x="16" y="21" textAnchor="middle" fontSize="10" fill="#c8a900" fontWeight="800" fontFamily="monospace">JS</text>
    </svg>
  ),
  "C": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="12" fill="#A8B9CC" fillOpacity="0.18" stroke="#5c8fba" strokeWidth="1.4"/>
      <text x="16" y="20.5" textAnchor="middle" fontSize="11" fill="#5c8fba" fontWeight="800" fontFamily="monospace">C</text>
    </svg>
  ),
  /* Frontend */
  "React.js": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.3" fill="none"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  ),
  "HTML5": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 3l2 22 9 3 9-3 2-22H5z" fill="#E34F26" fillOpacity="0.18" stroke="#E34F26" strokeWidth="1.4" strokeLinejoin="round"/>
      <text x="16" y="19" textAnchor="middle" fontSize="8" fill="#E34F26" fontWeight="800">5</text>
    </svg>
  ),
  "CSS3": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 3l2 22 9 3 9-3 2-22H5z" fill="#1572B6" fillOpacity="0.18" stroke="#1572B6" strokeWidth="1.4" strokeLinejoin="round"/>
      <text x="16" y="19" textAnchor="middle" fontSize="8" fill="#1572B6" fontWeight="800">3</text>
    </svg>
  ),

  /* Backend */
  "Node.js": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3z" fill="#339933" fillOpacity="0.18" stroke="#339933" strokeWidth="1.4" strokeLinejoin="round"/>
      <text x="16" y="19" textAnchor="middle" fontSize="7" fill="#339933" fontWeight="800" fontFamily="monospace">JS</text>
    </svg>
  ),
  "Express.js": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="5" y="19" fontSize="11" fill="#64748b" fontWeight="800" fontFamily="monospace">Ex</text>
      <path d="M5 23h22M5 9h22" stroke="#64748b" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  "RESTful APIs": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 16h16M20 11l5 5-5 5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="16" r="3" fill="#2563eb" fillOpacity="0.2" stroke="#2563eb" strokeWidth="1.3"/>
    </svg>
  ),
  "JWT Auth": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="4" width="12" height="16" rx="3" stroke="#7c3aed" strokeWidth="1.4" fill="none"/>
      <path d="M14 20v4a2 2 0 004 0v-4" stroke="#7c3aed" strokeWidth="1.4" fill="none"/>
      <circle cx="16" cy="12" r="2.5" fill="#7c3aed" fillOpacity="0.2" stroke="#7c3aed" strokeWidth="1.2"/>
    </svg>
  ),
  
  /* Databases */
  "MongoDB": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 3s-7 8-7 14a7 7 0 0014 0C23 11 16 3 16 3z" fill="#47A248" fillOpacity="0.18" stroke="#47A248" strokeWidth="1.4" strokeLinejoin="round"/>
      <line x1="16" y1="17" x2="16" y2="29" stroke="#47A248" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  "MySQL": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="16" cy="9" rx="10" ry="4" fill="#4479A1" fillOpacity="0.18" stroke="#4479A1" strokeWidth="1.3"/>
      <path d="M6 9v5c0 2.2 4.5 4 10 4s10-1.8 10-4V9" stroke="#4479A1" strokeWidth="1.3"/>
      <path d="M6 14v5c0 2.2 4.5 4 10 4s10-1.8 10-4v-5" stroke="#4479A1" strokeWidth="1.3"/>
    </svg>
  ),
  "PostgreSQL": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M17.5 4.5C12.8 4.5 9.5 7.6 8.5 11c-1.6.4-3 1.5-3.8 3-1.2 2-1 4.5.4 6.4 1.4 1.8 3.5 2.7 5.7 2.5.4 1 1.2 1.9 2.2 2.5 1.8 1.1 4 1.3 6 .8 1.2-.3 2.3-1 3.2-1.9 1.8.4 3.7 0 5.2-.9 2.2-1.3 3.6-3.6 3.6-6.1 0-2.8-1.5-5.5-3.9-7-2.6-1.6-6.2-2.3-9.7-2.3z"
        fill="#336791"
        fillOpacity="0.18"
        stroke="#336791"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="13.5" cy="12.5" r="1.3" fill="#336791"/>
      <path
        d="M13.5 16.5c1.2 1 2.8 1.5 4.5 1.2M16 19.5c1.5 0 3-.6 4-1.6"
        stroke="#336791"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M7 16c-1.1 1-1.5 2.5-1 3.8.5 1.3 1.8 2.2 3.2 2.2"
        stroke="#336791"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Relational Schema Design": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="10" height="8" rx="2" stroke="#4479A1" strokeWidth="1.3" fill="none"/>
      <rect x="18" y="4" width="10" height="8" rx="2" stroke="#4479A1" strokeWidth="1.3" fill="none"/>
      <rect x="11" y="20" width="10" height="8" rx="2" stroke="#4479A1" strokeWidth="1.3" fill="none"/>
      <path d="M9 12v4M16 12v4M9 16h14M16 20v0" stroke="#4479A1" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  "NoSQL Aggregations": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 8h16M8 14h12M8 20h14M8 26h10" stroke="#47A248" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="24" cy="22" r="4" fill="#47A248" fillOpacity="0.2" stroke="#47A248" strokeWidth="1.3"/>
      <path d="M22 22l1.5 1.5L26 20" stroke="#47A248" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  /* AI */
  "Google Gemini Multimodal API": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 3C16 9.5 9.5 16 3 16c6.5 0 13 6.5 13 13 0-6.5 6.5-13 13-13-6.5 0-13-6.5-13-13z" fill="#4285F4" fillOpacity="0.2" stroke="#4285F4" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  "Prompt Engineering": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="3" stroke="#4285F4" strokeWidth="1.4" fill="none"/>
      <path d="M9 12l4 4-4 4M15 20h8" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "FFmpeg Media Pipelines": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="7" cy="16" r="3.5" stroke="#0d9488" strokeWidth="1.3" fill="none"/>
      <circle cx="16" cy="16" r="3.5" stroke="#0d9488" strokeWidth="1.3" fill="none"/>
      <circle cx="25" cy="16" r="3.5" stroke="#0d9488" strokeWidth="1.3" fill="none"/>
      <path d="M10.5 16h2M19.5 16h2" stroke="#0d9488" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  /* Tools */
  "Git": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M19 4l9 9-14 14L4 17l14-14h1z" fill="#F05032" fillOpacity="0.15" stroke="#F05032" strokeWidth="1.4" strokeLinejoin="round"/>
      <circle cx="24" cy="9" r="2" fill="#F05032"/>
      <circle cx="9" cy="23" r="2" fill="#F05032"/>
      <circle cx="16" cy="16" r="2" fill="#F05032"/>
    </svg>
  ),
  "GitHub": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 3C9.37 3 4 8.37 4 15c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0116 8.5c1.02.005 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C24.56 24.8 28 20.3 28 15c0-6.63-5.37-12-12-12z" fill="#24292F" fillOpacity="0.18" stroke="#475569" strokeWidth="0.8"/>
    </svg>
  ),
  "VS Code": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22 3L9 15l-5-4L3 13l5 4-5 4 1 2 5-4 13 12 5-2.5V5.5L22 3z" fill="#007ACC" fillOpacity="0.15" stroke="#007ACC" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  ),
  "Postman": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="12" fill="#FF6C37" fillOpacity="0.15" stroke="#FF6C37" strokeWidth="1.3"/>
      <path d="M10 16h12M18 12l4 4-4 4" stroke="#FF6C37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  
  /* CS */
  "Data Structures & Algorithms": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="7" r="3" stroke="#2563eb" strokeWidth="1.3" fill="none"/>
      <circle cx="8" cy="21" r="3" stroke="#2563eb" strokeWidth="1.3" fill="none"/>
      <circle cx="24" cy="21" r="3" stroke="#2563eb" strokeWidth="1.3" fill="none"/>
      <path d="M16 10v4M13.5 13.5L10 18M18.5 13.5L22 18M8 18V16M24 18V16" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  "Object-Oriented Programming (OOP)": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="9" y="9" width="14" height="14" rx="3" stroke="#4f46e5" strokeWidth="1.3" fill="none"/>
      <rect x="4" y="4" width="10" height="10" rx="2" stroke="#4f46e5" strokeWidth="1.1" fill="none" opacity="0.5"/>
      <rect x="18" y="18" width="10" height="10" rx="2" stroke="#4f46e5" strokeWidth="1.1" fill="none" opacity="0.5"/>
    </svg>
  ),
  "Database Management Systems (DBMS)": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="16" cy="8" rx="10" ry="4" stroke="#2563eb" strokeWidth="1.3" fill="none"/>
      <path d="M6 8v6c0 2.2 4.5 4 10 4s10-1.8 10-4V8" stroke="#2563eb" strokeWidth="1.3"/>
      <path d="M6 14v6c0 2.2 4.5 4 10 4s10-1.8 10-4v-6" stroke="#2563eb" strokeWidth="1.3"/>
    </svg>
  ),
  "Operating Systems": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="5" width="24" height="18" rx="3" stroke="#475569" strokeWidth="1.3" fill="none"/>
      <path d="M4 23h24" stroke="#475569" strokeWidth="1.3"/>
      <rect x="13" y="25" width="6" height="3" rx="1" stroke="#475569" strokeWidth="1.1" fill="none"/>
      <circle cx="16" cy="14" r="4" stroke="#475569" strokeWidth="1.2" fill="none"/>
      <circle cx="16" cy="14" r="1.5" fill="#475569" fillOpacity="0.3"/>
    </svg>
  ),
  "Computer Networks": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="3" fill="#0284c7" fillOpacity="0.2" stroke="#0284c7" strokeWidth="1.3"/>
      <circle cx="6" cy="8" r="2.5" stroke="#0284c7" strokeWidth="1.2" fill="none"/>
      <circle cx="26" cy="8" r="2.5" stroke="#0284c7" strokeWidth="1.2" fill="none"/>
      <circle cx="6" cy="24" r="2.5" stroke="#0284c7" strokeWidth="1.2" fill="none"/>
      <circle cx="26" cy="24" r="2.5" stroke="#0284c7" strokeWidth="1.2" fill="none"/>
      <path d="M8 9.5L14 14M18 14l5-5.5M8 22.5L14 18M18 18l5 4.5" stroke="#0284c7" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  ),
  "Software Engineering": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 12l-4 4 4 4M22 12l4 4-4 4M19 8l-6 16" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

function TechLogo({ name }) {
  const clean = (name || "").trim();
  const logo = TECH_LOGO_MAP[clean] || TECH_LOGO_MAP[name];
  if (!logo) return null;
  return (
    <span className="sk-tech-logo" title={clean} aria-label={clean}>
      {logo}
    </span>
  );
}

/* ─── Marquee strip ─────────────────────────────────────────────── */
const MARQUEE_TECHS = [
  { name: "React.js",    color: "#61DAFB" },
  { name: "Node.js",     color: "#339933" },
  { name: "MongoDB",     color: "#47A248" },
  { name: "PostgreSQL",  color: "#336791" },
  { name: "MySQL",       color: "#4479A1" },
  { name: "JavaScript",  color: "#c8a900" },
  { name: "Java",        color: "#ED8B00" },
  { name: "Express.js",  color: "#64748b" },
  { name: "Git",         color: "#F05032" },
  { name: "VS Code",     color: "#007ACC" },
  { name: "Postman",     color: "#FF6C37" },
  { name: "Google Gemini Multimodal API", color: "#4285F4" },
  { name: "GitHub",      color: "#475569" },
];

const STRIP_ITEMS = [...MARQUEE_TECHS, ...MARQUEE_TECHS];

function TechStrip() {
  return (
    <div className="sk-marquee-wrapper" aria-hidden="true">
      <div className="sk-marquee-track">
        {STRIP_ITEMS.map((t, i) => (
          <div key={i} className="sk-marquee-pill">
            <span className="sk-marquee-dot" style={{ background: t.color }} />
            <span className="sk-marquee-logo">
              <TechLogo name={t.name} />
            </span>
            <span className="sk-marquee-label">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Staggered card entrance ───────────────────────────────────── */
function useCardEntrance(ref, index) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("sk-card--visible");
          }, index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);
}

function SkillCard({ group, index }) {
  const ref = useRef(null);
  useCardEntrance(ref, index);

  return (
    <div ref={ref} className="sk-card">
      {/* Card top accent line */}
      <div className="sk-card-accent" />

      {/* Header */}
      <div className="sk-card-header">
        <div className="sk-card-icon-wrap" aria-hidden="true">
          {getCategoryIcon(group.category)}
        </div>
        <h3 className="sk-card-title">{group.category}</h3>
      </div>

      {/* Tech logos row */}
      <div className="sk-card-logos" aria-hidden="true">
        {group.items.map((skill) => {
          const clean = (skill || "").trim();
          return (TECH_LOGO_MAP[clean] || TECH_LOGO_MAP[skill]) ? (
            <TechLogo key={skill} name={skill} />
          ) : null;
        })}
      </div>

      {/* Skill chips */}
      <div className="sk-chips">
        {group.items.map((skill) => (
          <span key={skill} className="sk-chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────── */
export default function Skills({ skills }) {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">

        {/* Editorial header */}
        <div className="section-header">
          <span className="section-eyebrow">TECHNICAL EXPERTISE</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-description">
            Full-stack engineering, multimodal AI, and computer science — built with modern, production-proven tools.
          </p>
        </div>

        {/* Scrolling marquee */}
        <TechStrip />

        {/* Cards grid */}
        <div className="sk-grid">
          {skills.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
