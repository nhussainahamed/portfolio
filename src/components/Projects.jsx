import {
  ExternalLinkIcon,
  GithubIcon,
  CheckIcon,
  SparklesIcon,
} from "./Icons";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Featured Work</span>
          <h2 className="section-title">Projects & Systems</h2>
          <p className="section-description">
            Production-grade full-stack architectures solving practical real-world problems.
          </p>
        </div>

        <div className="projects-layout">
          {projects.map((project, idx) => (
            <article key={project.name} className="project-card">
              <div className="project-content">
                <div className="project-header">
                  <span className="project-tagline">{project.category}</span>
                  <h3 className="project-title">{project.name}</h3>
                  {project.tagline && (
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                      {project.tagline}
                    </p>
                  )}
                </div>

                <ul className="project-highlights-list">
                  {project.highlights.map((point) => (
                    <li key={point.slice(0, 50)} className="project-highlight-item">
                      <span className="project-check-icon">
                        <CheckIcon className="icon" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-tech-badges">
                  {(Array.isArray(project.techStack)
                    ? project.techStack
                    : project.techStack.split(", ")
                  ).map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: "0.6rem 1.1rem", fontSize: "0.875rem" }}
                    >
                      <GithubIcon className="icon" />
                      <span>Source Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ padding: "0.6rem 1.1rem", fontSize: "0.875rem" }}
                    >
                      <ExternalLinkIcon className="icon" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-visual">
                <div className="project-preview-frame">
                  <div className="preview-top-bar">
                    <div className="preview-dots">
                      <span className="term-dot term-dot-red" />
                      <span className="term-dot term-dot-yellow" />
                      <span className="term-dot term-dot-green" />
                    </div>
                    <span className="preview-pill-url">
                      {idx === 0
                        ? "summarivideo.ai/app"
                        : "donation-tracker.enterprise.io"}
                    </span>
                  </div>

                  <div className="preview-body-content">
                    <div className="preview-feature-tag">
                      <SparklesIcon className="icon" />
                      <span>{idx === 0 ? "Gemini 2.5 Multimodal" : "Real-Time Tracking"}</span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                        {idx === 0
                          ? "Video → Audio Extraction → AI Structured Notes"
                          : "Shipment State Machine: Received → Dispatched → Delivered"}
                      </p>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                        {idx === 0
                          ? "Multimodal pipeline processing lecture recordings with automated translation and multi-format PDF generation."
                          : "Barcode UID scanning engine with role-based JWT auth and relational normalized database audit logs."}
                      </p>
                    </div>

                    {project.metrics && (
                      <div className="preview-metrics-banner">
                        ⚡ <strong>System Benchmark:</strong> {project.metrics}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
