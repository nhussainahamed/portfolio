import { useState } from "react";
import {
  MailIcon,
  CopyIcon,
  CheckIcon,
  GithubIcon,
  LinkedinIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "./Icons";

export default function Contact({ personal }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCopyEmail = () => {
    if (personal.email) {
      navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/mppqbwwl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">Let&apos;s Build Something Together</h2>
          <p className="section-description">
            Open to software engineering internships, collaborative MERN projects, and discussions on applied AI.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-col">
            <div className="contact-header">
              <h3 className="contact-title">Start a Conversation</h3>
              <p className="contact-lead">
                Whether you have an internship opportunity, a project idea, or simply want to connect, feel free to reach out. I typically respond within 24 hours.
              </p>
            </div>

            <div className="contact-channels">
              <div className="channel-card">
                <div className="channel-left">
                  <div className="channel-icon">
                    <MailIcon className="icon" />
                  </div>
                  <div>
                    <span className="channel-label">Email</span>
                    <span className="channel-val">{personal.email}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="channel-action-btn"
                  onClick={handleCopyEmail}
                >
                  {copied ? (
                    <>
                      <CheckIcon className="icon" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="icon" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="channel-card">
                <div className="channel-left">
                  <div className="channel-icon">
                    <MapPinIcon className="icon" />
                  </div>
                  <div>
                    <span className="channel-label">Location</span>
                    <span className="channel-val">{personal.location}</span>
                  </div>
                </div>
                <span className="channel-badge">
                  IST (UTC+5:30)
                </span>
              </div>

              <div className="channel-card">
                <div className="channel-left">
                  <div className="channel-icon">
                    <LinkedinIcon className="icon" />
                  </div>
                  <div>
                    <span className="channel-label">Socials</span>
                    <span className="channel-val">LinkedIn & GitHub</span>
                  </div>
                </div>
                <div className="channel-actions">
                  {personal.linkedin && (
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-action-btn"
                    >
                      <LinkedinIcon className="icon" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {personal.github && (
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-action-btn"
                    >
                      <GithubIcon className="icon" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            {submitted ? (
              <div className="form-success-banner">
                <CheckIcon className="icon" />
                <div>
                  <p style={{ fontWeight: 700, color: "var(--success-text)" }}>
                    Message sent successfully!
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "var(--success-text)", marginTop: "2px" }}>
                    Thanks for reaching out — I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Internship Opportunity / Project Collaboration"
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    placeholder="Hi Hussain, I came across your portfolio and wanted to reach out regarding..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {error && (
                  <div style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    color: "#f87171",
                    fontSize: "0.875rem",
                  }}>
                    {error}
                  </div>
                )}

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }} disabled={loading}>
                  <span>{loading ? "Sending…" : "Send Message"}</span>
                  {!loading && <ArrowRightIcon className="icon" />}
                </button>
              </form>
            )}
          </div>
        </div>

        {copied && (
          <div className="toast-notice">
            <CheckIcon className="icon" />
            <span>Email copied to clipboard!</span>
          </div>
        )}
      </div>
    </section>
  );
}
