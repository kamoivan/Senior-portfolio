import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Cloud,
  Copy,
  Database,
  Globe,
  Server,
  ShieldCheck,
  Sparkles,
  Mail,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "./lws-partnership.css";
import IvanKamo from "../assets/ivankamo.jpeg";
import IkLogo from "../assets/IK_logo.png";
import LwsLogo from "../assets/lws-logo.webp";
import Infrastructure from "../assets/infrastructures.png";
import OStorage from "../assets/online-storage.png";
import DomainName from "../assets/domain-name.jpg";
import WebHosting from "../assets/web-hosting.jpg";
import DedicatedServer from "../assets/dedicated-server.webp";

// ============================================================
// CONFIGURATION
// ============================================================

// Remplace cette URL par TON véritable lien affilié LWS.
const AFFILIATE_URL =
  "https://www.lws.fr?utm_source=affiliation&utm_medium=affiliate&utm_campaign=aff_1457531196";

// Remplace par ton véritable code promo.
const PROMO_CODE = "CV336";

// ============================================================
// DATA
// ============================================================

const solutions = [
  {
    number: "01",
    title: "Online Storage",
    description:
      "Keep your files accessible, organized and available whenever you need them.",
    icon: Cloud,
    image: OStorage,
  },
  {
    number: "02",
    title: "Domain Name",
    description:
      "Build your digital identity with a domain name that represents your project.",
    icon: Globe,
    image: DomainName,
  },
  {
    number: "03",
    title: "Web Hosting",
    description:
      "Deploy websites and web projects on reliable hosting infrastructure.",
    icon: Server,
    image: WebHosting,
  },
  {
    number: "04",
    title: "Dedicated Server",
    description:
      "Get dedicated resources and full control for demanding applications and workloads.",
    icon: Database,
    image: DedicatedServer,
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Reliable infrastructure",
    description:
      "Infrastructure designed to support your websites and digital projects.",
  },
  {
    icon: Sparkles,
    title: "Built for projects",
    description:
      "Solutions adapted to different stages, from a simple website to demanding applications.",
  },
  {
    icon: Check,
    title: "Partner advantage",
    description:
      "Use the dedicated partner code to receive an additional 15% discount.",
  },
];

// ============================================================
// ANIMATION VARIANTS
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// ============================================================
// COMPONENT
// ============================================================

function LwsPartnership() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyPromoCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch (error) {
      console.error("Unable to copy promo code:", error);
    }
  };

  return (
    <main className="lws-partnership-page">
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="lws-hero">
        <div className="lws-hero-glow lws-hero-glow-one"></div>
        <div className="lws-hero-glow lws-hero-glow-two"></div>

        <div className="lws-container">
          <div className="lws-hero-grid">
            {/* PROFILE */}
            <motion.div
              className="lws-profile-wrapper"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <div className="lws-profile-orbit"></div>

              <motion.div
                className="lws-profile-card"
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <img
                  src={IvanKamo}
                  alt="Ivan Kamo"
                  className="lws-profile-image"
                />

                <div className="lws-profile-overlay"></div>

                <div className="lws-profile-caption">
                  <span>Fullstack Engineer</span>
                  <strong>Ivan Kamo</strong>
                </div>
              </motion.div>
            </motion.div>

            {/* HERO CONTENT */}
            <motion.div
              className="lws-hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div className="lws-eyebrow" variants={fadeUp}>
                <span className="lws-eyebrow-dot"></span>
                Technology Partnership
              </motion.div>

              <motion.div className="lws-brand-lockup" variants={fadeUp}>
                <img src={IkLogo} alt="IK" className="lws-ik-logo" />

                <span className="lws-brand-x">×</span>

                <img src={LwsLogo} alt="LWS" className="lws-lws-logo" />
              </motion.div>

              <motion.h1 className="lws-hero-title" variants={fadeUp}>
                Reliable infrastructure
                <span> for your digital projects.</span>
              </motion.h1>

              <motion.p className="lws-hero-description" variants={fadeUp}>
                I partner with LWS to provide hosting and infrastructure
                solutions for websites, applications and digital projects.
              </motion.p>

              <motion.div className="lws-hero-actions" variants={fadeUp}>
                <motion.a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lws-primary-button"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  Discover the offer
                  <ArrowRight size={18} />
                </motion.a>

                <motion.button
                  type="button"
                  className="lws-secondary-button"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() => {
                    document.getElementById("lws-solutions")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Explore solutions
                </motion.button>
              </motion.div>

              <motion.div className="lws-hero-trust" variants={fadeUp}>
                <ShieldCheck size={16} />
                <span>Hosting solutions for modern digital projects</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          INTRO
      ====================================================== */}

      <section className="lws-intro-section">
        <div className="lws-container">
          <motion.div
            className="lws-intro-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="lws-intro-visual" variants={scaleIn}>
              <div className="lws-intro-image-frame">
                <img
                  src={Infrastructure}
                  alt="LWS infrastructure"
                  className="lws-intro-image"
                />

                <div className="lws-intro-image-overlay"></div>

                <div className="lws-floating-badge">
                  <Server size={18} />
                  <span>Infrastructure</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="lws-intro-content" variants={fadeUp}>
              <span className="lws-section-label">The partnership</span>

              <h2>
                The right infrastructure
                <span> starts with the right foundation.</span>
              </h2>

              <p>
                Building a digital product is only one part of the equation. The
                infrastructure behind it matters just as much.
              </p>

              <p>
                Through this partnership with LWS, I can recommend hosting
                solutions suited to different project requirements.
              </p>

              <div className="lws-intro-points">
                <div>
                  <Check size={17} />
                  <span>Web projects</span>
                </div>

                <div>
                  <Check size={17} />
                  <span>Digital products</span>
                </div>

                <div>
                  <Check size={17} />
                  <span>Business infrastructure</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          SOLUTIONS
      ====================================================== */}

      <section id="lws-solutions" className="lws-solutions-section">
        <div className="lws-container">
          <motion.div
            className="lws-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="lws-section-label">Hosting solutions</span>

            <h2>
              Choose what your
              <span> project needs.</span>
            </h2>

            <p>
              From your domain name to dedicated infrastructure, choose the
              solution that fits your project.
            </p>
          </motion.div>

          <motion.div
            className="lws-solutions-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <motion.a
                  key={solution.number}
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lws-solution-card"
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <div
                    className="lws-solution-background"
                    style={{
                      backgroundImage: `url(${solution.image})`,
                    }}
                  ></div>

                  <div className="lws-solution-overlay"></div>

                  <div className="lws-solution-content">
                    <div className="lws-solution-top">
                      <span className="lws-solution-number">
                        {solution.number}
                      </span>

                      <div className="lws-solution-icon">
                        <Icon size={21} />
                      </div>
                    </div>

                    <div className="lws-solution-bottom">
                      <h3>{solution.title}</h3>

                      <p>{solution.description}</p>

                      <span className="lws-solution-link">
                        Explore
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          BENEFITS
      ====================================================== */}

      <section className="lws-benefits-section">
        <div className="lws-container">
          <motion.div
            className="lws-section-heading lws-section-heading-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="lws-section-label">Why this partnership</span>

            <h2>
              Infrastructure that
              <span> supports your ambition.</span>
            </h2>
          </motion.div>

          <motion.div
            className="lws-benefits-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  className="lws-benefit-card"
                  variants={fadeUp}
                  whileHover={{
                    y: -5,
                  }}
                >
                  <div className="lws-benefit-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          PARTNER OFFER
      ====================================================== */}

      <section className="lws-offer-section">
        <div className="lws-container">
          <motion.div
            className="lws-offer-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
          >
            <div className="lws-offer-glow"></div>

            <div className="lws-offer-content">
              <span className="lws-section-label">Partner advantage</span>

              <h2>
                Save <span>15%</span> on your order.
              </h2>

              <p>
                Use my dedicated partner code when placing your order with LWS
                and benefit from an additional 15% discount on your cart.
              </p>

              <div className="lws-promo-wrapper">
                <span className="lws-promo-label">Partner code</span>

                <div className="lws-promo-row">
                  <div className="lws-promo-code">{PROMO_CODE}</div>

                  <motion.button
                    type="button"
                    className="lws-copy-button"
                    onClick={copyPromoCode}
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                  >
                    {copied ? (
                      <>
                        <Check size={17} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={17} />
                        Copy code
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              <motion.a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lws-primary-button"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                Use the offer
                <ArrowRight size={18} />
              </motion.a>
            </div>

            <div className="lws-offer-side">
              <div className="lws-offer-side-icon">
                <Sparkles size={24} />
              </div>

              <strong>Partner offer</strong>

              <span>Your project deserves the right infrastructure.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          QR CODE
      ====================================================== */}

      <section className="lws-qr-section">
        <div className="lws-container">
          <motion.div
            className="lws-qr-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="lws-qr-content" variants={fadeUp}>
              <span className="lws-section-label">Take it with you</span>

              <h2>
                Discover the offer
                <span> from your phone.</span>
              </h2>

              <p>
                Scan the QR code to access the LWS offer directly. Your partner
                discount code can then be used during checkout.
              </p>

              <div className="lws-direct-link">
                <span>Can't scan?</span>

                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the offer directly
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div className="lws-qr-wrapper" variants={scaleIn}>
              <div className="lws-qr-card">
                <div className="lws-qr-code">
                  <QRCodeSVG
                    value={AFFILIATE_URL}
                    size={190}
                    bgColor="#ffffff"
                    fgColor="#0a0a0a"
                    level="H"
                    includeMargin
                  />
                </div>

                <span className="lws-qr-caption">Scan to access the offer</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="lws-final-cta">
        <div className="lws-container">
          <motion.div
            className="lws-final-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="lws-section-label">Ready to build?</span>

            <h2>
              Let's put your project
              <span> on the right infrastructure.</span>
            </h2>

            <p>
              Explore the available LWS solutions and use your partner advantage
              when you're ready.
            </p>

            <motion.a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lws-primary-button"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Explore LWS
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default LwsPartnership;
