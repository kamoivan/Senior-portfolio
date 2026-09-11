import { useEffect } from "react";
import { X, ArrowRight, Download } from "lucide-react";
import "./ProjectChoiceModal.css";

export default function ProjectChoiceModal({ onClose }) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="choice-modal-overlay" onClick={handleOverlayClick}>
      <div className="choice-modal">
        {/* Close */}
        <button
          className="choice-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="choice-modal-header">
          <div className="choice-modal-brand">
            <span className="choice-modal-logo">IK</span>

            <div>
              <span className="choice-modal-name">IVAN KAMO</span>

              <span className="choice-modal-role">SOFTWARE ENGINEER</span>
            </div>
          </div>

          <span className="choice-modal-kicker">
            LET'S BUILD SOMETHING MEANINGFUL
          </span>

          <h2>YOU'RE IN THE RIGHT PLACE.</h2>

          <p>What would you like to do?</p>
        </div>

        {/* Choices */}
        <div className="choice-modal-options">
          {/* Project */}
          <a href="/contact" className="choice-modal-card">
            <div className="choice-modal-card-content">
              <span className="choice-modal-card-label">BUILD A PROJECT</span>

              <span className="choice-modal-card-description">
                Websites · Applications · SaaS · Custom Solutions
              </span>
            </div>

            <span className="choice-modal-card-action">
              Start my project
              <ArrowRight size={18} />
            </span>
          </a>

          {/* Training */}
          <a href="/formation-hub" className="choice-modal-card">
            <div className="choice-modal-card-content">
              <span className="choice-modal-card-label">GET TRAINED</span>

              <span className="choice-modal-card-description">
                Training · Mentorship · Technical Assessment
              </span>
            </div>

            <span className="choice-modal-card-action">
              Explore training
              <ArrowRight size={18} />
            </span>
          </a>
        </div>

        {/* Footer */}
        <div className="choice-modal-footer">
          <p>Want to learn more about how I work first?</p>

          <div className="choice-modal-footer-actions">
            <a
              href="/documents/onboarding-ivan-kamo.pdf"
              download
              className="choice-modal-secondary-btn"
            >
              <Download size={17} />
              Download the guide
            </a>

            <a href="/contact" className="choice-modal-primary-btn">
              Contact me
              <ArrowRight size={17} />
            </a>
          </div>

          <span className="choice-modal-footer-note">
            Collaboration & Pricing Guide
          </span>
        </div>
      </div>
    </div>
  );
}
