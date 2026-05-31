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
          Helping Clients Reach<br />Their Full Potential
        </div>
      </div>
    </PhoneMockup>
  );
}

const PRICING_FEATURES = [
  { label: "Custom Branded LaunchPad",  s: true,  p: true,  g: true,  c: true  },
  { label: "Up to 5 Sections",          s: true,  p: true,  g: true,  c: true  },
  { label: "Social Links",              s: true,  p: true,  g: true,  c: true  },
  { label: "Lead Capture Form",         s: true,  p: true,  g: true,  c: true  },
  { label: "Mobile Optimization",       s: true,  p: true,  g: true,  c: true  },
  { label: "3-Day Delivery",            s: true,  p: true,  g: false, c: false },
  { label: "Custom Copy Assistance",    s: false, p: true,  g: true,  c: true  },
  { label: "Booking Integration",       s: false, p: true,  g: true,  c: true  },
  { label: "Stripe Integration",        s: false, p: false, g: true,  c: true  },
  { label: "Calendly Integration",      s: false, p: false, g: true,  c: true  },
  { label: "CRM Integration",           s: false, p: false, g: true,  c: true  },
  { label: "Email Automation",          s: false, p: false, g: true,  c: true  },
  { label: "Advanced Automation",       s: false, p: false, g: false, c: true  },
  { label: "Custom Workflows",          s: false, p: false, g: false, c: true  },
  { label: "30-Day Support",            s: false, p: false, g: false, c: true  },
];

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
          position: sticky; top: 0; z-index: 100;
          background: rgba(250,250,248,0.92);
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(26,39,68,0.08);
          padding: 0 24px; height: 64px; display: flex; align-items: center;
        }
        .nsp-nav-inner {
          max-width: 1100px; width: 100%; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .nsp-nav-logo {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.2rem; color: #1a2744; font-weight: 700;
          letter-spacing: 0.01em; text-decoration: none; white-space: nowrap;
        }
        .nsp-nav-links { display: flex; align-items: center; gap: 36px; list-style: none; }
        .nsp-nav-links a {
          font-family: 'Inter', sans-serif; font-size: 0.8rem; font-weight: 500;
          letter-spacing: 0.05em; color: #6b7280; text-decoration: none;
          text-transform: uppercase; transition: color 0.15s;
        }
        .nsp-nav-links a:hover { color: #1a2744; }
        .nsp-nav-cta {
          display: inline-block; background: #1a2744; color: #ffffff; border: none;
          padding: 10px 24px; font-family: 'Inter', sans-serif; font-size: 0.78rem;
          font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase;
          border-radius: 6px; cursor: pointer; text-decoration: none;
          transition: opacity 0.18s, transform 0.18s; white-space: nowrap;
        }
        .nsp-nav-cta:hover { opacity: 0.85; transform: translateY(-1px); }

        /* ── HERO ── */
        .nsp-hero { background: #FAFAF8; padding: 80px 24px 100px; overflow: hidden; }
        .nsp-hero-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 420px; gap: 60px; align-items: center;
        }
        .nsp-hero-eyebrow {
          font-family: 'Inter', sans-serif; font-size: 0.68rem; letter-spacing: 0.24em;
          text-transform: uppercase; color: #c9a84c; font-weight: 600; margin-bottom: 20px;
        }
        .nsp-hero-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.2rem, 4.5vw, 3.6rem); font-weight: 700;
          color: #1a2744; line-height: 1.18; margin-bottom: 16px;
        }
        .nsp-hero-subhead {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1rem, 2vw, 1.2rem); font-weight: 700;
          color: #1a2744; line-height: 1.45; margin-bottom: 20px; max-width: 520px;
        }
        .nsp-hero-explain {
          font-family: 'Inter', sans-serif; font-size: 1rem;
          color: #6b7280; line-height: 1.78; font-weight: 300;
          margin-bottom: 40px; max-width: 520px;
        }
        .nsp-hero-btns { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .nsp-btn-gold {
          display: inline-block; background: #c9a84c; color: #1a2744; border: none;
          padding: 15px 36px; font-family: 'Inter', sans-serif; font-size: 0.82rem;
          font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase;
          border-radius: 6px; cursor: pointer; text-decoration: none;
          transition: opacity 0.18s, transform 0.18s;
        }
        .nsp-btn-gold:hover { opacity: 0.87; transform: translateY(-1px); }
        .nsp-btn-ghost {
          display: inline-flex; align-items: center; gap: 6px;
          background: transparent; color: #6b7280; border: none;
          padding: 15px 4px; font-family: 'Inter', sans-serif; font-size: 0.82rem;
          font-weight: 500; cursor: pointer; text-decoration: none; transition: color 0.18s;
        }
        .nsp-btn-ghost:hover { color: #1a2744; }
        .nsp-hero-phone-wrap {
          display: flex; justify-content: center; align-items: center; position: relative;
        }
        .nsp-hero-phone-glow {
          position: absolute; width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.13) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── SHARED ── */
        .nsp-inner { max-width: 1100px; margin: 0 auto; }
        .nsp-eyebrow {
          font-family: 'Inter', sans-serif; font-size: 0.68rem; letter-spacing: 0.24em;
          text-transform: uppercase; color: #c9a84c; font-weight: 600; margin-bottom: 16px;
        }
        .nsp-section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700;
          color: #1a2744; line-height: 1.22; margin-bottom: 16px;
        }
        .nsp-section-title-white { color: #ffffff; }
        .nsp-section-sub {
          font-family: 'Inter', sans-serif; font-size: 1rem; color: #6b7280;
          line-height: 1.75; font-weight: 300; margin-bottom: 60px; max-width: 540px;
        }

        /* ── WHAT IS A LAUNCHPAD (2-col, after hero) ── */
        .nsp-what2 {
          background: #ffffff; padding: 88px 24px;
          border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;
        }
        .nsp-what2-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
          align-items: center; margin-top: 48px;
        }
        .nsp-what2-body {
          font-family: 'Inter', sans-serif; font-size: 1.02rem; color: #374151;
          line-height: 1.82; font-weight: 300;
        }
        .nsp-what2-checks { display: flex; flex-direction: column; gap: 16px; }
        .nsp-what2-check {
          display: flex; align-items: flex-start; gap: 14px;
          font-family: 'Inter', sans-serif; font-size: 1rem; font-weight: 500;
          color: #1a2744; line-height: 1.4;
        }
        .nsp-what2-check-icon {
          width: 28px; height: 28px; border-radius: 50%;
          background: rgba(201,168,76,0.12); border: 1.5px solid rgba(201,168,76,0.35);
          display: flex; align-items: center; justify-content: center;
          color: #c9a84c; font-size: 0.78rem; font-weight: 700; flex-shrink: 0; margin-top: 1px;
        }

        /* ── PROBLEM ── */
        .nsp-problem {
          background: #FAFAF8; padding: 100px 24px;
        }
        .nsp-ba-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .nsp-ba-before {
          background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 16px; padding: 40px 36px;
        }
        .nsp-ba-after {
          background: #1a2744; border-radius: 16px; padding: 40px 36px;
          position: relative; overflow: hidden;
        }
        .nsp-ba-after::before {
          content: ''; position: absolute; top: -60px; right: -60px;
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .nsp-ba-label {
          font-family: 'Inter', sans-serif; font-size: 0.68rem; letter-spacing: 0.2em;
          text-transform: uppercase; font-weight: 700; margin-bottom: 28px;
        }
        .nsp-ba-item {
          font-family: 'Inter', sans-serif; font-size: 0.95rem; line-height: 1.6;
          margin-bottom: 14px; display: flex; align-items: flex-start; gap: 12px; font-weight: 300;
        }

        /* ── WHY DIFFERENT ── */
        .nsp-diff { background: #ffffff; padding: 100px 24px; border-top: 1px solid #e5e7eb; }
        .nsp-diff-cols {
          display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 56px;
        }
        .nsp-diff-left {
          background: #1a2744; border-radius: 16px; padding: 40px 36px;
          position: relative; overflow: hidden;
        }
        .nsp-diff-left::before {
          content: ''; position: absolute; top: -80px; right: -80px;
          width: 240px; height: 240px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .nsp-diff-left-h {
          font-family: 'Playfair Display', Georgia, serif; font-size: 1.3rem;
          font-weight: 700; color: #ffffff; margin-bottom: 16px; line-height: 1.3;
        }
        .nsp-diff-left-p {
          font-family: 'Inter', sans-serif; font-size: 0.9rem; color: rgba(255,255,255,0.65);
          line-height: 1.75; font-weight: 300; margin-bottom: 28px;
        }
        .nsp-diff-examples {
          font-family: 'Inter', sans-serif; font-size: 0.8rem; color: rgba(255,255,255,0.4);
          font-weight: 400; margin-bottom: 24px; font-style: italic;
        }
        .nsp-diff-point {
          font-family: 'Inter', sans-serif; font-size: 0.9rem; font-weight: 700;
          color: #c9a84c; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;
        }
        .nsp-diff-point::before {
          content: ''; width: 4px; height: 4px; border-radius: 50%; background: #c9a84c; flex-shrink: 0;
        }
        .nsp-diff-right {
          background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden;
        }
        .nsp-diff-table { width: 100%; border-collapse: collapse; }
        .nsp-diff-table thead tr { background: #1a2744; }
        .nsp-diff-table thead th {
          font-family: 'Inter', sans-serif; font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; padding: 14px 20px; text-align: left;
          line-height: 1.5;
        }
        .nsp-diff-table thead th:first-child { color: rgba(255,255,255,0.55); }
        .nsp-diff-table thead th:last-child { color: #c9a84c; }
        .nsp-diff-table tbody tr:nth-child(odd) { background: #f9fafb; }
        .nsp-diff-table tbody tr:nth-child(even) { background: #ffffff; }
        .nsp-diff-table tbody td {
          font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 300;
          padding: 14px 20px; color: #374151; border-bottom: 1px solid #e5e7eb;
        }
        .nsp-diff-table tbody td:last-child { font-weight: 500; color: #1a2744; }
        .nsp-diff-banner {
          margin-top: 28px;
          background: linear-gradient(135deg, #1a2744 0%, #243058 100%);
          border-radius: 14px; padding: 28px 36px;
        }
        .nsp-diff-banner-h {
          font-family: 'Playfair Display', Georgia, serif; font-style: italic;
          font-size: clamp(1rem, 2vw, 1.3rem); color: #c9a84c;
          font-weight: 400; margin-bottom: 20px; line-height: 1.5;
        }
        .nsp-diff-checks { display: flex; flex-wrap: wrap; gap: 20px; }
        .nsp-diff-check {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 0.82rem; font-weight: 500;
          color: rgba(255,255,255,0.88);
        }
        .nsp-diff-check-icon { color: #c9a84c; font-size: 0.9rem; flex-shrink: 0; }

        /* ── WHO FOR ── */
        .nsp-who { background: #FAFAF8; padding: 100px 24px; border-top: 1px solid #e5e7eb; }
        .nsp-who-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 52px;
        }
        .nsp-who-card {
          background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px;
          padding: 28px 20px; text-align: center;
          transition: box-shadow 0.2s, transform 0.2s; cursor: default;
        }
        .nsp-who-card:hover {
          box-shadow: 0 8px 32px rgba(26,39,68,0.1); transform: translateY(-2px);
        }
        .nsp-who-circle {
          width: 64px; height: 64px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(26,39,68,0.07), rgba(26,39,68,0.03));
          border: 1px solid rgba(26,39,68,0.08); display: flex; align-items: center;
          justify-content: center; font-size: 1.6rem; margin: 0 auto 16px;
        }
        .nsp-who-label {
          font-family: 'Inter', sans-serif; font-size: 0.875rem;
          font-weight: 600; color: #1a2744; letter-spacing: 0.01em;
        }

        /* ── DEMOS ── */
        .nsp-demos {
          background: #111d35; padding: 100px 24px; position: relative; overflow: hidden;
        }
        .nsp-demos::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 65%);
          pointer-events: none;
        }
        .nsp-demos-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
          margin-top: 60px; align-items: end;
        }
        .nsp-demo-card { display: flex; flex-direction: column; align-items: center; gap: 16px; }
        .nsp-demo-label {
          font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.55); text-align: center; margin-top: 8px;
        }
        .dp-header { background: #1a2744; padding: 10px 10px 8px; text-align: center; }
        .dp-avatar {
          width: 32px; height: 32px; border-radius: 50%; background: #c9a84c;
          margin: 0 auto 6px; display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 700; color: #1a2744; font-family: Inter, sans-serif;
        }
        .dp-name { font-family: Inter, sans-serif; font-size: 9px; font-weight: 700; color: #fff; letter-spacing: 0.04em; }
        .dp-role { font-family: Inter, sans-serif; font-size: 7.5px; color: rgba(255,255,255,0.5); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 2px; }
        .dp-body { padding: 10px 9px; flex: 1; }
        .dp-btn-gold { background: #c9a84c; border-radius: 6px; padding: 7px 10px; font-family: Inter, sans-serif; font-size: 8.5px; font-weight: 700; color: #1a2744; text-align: center; margin-bottom: 6px; letter-spacing: 0.05em; }
        .dp-btn-light { background: #f4f6fb; border-radius: 6px; padding: 7px 10px; font-family: Inter, sans-serif; font-size: 8.5px; font-weight: 500; color: #374151; text-align: center; margin-bottom: 6px; }
        .dp-divider { height: 1px; background: #e5e7eb; margin: 8px 0; }
        .dp-text { font-family: Inter, sans-serif; font-size: 7.5px; color: #6b7280; text-align: center; line-height: 1.5; }
        .dp-stat { text-align: center; padding: 6px; }
        .dp-stat-num { font-family: Inter, sans-serif; font-size: 14px; font-weight: 700; color: #1a2744; }
        .dp-stat-label { font-family: Inter, sans-serif; font-size: 7px; color: #6b7280; margin-top: 2px; }

        /* ── HOW IT WORKS ── */
        .nsp-how { background: #ffffff; padding: 100px 24px; border-top: 1px solid #e5e7eb; }
        .nsp-steps {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; margin-top: 60px;
        }
        .nsp-step { display: flex; flex-direction: column; align-items: flex-start; position: relative; }
        .nsp-step-num {
          width: 44px; height: 44px; border-radius: 12px;
          background: linear-gradient(135deg, #1a2744, #243058);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', Georgia, serif; font-size: 1rem;
          font-weight: 700; color: #c9a84c; margin-bottom: 20px; flex-shrink: 0;
        }
        .nsp-step-title {
          font-family: 'Playfair Display', Georgia, serif; font-size: 1.15rem;
          font-weight: 700; color: #1a2744; margin-bottom: 10px; line-height: 1.3;
        }
        .nsp-step-desc {
          font-family: 'Inter', sans-serif; font-size: 0.875rem;
          color: #6b7280; line-height: 1.72; font-weight: 300;
        }
        .nsp-step-connector {
          position: absolute; top: 22px; right: -16px; width: 32px; height: 1px;
          background: linear-gradient(90deg, #c9a84c, rgba(201,168,76,0.2));
        }

        /* ── PRICING ── */
        .nsp-pricing { background: #FAFAF8; padding: 100px 24px; border-top: 1px solid #e5e7eb; }
        .nsp-compare-wrap { margin-top: 52px; overflow-x: auto; }
        .nsp-compare-table { width: 100%; border-collapse: collapse; min-width: 680px; }
        .nsp-compare-table thead tr { background: #1a2744; }
        .nsp-compare-table thead th {
          font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase; padding: 18px 20px;
          text-align: center; color: rgba(255,255,255,0.6); white-space: nowrap;
        }
        .nsp-compare-table thead th:first-child { text-align: left; color: rgba(255,255,255,0.45); }
        .nsp-compare-table thead th.th-pro { color: #c9a84c; border-left: 2px solid #c9a84c; border-right: 2px solid #c9a84c; }
        .nsp-compare-badge {
          display: block; font-size: 0.58rem; letter-spacing: 0.14em; color: #c9a84c;
          margin-top: 4px; font-weight: 700;
        }
        .th-price {
          display: block; font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.05rem; font-weight: 700; color: #ffffff; letter-spacing: 0;
          text-transform: none; margin-top: 2px;
        }
        .nsp-compare-table tbody tr:nth-child(odd) { background: #ffffff; }
        .nsp-compare-table tbody tr:nth-child(even) { background: #f9fafb; }
        .nsp-compare-table tbody td {
          font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 300;
          padding: 13px 20px; color: #374151; text-align: center;
          border-bottom: 1px solid #e5e7eb;
        }
        .nsp-compare-table tbody td:first-child { text-align: left; font-weight: 400; color: #1a2744; }
        .nsp-compare-table tbody td.td-pro { border-left: 2px solid #c9a84c; border-right: 2px solid #c9a84c; }
        .nsp-compare-table tbody tr:last-child td.td-pro { border-bottom: 2px solid #c9a84c; }
        .nsp-check { color: #c9a84c; font-size: 1rem; font-weight: 700; }
        .nsp-dash { color: #d1d5db; font-size: 1.1rem; }
        .nsp-compare-btns {
          display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; margin-top: 24px; min-width: 680px;
        }
        .nsp-compare-btn {
          display: block; text-align: center; padding: 14px 20px; border-radius: 8px;
          font-family: 'Inter', sans-serif; font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;
          transition: opacity 0.18s, transform 0.18s;
        }
        .nsp-compare-btn:hover { opacity: 0.85; transform: translateY(-1px); }
        .nsp-compare-btn-outline { background: transparent; color: #1a2744; border: 2px solid #e5e7eb; }
        .nsp-compare-btn-gold { background: #c9a84c; color: #1a2744; border: none; }
        .nsp-compare-btn-dark { background: #1a2744; color: #ffffff; border: none; }

        /* ── FINAL CTA ── */
        .nsp-final {
          background: #1a2744; padding: 100px 24px; text-align: center;
          position: relative; overflow: hidden;
        }
        .nsp-final::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .nsp-final-h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem); font-weight: 700;
          color: #ffffff; line-height: 1.22; max-width: 640px; margin: 0 auto 18px;
          position: relative; z-index: 1;
        }
        .nsp-final-sub {
          font-family: 'Inter', sans-serif; font-size: 1rem;
          color: rgba(255,255,255,0.62); max-width: 460px; margin: 0 auto 48px;
          line-height: 1.75; font-weight: 300; position: relative; z-index: 1;
        }
        .nsp-trust-badges {
          display: flex; justify-content: center; gap: 32px; flex-wrap: wrap;
          margin-top: 56px; position: relative; z-index: 1;
        }
        .nsp-trust-badge { display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .nsp-trust-icon { font-size: 1.4rem; }
        .nsp-trust-label {
          font-family: 'Inter', sans-serif; font-size: 0.75rem;
          color: rgba(255,255,255,0.5); font-weight: 400; letter-spacing: 0.04em;
        }

        /* ── FOOTER ── */
        .nsp-footer {
          background: #0d1628; padding: 48px 24px; text-align: center;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .nsp-hero-inner { grid-template-columns: 1fr; }
          .nsp-hero-phone-wrap { display: none; }
          .nsp-what2-grid { grid-template-columns: 1fr; gap: 36px; }
          .nsp-ba-grid { grid-template-columns: 1fr; }
          .nsp-diff-cols { grid-template-columns: 1fr; }
          .nsp-who-grid { grid-template-columns: repeat(2, 1fr); }
          .nsp-demos-grid { grid-template-columns: repeat(2, 1fr); }
          .nsp-steps { grid-template-columns: repeat(2, 1fr); }
          .nsp-step-connector { display: none; }
        }
        @media (max-width: 640px) {
          .nsp-who-grid { grid-template-columns: repeat(2, 1fr); }
          .nsp-demos-grid { grid-template-columns: 1fr; max-width: 240px; margin-left: auto; margin-right: auto; }
          .nsp-steps { grid-template-columns: 1fr; }
          .nsp-trust-badges { gap: 20px; }
          .nsp-diff-checks { gap: 12px; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const COMP_ROWS = [
    ["Monthly payments forever",    "One-time investment"],
    ["Generic templates",           "Customized for your business"],
    ["Link organization",           "Business organization"],
    ["Self-service setup",          "Done-for-you implementation"],
    ["Basic profiles",              "Strategic LaunchPad"],
    ["Platform dependent",          "Built around your business"],
  ];

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
            <div className="nsp-hero-eyebrow">LaunchPad. One Journey. One Next Step.</div>
            <h1 className="nsp-hero-h1">
              Your audience is ready.<br />
              Give them one place to go.
            </h1>
            <p className="nsp-hero-subhead">
              We build a single professional page for your business — done for you, in 3 days, you own it forever. No monthly fees.
            </p>
            <p className="nsp-hero-explain">
              A LaunchPad is your single professional destination — the one place you send everyone. Instead of scattering visitors across Instagram, Calendly, your website, and payment links, your LaunchPad organizes everything and guides every visitor toward one clear next step.
            </p>
            <div className="nsp-hero-btns">
              <button className="nsp-btn-gold" onClick={() => scroll("pricing")}>
                See Pricing
              </button>
              <a href="mailto:hello@nextstepspro.com?subject=Get Started — Starter Package" className="nsp-btn-ghost">
                Get Started — $497 →
              </a>
            </div>
          </div>
          <div className="nsp-hero-phone-wrap">
            <div className="nsp-hero-phone-glow" />
            <HeroPhone />
          </div>
        </div>
      </section>

      {/* ── WHAT IS A LAUNCHPAD ── */}
      <section className="nsp-what2" id="what">
        <div className="nsp-inner">
          <div className="nsp-eyebrow">What Is A LaunchPad</div>
          <h2 className="nsp-section-title">One Page. Every Visitor. One Clear Next Step.</h2>
          <div className="nsp-what2-grid">
            <p className="nsp-what2-body">
              A LaunchPad is your single professional destination — the one place you send everyone. Instead of scattering visitors across Instagram, Calendly, your website, and payment links, your LaunchPad organizes everything and guides every visitor toward one clear next step. We build it for you. You own it forever.
            </p>
            <div className="nsp-what2-checks">
              {[
                "Built and designed for you",
                "Live in 3 business days",
                "One-time investment",
                "You own it forever — no monthly fees",
              ].map(item => (
                <div key={item} className="nsp-what2-check">
                  <div className="nsp-what2-check-icon">✓</div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="nsp-problem" id="problem">
        <div className="nsp-inner">
          <div className="nsp-eyebrow">The Problem</div>
          <h2 className="nsp-section-title">Scattered links. Confused visitors.<br />Missed conversions.</h2>
          <p className="nsp-section-sub">
            Most businesses have presence everywhere and clarity nowhere. A LaunchPad fixes that in one build.
          </p>
          <div className="nsp-ba-grid">
            <div className="nsp-ba-before">
              <div className="nsp-ba-label" style={{ color: "#9ca3af" }}>Without a LaunchPad</div>
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
              <div className="nsp-ba-label" style={{ color: C.gold }}>With Your LaunchPad</div>
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

      {/* ── WHY DIFFERENT ── */}
      <section className="nsp-diff" id="why">
        <div className="nsp-inner">
          <div className="nsp-eyebrow">Why NextStepsPro LaunchPad Is Different</div>
          <h2 className="nsp-section-title">You're Not Renting Another Tool.<br />You're Building a Business Asset.</h2>
          <div className="nsp-diff-cols">

            <div className="nsp-diff-left">
              <div className="nsp-diff-left-h">Most Platforms Rent You A Page.</div>
              <p className="nsp-diff-left-p">
                Tools like Linktree and Beacons charge monthly fees to access features you never truly own. NextStepsPro LaunchPad builds a customized page for your business designed around your goals, your brand, and your next step strategy.
              </p>
              <p className="nsp-diff-examples">Linktree, Beacons, Stan Store, and similar tools</p>
              {[
                "One payment.",
                "No monthly subscription.",
                "No ongoing platform fees.",
                "Your business.",
                "Your asset.",
              ].map(pt => (
                <div key={pt} className="nsp-diff-point">{pt}</div>
              ))}
            </div>

            <div className="nsp-diff-right">
              <table className="nsp-diff-table">
                <thead>
                  <tr>
                    <th>Subscription Platforms ($8–$24/month)</th>
                    <th>NextStepsPro LaunchPad (One-Time)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMP_ROWS.map(([before, after]) => (
                    <tr key={before}>
                      <td>{before}</td>
                      <td>{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          <div className="nsp-diff-banner">
            <div className="nsp-diff-banner-h">
              "Linktree Helps You Organize Links. We Help You Organize Your Business."
            </div>
            <div className="nsp-diff-checks">
              {[
                "One-Time Investment",
                "Done For You",
                "Customized For Your Brand",
                "Designed Around Action",
                "No Monthly Subscription",
              ].map(item => (
                <div key={item} className="nsp-diff-check">
                  <span className="nsp-diff-check-icon">✓</span>
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
          <h2 className="nsp-section-title nsp-section-title-white">See what a LaunchPad looks like.</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.55)", fontWeight: 300, lineHeight: 1.75, maxWidth: 520 }}>
            Every LaunchPad is built around one client's specific audience and one next step. Here are four examples across different industries.
          </p>
          <div className="nsp-demos-grid">

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
                  <div className="dp-text">Helping ambitious people stop drifting and start building.</div>
                </div>
              </PhoneMockup>
              <div className="nsp-demo-label">Life Coach</div>
            </div>

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
            A focused, collaborative process designed to get your LaunchPad live fast and converting from day one.
          </p>
          <div className="nsp-steps">
            {[
              { n: "01", title: "Discovery Call", desc: "We spend 30 minutes understanding your audience, your offer, and the one next step you want visitors to take." },
              { n: "02", title: "Strategy & Design", desc: "We map your visitor journey and design a LaunchPad that directs attention where it matters most." },
              { n: "03", title: "Build & Integrate", desc: "We build your LaunchPad with all integrations — Calendly, Stripe, email capture — wired up and tested." },
              { n: "04", title: "Launch", desc: "You review, we refine, and your LaunchPad goes live. Starter builds in 3 days. Growth builds in 7 to 14." },
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
          <h2 className="nsp-section-title">Packages For Every Stage.</h2>
          <p className="nsp-section-sub">
            See exactly what's included in each LaunchPad package.
          </p>
          <div className="nsp-compare-wrap">
            <table className="nsp-compare-table">
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Feature</th>
                  <th>
                    LaunchPad Starter
                    <span className="nsp-compare-badge" style={{ opacity: 0 }}>–</span>
                    <span className="th-price">$497</span>
                  </th>
                  <th className="th-pro">
                    LaunchPad Pro
                    <span className="nsp-compare-badge">Most Popular</span>
                    <span className="th-price">$997</span>
                  </th>
                  <th>
                    LaunchPad Growth
                    <span className="nsp-compare-badge" style={{ opacity: 0 }}>–</span>
                    <span className="th-price">$1,500</span>
                  </th>
                  <th>
                    LaunchPad Custom
                    <span className="nsp-compare-badge" style={{ opacity: 0 }}>–</span>
                    <span className="th-price">$3,000+</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING_FEATURES.map(({ label, s, p, g, c }) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>{s ? <span className="nsp-check">✓</span> : <span className="nsp-dash">—</span>}</td>
                    <td className="td-pro">{p ? <span className="nsp-check">✓</span> : <span className="nsp-dash">—</span>}</td>
                    <td>{g ? <span className="nsp-check">✓</span> : <span className="nsp-dash">—</span>}</td>
                    <td>{c ? <span className="nsp-check">✓</span> : <span className="nsp-dash">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="nsp-compare-btns">
              <a href="mailto:hello@nextstepspro.com?subject=LaunchPad Starter" className="nsp-compare-btn nsp-compare-btn-outline">
                Get Starter
              </a>
              <a href="mailto:hello@nextstepspro.com?subject=LaunchPad Pro" className="nsp-compare-btn nsp-compare-btn-gold">
                Get Pro
              </a>
              <a href="mailto:hello@nextstepspro.com?subject=LaunchPad Growth" className="nsp-compare-btn nsp-compare-btn-dark">
                Get Growth
              </a>
              <a href="mailto:hello@nextstepspro.com?subject=LaunchPad Custom" className="nsp-compare-btn nsp-compare-btn-outline">
                Let's Talk
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
            Stop sending people everywhere and hoping they figure it out. Give them a LaunchPad — and a reason to act.
          </p>
          <a href="mailto:hello@nextstepspro.com" className="nsp-btn-gold">
            Build My LaunchPad →
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
