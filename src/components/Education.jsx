import { GraduationCapIcon, AwardIcon } from "./Icons";

export default function Education({ education }) {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Academic Journey</span>
          <h2 className="section-title">Education & Milestones</h2>
          <p className="section-description">
            A track record of high academic performance and continuous computer science learning.
          </p>
        </div>

        <div className="timeline">
          {education.map((item, index) => (
            <div key={`${item.degree}-${item.period}`} className="timeline-row">
              <div className="timeline-badge" aria-hidden="true">
                {index === 0 ? (
                  <GraduationCapIcon className="icon" />
                ) : (
                  <AwardIcon className="icon" />
                )}
              </div>

              <article className="education-card">
                <div className="edu-top">
                  <div>
                    <h3 className="edu-degree">{item.degree}</h3>
                    <p className="edu-institution">{item.institution}</p>
                    <p className="edu-board">{item.board}</p>
                  </div>
                  <span className="edu-period">{item.period || item.year}</span>
                </div>

                <div className="edu-meta-bar">
                  <span className="edu-score-pill">{item.score}</span>
                  {item.honors && (
                    <span className="edu-honor-pill">{item.honors}</span>
                  )}
                  {item.status && (
                    <span
                      style={{
                        fontSize: "0.825rem",
                        color: "var(--text-muted)",
                        fontWeight: 500,
                      }}
                    >
                      {item.status}
                    </span>
                  )}
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="edu-notes-list">
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
