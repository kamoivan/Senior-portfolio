import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./landing.css";

function Landing() {
  const navigate = useNavigate();
  // Configuration de l'animation de rotation infinie
  const rotateAnimation = {
    rotateY: [0, 360],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 2,
    },
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="status-badge"
        >
          <span className="pulse-dot"></span>
          Available for new challenges
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-title"
        >
          <motion.span
            animate={rotateAnimation}
            style={{
              display: "inline-block",
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            Engineering
          </motion.span>
          <br />
          <span className="text-gradient">Scalable Systems.</span>
        </motion.h1>

        {/* Le sous-titre */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hero-description"
        >
          Fullstack Engineer. I build secure, high-performance web applications
          using most React, Laravel, and modern cloud infrastructures tools.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(56, 189, 248, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/home")}
          className="cta-button"
        >
          Get Started
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </motion.button>
      </div>
    </div>
  );
}

export default Landing;
