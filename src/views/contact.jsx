import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaPhoneAlt,
  FaCheckCircle,
  FaRocket,
  FaCogs,
  FaProjectDiagram,
  FaBan,
  FaTerminal,
  FaCode,
  FaLightbulb,
  FaUserTie,
} from "react-icons/fa";
import "./contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xdawavlp");

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="contact-page">
      {/* 1. SECTION HERO */}
      <section className="contact-hero">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <div className="hero-badge">
            <FaTerminal /> <span>Available for projects</span>
          </div>
          <h1 className="hero-title">
            Establish <span className="gradient">Connection.</span>
          </h1>
          <p className="hero-subtitle">
            <FaCode /> Expert Software Engineering & CTO Consulting. Let's
            translate your business logic into scalable architecture.
          </p>
        </motion.div>
      </section>

      {/* 2. SECTION CONTACT METHODS (Grid ultra-iconifiée) */}
      <section className="contact-methods">
        <motion.div
          className="methods-grid"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="method-card">
            <FaPhoneAlt className="m-icon" />
            <h3>Direct Call</h3>
            <p>+237 658 481 162</p>
            <div className="no-sms">
              <FaBan /> No SMS
            </div>
            <a href="tel:+237658481162" className="m-btn">
              Let's call now
            </a>
          </div>

          <div className="method-card">
            <FaWhatsapp className="m-icon" />
            <h3>WhatsApp</h3>
            <p>Instant Business Chat</p>
            <a href="https://wa.me/237658481162" className="m-btn">
              Let's chat now
            </a>
          </div>

          <div className="method-card">
            <FaEnvelope className="m-icon" />
            <h3>Official Email</h3>
            <p>kamoivan2026@gmail.com</p>
            <a href="mailto:kamoivan2026@gmail.com" className="m-btn">
              Send Email now
            </a>
          </div>
        </motion.div>
      </section>

      {/* 3. SECTION COLLABORATION & FORM */}
      <section className="collab-form-section">
        <div className="collab-wrapper">
          <motion.div
            className="collab-info"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >
            <h2>
              <FaUserTie /> Professional <span>Collaboration</span>
            </h2>

            <div className="collab-steps">
              <div className="step-item">
                <div className="step-icon">
                  <FaLightbulb />
                </div>
                <div>
                  <h4>Discovery</h4>
                  <p>
                    Deep dive into your product vision and market constraints.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-icon">
                  <FaProjectDiagram />
                </div>
                <div>
                  <h4>Architecture</h4>
                  <p>Designing robust, multi-tenant and scalable systems.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-icon">
                  <FaCogs />
                </div>
                <div>
                  <h4>Execution</h4>
                  <p>High-quality engineering with CTO-level oversight.</p>
                </div>
              </div>
            </div>

            <div className="social-box">
              <h4>
                <FaRocket /> Connect on Socials
              </h4>
              <div className="social-grid">
                <a
                  href="https://linkedin.com/in/armand-ivan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/votre-profil"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://facebook.com/votre-profil"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com/votre-profil"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="form-box"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >
            {!state.succeeded ? (
              <form onSubmit={handleSubmit} className="premium-form">
                <div className="form-head">
                  <FaPaperPlane className="head-icon" />
                  <h3>Send a Project Brief</h3>
                </div>

                <div className="input-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="error-msg"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="error-msg"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Company / Project Name"
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                  className="error-msg"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Describe the technical challenge..."
                  required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="error-msg"
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="main-submit"
                >
                  {state.submitting ? "Processing..." : "Deploy Message"}
                </button>
              </form>
            ) : (
              <div className="success-overlay">
                <FaCheckCircle className="big-check" />
                <h3>Handshake Successful!</h3>
                <p>
                  I'll review your brief and respond via email or call soon.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 4. FOOTER LOCATION */}
      <section className="contact-footer">
        <p>
          <FaMapMarkerAlt /> Based in Douala, Cameroon — Working with the World.
        </p>
      </section>
    </div>
  );
}
