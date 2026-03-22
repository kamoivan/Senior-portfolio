import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  CalendarDays,
  BookOpenText,
  Braces,
  Puzzle,
  Workflow,
  GitBranch,
  Briefcase,
} from "lucide-react";
import "./front-end-mastery.css";

const FrontEndMastery = () => {
  return (
    <div className="mastery-page-layout">
      {/* LEVEL 1: NAVIGATION (Glassmorphism) */}
      <nav className="mastery-nav-bar">
        <Link to="/formation-hub" className="nav-back-link">
          <ArrowLeft size={18} /> <span>Back to Hub</span>
        </Link>
      </nav>

      {/* LEVEL 2: HERO SECTION (Value Proposition) */}
      <header className="mastery-hero-core">
        <div className="hero-info-grid">
          <div className="info-meta">
            <span className="badge-level">
              <Target size={12} /> Level: Beginner to Pro
            </span>
            <span className="badge-duration">
              <CalendarDays size={12} /> Duration: 12 Weeks
            </span>
          </div>

          <h1>
            Crafting Solid <br />{" "}
            <span className="gradient-gold">Web Interfaces</span>
          </h1>
          <p className="hero-subtitle">
            Skip the hype. Master the core principles of HTML, CSS, JavaScript,
            and modern UI rendering. Build UIs that are fast, clean, and
            maintainable.
          </p>
        </div>
      </header>

      {/* LEVEL 3: CORE COMPETENCIES (Silicon Valley Grid) */}
      <section className="competencies-section">
        <div className="section-header">
          <BookOpenText className="header-icon" />
          <h2>Core Learning Modules</h2>
        </div>

        <div className="competencies-grid">
          {/* Module 1: HTML & CSS */}
          <div className="comp-card">
            <Braces className="card-icon" />
            <h3>Semantic Structure & Styling</h3>
            <p>
              Go beyond divs. Learn proper document structure, Flexbox, CSS
              Grid, and responsive design fundamentals.
            </p>
          </div>

          {/* Module 2: JavaScript */}
          <div className="comp-card">
            <Puzzle className="card-icon" />
            <h3>DOM & Pure Logic</h3>
            <p>
              The brain of your page. Master events, DOM manipulation, arrays,
              and fetching data without frameworks.
            </p>
          </div>

          {/* Module 3: React & Blade */}
          <div className="comp-card highlight-gold">
            <Workflow className="card-icon" />
            <h3>UI Components & Templating</h3>
            <p>
              Modern workflow. Organize your interfaces with React components
              and Laravel's Blade views.
            </p>
          </div>
        </div>
      </section>

      {/* LEVEL 4: TOOLSTACK VISUALIZER */}
      <section className="toolstack-section">
        <h3>Mastered Technologies</h3>
        <div className="tools-flex-grid">
          <span className="tool-item">HTML5</span>
          <span className="tool-item">CSS3</span>
          <span className="tool-item">JavaScript (ES6+)</span>
          <span className="tool-item">React.js</span>
          <span className="tool-item">Blade (Laravel)</span>
          <span className="tool-item">
            Git / GitHub <GitBranch size={14} />
          </span>
        </div>
      </section>

      {/* LEVEL 5: OUTCOMES & OBJECTIVES */}
      <section className="outcomes-section">
        <div className="outcomes-grid">
          <div className="outcome-text">
            <h3>Program Outcomes</h3>
            <p>
              By the end of this track, you will be able to build professional,
              responsive websites from scratch, manage complex UI states, and
              deploy your projects using industry-standard version control.
            </p>
          </div>
          <div className="outcome-icon-box">
            <Briefcase size={64} className="icon-outcome" />
          </div>
        </div>
      </section>

      {/* LEVEL 6: PRICING & CTA (Isolated Premium Box) */}
      <footer className="checkout-section">
        <div className="checkout-card-premium">
          <div className="price-block-detailed">
            <span className="price-old">$350</span>
            <span className="price-current">$199</span>
            <span className="price-label">Lifetime Access</span>
          </div>
          <Link to="/contact" className="btn-order-premium">
            Join the Track
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default FrontEndMastery;
