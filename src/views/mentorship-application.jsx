import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Crown,
  Target,
  Briefcase,
  ShieldCheck,
  Sparkles,
  Lock,
  Zap,
  Crosshair,
  Activity,
  Key,
} from "lucide-react";
import "./mentorship-application.css";

// Animations Framer Motion
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MentorshipApplication = () => {
  return (
    <div className="mentorship-elite-wrapper">
      {/* 1. TOP NAV (Glassmorphism) */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="elite-nav"
      >
        <Link to="/hub" className="elite-back-link">
          <ArrowLeft size={14} /> <span>Return to Hub</span>
        </Link>
        <div className="elite-badge-top">
          <Lock size={12} /> Application Only
        </div>
      </motion.nav>

      <motion.main
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="elite-main-content"
      >
        {/* 2. HERO SECTION */}
        <motion.header variants={fadeUp} className="elite-hero">
          <div className="hero-glare"></div>
          <div className="elite-tags">
            <span className="tag-gold">
              <Crown size={12} fill="currentColor" /> Executive Track
            </span>
            <span className="tag-dark">
              <Activity size={12} /> 1-on-1 Mentorship
            </span>
          </div>

          <h1 className="hero-title-3d">
            The Inner Circle of <br />
            <span className="gold-text-glow">Engineering Excellence</span>
          </h1>

          <p className="hero-description">
            Stop guessing your architecture. Work directly with a Senior
            Engineer to build production-ready systems, audit your codebase, and
            scale your career to the top 5% of the industry.
          </p>

          <div className="scarcity-bar">
            <div className="scarcity-stat">
              <span className="stat-value">12%</span>
              <span className="stat-label">Acceptance Rate</span>
            </div>
            <div className="scarcity-stat">
              <span className="stat-value">2</span>
              <span className="stat-label">Spots Left (Q3 2026)</span>
            </div>
            <div className="scarcity-stat">
              <span className="stat-value">NDA</span>
              <span className="stat-label">Strict Confidentiality</span>
            </div>
          </div>
        </motion.header>

        {/* 3. 3D PILLARS GRID */}
        <motion.section variants={fadeUp} className="elite-pillars-section">
          <div className="section-title-wrapper">
            <Key className="gold-icon" />
            <h2>What You Unlock</h2>
          </div>

          <div className="perspective-grid">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="elite-3d-card"
            >
              <Briefcase size={36} className="card-icon-gold" />
              <h3>Proprietary Codebases</h3>
              <p>
                Gain access to my private, production-level repositories. We
                build real SaaS architectures, not beginner tutorials.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 5, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="elite-3d-card card-highlight"
            >
              <Target size={36} className="card-icon-gold" />
              <h3>Ruthless Code Reviews</h3>
              <p>
                Every PR you submit is scrutinized. I will break your code to
                teach you resilience, security, and performance.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.02, rotateX: -5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="elite-3d-card"
            >
              <Crosshair size={36} className="card-icon-gold" />
              <h3>Career Sniper Strategy</h3>
              <p>
                We audit your CV, optimize your LinkedIn, and roleplay brutal
                technical interviews until you are bulletproof.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ scale: 1.02, rotateX: -5, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="elite-3d-card"
            >
              <Zap size={36} className="card-icon-gold" />
              <h3>24/7 Priority Hotline</h3>
              <p>
                Direct access to my private Slack. Stuck on a server crash at 2
                AM? You have a Senior dev in your pocket.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* 4. PRICING & CTA (The Vault) */}
        <motion.footer variants={fadeUp} className="elite-checkout-vault">
          <div className="vault-glow"></div>
          <div className="vault-content">
            <div className="price-lockup">
              <span className="price-currency">$</span>
              <span className="price-amount">999</span>
              <span className="price-period">/ quarter</span>
            </div>

            <ul className="vault-perks">
              <li>
                <ShieldCheck size={16} className="gold-icon" /> Intensive
                12-week program
              </li>
              <li>
                <ShieldCheck size={16} className="gold-icon" /> Weekly 60-min
                Strategy Call
              </li>
              <li>
                <ShieldCheck size={16} className="gold-icon" /> Full codebase
                audits
              </li>
            </ul>

            <Link to="/order/apply-for-mentorship" className="btn-vault-apply">
              Request Board Review <Sparkles size={18} />
            </Link>
            <p className="vault-warning">
              Applying does not guarantee admission. We review code samples
              first.
            </p>
          </div>
        </motion.footer>
      </motion.main>
    </div>
  );
};

export default MentorshipApplication;
