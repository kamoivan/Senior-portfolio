import { Link } from "react-router-dom";
import {
  Code2,
  Terminal,
  Cpu,
  Globe,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Download,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Container,
  CodeXml,
  LifeBuoy,
  Target,
} from "lucide-react";
import "./formation-hub.css";

const FormationHub = () => {
  // Explicit content for each track
  const tracks = [
    {
      id: "front-end-mastery",
      category: "Frontend",
      title: "Learn using modern Frontend tools",
      icon: <LayoutTemplate className="icon-gold" />,
      members: "1.2k+",
      views: "5k+",
      price: "199",
      date: "Self-Paced",
      requirements: ["Intermediate JS", "React Basics"],
      curriculum: [
        "Component Composition Patterns",
        "State Machines",
        "Render Performance Tuning",
        "Atomic Design",
      ],
    },
    {
      id: "back-end-mastery",
      category: "Backend",
      title: "Laravel Core & Scalability",
      icon: <Server className="icon-blue" />,
      members: "850+",
      views: "3.2k+",
      price: "249",
      date: "Self-Paced",
      requirements: ["PHP OOP", "MVC Understanding"],
      curriculum: [
        "Domain Driven Design (DDD)",
        "Solid Principles",
        "Complex API Security",
        "Query Optimization",
      ],
    },
    {
      id: "fullstack-immersion",
      category: "Fullstack",
      title: "Software Craftsmanship 360",
      icon: <Layers className="icon-purple" />,
      members: "400+",
      views: "10k+",
      price: "499",
      date: "Starts May 15, 2026",
      requirements: ["Fullstack Ambition", "Basic Tech Stack"],
      curriculum: [
        "E2E Architecture",
        "Monolith vs Microservices",
        "Auth Systems (Sanctum/JWT)",
        "Testing Strategies",
      ],
    },
  ];

  return (
    <div className="formation-page">
      {/* 1. HERO SECTION */}
      <section className="hub-hero">
        <div className="hero-visual"></div>
        <div className="hero-text-content">
          <span className="badge">Engineering Education</span>
          <h1>
            Forge Your <br />
            <span className="text-gradient">Technical Authority</span>
          </h1>
          <p className="hook">
            Stop following tutorials. Start designing systems. Deep-dive into
            advanced architectures with a CTO-led curriculum.
          </p>
        </div>
      </section>

      {/* 2. THE TRAINING TRACKS */}
      <section className="section-container">
        <h2 className="section-title">Specialized Tracks</h2>
        <div className="tracks-grid">
          {tracks.map((track) => (
            <div key={track.id} className="track-card">
              <div className="track-header">
                <span className="track-cat">{track.category}</span>
                <div className="track-stats">
                  <span>
                    <Users size={14} /> {track.members}
                  </span>
                  <span>👁️ {track.views}</span>
                </div>
              </div>

              <h3>{track.title}</h3>

              <ul className="track-curriculum">
                {track.curriculum.slice(0, 3).map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={14} /> {item}
                  </li>
                ))}
              </ul>

              <div className="track-footer">
                <div className="price-block">
                  <span className="price-label">Price</span>
                  <span className="price-value">&nbsp;${track.price}</span>
                </div>
                <br />
                <Link to={`/order/${track.id}`} className="btn-buy">
                  Order Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DEVOPS IMMERSION (The "Big One") */}
      <section className="devops-immersion-section">
        <div className="section-container">
          {/* 1. Header de la section : L'accroche */}
          <header className="devops-header">
            <div className="badge-container">
              <Zap size={16} className="icon-zap" />
              <span className="badge-text">Advanced Engineering</span>
            </div>
            <h2>The Infrastructure Engine</h2>
            <p className="lead-paragraph">
              Writing code is 50% of the battle. The other 50% is ensuring it
              scales, survives, and performs. Move beyond localhost and master
              the modern cloud stack.
            </p>
          </header>

          <div className="devops-main-grid">
            {/* 2. Côté Gauche : Expertise & Features */}
            <div className="devops-info">
              <div className="feature-item">
                <Container className="feature-icon" size={24} />
                <div>
                  <h4>Docker Mastery & Orchestration</h4>
                  <p>
                    Go beyond "it works on my machine". Build production-ready
                    images and manage multi-container ecosystems.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <Shield className="feature-icon" size={24} />
                <div>
                  <h4>CI/CD Pipelines & Security</h4>
                  <p>
                    Automate your deployment with GitHub Actions. Implement
                    zero-downtime strategies and SSL/TLS hardening.
                  </p>
                </div>
              </div>

              {/* 3. CTA : Le Bouton de commande */}
              <div className="devops-cta-box">
                <div className="pricing-mini">
                  <span className="price-label">Investment</span>
                  <span className="price-value">&nbsp;&nbsp;$1499</span>
                </div>
                <br />
                <Link to="/order/devops-immersion" className="btn-primary-glow">
                  Apply for the Cohort <ArrowRight size={20} />
                </Link>
                <p className="cohort-status">
                  Next cohort starts: Not scheduled yet &nbsp;•{" "}
                  <strong>No seats available for now, checks frequently</strong>
                </p>
              </div>
            </div>

            {/* 4. Côté Droit : Le Visuel Technique (Docker Visual) */}
            <div className="devops-visual-terminal">
              <div className="terminal-window">
                <div className="terminal-topbar">
                  <div className="window-controls">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="terminal-filename">
                    production.docker-compose.yml
                  </span>
                </div>
                <div className="terminal-content">
                  <pre>
                    <code>
                      <span className="c-blue">services:</span>
                      <br />
                      &nbsp;&nbsp;<span className="c-green">api_gateway:</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="c-blue">image:</span> nginx:alpine
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="c-blue">restart:</span> always
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="c-blue">depends_on:</span> [app_server]
                      <br />
                      <br />
                      <span className="c-blue">networks:</span>
                      <br />
                      &nbsp;&nbsp;<span className="c-green">backend_mesh:</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="c-blue">driver:</span> bridge
                    </code>
                  </pre>
                  <div className="terminal-status-bar">
                    <span className="status-indicator pulse"></span>
                    <span className="status-text">
                      Containers Healthy: 12/12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. MENTORING */}
      <section className="cto-mentorship-area">
        <div className="section-container">
          <div className="mentorship-grid">
            {/* LEFT: THE PITCH (Copywriting High-Level) */}
            <div className="mentorship-content">
              <div className="status-pill">
                <Zap size={14} /> <span>LIMITED TO 5 PROJECTS</span>
              </div>
              <h2 className="title-spicy">
                Your Private <br />{" "}
                <span className="text-gradient">Technical Authority.</span>
              </h2>
              <p className="lead-text">
                I don't just teach code; I architect success. From{" "}
                <strong>Infrastructure Scaling</strong> to
                <strong>Product-Market Fit</strong>, I act as your Fractional
                CTO to ensure your startup doesn't just ship, but dominates.
              </p>

              <div className="perks-list">
                <div className="perk">
                  <Target size={20} className="text-accent" />
                  <p>
                    <strong>Strategic Oversight:</strong> No more tech debt. We
                    build for 100k users from Day 1.
                  </p>
                </div>
                <div className="perk">
                  <CodeXml size={20} className="text-accent" />
                  <p>
                    <strong>Code Craftsmanship:</strong> Peer reviews that turn
                    juniors into Senior Architects.
                  </p>
                </div>
                <div className="perk">
                  <TrendingUp size={20} className="text-accent" />
                  <p>
                    <strong>Business Growth:</strong> Aligning your stack with
                    your revenue goals.
                  </p>
                </div>
              </div>

              {/* LE LIEN VERS LA PAGE DÉDIÉE */}
              <Link to="/mentorship-application" className="btn-mentorship-cta">
                Apply for Mentorship <ArrowUpRight size={20} />
              </Link>
            </div>

            {/* RIGHT: THE "SUCCESS MONITOR" (Visual Dashboard) */}
            <div className="success-monitor">
              <div className="monitor-card glass-morphism">
                <div className="monitor-header">
                  <span className="label">MENTEE REVENUE GROWTH</span>
                  <span className="growth-tag">+60%</span>
                </div>
                <div className="visual-chart">
                  {/* Ici on imagine un mini graphique ou une barre de progression */}
                  <div className="bar-container">
                    <div className="bar" style={{ height: "40%" }}></div>
                    <div className="bar" style={{ height: "65%" }}></div>
                    <div className="bar active" style={{ height: "90%" }}></div>
                  </div>
                </div>
              </div>

              <div className="live-hotline-card">
                <div className="hotline-top">
                  <div className="pulse-red"></div>
                  <br />
                  <span>CTO EMERGENCY HOTLINE</span>
                </div>
                <div className="chat-bubble">
                  <p className="msg-student">
                    "Hi SAM, the load balancer is failing under heavy traffic!"
                  </p>
                  <p className="msg-ivan">
                    "Scale the clusters and check the Nginx upstream. I'm
                    jumping in the shell now."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE LAB (Free Resources) */}
      <section className="lab-section">
        <h2 className="section-title">The Lab</h2>
        <div className="lab-list">
          <div className="lab-item">
            <div className="lab-info">
              <h4>System Design Checklist</h4>
              <p>PDF Guide • 1,200 Downloads</p>
            </div>
            <button className="btn-download">
              <Download />
            </button>
          </div>
          <div className="lab-item">
            <div className="lab-info">
              <h4>React Perf Profiling Template</h4>
              <p>Notion Page • 850 Downloads</p>
            </div>
            <button className="btn-download">
              <Download />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper for Lucide (to be imported if used outside)
const LayoutTemplate = ({ className }) => <Code2 className={className} />;
const Server = ({ className }) => <Cpu className={className} />;
const Layers = ({ className }) => <Globe className={className} />;

export default FormationHub;
