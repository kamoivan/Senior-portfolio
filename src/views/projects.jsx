import { motion } from "framer-motion";
import mjpLogo from "../assets/new_logo_myJobPortal.png";
import "./projects.css";
import { FaReact, FaLaravel, FaServer, FaDatabase } from "react-icons/fa";

export default function Projects() {
  // CONFIGURATION DES ANIMATIONS
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "circOut" } },
  };

  const reveal = {
    hidden: { opacity: 0, scale: 1 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "backOut" },
    },
  };

  return (
    <div className="projects-page">
      {/* HERO SECTION */}
      <section className="projects-hero">
        <div className="container">
          {/* TYPEWRITER EFFECT sur le titre */}
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              borderRight: "3px solid #8b5cf6",
            }}
            transition={{ duration: 2.5, ease: "steps(30)" }}
          >
            Projects & Digital Platforms
          </motion.h1>

          {/* SLIDE LEFT sur le texte d'intro */}
          <motion.p variants={slideLeft} initial="hidden" animate="show">
            I design and build scalable digital solutions for businesses,
            startups and entrepreneurs. From SaaS platforms to enterprise
            systems, every project is engineered for performance, scalability
            and long-term growth.
          </motion.p>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="featured-project">
        <motion.div
          className="featured-grid"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="featured-text">
            <h2>myJobPortal</h2>
            <a href="https://www.my-job-portal.com" target="_blank">
              visit www.my-job-portal.com
            </a>
            <p>
              MyJobPortal is a modern recruitment platform connecting companies
              and talents through a powerful and scalable infrastructure. The
              system includes job management, candidate tracking, employer
              dashboards and advanced filtering.
            </p>
            <p>
              Designed as a scalable SaaS architecture, it can evolve into a
              multi-tenant recruitment ecosystem serving startups, HR agencies
              and enterprises.
            </p>

            <div className="tech-icons">
              <FaReact /> <FaLaravel /> <FaServer /> <FaDatabase />
            </div>
          </div>

          <div className="featured-image">
            <motion.div
              className="mockup"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <img src={mjpLogo} alt="homeScreen" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="products">
        <motion.h2 variants={reveal} initial="hidden" whileInView="show">
          Digital Products & Platforms
        </motion.h2>

        <div className="projects-grid">
          {/* REVEAL (Scale + Fade) sur les cartes */}
          {[
            {
              title: "Business Automation System",
              text: "Internal management tools designed to automate business processes, increase productivity and reduce operational friction.",
            },
            {
              title: "E-Commerce Infrastructure",
              text: "Scalable online commerce systems designed for performance, secure payments and high traffic environments.",
            },
            {
              title: "SaaS Platforms",
              text: "Cloud based platforms built for startups and companies needing scalable digital services and subscription models.",
            },
            {
              title: "Enterprise Tools",
              text: "Custom software helping organizations manage operations, data and workflows with reliability and scalability.",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -10 }} // Petit effet de lévitation au survol
            >
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE SECTION */}
      <section className="architecture">
        <motion.div variants={slideLeft} initial="hidden" whileInView="show">
          <h2>Engineering Approach</h2>
          <p>
            Every system is designed with modern architecture principles:
            performance, maintainability and scalability. I combine robust
            backend systems with modern frontend technologies to deliver high
            quality digital products.
          </p>
          <div className="stack">
            {[
              "React",
              "Laravel",
              "REST APIs",
              "Cloud Infrastructure",
              "Database Optimization",
            ].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }}>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="projects-cta">
        <motion.div variants={reveal} initial="hidden" whileInView="show">
          <h2>Let's Build Something Powerful</h2>
          <p>
            If you're building a startup, scaling a business or launching a
            digital product, I can help you design and develop the technology
            behind it.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
