import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaHeart,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLinux,
  FaLaravel,
  FaReact,
  FaJs,
  FaDatabase,
  FaPhp,
  FaNodeJs,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedis,
  SiVite,
  SiCpanel,
  SiGitlab,
  SiPostgresql,
} from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const techs = [
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <SiPostgresql />, name: "MySQL" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaJs />, name: "JS" },
    { icon: <SiCpanel />, name: "cPanel" },
    { icon: <SiGitlab />, name: "GitLab" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <FaNodeJs />, name: "Node" },
    { icon: <FaPython />, name: "Python" },
  ];

  const countries = [
    { code: "cm", name: "Cameroun" },
    { code: "ci", name: "CIV" },
    { code: "cf", name: "RCA" },
    { code: "ca", name: "Canada" },
    { code: "fr", name: "France" },
    { code: "us", name: "USA" },
    { code: "de", name: "Allemagne" },
  ];

  return (
    <footer className="footer">
      {/* 1. TECH SLIDER (Infinite Marquee) */}
      <div className="tech-slider">
        <div className="tech-track">
          {[...techs, ...techs].map((tech, index) => (
            <div className="tech-item" key={index}>
              {tech.icon} <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-grid">
          {/* BRAND SECTION */}
          <div className="footer-col">
            <h2 className="footer-logo">
              ivan Kamo<span>.</span>
            </h2>
            <p className="footer-bio">
              Architecting high-availability systems and scalable digital
              ecosystems for business.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ivan-kamo" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://www.github.com/kamoivan" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/share/1H5JBgiSbE/?mibextid=wwXlfr"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a href="https://x.com/ivan_belmann1?s=21" target="_blank">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick links</h4>
            <ul className="footer-nav">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* COUNTRIES SECTION */}
          <div className="footer-col">
            <h4>Global Presence</h4>
            <div className="flag-grid">
              {countries.map((c) => (
                <img
                  key={c.code}
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  alt={c.name}
                  title={c.name}
                />
              ))}
            </div>
            <p className="status-text">
              Available for worldwide collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* 4. COPYRIGHT BAR */}
      <div className="footer-bottom">
        <p>
          © {currentYear} Ivan Kamo — Software Engineer & CTO. All Rights
          Reserved.
        </p>
        <div className="made-with">
          Built with <FaHeart className="heart" /> in Cameroon
        </div>
      </div>
    </footer>
  );
};

export default Footer;
