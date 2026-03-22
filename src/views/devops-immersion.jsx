import { Link } from "react-router-dom";

import {
  ArrowLeft,
  Cloud,
  ShieldCheck,
  Container,
  Terminal,
  Repeat,
  Cpu,
  HardDrive,
  Settings,
  Workflow,
  Rocket,
} from "lucide-react";
import "./devops-immersion.css";
const DevOpsImmersion = () => {
  return (
    <div className="mastery-page-layout">
      {/* LEVEL 1: NAVIGATION (Glassmorphism) */}
      <nav className="mastery-nav-bar">
        <Link to="/formation-hub" className="nav-back-link">
          <ArrowLeft size={16} /> <span>Back to Hub</span>
        </Link>
      </nav>

      {/* LEVEL 2: HERO SECTION (Value Proposition) */}
      <header className="mastery-hero-core">
        <div className="hero-info-grid">
          <div className="info-meta">
            <span className="badge-level">
              <Repeat size={12} /> Level: Local to Cloud
            </span>
            <span className="badge-duration">
              <Workflow size={12} /> Duration: 8 Weeks
            </span>
          </div>

          <h1>
            Deploy with <br />{" "}
            <span className="gradient-gold">Absolute Confidence</span>
          </h1>
          <p className="hero-subtitle">
            Coding is only half the battle. Master the art of automation,
            containerization, and cloud infrastructure to ensure 99.9% uptime.
          </p>
        </div>
      </header>

      {/* LEVEL 3: CORE LEARNING MODULES (Silicon Valley Grid) */}
      <section className="competencies-section">
        <div className="section-header">
          <Terminal className="header-icon" />
          <h2>Infrastructure & Automation</h2>
        </div>

        <div className="competencies-grid">
          {/* Module 1: Server Foundations & Linux */}
          <div className="comp-card">
            <HardDrive className="card-icon" />
            <h3>Server Foundations</h3>
            <p>
              Master the Linux terminal, SSH security, firewall configuration
              (UFW), and automated server management.
            </p>
          </div>

          {/* Module 2: Containerization with Docker */}
          <div className="comp-card">
            <Container className="card-icon" />
            <h3>Docker Mastery</h3>
            <p>
              Learn to containerize any application (React, PHP). Understand
              images, volumes, and multi-container setups with Docker Compose.
            </p>
          </div>

          {/* Module 3: CI/CD Pipelines */}
          <div className="comp-card highlight-gold">
            <Rocket className="card-icon" />
            <h3>Continuous Deployment</h3>
            <p>
              Automate everything. Build robust CI/CD pipelines using GitHub
              Actions or GitLab CI for zero-downtime deployments.
            </p>
          </div>
        </div>
      </section>

      {/* LEVEL 4: THE INFRASTRUCTURE ARSENAL */}
      <section className="toolstack-section">
        <h3>Mastered Technologies</h3>
        <div className="tools-flex-grid">
          <span className="tool-item">Linux (Ubuntu/Debian)</span>
          <span className="tool-item">Docker & Compose</span>
          <span className="tool-item">Nginx / Apache</span>
          <span className="tool-item">GitHub Actions</span>
          <span className="tool-item">
            GitLab CI <Workflow size={14} />
          </span>
          <span className="tool-item">CI/CD Pipelines</span>
          <span className="tool-item">
            Cloud Providers (AWS/DigitalOcean) <Cloud size={14} />
          </span>
        </div>
      </section>

      {/* LEVEL 5: OUTCOMES */}
      <section className="outcomes-section">
        <div className="outcomes-grid">
          <div className="outcome-text">
            <h3>Ready for Production</h3>
            <p>
              By the end of this track, you will be able to manage your own
              cloud servers, containerize applications, and build automated
              deployment pipelines, taking any project from development to a
              secure live environment.
            </p>
          </div>
          <div className="outcome-icon-box">
            <Settings size={64} className="icon-outcome" />
          </div>
        </div>
      </section>

      {/* LEVEL 6: PRICING & CTA (Discounted Block) */}
      <footer className="checkout-section">
        <div className="checkout-card-premium">
          <div className="price-block-detailed">
            <span className="price-old">$399</span>
            <span className="price-current">$399</span>
            <span className="price-label">Lifetime Infrastructure Track</span>
          </div>
          <Link to="/order/devops-immersion" className="btn-order-premium">
            Claim Your Authority <ShieldCheck size={18} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default DevOpsImmersion;
