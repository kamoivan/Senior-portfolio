import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Database,
  Server,
  Key,
  Terminal,
  Settings,
  HardDrive,
  ShieldAlert,
  Cloud,
  Rocket,
} from "lucide-react";
import "./back-end-mastery.css";

const BackEndMastery = () => {
  return (
    <div className="mastery-page-layout">
      {/* LEVEL 1: NAVIGATION */}
      <nav className="mastery-nav-bar">
        <Link to="/hub" className="nav-back-link">
          <ArrowLeft size={16} /> <span>Back to Hub</span>
        </Link>
      </nav>

      {/* LEVEL 2: HERO SECTION */}
      <header className="mastery-hero-core">
        <div className="hero-info-grid">
          <div className="info-meta">
            <span className="badge-level">
              <Database size={12} /> Level: From Zero to Architect
            </span>
            <span className="badge-duration">
              <Server size={12} /> Duration: 12 Weeks
            </span>
          </div>

          <h1>
            Mastering the <br />{" "}
            <span className="gradient-gold">Server-Side Engine</span>
          </h1>
          <p className="hero-subtitle">
            The frontend is the skin, but the backend is the brain. Learn how to
            architect secure databases, build powerful APIs, and master the
            Laravel ecosystem.
          </p>
        </div>
      </header>

      {/* LEVEL 3: CORE COMPETENCIES (Silicon Valley Grid) */}
      <section className="competencies-section">
        <div className="section-header">
          <Terminal className="header-icon" />
          <h2>Backend Mastery Modules</h2>
        </div>

        <div className="competencies-grid">
          {/* Module 1: PHP Core & OOP */}
          <div className="comp-card">
            <Settings className="card-icon" />
            <h3>Modern PHP & Logic</h3>
            <p>
              Master the fundamentals of PHP 8.x. Learn Object-Oriented
              Programming (OOP), clean code principles, and logical data flow.
            </p>
          </div>

          {/* Module 2: Database & SQL */}
          <div className="comp-card">
            <HardDrive className="card-icon" />
            <h3>Database Architecture</h3>
            <p>
              Deep dive into MySQL. Learn database design, migrations, complex
              relationships, and how to optimize queries for speed.
            </p>
          </div>

          {/* Module 3: Laravel Ecosystem */}
          <div className="comp-card highlight-gold">
            <Key className="card-icon" />
            <h3>Laravel & Security</h3>
            <p>
              Build professional apps with Laravel. From routing and Eloquent
              ORM to authentication (Sanctum) and API development.
            </p>
          </div>
        </div>
      </section>

      {/* LEVEL 4: TOOLSTACK VISUALIZER */}
      <section className="toolstack-section">
        <h3>Backend Infrastructure</h3>
        <div className="tools-flex-grid">
          <span className="tool-item">PHP 8.2+</span>
          <span className="tool-item">Laravel Framework</span>
          <span className="tool-item">MySQL / SQL</span>
          <span className="tool-item">RESTful APIs</span>
          <span className="tool-item">Composer</span>
          <span className="tool-item">
            Authentication (JWT/Sanctum) <ShieldAlert size={14} />
          </span>
        </div>
      </section>

      {/* LEVEL 5: OUTCOMES & OBJECTIVES */}
      <section className="outcomes-section">
        <div className="outcomes-grid">
          <div className="outcome-text">
            <h3>Program Outcomes</h3>
            <p>
              You will be able to design complex database schemas, build secure
              and scalable backends from scratch, and develop full APIs that can
              power any modern mobile or web application.
            </p>
          </div>
          <div className="outcome-icon-box">
            <Cloud size={64} className="icon-outcome" />
          </div>
        </div>
      </section>

      {/* LEVEL 6: PRICING & CTA */}
      <footer className="checkout-section">
        <div className="checkout-card-premium">
          <div className="price-block-detailed">
            <span className="price-old">$550</span>
            <span className="price-current">$249</span>
            <span className="price-label">Complete Backend Track</span>
          </div>
          <Link to="/order/back-end-mastery" className="btn-order-premium">
            Enroll in Backend Mastery <Rocket size={18} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BackEndMastery;
