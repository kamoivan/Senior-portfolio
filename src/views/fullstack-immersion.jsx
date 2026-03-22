import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Layers,
  Crown,
  Terminal,
  Globe,
  Cpu,
  Database,
  ShieldCheck,
  Zap,
  Laptop,
} from "lucide-react";
import "./fullstack-immersion.css";

const FullstackImmersion = () => {
  return (
    <div className="mastery-page-layout">
      {/* LEVEL 1: NAVIGATION */}
      <nav className="mastery-nav-bar">
        <Link to="/hub" className="nav-back-link">
          <ArrowLeft size={16} /> <span>Back to Hub</span>
        </Link>
      </nav>

      {/* LEVEL 2: HERO SECTION (The Big One) */}
      <header className="mastery-hero-core">
        <div className="hero-info-grid">
          <div className="info-meta">
            <span className="badge-level">
              <Crown size={12} fill="currentColor" /> Ultimate Track
            </span>
            <span className="badge-duration">
              <Infinity size={12} /> Duration: 24 Weeks (Full Access)
            </span>
          </div>

          <h1>
            The Complete <br />{" "}
            <span className="gradient-gold">Fullstack Authority</span>
          </h1>
          <p className="hero-subtitle">
            From the first line of HTML to the final server deployment. Master
            the entire modern web ecosystem and build products that scale
            globally.
          </p>
        </div>
      </header>

      {/* LEVEL 3: THE BRIDGE (Integration Focus) */}
      <section className="competencies-section">
        <div className="section-header">
          <Layers className="header-icon" />
          <h2>The End-to-End Curriculum</h2>
        </div>

        <div className="competencies-grid">
          {/* Module 1: The Foundation */}
          <div className="comp-card">
            <Globe className="card-icon" />
            <h3>Modern Frontend Mastery</h3>
            <p>
              Master HTML5, CSS3, and JavaScript. Build responsive interfaces
              and complex Single Page Applications (SPA) with React.
            </p>
          </div>

          {/* Module 2: The Core Engine */}
          <div className="comp-card">
            <Cpu className="card-icon" />
            <h3>Robust Backend Architecture</h3>
            <p>
              Deep dive into PHP 8.2+ and Laravel. Architect clean APIs, manage
              authentication, and handle complex server-side logic.
            </p>
          </div>

          {/* Module 3: The Data Layer */}
          <div className="comp-card">
            <Database className="card-icon" />
            <h3>Data & Persistence</h3>
            <p>
              SQL mastery and database optimization. Learn how to structure data
              for high-traffic applications using MySQL and Eloquent.
            </p>
          </div>

          {/* Module 4: The Glue (Integration) */}
          <div className="comp-card highlight-gold">
            <Zap className="card-icon" />
            <h3>Fullstack Integration</h3>
            <p>
              The secret sauce. Connect your React frontend with your Laravel
              API flawlessly using Sanctum, JSON, and Middleware.
            </p>
          </div>
        </div>
      </section>

      {/* LEVEL 4: TOOLSTACK (The Complete Arsenal) */}
      <section className="toolstack-section">
        <h3>The Fullstack Arsenal</h3>
        <div className="tools-flex-grid">
          <span className="tool-item">HTML5 / CSS3</span>
          <span className="tool-item">React.js</span>
          <span className="tool-item">JavaScript (ES6+)</span>
          <span className="tool-item">PHP 8.2+</span>
          <span className="tool-item">Laravel</span>
          <span className="tool-item">MySQL</span>
          <span className="tool-item">Blade</span>
          <span className="tool-item">Git / GitHub</span>
          <span className="tool-item">REST APIs</span>
          <span className="tool-item">
            Auth (Sanctum) <ShieldCheck size={14} />
          </span>
        </div>
      </section>

      {/* LEVEL 5: OUTCOMES */}
      <section className="outcomes-section">
        <div className="outcomes-grid">
          <div className="outcome-text">
            <h3>Ready for Production</h3>
            <p>
              This is not a tutorial. This is an engineering transformation. You
              will build a real-world SaaS application from scratch and learn
              how to manage it as a Lead Developer.
            </p>
          </div>
          <div className="outcome-icon-box">
            <Laptop size={64} className="icon-outcome" />
          </div>
        </div>
      </section>

      {/* LEVEL 6: PRICING & CTA */}
      <footer className="checkout-section">
        <div className="checkout-card-premium">
          <div className="price-block-detailed">
            <span className="price-old">$799</span>
            <span className="price-current">$499</span>
            <span className="price-label">Bundle: Front + Back + Logic</span>
          </div>
          <Link to="/order/fullstack-immersion" className="btn-order-premium">
            Claim Your Authority <Crown size={18} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default FullstackImmersion;
