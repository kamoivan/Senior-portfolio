import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  CircleAlert,
  Clock3,
  Code2,
  Brain,
  Layers3,
  UserRound,
  Smartphone,
  X,
} from "lucide-react";
import { toast } from "react-toastify";

import "./assessment.css";

const Assessment = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    payerNumber: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const selectPaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mqpkynyb", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          payerNumber: formData.payerNumber,
          paymentMethod:
            paymentMethod === "orange-money" ? "Orange Money" : "MTN MoMo",
          amount: "$10",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);

        toast.success("Your request has been submitted successfully.");
      } else {
        toast.error(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      toast.error("Unable to submit your request. Please try again.");
    }
  };

  const closeForm = () => {
    setShowForm(false);

    if (submitted) {
      setSubmitted(false);
      setPaymentMethod("");
      setFormData({
        name: "",
        email: "",
        payerNumber: "",
      });
    }
  };

  return (
    <main className="assessment-page">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="assessment-hero">
        <div className="assessment-grid-bg"></div>

        <div className="assessment-hero-content">
          <div className="assessment-eyebrow">
            <CircleAlert size={15} />
            <span>TECHNICAL ASSESSMENT</span>
          </div>

          <h1>
            KNOW WHERE
            <br />
            <span>YOU STAND.</span>
          </h1>

          <p className="assessment-intro">
            A focused 30–45 minute technical interview to understand your
            current level, how you think, how you solve problems and what you
            should learn next.
          </p>

          <div className="assessment-meta">
            <div className="assessment-meta-item">
              <Clock3 size={17} />
              <span>30–45 MIN</span>
            </div>

            <div className="assessment-meta-item">
              <strong>$10</strong>
              <span>ASSESSMENT</span>
            </div>

            <div className="assessment-meta-item">
              <span className="online-dot"></span>
              <span>ONLINE</span>
            </div>
          </div>

          <button
            type="button"
            className="assessment-main-cta"
            onClick={() => setShowForm(true)}
          >
            <span>Book my assessment</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* =====================================================
          WHAT WE EVALUATE
      ====================================================== */}

      <section className="assessment-evaluation">
        <div className="assessment-section-inner">
          <div className="section-heading">
            <span>WHAT WE EVALUATE</span>

            <h2>Beyond frameworks and tools.</h2>

            <p>
              The assessment focuses on the foundations behind your technical
              ability.
            </p>
          </div>

          <div className="evaluation-grid">
            <article className="evaluation-card">
              <div className="evaluation-icon">
                <Brain size={21} />
              </div>

              <div>
                <h3>Logic & Reasoning</h3>

                <p>
                  How you analyse a problem, structure your thoughts and
                  approach a solution.
                </p>
              </div>
            </article>

            <article className="evaluation-card">
              <div className="evaluation-icon">
                <Code2 size={21} />
              </div>

              <div>
                <h3>Algorithms & Fundamentals</h3>

                <p>
                  Programming concepts, algorithms, syntax and core development
                  principles.
                </p>
              </div>
            </article>

            <article className="evaluation-card">
              <div className="evaluation-icon">
                <Layers3 size={21} />
              </div>

              <div>
                <h3>Design & Conception</h3>

                <p>
                  How you design solutions, structure applications and make
                  technical decisions.
                </p>
              </div>
            </article>

            <article className="evaluation-card">
              <div className="evaluation-icon">
                <UserRound size={21} />
              </div>

              <div>
                <h3>Experience & Stack</h3>

                <p>
                  Your practical experience and the technologies you currently
                  use.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="assessment-process">
        <div className="assessment-section-inner">
          <div className="section-heading">
            <span>HOW IT WORKS</span>

            <h2>Simple. Focused. Useful.</h2>
          </div>

          <div className="process-grid">
            <div className="process-item">
              <span className="process-number">01</span>

              <div>
                <h3>Book</h3>
                <p>Enter your basic information.</p>
              </div>
            </div>

            <div className="process-item">
              <span className="process-number">02</span>

              <div>
                <h3>Pay</h3>
                <p>Pay the $10 fee using Orange Money or MTN MoMo.</p>
              </div>
            </div>

            <div className="process-item">
              <span className="process-number">03</span>

              <div>
                <h3>Verify</h3>
                <p>We verify your payment and contact you.</p>
              </div>
            </div>

            <div className="process-item">
              <span className="process-number">04</span>

              <div>
                <h3>Assess</h3>
                <p>Complete your 30–45 minute technical interview.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOOKING MODAL
      ====================================================== */}

      <AnimatePresence>
        {showForm && (
          <motion.div
            className="assessment-form-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeForm();
              }
            }}
          >
            <motion.div
              className="assessment-form-modal"
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              {!submitted ? (
                <>
                  {/* CLOSE */}

                  <button
                    type="button"
                    className="assessment-form-close"
                    onClick={closeForm}
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>

                  {/* FORM HEADER */}

                  <div className="form-heading">
                    <div className="form-label">BOOK YOUR ASSESSMENT</div>

                    <h2>Let's get started.</h2>

                    <p>
                      Fill in your details, make the payment and confirm your
                      request.
                    </p>
                  </div>

                  {/* FORM */}

                  <form onSubmit={handleSubmit}>
                    {/* NAME */}

                    <div className="form-field">
                      <label htmlFor="name">Full name</label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    {/* EMAIL */}

                    <div className="form-field">
                      <label htmlFor="email">Email address</label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>

                    {/* PAYER NUMBER */}

                    <div className="form-field">
                      <label htmlFor="payerNumber">Payment number</label>

                      <input
                        id="payerNumber"
                        type="tel"
                        name="payerNumber"
                        value={formData.payerNumber}
                        onChange={handleChange}
                        placeholder="Number you'll use to pay"
                        autoComplete="tel"
                        required
                      />

                      <small>
                        Enter the phone number from which the $10 payment will
                        be made.
                      </small>
                    </div>

                    {/* PAYMENT */}

                    <div className="payment-section">
                      <div className="payment-top">
                        <div>
                          <span>ASSESSMENT FEE</span>

                          <strong>$10 - 5600 XAF</strong>
                        </div>
                      </div>

                      <div className="payment-methods">
                        {/* ORANGE MONEY */}

                        <button
                          type="button"
                          className={`payment-method ${
                            paymentMethod === "orange-money" ? "active" : ""
                          }`}
                          onClick={() => selectPaymentMethod("orange-money")}
                        >
                          <span className="payment-logo orange">OM</span>

                          <span className="payment-method-name orange">
                            Orange Money
                          </span>

                          {paymentMethod === "orange-money" && (
                            <Check size={17} />
                          )}
                        </button>

                        {/* MTN MOMO */}

                        <button
                          type="button"
                          className={`payment-method ${
                            paymentMethod === "mtn-momo" ? "active" : ""
                          }`}
                          onClick={() => selectPaymentMethod("mtn-momo")}
                        >
                          <span className="payment-logo mtn">MoMo</span>

                          <span className="payment-method-name mtn">
                            MTN MoMo
                          </span>

                          {paymentMethod === "mtn-momo" && <Check size={17} />}
                        </button>
                      </div>

                      {/* PAYMENT ACCOUNT */}

                      <AnimatePresence mode="wait">
                        {paymentMethod && (
                          <motion.div
                            key={paymentMethod}
                            className="payment-instructions"
                            initial={{
                              opacity: 0,
                              height: 0,
                              y: 5,
                            }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                              y: -5,
                            }}
                          >
                            <div className="payment-instructions-title">
                              <Smartphone size={16} />

                              <span>
                                {paymentMethod === "orange-money"
                                  ? "Orange Money payment"
                                  : "MTN MoMo payment"}
                              </span>
                            </div>

                            <p>
                              Send <strong>$10 - 5600 xaf</strong> to:
                            </p>

                            <div className="payment-account">
                              <strong>
                                {paymentMethod === "orange-money"
                                  ? "+237658 481 162"
                                  : "+237677 555 858"}
                              </strong>

                              <span>
                                {paymentMethod === "orange-money"
                                  ? "KAMO IVAN"
                                  : "KAMO JULIENNE"}
                              </span>
                            </div>

                            <small>
                              After making the payment, click “I've made the
                              payment”.
                            </small>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* NOTICE */}

                    <div className="form-notice">
                      <CircleAlert size={16} />

                      <p>
                        Your payment will be manually verified. You'll be
                        contacted shortly with the next steps to schedule your
                        assessment.
                      </p>
                    </div>

                    {/* SUBMIT */}

                    <button type="submit" className="form-submit">
                      <span>I've made the payment</span>

                      <ArrowRight size={18} />
                    </button>
                  </form>
                </>
              ) : (
                /* =================================================
                   SUCCESS
                ================================================== */

                <div className="assessment-success">
                  <div className="success-icon">
                    <Check size={28} />
                  </div>

                  <span className="success-label">REQUEST RECEIVED</span>

                  <h2>You're almost there.</h2>

                  <p>
                    Your information has been received. We'll verify your
                    payment and contact you shortly with the next steps.
                  </p>

                  <div className="success-next">
                    <div>
                      <Check size={15} />
                      <strong>Payment verification</strong>
                    </div>

                    <p>
                      Once your payment is verified, you'll receive the
                      information needed to schedule your technical assessment.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="success-close"
                    onClick={closeForm}
                  >
                    Back to assessment
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Assessment;
