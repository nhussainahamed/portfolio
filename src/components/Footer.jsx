import { ArrowUpIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ personal }) {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand-info">
            <span className="footer-brand-title">{personal.name}</span>
            <span className="footer-brand-sub">
              Information Science & Engineering · RNSIT Bengaluru
            </span>
          </div>

          <div className="footer-social-links">
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-icon-square"
                aria-label="GitHub Profile"
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
              >
                <LinkedinIcon className="icon" />
              </a>
            )}

            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                className="btn btn-icon-square"
                aria-label="Email"
              >
                <MailIcon className="icon" />
              </a>
            )}
          </div>
        </div>

        <div className="footer-bottom-row">
          <p>© {CURRENT_YEAR} {personal.name}. All rights reserved.</p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
          >
            <span>Back to top</span>
            <ArrowUpIcon className="icon" />
          </button>
        </div>
      </div>
    </footer>
  );
}
