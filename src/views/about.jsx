import { motion } from "framer-motion";
import {
  FaServer,
  FaShieldAlt,
  FaCodeBranch,
  FaChartLine,
  FaRocket,
  FaLayerGroup,
} from "react-icons/fa";

import "./about.css";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="about-page">
      {/* HERO */}

      <section className="about-hero">
        <motion.div
          variants={zoomIn}
          initial="hidden"
          animate="show"
          className="hero-content"
        >
          <h1 className="about-title">
            Engineering
            <span className="gradient"> Scalable Platforms</span>
          </h1>

          <p className="about-subtitle">
            I'm <strong>Kamo Armand Ivan</strong>, Software Engineer, Tech
            Founder and CTO of MyJobPortal. I design and build scalable digital
            systems that help businesses automate operations, optimize workflows
            and scale their impact.
          </p>
        </motion.div>
      </section>

      {/* STORY */}

      <section className="about-story">
        <div className="story-grid">
          <motion.div
            className="story-card"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3>The Builder Mindset</h3>

            <p>
              With a strong background in mathematics and scientific
              disciplines, my passion for technology started with solving
              complex problems and designing logical systems.
            </p>

            <p>
              Today I combine engineering, product thinking and entrepreneurship
              to build digital infrastructures that power real businesses.
            </p>
          </motion.div>

          <motion.div
            className="story-card"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3>The Mission</h3>

            <p>
              I collaborate with startups, enterprises and entrepreneurs to
              transform operational challenges into scalable digital platforms.
            </p>

            <p>
              From SaaS platforms to internal systems, I build technologies that
              increase efficiency, automate processes and enable long-term
              growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ENGINEERING */}

      <section className="engineering">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Engineering Pillars
        </motion.h2>

        <motion.div
          className="bento-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="bento-card"
            variants={fadeUp}
            whileHover={{ scale: 1.04, y: -6 }}
          >
            <FaCodeBranch className="icon" />

            <h4>Clean Architecture</h4>

            <p>
              Designing maintainable and scalable systems that evolve with
              products.
            </p>
          </motion.div>

          <motion.div
            className="bento-card"
            variants={fadeUp}
            whileHover={{ scale: 1.04, y: -6 }}
          >
            <FaChartLine className="icon" />

            <h4>Scalability</h4>

            <p>
              Platforms designed to grow from early startup stage to large scale
              systems.
            </p>
          </motion.div>

          <motion.div
            className="bento-card"
            variants={fadeUp}
            whileHover={{ scale: 1.04, y: -6 }}
          >
            <FaServer className="icon" />

            <h4>Performance</h4>

            <p>
              Optimizing APIs, databases and backend logic for fast systems.
            </p>
          </motion.div>

          <motion.div
            className="bento-card"
            variants={fadeUp}
            whileHover={{ scale: 1.04, y: -6 }}
          >
            <FaShieldAlt className="icon" />

            <h4>Security</h4>

            <p>
              Building secure platforms with strong protection and safe
              infrastructures.
            </p>
          </motion.div>

          <motion.div
            className="bento-card"
            variants={fadeUp}
            whileHover={{ scale: 1.04, y: -6 }}
          >
            <FaRocket className="icon" />

            <h4>Product Thinking</h4>

            <p>Engineering aligned with product strategy and business goals.</p>
          </motion.div>

          <motion.div
            className="bento-card"
            variants={fadeUp}
            whileHover={{ scale: 1.04, y: -6 }}
          >
            <FaLayerGroup className="icon" />

            <h4>Systems Design</h4>

            <p>
              Architecting complex software ecosystems and scalable platforms.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* BUILDER */}

      <section className="builder">
        <div className="builder-grid">
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>Building Digital Products</h2>

            <p>
              Beyond engineering services, I design and launch my own digital
              platforms.
            </p>

            <p>
              MyJobPortal is a modern recruitment platform connecting companies
              and talents through a scalable system.
            </p>

            <p>
              I believe great software is not just written, it is built,
              launched and continuously improved.
            </p>
          </motion.div>

          <motion.div
            className="builder-card"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>MyJobPortal</h3>

            <p>
              Recruitment SaaS platform designed for modern companies and
              startups.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STACK */}

      <section className="stack">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Technologies
        </motion.h2>

        <motion.div
          className="stack-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} whileHover={{ scale: 1.1 }}>
            React
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ scale: 1.1 }}>
            Laravel
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ scale: 1.1 }}>
            Node
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ scale: 1.1 }}>
            REST APIs
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ scale: 1.1 }}>
            PostgreSQL
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ scale: 1.1 }}>
            Cloud
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
