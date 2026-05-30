import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoachHub from "./CoachHub";

const C = {
  navy:   "#1a2744",
  white:  "#ffffff",
  gold:   "#c9a84c",
  light:  "#f4f6fb",
  muted:  "#6b7280",
  border: "#e5e7eb",
};

export default function App() {
  useEffect(() => {
    if (!document.getElementById("nsp-fonts")) {
      const link = document.createElement("link");
      link.id = "nsp-fonts";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap";
      document.head.appendChild(link);
    }
    if (!document.getElementById("nsp-css")) {
      const style = document.createElement("style");
      style.id = "nsp-css";
      style.textContent = `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; background: #ffffff; color: #1a2744; }
        .nsp-hero-bg {
          background: linear-gradient(135deg, #1a2744 0%, #243560 60%, #1a2744 100%);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .nsp-hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .nsp-logo {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.4rem;
          color: #c9a84c;
          letter-spacing: 0.04em;
          font-weight: 500;
          margin-bottom: 56px;
        }
        .nsp-hero-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          max-width: 780px;
          margin: 0 auto 28px;
        }
        .nsp-hero-sub {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: rgba(255,255,255,0.72);
          max-width: 600px;
          margin: 0 auto 52px;
          line-height: 1.75;
          font-weight: 300;
        }
        .nsp-btn-gold {
          display: inline-block;
          background: #c9a84c;
          color: #1a2744;
          border: none;
          padding: 16px 40px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
        }
        .nsp-btn-gold:hover { opacity: 0.88; transform: translateY(-1px); }
        .nsp-btn-navy {
          display: block;
          background: #1a2744;
          color: #ffffff;
          border: none;
          padding: 14px 32px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
          margin-top: 24px;
          text-align: center;
        }
        .nsp-btn-navy:hover { opacity: 0.85; transform: translateY(-1px); }
        .nsp-btn-outline {
          display: block;
          background: transparent;
          color: #1a2744;
          border: 2px solid #1a2744;
          padding: 13px 32px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.18s ease;
          margin-top: 24px;
          text-align: center;
        }
        .nsp-btn-outline:hover { background: #1a2744; color: #fff; }
        .nsp-section { padding: 100px 24px; }
        .nsp-section-light { background: #f4f6fb; }
        .nsp-section-navy { background: #1a2744; }
        .nsp-inner { max-width: 1100px; margin: 0 auto; }
        .nsp-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 18px;
          font-weight: 500;
        }
        .nsp-section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: #1a2744;
          line-height: 1.25;
          margin-bottom: 16px;
        }
        .nsp-section-title-white { color: #ffffff; }
        .nsp-section-sub {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.75;
          max-width: 560px;
          font-weight: 300;
          margin-bottom: 64px;
        }
        .nsp-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .nsp-cards { grid-template-columns: 1fr; max-width: 480px; }
          .nsp-built-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .nsp-ba-grid { grid-template-columns: 1fr !important; }
        }
        .nsp-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 36px 30px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        .nsp-card-pro {
          border: 2px solid #c9a84c;
          box-shadow: 0 8px 40px rgba(201,168,76,0.15);
          position: relative;
        }
        .nsp-pro-badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: #c9a84c;
          color: #1a2744;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 16px;
          border-radius: 20px;
          white-space: nowrap;
        }
        .nsp-card-tier {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a84c;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .nsp-card-price {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.2rem;
          color: #1a2744;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1;
        }
        .nsp-card-divider { height: 1px; background: #e5e7eb; margin-bottom: 20px; }
        .nsp-card-feature {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 11px;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: #374151;
          line-height: 1.5;
          font-weight: 300;
        }
        .nsp-card-feature::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #c9a84c;
          flex-shrink: 0;
          margin-top: 7px;
        }
        .nsp-built-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 16px;
        }
        .nsp-built-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 24px 18px;
          text-align: center;
        }
        .nsp-built-icon { font-size: 1.6rem; margin-bottom: 12px; display: block; }
        .nsp-built-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.85);
          font-weight: 400;
          letter-spacing: 0.02em;
        }
        .nsp-ba-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 48px;
        }
        .nsp-ba-before {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 40px 36px;
        }
        .nsp-ba-after { background: #1a2744; border-radius: 14px; padding: 40px 36px; }
        .nsp-ba-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 28px;
        }
        .nsp-ba-item {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 14px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-weight: 300;
        }
        .nsp-footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
          padding: 64px 24px;
          border-top: 1px solid #e5e7eb;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const LandingPage = (
    <div>

      {/* ── HERO ── */}
      <section className="nsp-hero-bg">
        <div className="nsp-logo">Next Steps Pro</div>
        <h1 className="nsp-hero-h1">
          Most businesses don't have a traffic problem. They have a direction problem.
        </h1>
        <p className="nsp-hero-sub">
          A One Hub is a single destination that organizes your business, simplifies the customer journey, and directs visitors to the next logical action.
        </p>
        <button className="nsp-btn-gold" onClick={scrollToServices}>
          See How It Works
        </button>
      </section>

      {/* ── SERVICES ── */}
      <section className="nsp-section" id="services">
        <div className="nsp-inner">
          <div className="nsp-eyebrow">What We Build</div>
          <h2 className="nsp-section-title">One Hub. One Journey. One Next Step.</h2>
          <p className="nsp-section-sub">
            Every tier delivers a focused destination built to move your visitors toward a single, intentional action.
          </p>
          <div className="nsp-cards">

            {/* Starter */}
            <div className="nsp-card">
              <div className="nsp-card-tier">Starter</div>
              <div className="nsp-card-price">$497</div>
              <div className="nsp-card-divider" />
              {[
                "One-page One Hub",
                "Custom branding",
                "Primary and secondary CTA",
                "Social links",
                "Contact section",
                "Lead capture",
                "Delivered in 3 business days",
              ].map(f => <div key={f} className="nsp-card-feature">{f}</div>)}
              <a href="mailto:hello@nextstepspro.com" className="nsp-btn-outline" style={{ marginTop:"auto", paddingTop:14 }}>
                Get Started
              </a>
            </div>

            {/* Pro */}
            <div className="nsp-card nsp-card-pro">
              <div className="nsp-pro-badge">Most Popular</div>
              <div className="nsp-card-tier">Pro</div>
              <div className="nsp-card-price">$1,500</div>
              <div className="nsp-card-divider" />
              {[
                "Advanced custom design",
                "Calendly integration",
                "Stripe integration",
                "Lead capture and CRM integration",
                "Analytics setup",
                "Mobile optimized",
                "Delivered in 7 to 14 business days",
              ].map(f => <div key={f} className="nsp-card-feature">{f}</div>)}
              <a href="mailto:hello@nextstepspro.com" className="nsp-btn-navy">
                Get Started
              </a>
            </div>

            {/* Custom */}
            <div className="nsp-card">
              <div className="nsp-card-tier">Custom</div>
              <div className="nsp-card-price" style={{ fontSize:"1.6rem" }}>Let's Talk</div>
              <div className="nsp-card-divider" />
              {[
                "Fully bespoke build",
                "Scope defined per client",
                "Multi-page architecture available",
                "White-glove delivery",
                "Ongoing support options",
              ].map(f => <div key={f} className="nsp-card-feature">{f}</div>)}
              <a href="mailto:hello@nextstepspro.com" className="nsp-btn-outline">
                Start the Conversation
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="nsp-section nsp-section-navy" id="built-for">
        <div className="nsp-inner">
          <div className="nsp-eyebrow">Who This Is For</div>
          <h2 className="nsp-section-title nsp-section-title-white">Built For</h2>
          <div className="nsp-built-grid">
            {[
              { icon:"🎯", label:"Coaches"          },
              { icon:"💼", label:"Consultants"      },
              { icon:"🎤", label:"Speakers"         },
              { icon:"🏡", label:"Realtors"         },
              { icon:"⛪", label:"Churches"         },
              { icon:"🏆", label:"Athletes"         },
              { icon:"🏪", label:"Small Businesses" },
            ].map(({ icon, label }) => (
              <div key={label} className="nsp-built-card">
                <span className="nsp-built-icon">{icon}</span>
                <div className="nsp-built-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="nsp-section nsp-section-light" id="difference">
        <div className="nsp-inner">
          <div className="nsp-eyebrow">The Transformation</div>
          <h2 className="nsp-section-title">The Difference One Hub Makes</h2>
          <div className="nsp-ba-grid">
            <div className="nsp-ba-before">
              <div className="nsp-ba-label" style={{ color: C.muted }}>Before</div>
              {[
                "Scattered links across multiple platforms",
                "Multiple destinations, no clear path",
                "Confused visitors who bounce",
                "Lost opportunities and unclear next steps",
              ].map(item => (
                <div key={item} className="nsp-ba-item" style={{ color:"#4b5563" }}>
                  <span style={{ color:"#d1d5db", fontSize:"1.1rem", flexShrink:0 }}>✕</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="nsp-ba-after">
              <div className="nsp-ba-label" style={{ color: C.gold }}>After</div>
              {[
                "One destination that organizes everything",
                "A clear, guided customer journey",
                "Visitors who know exactly what to do next",
                "More conversions from the traffic you already have",
              ].map(item => (
                <div key={item} className="nsp-ba-item" style={{ color:"rgba(255,255,255,0.88)" }}>
                  <span style={{ color: C.gold, fontSize:"1.1rem", flexShrink:0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="nsp-footer-inner">
          <div style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:"1.3rem", color: C.navy, fontWeight:500 }}>
            Next Steps Pro
          </div>
          <p style={{ fontFamily:"'Inter', sans-serif", fontSize:"0.85rem", color: C.muted, fontWeight:300 }}>
            Built to direct. Designed to convert.
          </p>
          <a href="mailto:hello@nextstepspro.com" style={{ fontFamily:"'Inter', sans-serif", fontSize:"0.85rem", color: C.gold, textDecoration:"none", fontWeight:500 }}>
            hello@nextstepspro.com
          </a>
        </div>
      </footer>

    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={LandingPage} />
        <Route path="/coach" element={<CoachHub />} />
      </Routes>
    </BrowserRouter>
  );
}
