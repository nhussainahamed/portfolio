import { useState } from "react";
import { DownloadIcon, ExternalLinkIcon, CheckIcon } from "./Icons";

export default function Resume() {
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const resumePath = "/resume.pdf";
  const downloadFileName = "N_Hussain_Ahamed_Resume.pdf";

  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Curriculum Vitae</span>
          <h2 className="section-title">My Resume</h2>
          <p className="section-description">
            Explore my educational qualifications, full-stack competencies, and project experience in detail.
          </p>
        </div>

        <div className="resume-layout">
          {/* Left Column: Heading, Bio, Actions & Key Highlights */}
          <div className="resume-info-col">
            <div className="resume-card-box">
            

              <h3 className="resume-subheading">
                Engineering Qualifications & Experience
              </h3>

              <p className="resume-summary-text">
                Undergraduate Information Science & Engineering student at RNS Institute of Technology, Bengaluru (9.12 CGPA). Actively seeking software developer internships and engineering opportunities.
              </p>

              <div className="resume-points-list">
                <div className="resume-point-item">
                  <span className="resume-check">
                    <CheckIcon className="icon" />
                  </span>
                  <span><strong>Education:</strong> B.E. in Information Science and Enginnering.</span>
                </div>
                <div className="resume-point-item">
                  <span className="resume-check">
                    <CheckIcon className="icon" />
                  </span>
                  <span><strong>Core Focus:</strong> Full-Stack Development, Software Development Engineering (SDE) & REST APIs</span>
                </div>
                
              </div>

              <div className="resume-actions-group">
                <a
                  href={resumePath}
                  download={downloadFileName}
                  className="btn btn-primary resume-btn-action"
                  aria-label="Download Hussain Ahamed Resume PDF"
                >
                  <DownloadIcon className="icon" />
                  <span>Download Resume</span>
                </a>

                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary resume-btn-action"
                  aria-label="Open Resume PDF in New Tab"
                >
                  <ExternalLinkIcon className="icon" />
                  <span>Open in New Tab</span>
                </a>
              </div>

             
            </div>
          </div>

          {/* Right Column: Embedded Automatic PDF Preview */}
          <div className="resume-preview-col">
            <div className="resume-preview-frame">
              {/* Browser-style Preview Window Header */}
              <div className="resume-preview-topbar">
                <div className="preview-dots">
                  <span className="term-dot term-dot-red" />
                  <span className="term-dot term-dot-yellow" />
                  <span className="term-dot term-dot-green" />
                </div>
                <div className="resume-preview-doc-title">
                  <span className="doc-pill">N_Hussain_Ahamed_Resume.pdf</span>
                </div>
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-preview-popout"
                  title="Open full view in new tab"
                  aria-label="Open full view in new tab"
                >
                  <ExternalLinkIcon className="icon" />
                </a>
              </div>

              {/* PDF Container */}
              <div className="resume-pdf-container">
                {!pdfLoaded && (
                  <div className="resume-pdf-loading">
                    <div className="loading-spinner" />
                    <span>Loading Document Preview...</span>
                  </div>
                )}

                <iframe
                  src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=1`}
                  title="N Hussain Ahamed Resume Preview"
                  className="resume-pdf-iframe"
                  onLoad={() => setPdfLoaded(true)}
                />
              </div>

              {/* Viewer Fallback / Quick Bar */}
              <div className="resume-preview-footer">
                <span className="resume-footer-note">
                  Scroll inside the frame to review all sections.
                </span>
                <a
                  href={resumePath}
                  download={downloadFileName}
                  className="resume-footer-link"
                >
                  Download copy (.pdf)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
