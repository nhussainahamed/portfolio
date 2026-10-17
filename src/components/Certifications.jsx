import { useState, useEffect } from "react";
import { AwardIcon, ExternalLinkIcon, XIcon } from "./Icons";

export default function Certifications({ certifications }) {
  const [activeCert, setActiveCert] = useState(null);

  // Close popup modal on Escape key press and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveCert(null);
      }
    };

    if (activeCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCert]);

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Continuous Learning</span>
          <h2 className="section-title">Certifications & Credentials</h2>
          <p className="section-description">
            Verified coursework and technical specializations in Artificial Intelligence and Full-Stack Development.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <article key={cert.title} className="cert-card">
              <div className="cert-icon-container" aria-hidden="true">
                <AwardIcon className="icon" />
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer}</span>
                {cert.description && (
                  <p className="cert-desc">{cert.description}</p>
                )}
                <div className="cert-footer-row">
                  <span className="cert-badge">
                    ✓ Verified Credential
                  </span>
                  {cert.credentialUrl && (
                    <button
                      type="button"
                      className="cert-view-btn"
                      onClick={() => setActiveCert(cert)}
                      aria-label={`View certificate for ${cert.title}`}
                    >
                      <span>View Certificate</span>
                      <ExternalLinkIcon className="icon" />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Certificate In-Page Popup Modal */}
      {activeCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="cert-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-modal-header">
              <div className="cert-modal-title-wrap">
                <h3 id="cert-modal-title" className="cert-modal-title">
                  {activeCert.title}
                </h3>
                <span className="cert-modal-issuer">{activeCert.issuer}</span>
              </div>
              <div className="cert-modal-actions">
                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-action-btn"
                  title="Open full PDF in a new tab"
                >
                  <ExternalLinkIcon className="icon" />
                  <span>Open Full PDF</span>
                </a>
                <button
                  type="button"
                  className="cert-modal-close-btn"
                  onClick={() => setActiveCert(null)}
                  aria-label="Close certificate preview"
                >
                  <XIcon className="icon" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF viewer */}
            <div className="cert-modal-body">
              <iframe
                src={`${activeCert.credentialUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title={`${activeCert.title} Certificate Preview`}
                className="cert-modal-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
