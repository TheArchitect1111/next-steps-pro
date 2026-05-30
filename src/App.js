import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoachHub from "./CoachHub";

const C = {
  bg:     "#FAFAF8",
  navy:   "#1a2744",
  gold:   "#c9a84c",
  white:  "#ffffff",
  muted:  "#6b7280",
  border: "#e5e7eb",
  light:  "#f4f6fb",
};

function PhoneMockup({ children, dark }) {
  return (
    <div style={{
      width: 220,
      height: 420,
      borderRadius: 32,
      background: dark ? "#0d1220" : "#1a2744",
      border: `6px solid ${dark ? "#1e2a3a" : "#243058"}`,
      boxShadow: "0 32px 80px rgba(0,0,0,0.38), 0 4px 16px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      position: "relative",
      flexShrink: 0,
    }}>
      <div style={{
        width: 72, height: 18, borderRadius: 10,
        background: dark ? "#0d1220" : "#1a2744",
        margin: "12px auto 0",
        flexShrink: 0,
        zIndex: 2,
        position: "relative",
        borderBottom: `2px solid ${dark ? "#1e2a3a" : "#243058"}`,
      }} />
      <div style={{
        flex: 1,
        background: "#ffffff",
        margin: "6px 6px 8px",
        borderRadius: 24,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}>
        {children}
      </div>
    </div>
  );
}

function HeroPhone() {
  return (
    <PhoneMockup>
      <div style={{ background: "#1a2744", padding: "16px 14px 10px", textAlign: "center" }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#c9a84c", margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#1a2744", fontFamily: "Inter, sans-serif" }}>JD</span>
        </div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.04em" }}>John Doe</div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 2 }}>Business Consultant</div>
      </div>
      <div style={{ padding: "14px 12px", flex: 1 }}>
        {[
          { label: "Book a Call", gold: true },
          { label: "Free Consultation", gold: false },
          { label: "View Services", gold: false },
          { label: "Success Stories", gold: false },
        ].map(({ label, gold }) => (
          <div key={label} style={{
            background: gold ? "#c9a84c" : "#f4f6fb",
            borderRadius: 8,
            padding: "9px 12px",
            marginBottom: 8,
            fontFamily: "Inter, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            color: gold ? "#1a2744" : "#374151",
            textAlign: "center",
            letterSpacing: "0.06em",
          }}>{label}</div>
        ))}
        <div style={{ height: 1, background: "#e5e7eb", margin: "12px 0 10px" }} />
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#6b7280", textAlign: "center", lineHeight: 1.6 }}>
          One destination.<br />Every next step.
        </div>
      </div>
    </PhoneMockup>
  );
}

function LandingPage() {
  useEffect(() => {
    if (!document.getElementById("nsp-fonts")) {
      const link = document.createElement("link");
      link.id = "nsp-fonts";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
    if (!document.getElementById("nsp-css")) {
      const style = document.createElement("style");
      style.id = "nsp-css";
      style.textContent = `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; background: #FAFAF8; color: #1a2744; }

        /* ── NAV ── */
        .nsp-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(250,250,248,0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(26,39,68,0.08);
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
        }
        .nsp-nav-inner {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .nsp-nav-logo {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.2rem;
          color: #1a2744;
          font-weight: 700;
          letter-spacing: 0.01em;
          text-decoration: none;
          white-space: nowrap;
        }
        .nsp-nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
        }
        .nsp-nav-links a {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #6b7280;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.15s;
        }
        .nsp-nav-links a:hover { color: #1a2744; }
        .nsp-nav-cta {
          display: inline-block;
          background: #1a2744;
          color: #ffffff;
          border: none;
          padding: 10px 24px;
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.18s, transform 0.18s;
          white-space: nowrap;
        }
        .nsp-nav-cta:hover { opacity: 0.85; transform: translateY(-1px); }

        /* ── HERO ── */
        .nsp-hero {
          background: #FAFAF8;
          padding: 80px 24px 100px;
          overflow: hidden;
        }
        .nsp-hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 60px;
          align-items: center;
        }
        .nsp-hero-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #c9a84c;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .nsp-hero-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          font-weight: 700;
          color: #1a2744;
          line-height: 1.18;
          margin-bottom: 24px;
        }
        .nsp-hero-sub {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          color: #6b7280;
          line-height: 1.78;
          font-weight: 300;
          margin-bottom: 44px;
          max-width: 500px;
        }
        .nsp-hero-btns { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .nsp-btn-gold {
          display: inline-block;
          background: #c9a84c;
          color: #1a2744;
          border: none;
          padding: 15px 36px;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.18s, transform 0.18s;
        }
        .nsp-btn-gold:hover { opacity: 0.87; transform: translateY(-1px); }
        .nsp-btn-ghost {
          display: inline-block;
          background: transparent;
          color: #6b7280;
          border: none;
          padding: 15px 4px;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: color 0.18s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nsp-btn-ghost:hover { color: #1a2744; }
        .nsp-hero-phone-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .nsp-hero-phone-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.13) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── PROBLEM ── */
        .nsp-problem {
          background: #ffffff;
          padding: 100px 24px;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }
        .nsp-inner { max-width: 1100px; margin: 0 auto; }
        .nsp-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #c9a84c;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .nsp-section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: #1a2744;
          line-height: 1.22;
          margin-bottom: 16px;
        }
        .nsp-section-title-white { color: #ffffff; }
        .nsp-section-sub {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 60px;
          max-width: 540px;
        }
        .nsp-ba-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .nsp-ba-before {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 40px 36px;
        }
        .nsp-ba-after {
          background: #1a2744;
          border-radius: 16px;
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
        }
        .nsp-ba-after::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .nsp-ba-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 28px;
        }
        .nsp-ba-item {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 14px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-weight: 300;
        }

        /* ── WHO FOR ── */
        .nsp-who {
          background: #FAFAF8;
          padding: 100px 24px;
        }
        .nsp-who-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 52px;
        }
        .nsp-who-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          transition: box-shadow 0.2s, transform 0.2s;
          cursor: default;
        }
        .nsp-who-card:hover {
          box-shadow: 0 8px 32px rgba(26,39,68,0.1);
          transform: translateY(-2px);
        }
        .nsp-who-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(26,39,68,0.07), rgba(26,39,68,0.03));
          border: 1px solid rgba(26,39,68,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          margin: 0 auto 16px;
        }
        .nsp-who-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #1a2744;
          letter-spacing: 0.01em;
        }

        /* ── DEMOS ── */
        .nsp-demos {
          background: #1a2744;
          padding: 100px 24px;
          position: relative;
          overflow: hidden;
        }
        .nsp-demos::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 65%);
          pointer-events: none;
        }
        .nsp-demos-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 60px;
          align-items: end;
        }
        .nsp-demo-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .nsp-demo-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          text-align: center;
          margin-top: 8px;
        }

        /* Demo phone content */
        .dp-header {
          background: #1a2744;
          padding: 10px 10px 8px;
          text-align: center;
        }
        .dp-avatar {
          width: 32px; height: 32px; border-radius: 50%;
          background: #c9a84c;
          margin: 0 auto 6px;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 700; color: #1a2744; font-family: Inter, sans-serif;
        }
        .dp-name { font-family: Inter, sans-serif; font-size: 9px; font-weight: 700; color: #fff; letter-spacing: 0.04em; }
        .dp-role { font-family: Inter, sans-serif; font-size: 7.5px; color: rgba(255,255,255,0.5); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 2px; }
        .dp-body { padding: 10px 9px; flex: 1; }
        .dp-btn-gold { background: #c9a84c; border-radius: 6px; padding: 7px 10px; font-family: Inter, sans-serif; font-size: 8.5px; font-weight: 700; color: #1a2744; text-align: center; margin-bottom: 6px; letter-spacing: 0.05em; }
        .dp-btn-light { background: #f4f6fb; border-radius: 6px; padding: 7px 10px; font-family: Inter, sans-serif; font-size: 8.5px; font-weight: 500; color: #374151; text-align: center; margin-bottom: 6px; }
        .dp-divider { height: 1px; background: #e5e7eb; margin: 8px 0; }
        .dp-text { font-family: Inter, sans-serif; font-size: 7.5px; color: #6b7280; text-align: center; line-height: 1.5; }
        .dp-product { background: #f4f6fb; border-radius: 8px; padding: 8px; margin-bottom: 6px; }
        .dp-product-name { font-family: Inter, sans-serif; font-size: 8px; font-weight: 600; color: #1a2744; margin-bottom: 2px; }
        .dp-product-price { font-family: Inter, sans-serif; font-size: 8px; color: #c9a84c; font-weight: 700; }
        .dp-stat { text-align: center; padding: 6px; }
        .dp-stat-num { font-family: Inter, sans-serif; font-size: 14px; font-weight: 700; color: #1a2744; }
        .dp-stat-label { font-family: Inter, sans-serif; font-size: 7px; color: #6b7280; margin-top: 2px; }

        /* ── HOW IT WORKS ── */
        .nsp-how {
          background: #ffffff;
          padding: 100px 24px;
          border-top: 1px solid #e5e7eb;
        }
        .nsp-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          margin-top: 60px;
        }
        .nsp-step {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
        }
        .nsp-step-num {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #1a2744, #243058);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1rem;
          font-weight: 700;
          color: #c9a84c;
          margin-bottom: 20px;
          flex-shrink: 0;
        }
        .nsp-step-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #1a2744;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .nsp-step-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.72;
          font-weight: 300;
        }
        .nsp-step-connector {
          position: absolute;
          top: 22px;
          right: -16px;
          width: 32px;
          height: 1px;
          background: linear-gradient(90deg, #c9a84c, rgba(201,168,76,0.2));
        }

        /* ── PRICING ── */
        .nsp-pricing {
          background: #FAFAF8;
          padding: 100px 24px;
        }
        .nsp-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 60px;
          align-items: start;
        }
        .nsp-price-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 20px rgba(0,0,0,0.04);
        }
        .nsp-price-card-pro {
          border: 2px solid #c9a84c;
          box-shadow: 0 12px 48px rgba(201,168,76,0.14);
          position: relative;
          transform: translateY(-6px);
        }
        .nsp-price-badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: #c9a84c;
          color: #1a2744;
          font-family: 'Inter', sans-serif;
          font-size: 0.63rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 16px;
          border-radius: 20px;
          white-space: nowrap;
        }
        .nsp-price-tier {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a84c;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .nsp-price-amount {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.4rem;
          color: #1a2744;
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1;
        }
        .nsp-price-note {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: #6b7280;
          font-weight: 300;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        .nsp-price-divider { height: 1px; background: #e5e7eb; margin-bottom: 24px; }
        .nsp-price-feature {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: #374151;
          line-height: 1.5;
          font-weight: 300;
        }
        .nsp-price-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #c9a84c;
          flex-shrink: 0;
          margin-top: 7px;
        }
        .nsp-price-btn {
          display: block;
          text-align: center;
          padding: 14px 24px;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: opacity 0.18s, transform 0.18s;
          margin-top: auto;
          padding-top: 14px;
        }
        .nsp-price-btn-dark { background: #1a2744; color: #ffffff; }
        .nsp-price-btn-gold { background: #c9a84c; color: #1a2744; }
        .nsp-price-btn-outline { background: transparent; color: #1a2744; border: 2px solid #e5e7eb; }
        .nsp-price-btn:hover { opacity: 0.85; transform: translateY(-1px); }

        /* ── FINAL CTA ── */
        .nsp-final {
          background: #1a2744;
          padding: 100px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .nsp-final::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .nsp-final-h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.22;
          max-width: 640px;
          margin: 0 auto 18px;
          position: relative;
          z-index: 1;
        }
        .nsp-final-sub {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.62);
          max-width: 460px;
          margin: 0 auto 48px;
          line-height: 1.75;
          font-weight: 300;
          position: relative;
          z-index: 1;
        }
        .nsp-trust-badges {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          margin-top: 56px;
          position: relative;
          z-index: 1;
        }
        .nsp-trust-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .nsp-trust-icon {
          font-size: 1.4rem;
        }
        .nsp-trust-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.5);
          font-weight: 400;
          letter-spacing: 0.04em;
        }

        /* ── FOOTER ── */
        .nsp-footer {
          background: #0d1628;
          padding: 48px 24px;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .nsp-hero-inner { grid-template-columns: 1fr; }
          .nsp-hero-phone-wrap { display: none; }
          .nsp-ba-grid { grid-template-columns: 1fr; }
          .nsp-who-grid { grid-template-columns: repeat(2, 1fr); }
          .nsp-demos-grid { grid-template-columns: repeat(2, 1fr); }
          .nsp-steps { grid-template-columns: repeat(2, 1fr); }
          .nsp-step-connector { display: none; }
          .nsp-pricing-grid { grid-template-columns: 1fr; max-width: 480px; }
          .nsp-price-card-pro { transform: none; }
        }
        @media (max-width: 540px) {
          .nsp-who-grid { grid-template-columns: repeat(2, 1fr); }
          .nsp-demos-grid { grid-template-columns: 1fr; max-width: 240px; }
          .nsp-steps { grid-template-columns: 1fr; }
          .nsp-trust-badges { gap: 20px; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>

      {/* ── NAV ── */}
      <nav className="nsp-nav">
        <div className="nsp-nav-inner">
          <a href="/" className="nsp-nav-logo">Next Steps Pro</a>
          <ul className="nsp-nav-links" style={{ display: window.innerWidth < 640 ? "none" : "flex" }}>
            <li><a href="#demos" onClick={e => { e.preventDefault(); scroll("demos"); }}>Live Demos</a></li>
            <li><a href="#how" onClick={e => { e.preventDefault(); scroll("how"); }}>How It Works</a></li>
            <li><a href="#pricing" onClick={e => { e.preventDefault(); scroll("pricing"); }}>Pricing</a></li>
          </ul>
          <a href="mailto:hello@nextstepspro.com" className="nsp-nav-cta">Get Started</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="nsp-hero" id="hero">
        <div className="nsp-hero-inner">
          <div>
            <div className="nsp-hero-eyebrow">One Hub. One Journey. One Next Step.</div>
            <h1 className="nsp-hero-h1">
              Your audience is ready.<br />
              Give them one place to go.
            </h1>
            <p className="nsp-hero-sub">
              A Launch Point is a single destination that organizes your business, simplifies the customer journey, and directs every visitor toward the one next action that actually moves them forward.
            </p>
            <div className="nsp-hero-btns">
              <button className="nsp-btn-gold" onClick={() => scroll("pricing")}>
                See Pricing
              </button>
              <button className="nsp-btn-ghost" onClick={() => scroll("demos")}>
                View live demos →
              </button>
            </div>
          </div>
          <div className="nsp-hero-phone-wrap">
            <div className="nsp-hero-phone-glow" />
            <HeroPhone />
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="nsp-problem" id="problem">
        <div className="nsp-inner">
          <div className="nsp-eyebrow">The Problem</div>
          <h2 className="nsp-section-title">Scattered links. Confused visitors.<br />Missed conversions.</h2>
          <p className="nsp-section-sub">
            Most businesses have presence everywhere and clarity nowhere. A Launch Point fixes that in one build.
          </p>
          <div className="nsp-ba-grid">
            <div className="nsp-ba-before">
              <div className="nsp-ba-label" style={{ color: "#9ca3af" }}>Without a Launch Point</div>
              {[
                "Links scattered across Instagram, TikTok, email, and websites",
                "Visitors who land and don't know what to do next",
                "Multiple destinations with no clear path forward",
                "Momentum lost every time someone has to guess",
              ].map(item => (
                <div key={item} className="nsp-ba-item" style={{ color: "#4b5563" }}>
                  <span style={{ color: "#d1d5db", fontSize: "1.1rem", flexShrink: 0, marginTop: 1 }}>✕</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="nsp-ba-after">
              <div className="nsp-ba-after-glow" />
              <div className="nsp-ba-label" style={{ color: C.gold }}>With Your Launch Point</div>
              {[
                "One destination that organizes your entire presence",
                "A clear, guided journey from first visit to next step",
                "Every visitor knows exactly what to do and how to start",
                "More conversions from the audience you already have",
              ].map(item => (
                <div key={item} className="nsp-ba-item" style={{ color: "rgba(255,255,255,0.88)" }}>
                  <span style={{ color: C.gold, fontSize: "1.1rem", flexShrink: 0, marginTop: 1 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO FOR ── */}
      <section className="nsp-who" id="who">
        <div className="nsp-inner">
          <div className="nsp-eyebrow">Who This Is For</div>
          <h2 className="nsp-section-title">Built for people who are serious about their audience.</h2>
          <div className="nsp-who-grid">
            {[
              { icon: "🎯", label: "Coaches" },
              { icon: "💼", label: "Consultants" },
              { icon: "🎤", label: "Speakers" },
              { icon: "🏡", label: "Realtors" },
              { icon: "⛪", label: "Churches" },
              { icon: "🏆", label: "Athletes" },
              { icon: "🏪", label: "Small Businesses" },
              { icon: "🎨", label: "Creatives" },
            ].map(({ icon, label }) => (
              <div key={label} className="nsp-who-card">
                <div className="nsp-who-circle">{icon}</div>
                <div className="nsp-who-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE DEMOS ── */}
      <section className="nsp-demos" id="demos">
        <div className="nsp-inner">
          <div className="nsp-eyebrow" style={{ color: C.gold }}>Live Examples</div>
          <h2 className="nsp-section-title nsp-section-title-white">See what a Launch Point looks like.</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.55)", fontWeight: 300, lineHeight: 1.75, maxWidth: 520, marginBottom: 0 }}>
            Every Hub is built around one client's specific audience and one next step. Here are four examples across different industries.
          </p>
          <div className="nsp-demos-grid">

            {/* Coach */}
            <div className="nsp-demo-card">
              <PhoneMockup dark>
                <div className="dp-header">
                  <div className="dp-avatar">AC</div>
                  <div className="dp-name">Alex Carter</div>
                  <div className="dp-role">Life Coach</div>
                </div>
                <div className="dp-body">
                  <div className="dp-btn-gold">Book a Discovery Call</div>
                  <div className="dp-btn-light">View Programs</div>
                  <div className="dp-btn-light">Free Resource</div>
                  <div className="dp-divider" />
                  <div className="dp-text">"Helping ambitious people stop drifting and start building."</div>
                </div>
              </PhoneMockup>
              <div className="nsp-demo-label">Life Coach</div>
            </div>

            {/* Realtor */}
            <div className="nsp-demo-card">
              <PhoneMockup dark>
                <div className="dp-header">
                  <div className="dp-avatar" style={{ background: "#4a7c59" }}>SR</div>
                  <div className="dp-name">Sarah Rivera</div>
                  <div className="dp-role">Real Estate</div>
                </div>
                <div className="dp-body">
                  <div className="dp-btn-gold">Get a Free Home Valuation</div>
                  <div className="dp-btn-light">Search Listings</div>
                  <div className="dp-btn-light">First-Time Buyer Guide</div>
                  <div className="dp-divider" />
                  <div className="dp-stat">
                    <div className="dp-stat-num">47</div>
                    <div className="dp-stat-label">Homes Sold This Year</div>
                  </div>
                </div>
              </PhoneMockup>
              <div className="nsp-demo-label">Realtor</div>
            </div>

            {/* Speaker */}
            <div className="nsp-demo-card">
              <PhoneMockup dark>
                <div className="dp-header">
                  <div className="dp-avatar" style={{ background: "#7c3aed" }}>MJ</div>
                  <div className="dp-name">Marcus Johnson</div>
                  <div className="dp-role">Keynote Speaker</div>
                </div>
                <div className="dp-body">
                  <div className="dp-btn-gold">Book Marcus to Speak</div>
                  <div className="dp-btn-light">Watch a Keynote</div>
                  <div className="dp-btn-light">Get the Book</div>
                  <div className="dp-divider" />
                  <div className="dp-text">300+ stages. 40+ countries.</div>
                </div>
              </PhoneMockup>
              <div className="nsp-demo-label">Speaker</div>
            </div>

            {/* Consultant */}
            <div className="nsp-demo-card">
              <PhoneMockup dark>
                <div className="dp-header">
                  <div className="dp-avatar" style={{ background: "#0f766e" }}>KL</div>
                  <div className="dp-name">Kim Lee</div>
                  <div className="dp-role">Business Consultant</div>
                </div>
                <div className="dp-body">
                  <div className="dp-btn-gold">Start Your Audit</div>
                  <div className="dp-btn-light">See Case Studies</div>
                  <div className="dp-btn-light">Download the Guide</div>
                  <div className="dp-divider" />
                  <div className="dp-text">Strategy that moves the number that matters.</div>
                </div>
              </PhoneMockup>
              <div className="nsp-demo-label">Consultant</div>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="nsp-how" id="how">
        <div className="nsp-inner">
          <div className="nsp-eyebrow">The Process</div>
          <h2 className="nsp-section-title">From kickoff to live in days, not months.</h2>
          <p className="nsp-section-sub">
            A focused, collaborative process designed to get you live fast and convert from day one.
          </p>
          <div className="nsp-steps">
            {[
              { n: "01", title: "Discovery Call", desc: "We spend 30 minutes understanding your audience, your offer, and the one next step you want visitors to take." },
              { n: "02", title: "Strategy & Design", desc: "We map your visitor journey and design a Hub that directs attention where it matters most." },
              { n: "03", title: "Build & Integrate", desc: "We build your Launch Point with all integrations — Calendly, Stripe, email capture — wired up and tested." },
              { n: "04", title: "Launch", desc: "You review, we refine, and your Hub goes live. Starter builds in 3 days. Pro builds in 7 to 14." },
            ].map(({ n, title, desc }, i) => (
              <div key={n} className="nsp-step">
                <div className="nsp-step-num">{n}</div>
                <div className="nsp-step-title">{title}</div>
                <p className="nsp-step-desc">{desc}</p>
                {i < 3 && <div className="nsp-step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="nsp-pricing" id="pricing">
        <div className="nsp-inner">
          <div className="nsp-eyebrow">Investment</div>
          <h2 className="nsp-section-title">Simple pricing. No surprises.</h2>
          <p className="nsp-section-sub">
            Every tier includes a complete Launch Point built to your brand and ready to convert from day one.
          </p>
          <div className="nsp-pricing-grid">

            <div className="nsp-price-card">
              <div className="nsp-price-tier">Starter</div>
              <div className="nsp-price-amount">$497</div>
              <div className="nsp-price-note">One-time. No monthly fees.</div>
              <div className="nsp-price-divider" />
              {[
                "One-page Launch Point",
                "Custom branding & colors",
                "Primary + secondary CTA",
                "Social media links",
                "Contact section",
                "Lead capture form",
                "Delivered in 3 business days",
              ].map(f => (
                <div key={f} className="nsp-price-feature">
                  <div className="nsp-price-dot" />
                  {f}
                </div>
              ))}
              <a href="mailto:hello@nextstepspro.com" className="nsp-price-btn nsp-price-btn-outline" style={{ marginTop: 28 }}>
                Get Started
              </a>
            </div>

            <div className="nsp-price-card nsp-price-card-pro">
              <div className="nsp-price-badge">Most Popular</div>
              <div className="nsp-price-tier">Pro</div>
              <div className="nsp-price-amount">$1,500</div>
              <div className="nsp-price-note">One-time. Includes all integrations.</div>
              <div className="nsp-price-divider" />
              {[
                "Advanced multi-section design",
                "Calendly booking integration",
                "Stripe payment integration",
                "Email capture + CRM connection",
                "Analytics & tracking setup",
                "Mobile optimized",
                "Delivered in 7 to 14 business days",
              ].map(f => (
                <div key={f} className="nsp-price-feature">
                  <div className="nsp-price-dot" />
                  {f}
                </div>
              ))}
              <a href="mailto:hello@nextstepspro.com" className="nsp-price-btn nsp-price-btn-gold" style={{ marginTop: 28 }}>
                Get Started
              </a>
            </div>

            <div className="nsp-price-card">
              <div className="nsp-price-tier">Custom</div>
              <div className="nsp-price-amount" style={{ fontSize: "1.7rem" }}>Let's Talk</div>
              <div className="nsp-price-note">Scope defined with you. White-glove delivery.</div>
              <div className="nsp-price-divider" />
              {[
                "Fully bespoke design",
                "Multi-page architecture available",
                "Custom functionality & integrations",
                "Ongoing support packages",
                "Priority turnaround available",
              ].map(f => (
                <div key={f} className="nsp-price-feature">
                  <div className="nsp-price-dot" />
                  {f}
                </div>
              ))}
              <a href="mailto:hello@nextstepspro.com" className="nsp-price-btn nsp-price-btn-outline" style={{ marginTop: 28 }}>
                Start the Conversation
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="nsp-final" id="cta">
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="nsp-eyebrow" style={{ color: C.gold, marginBottom: 20 }}>Ready?</div>
          <h2 className="nsp-final-h2">
            One destination.<br />Every next step.
          </h2>
          <p className="nsp-final-sub">
            Stop sending people everywhere and hoping they figure it out. Give them a Launch Point — and a reason to act.
          </p>
          <a href="mailto:hello@nextstepspro.com" className="nsp-btn-gold">
            Start Your Launch Point
          </a>
          <div className="nsp-trust-badges">
            {[
              { icon: "⚡", label: "Fast Delivery" },
              { icon: "🎨", label: "Custom Design" },
              { icon: "🔗", label: "Full Integration" },
              { icon: "📱", label: "Mobile First" },
            ].map(({ icon, label }) => (
              <div key={label} className="nsp-trust-badge">
                <span className="nsp-trust-icon">{icon}</span>
                <span className="nsp-trust-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="nsp-footer">
        <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.25rem", color: "#ffffff", fontWeight: 700, marginBottom: 8 }}>
          Next Steps Pro
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.38)", fontWeight: 300, marginBottom: 16 }}>
          Built to direct. Designed to convert.
        </p>
        <a href="mailto:hello@nextstepspro.com" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: C.gold, textDecoration: "none", fontWeight: 500 }}>
          hello@nextstepspro.com
        </a>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coach" element={<CoachHub />} />
      </Routes>
    </BrowserRouter>
  );
}
