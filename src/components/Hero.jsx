import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "./Icons";

export default function Hero({ personal }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="badge badge-status">
              <span className="status-dot" />
              <span>{personal.badge || "Open to Software Developer Internships & Opportunities"}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm N Hussain Ahamed.
              <br />
              I'm a {" "}
              <span className="text-gradient"> Software Developer.</span>
              <br/>
            
            </h1>

            <p className="hero-bio">{personal.objective}</p>

            <div className="hero-meta-row">
              <span className="hero-meta-item">
                <MapPinIcon className="icon" />
                <span>{personal.location}</span>
              </span>
             
            </div>

            <div className="hero-ctas">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo("projects")}
              >
                <span>View Projects</span>
                <ArrowRightIcon className="icon" />
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollTo("contact")}
              >
                <span>Let&apos;s Connect</span>
              </button>

              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-icon-square"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="icon" />
                </a>
              )}

              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-icon-square"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="icon" />
                </a>
              )}

              {personal.email && (
                <a
                  href={`mailto:${personal.email}`}
                  className="btn btn-icon-square"
                  aria-label="Send Email"
                  title="Email"
                >
                  <MailIcon className="icon" />
                </a>
              )}
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <div className="hero-photo-card">
              <img
                src="/profile.jpg"
                alt="N Hussain Ahamed"
                className="hero-photo-img"
              />
              <span className="hero-photo-badge">
                <span className="status-dot" />
                Available
              </span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        {personal.stats && personal.stats.length > 0 && (
          <div className="stats-bar">
            {personal.stats.map((stat) => (
              <div key={stat.label} className="stats-bar-item">
                <span className="stats-bar-value">{stat.value}</span>
                <span className="stats-bar-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
