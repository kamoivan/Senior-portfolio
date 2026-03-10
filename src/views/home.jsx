import { motion } from "framer-motion";
import "./home.css";
import myHeroImage from "../assets/ceo_mjp.jpeg";
import { Link } from "react-router-dom";
import mjpLogo from "../assets/new_logo_myJobPortal.png";
import { HiOutlineDatabase, HiOutlineDesktopComputer } from "react-icons/hi";
import { FaCogs } from "react-icons/fa";
import {
  SiReact,
  SiLaravel,
  SiJavascript,
  SiMysql,
  SiLinux,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiGitlab,
  SiCloudflare,
  SiAuth0,
  SiLetsencrypt,
  Si2Fas,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiTerminal } from "react-icons/di";

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 }, ease: "easeOut" },
  };

  const ballAnimation = {
    looping: {
      x: ["-100%", "100px", "0%"],
    },
    transition: {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  return (
    <main className="home">
      {/* HERO */}

      <section className="hero-grid">
        <motion.div
          className="hero-text"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1>Engineering Scalable Digital Systems</h1>

          <p>
            Fullstack engineer and tech founder building secure,
            high-performance and scalable digital infrastructures across modern
            technology stacks.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="primary-btn">
              View Projects
            </Link>

            <Link to="/contact" className="secondary-btn">
              Let's Work
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <div className="visual-shape">
            <img src={myHeroImage} alt="my-hero" />
          </div>
        </motion.div>
      </section>

      <motion.h2
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Mastering skills & Building tools
      </motion.h2>
      <section className="expertise-grid">
        <motion.div
          className="expert-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3>Fullstack Engineering</h3>

          <p>
            Building end-to-end digital products from interactive user
            interfaces to robust backend logic. I bridge the gap between complex
            business requirements and scalable codebases, focusing on
            maintainability and sub-second performance.
          </p>

          <div className="icon-row">
            <SiReact className="tech-icon" title="React" />
            <SiJavascript className="tech-icon" title="Javascript" />
            <SiLaravel className="tech-icon" title="Laravel" />
            <SiMysql className="tech-icon" title="Mysql" />
          </div>
        </motion.div>

        <motion.div
          className="expert-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3>Security & DevOps</h3>

          <p>
            Securing the entire software development lifecycle. I implement
            zero-trust security layers, automated CI/CD pipelines, and hardened
            infrastructures to protect data integrity and ensure seamless,
            risk-free deployments.
          </p>
          <div className="icon-row">
            <SiGit className="tech-icon" title="Git" />
            <SiGithub className="tech-icon" title="Github" />
            <SiGitlab className="tech-icon" title="Gitlab" />
            <SiAuth0 className="tech-icon" title="Auth0" />
            <Si2Fas className="tech-icon" title="2FA" />
            <SiLetsencrypt className="tech-icon" title="SSL" />
          </div>
        </motion.div>

        <motion.div
          className="expert-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3>Scalable Architecture & Cloud</h3>

          <p>
            Designing high-availability infrastructures built to scale. I
            specialize in architecting cloud-native ecosystems using container
            orchestration and microservices patterns. My focus is on ensuring
            seamless horizontal scaling, system resilience, and optimized
            resource management for production grade environments.
          </p>

          <div className="icon-row">
            <SiLinux className="tech-icon" title="Linux" />
            <SiDocker className="tech-icon" title="Docker" />
            <SiKubernetes className="tech-icon" title="Kubernetes" />
            <FaAws className="tech-icon" title="AWS" />
            <DiTerminal className="tech-icon" title="Gitbash" />
          </div>
        </motion.div>
      </section>

      {/* ENTREPRENEURIAL */}

      <section className="entrepreneur-section">
        <motion.div
          className="entrepreneur-content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Entrepreneur & Tech Founder</h2>

          <p>
            Beyond engineering, I build products and digital ventures. As
            founder of MyJobPortal, I focus on creating scalable platforms
            solving real-world problems while leading technical strategy and
            product execution.
          </p>
        </motion.div>
      </section>

      {/* PROJECT HIGHLIGHT */}

      <section className="projects-preview">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Selected Work
        </motion.h2>

        <div className="projects-grid">
          <motion.div
            className="project-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div
              initial="hidden"
              whileHover="show"
              viewport={{ once: true }}
              variants={ballAnimation}
              animate="looping"
              className="project-image"
            >
              <img src={mjpLogo} alt="myJobPortal" />
            </motion.div>
            <br />
            <h3>MyJobPortal</h3>

            <h4>Revolutionizing Talent Acquisition</h4>

            <p>
              A high-performance recruitment ecosystem engineered for speed,
              scalability, and seamless user experiences.
              <br />
              myJobPortal is more than just a job board; it's a full-scale
              digital venture, i built from to the ground up. As the lead
              Architecture & founder, building and scaling this platform to
              solve modern recruitment bottlenecks.
            </p>

            <div className="image-overlay">
              <a
                href="https://my-job-portal.com"
                target="_blank"
                className="visit-link-btn"
              >
                Visit project ↗
              </a>
            </div>
          </motion.div>

          <motion.div className="project-card business-focus" variants={fadeUp}>
            <div className="card-header">
              <span className="project-category">Enterprise & SMEs</span>
              <h3>Digital Transformation Partner</h3>
            </div>

            <div className="business-brief">
              <p>
                I help organizations and founders{" "}
                <strong>digitize, fluidify, and optimize </strong>
                their core activities through bespoke software architecture.
              </p>

              <ul className="service-list-minimal">
                <li>
                  <HiOutlineDatabase className="mini-icon" /> ERP & Management
                  Systems
                </li>
                <li>
                  <HiOutlineDesktopComputer className="mini-icon" /> Scalable
                  SaaS Solutions
                </li>
                <li>
                  <FaCogs className="mini-icon" /> Workflow Automation
                </li>
              </ul>
            </div>

            {/* LE LIEN VERS LA PAGE PROJETS DÉDIÉE */}
            <div className="button-area">
              <Link to="/projects" className="secondary-btn">
                View Work ↗
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}

      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Let's Build Something Meaningful</h2>

          <p>
            Open to collaborations, ambitious projects and innovative digital
            ventures.
          </p>

          <Link to="/contact" className="primary-btn">
            Start a Conversation
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
