import { ArrowRightIcon } from "./Icons";

export default function About({ objective, objective1, highlights = [] }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const narrativeText = objective1 || objective;

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">Engineering Mindset & Background</h2>
          <p className="section-description">
            Combining academic excellence with production-level development to build reliable software solutions.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-narrative">
            <p className="about-text">{narrativeText}</p>
            <p className="about-text" style={{ marginTop: "1rem" }}>
              Currently an Information Science undergraduate at <strong>RNS Institute of Technology, Bengaluru</strong>, maintaining a <strong>9.12 CGPA</strong>. I take pride in crafting clean architecture, structuring resilient RESTful APIs, and implementing multimodal AI pipelines that solve tangible engineering bottlenecks.
            </p>

           

            <div style={{ marginTop: "1.75rem" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo("education")}
              >
                <span>View Academic Journey</span>
                <ArrowRightIcon className="icon" />
              </button>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((item) => (
              <div key={item.title} className="highlight-card">
                <div className="highlight-head">
                  <h3 className="highlight-title">{item.title}</h3>
                  <span className="highlight-tag">{item.tag}</span>
                </div>
                <p className="highlight-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
