import { useEffect } from "react";

function PhotoPlaceholder({ height = 400, id = "ph" }) {
  return (
    <div style={{
      width: "100%", height, borderRadius: 12, overflow: "hidden", position: "relative",
      background: "linear-gradient(160deg, #1a2744 0%, #0d1628 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 25%, rgba(201,168,76,0.07) 0%, transparent 60%)",
      }} />
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(201,168,76,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
      }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
          stroke="rgba(201,168,76,0.45)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="9" r="5"/>
          <path d="M3 26c0-6.1 4.9-11 11-11s11 4.9 11 11"/>
        </svg>
      </div>
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
        background: "linear-gradient(to top, rgba(13,22,40,0.6), transparent)",
      }} />
    </div>
  );
}

const ICONS = {
  cal:  () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="16" height="15" rx="2"/><line x1="6" y1="1" x2="6" y2="5"/><line x1="14" y1="1" x2="14" y2="5"/><line x1="2" y1="9" x2="18" y2="9"/></svg>),
  dl:   () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3v10M6 9l4 4 4-4"/><line x1="3" y1="17" x2="17" y2="17"/></svg>),
  play: () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="8"/><path d="M8 7l6 3-6 3V7z" fill="#c9a84c" stroke="none"/></svg>),
  ppl:  () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="6" r="3.5"/><circle cx="14" cy="6" r="3"/><path d="M1 19c0-3.3 2.7-6 6-6"/><path d="M9 19c0-2.8 2.2-5 5-5s5 2.2 5 5"/></svg>),
  bell: () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 9a5 5 0 0110 0v4l2 2H3l2-2V9z"/><line x1="8" y1="18" x2="12" y2="18"/></svg>),
  cmp:  () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="8"/><path d="M13.5 6.5l-3.5 7-3.5-3.5 7-3.5z" fill="rgba(201,168,76,0.3)" strokeWidth="1"/></svg>),
};

const SERVICES = [
  { icon: "cal",  title: "Book a Call",         desc: "Schedule a 1:1 strategy session",                  link: "Book Now" },
  { icon: "dl",   title: "Free Resource",        desc: "Download guides and tools to help you grow",       link: "Download" },
  { icon: "play", title: "Watch and Learn",      desc: "Actionable trainings and insights",                link: "Watch Now" },
  { icon: "ppl",  title: "Join the Community",   desc: "Connect and grow with like-minded professionals",  link: "Join Now" },
  { icon: "bell", title: "Latest Updates",       desc: "Get updates, new content, and exclusive invites",  link: "Subscribe" },
  { icon: "cmp",  title: "Explore Services",     desc: "See how we can work together",                     link: "Explore" },
];

const SOCIAL_ICONS = [
  { name: "Facebook",  svg: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.72)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 1.5H7.5a3 3 0 00-3 3v2H2v3h2.5v5H8v-5h2l.5-3H8V4.5a1 1 0 011-1h.5v-2z"/></svg>) },
  { name: "Instagram", svg: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.72)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="12" height="12" rx="3.5"/><circle cx="8" cy="8" r="3"/><circle cx="11.5" cy="4.5" r="0.6" fill="rgba(255,255,255,0.72)" stroke="none"/></svg>) },
  { name: "LinkedIn",  svg: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.72)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="12" height="12" rx="2"/><line x1="5" y1="7" x2="5" y2="11"/><circle cx="5" cy="5.3" r="0.6" fill="rgba(255,255,255,0.72)" stroke="none"/><path d="M8 7v1.5a2 2 0 004 0V7"/></svg>) },
  { name: "YouTube",   svg: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.72)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8s0-4.5 6-4.5S14 8 14 8s0 4.5-6 4.5S2 12.5 2 8z"/><polygon points="6.5,5.5 10.5,8 6.5,10.5" fill="rgba(255,255,255,0.72)" stroke="none"/></svg>) },
  { name: "Podcast",   svg: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.72)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5.5" y="1.5" width="5" height="7.5" rx="2.5"/><path d="M3 9a5 5 0 0010 0"/><line x1="8" y1="14" x2="8" y2="16"/><line x1="6" y1="16" x2="10" y2="16"/></svg>) },
  { name: "Email",     svg: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.72)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1.5" y="3.5" width="13" height="10" rx="1.5"/><path d="M1.5 5.5l6.5 4.5 6.5-4.5"/></svg>) },
];

const ABOUT_STATS = [
  {
    title: "Clarity First",
    desc: "Start with the right question, not the loudest answer.",
    icon: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 14h6M7 16h4M9 2a5 5 0 015 5c0 2-1.2 3.5-2.5 4.5H6.5C5.2 10.5 4 9 4 7a5 5 0 015-5z"/></svg>),
  },
  {
    title: "Connection Always",
    desc: "Relationships are the strategy. Community is the result.",
    icon: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10a4 4 0 006 0l2-2a4 4 0 00-5.7-5.7l-1 1"/><path d="M11 8a4 4 0 00-6 0l-2 2a4 4 0 005.7 5.7l1-1"/></svg>),
  },
  {
    title: "Results That Last",
    desc: "Build systems, not streaks. Progress that compounds.",
    icon: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="7"/><circle cx="9" cy="9" r="4"/><circle cx="9" cy="9" r="1.5" fill="#c9a84c" stroke="none"/></svg>),
  },
];

export default function CoachHub() {
  useEffect(() => {
    if (!document.getElementById("ch-fonts")) {
      const link = document.createElement("link");
      link.id = "ch-fonts";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
    if (!document.getElementById("ch-css")) {
      const s = document.createElement("style");
      s.id = "ch-css";
      s.textContent = `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .ch-wrap { font-family: 'Inter', sans-serif; background: #FAFAF8; color: #1a2744; }

        /* HEADER */
        .ch-header {
          position: sticky; top: 0; z-index: 100;
          background: rgba(250,250,248,0.97);
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(26,39,68,0.09);
          padding: 0 40px; height: 68px;
          display: flex; align-items: center; justify-content: space-between;
        }

        /* BUTTONS */
        .ch-btn-gold {
          display: inline-block; background: #c9a84c; color: #1a2744; border: none;
          padding: 11px 28px; font-family: 'Inter', sans-serif; font-size: 0.78rem;
          font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          border-radius: 6px; cursor: pointer; text-decoration: none;
          transition: opacity 0.18s, transform 0.18s;
        }
        .ch-btn-gold:hover { opacity: 0.85; transform: translateY(-1px); }
        .ch-btn-outline {
          display: inline-block; background: transparent;
          color: rgba(255,255,255,0.82); border: 1.5px solid rgba(255,255,255,0.32);
          padding: 11px 28px; font-family: 'Inter', sans-serif; font-size: 0.78rem;
          font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          border-radius: 6px; cursor: pointer; text-decoration: none;
          transition: border-color 0.18s;
        }
        .ch-btn-outline:hover { border-color: rgba(201,168,76,0.55); }

        /* HERO */
        .ch-hero { background: #FAFAF8; padding: 96px 40px 108px; }
        .ch-hero-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 420px; gap: 64px; align-items: center;
        }
        .ch-hero-eyebrow {
          font-family: 'Inter', sans-serif; font-size: 0.65rem; letter-spacing: 0.26em;
          text-transform: uppercase; color: #c9a84c; font-weight: 600; margin-bottom: 22px;
        }
        .ch-hero-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 700;
          color: #1a2744; line-height: 1.12; margin-bottom: 20px;
        }
        .ch-hero-gold-sub {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.1rem, 2.5vw, 1.35rem); font-style: italic;
          color: #c9a84c; font-weight: 400; margin-bottom: 32px; line-height: 1.4;
        }
        .ch-hero-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.9rem; font-style: italic; font-weight: 400;
          color: #1a2744; margin-bottom: 8px;
        }
        .ch-hero-subtitle {
          font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase; color: #6b7280;
          margin-bottom: 40px;
        }
        .ch-hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }

        /* SOCIAL BAR */
        .ch-social-bar {
          background: #1a2744; padding: 22px 40px;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ch-social-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; align-items: center; justify-content: center; gap: 18px;
        }
        .ch-social-btn {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.18); background: none; padding: 0;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: border-color 0.18s, transform 0.18s; flex-shrink: 0;
        }
        .ch-social-btn:hover { border-color: rgba(201,168,76,0.6); transform: translateY(-2px); }

        /* SHARED EYEBROW / SECTION */
        .ch-eyebrow {
          font-family: 'Inter', sans-serif; font-size: 0.65rem; letter-spacing: 0.26em;
          text-transform: uppercase; color: #c9a84c; font-weight: 600; margin-bottom: 14px;
        }
        .ch-section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 700;
          color: #1a2744; line-height: 1.22;
        }
        .ch-section-accent {
          width: 52px; height: 3px; background: #c9a84c; border-radius: 2px; margin: 18px 0 0;
        }

        /* SERVICES */
        .ch-services { background: #FAFAF8; padding: 100px 40px; }
        .ch-services-inner { max-width: 1100px; margin: 0 auto; }
        .ch-services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 56px;
        }
        .ch-service-card {
          background: #ffffff; border: 1px solid #e5e7eb; border-radius: 14px;
          padding: 32px 28px; display: flex; flex-direction: column;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ch-service-card:hover { box-shadow: 0 8px 32px rgba(26,39,68,0.08); transform: translateY(-2px); }
        .ch-service-icon-wrap {
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(201,168,76,0.1); border: 1.5px solid rgba(201,168,76,0.28);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; flex-shrink: 0;
        }
        .ch-service-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.1rem; font-weight: 700; color: #1a2744; margin-bottom: 10px;
        }
        .ch-service-desc {
          font-family: 'Inter', sans-serif; font-size: 0.875rem; color: #6b7280;
          line-height: 1.65; font-weight: 300; margin-bottom: 20px; flex: 1;
        }
        .ch-service-link {
          font-family: 'Inter', sans-serif; font-size: 0.8rem; color: #c9a84c;
          font-weight: 600; letter-spacing: 0.04em;
          background: none; border: none; padding: 0; cursor: pointer;
          text-align: left; transition: opacity 0.15s;
        }
        .ch-service-link:hover { opacity: 0.7; }

        /* ABOUT */
        .ch-about { background: #ffffff; padding: 100px 40px; border-top: 1px solid #e5e7eb; }
        .ch-about-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 420px 1fr; gap: 64px; align-items: center;
        }
        .ch-about-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.5rem, 3vw, 2.1rem); font-weight: 700;
          color: #1a2744; line-height: 1.25; margin-bottom: 12px;
        }
        .ch-about-accent { width: 48px; height: 3px; background: #c9a84c; border-radius: 2px; margin-bottom: 24px; }
        .ch-about-body {
          font-family: 'Inter', sans-serif; font-size: 1rem; color: #374151;
          line-height: 1.78; font-weight: 300; margin-bottom: 36px;
        }
        .ch-about-stat { display: flex; gap: 16px; align-items: flex-start; margin-bottom: 24px; }
        .ch-about-stat-icon {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.25);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ch-about-stat-title {
          font-family: 'Inter', sans-serif; font-size: 0.88rem; font-weight: 700;
          color: #1a2744; margin-bottom: 4px;
        }
        .ch-about-stat-desc {
          font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #6b7280;
          font-weight: 300; line-height: 1.55;
        }

        /* PROGRAMS */
        .ch-programs {
          background: #1a2744; padding: 100px 40px; position: relative; overflow: hidden;
        }
        .ch-programs::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .ch-programs-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
        .ch-programs-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 56px;
        }
        .ch-prog-card {
          border: 1px solid rgba(255,255,255,0.1); border-radius: 14px;
          padding: 36px 28px; background: rgba(255,255,255,0.04);
          display: flex; flex-direction: column;
        }
        .ch-prog-card-feat { border-color: rgba(201,168,76,0.4); background: rgba(201,168,76,0.05); }
        .ch-prog-label {
          font-family: 'Inter', sans-serif; font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase; color: #c9a84c; margin-bottom: 14px;
        }
        .ch-prog-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.4rem; font-weight: 700; color: #ffffff; margin-bottom: 12px;
        }
        .ch-prog-desc {
          font-family: 'Inter', sans-serif; font-size: 0.875rem;
          color: rgba(255,255,255,0.52); line-height: 1.65; font-weight: 300;
          margin-bottom: 28px; flex: 1;
        }

        /* TESTIMONIAL + STATS */
        .ch-testi { background: #ffffff; padding: 100px 40px; border-top: 1px solid #e5e7eb; }
        .ch-testi-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start;
        }
        .ch-testi-quote {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.1rem, 2.2vw, 1.45rem); font-style: italic;
          color: #1a2744; line-height: 1.65; font-weight: 400; margin-bottom: 28px;
        }
        .ch-testi-attr {
          font-family: 'Inter', sans-serif; font-size: 0.78rem; color: #6b7280;
          letter-spacing: 0.1em; font-weight: 500; text-transform: uppercase;
        }
        .ch-testi-stats { display: flex; flex-direction: column; gap: 28px; padding-top: 16px; }
        .ch-testi-stat-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 3rem; font-weight: 700; color: #c9a84c; line-height: 1;
        }
        .ch-testi-stat-label {
          font-family: 'Inter', sans-serif; font-size: 0.78rem; color: #6b7280;
          font-weight: 500; margin-top: 6px; letter-spacing: 0.06em;
        }

        /* FOOTER CTA */
        .ch-footer-cta {
          background: #1a2744; padding: 100px 40px; text-align: center;
          position: relative; overflow: hidden;
        }
        .ch-footer-cta::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .ch-cta-inner { position: relative; z-index: 1; }
        .ch-cta-icon {
          width: 52px; height: 52px; border-radius: 50%;
          background: rgba(201,168,76,0.15); border: 1.5px solid rgba(201,168,76,0.35);
          display: flex; align-items: center; justify-content: center; margin: 0 auto 28px;
        }
        .ch-cta-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700;
          color: #ffffff; line-height: 1.2; margin-bottom: 16px;
        }
        .ch-cta-sub {
          font-family: 'Inter', sans-serif; font-size: 1rem;
          color: rgba(255,255,255,0.52); max-width: 460px; margin: 0 auto 48px;
          line-height: 1.75; font-weight: 300;
        }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .ch-hero-inner { grid-template-columns: 1fr; }
          .ch-hero-inner > div:last-child { display: none; }
          .ch-services-grid { grid-template-columns: repeat(2, 1fr); }
          .ch-about-inner { grid-template-columns: 1fr; }
          .ch-about-inner > div:first-child { display: none; }
          .ch-programs-grid { grid-template-columns: 1fr; }
          .ch-testi-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .ch-header { padding: 0 24px; }
          .ch-hero, .ch-services, .ch-about, .ch-programs, .ch-testi, .ch-footer-cta { padding: 72px 24px; }
          .ch-social-bar { padding: 18px 24px; }
          .ch-social-inner { gap: 10px; }
          .ch-services-grid { grid-template-columns: 1fr; }
        }
      `;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div className="ch-wrap">

      {/* HEADER */}
      <header className="ch-header">
        <a href="/coach" style={{ display: "block" }}>
          <img src="/nextstepspro-logo.png" alt="NextStepsPro"
            style={{ height: 32, objectFit: "contain", mixBlendMode: "multiply", display: "block" }} />
        </a>
        <a href="mailto:hello@alexcarter.com?subject=Book a Call" className="ch-btn-gold">
          Book a Call
        </a>
      </header>

      {/* HERO */}
      <section className="ch-hero">
        <div className="ch-hero-inner">
          <div>
            <div className="ch-hero-eyebrow">Alex Carter · LaunchPad</div>
            <h1 className="ch-hero-h1">
              Everything You Need.<br />One Place To Start.
            </h1>
            <p className="ch-hero-gold-sub">Coaching. Resources. Opportunities.</p>
            <div className="ch-hero-name">Alex Carter</div>
            <div className="ch-hero-subtitle">Coach · Speaker · Strategist</div>
            <div className="ch-hero-btns">
              <a href="mailto:hello@alexcarter.com?subject=Book a Call" className="ch-btn-gold">
                Book a Call
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
              alt="Alex Carter"
              style={{
                width: "100%", height: 500, objectFit: "cover",
                borderRadius: 8, display: "block",
                boxShadow: "0 24px 60px rgba(26,39,68,0.15)",
              }}
            />
          </div>
        </div>
      </section>

      {/* SOCIAL BAR */}
      <div className="ch-social-bar">
        <div className="ch-social-inner">
          {SOCIAL_ICONS.map(({ name, svg }) => (
            <button key={name} className="ch-social-btn" title={name}>{svg}</button>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="ch-services" id="services">
        <div className="ch-services-inner">
          <div className="ch-eyebrow">What You Can Do Here</div>
          <h2 className="ch-section-title">Everything In One Place.</h2>
          <div className="ch-section-accent" />
          <div className="ch-services-grid">
            {SERVICES.map(({ icon, title, desc, link }) => {
              const Icon = ICONS[icon];
              return (
                <div key={title} className="ch-service-card">
                  <div className="ch-service-icon-wrap"><Icon /></div>
                  <div className="ch-service-title">{title}</div>
                  <p className="ch-service-desc">{desc}</p>
                  <button className="ch-service-link">{link} →</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="ch-about" id="about">
        <div className="ch-about-inner">
          <div>
            <PhotoPlaceholder height={500} id="about-ph" />
          </div>
          <div>
            <div className="ch-eyebrow">About Alex</div>
            <h2 className="ch-about-title">
              I Help You Clarify, Connect, and Create Impact That Lasts.
            </h2>
            <div className="ch-about-accent" />
            <p className="ch-about-body">
              For over a decade, Alex Carter has helped coaches, speakers, and high-performers build the clarity and systems they need to grow with intention. This LaunchPad is your starting point.
            </p>
            {ABOUT_STATS.map(({ title, desc, icon }) => (
              <div key={title} className="ch-about-stat">
                <div className="ch-about-stat-icon">{icon}</div>
                <div>
                  <div className="ch-about-stat-title">{title}</div>
                  <div className="ch-about-stat-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="ch-programs" id="programs">
        <div className="ch-programs-inner">
          <div className="ch-eyebrow" style={{ color: "#c9a84c" }}>Work With Alex</div>
          <h2 className="ch-section-title" style={{ color: "#ffffff" }}>Choose Your Path Forward.</h2>
          <div className="ch-section-accent" />
          <div className="ch-programs-grid">
            <div className="ch-prog-card ch-prog-card-feat">
              <div className="ch-prog-label">1:1 Intensive</div>
              <h3 className="ch-prog-title">Strategy Call</h3>
              <p className="ch-prog-desc">A focused 60-minute session to cut through the noise and identify your most important next step.</p>
              <a href="mailto:hello@alexcarter.com?subject=Book a Strategy Call" className="ch-btn-gold">Book Now</a>
            </div>
            <div className="ch-prog-card">
              <div className="ch-prog-label">Group Program</div>
              <h3 className="ch-prog-title">Growth Accelerator</h3>
              <p className="ch-prog-desc">A structured 90-day program to build your audience, grow your brand, and create consistent momentum.</p>
              <a href="mailto:hello@alexcarter.com?subject=Growth Accelerator" className="ch-btn-outline">Learn More</a>
            </div>
            <div className="ch-prog-card ch-prog-card-feat">
              <div className="ch-prog-label">Premium Experience</div>
              <h3 className="ch-prog-title">VIP Day</h3>
              <p className="ch-prog-desc">A full day working side-by-side with Alex. Deep clarity, complete action plan, total transformation.</p>
              <a href="mailto:hello@alexcarter.com?subject=VIP Day Application" className="ch-btn-gold">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL + STATS */}
      <section className="ch-testi" id="testimonials">
        <div className="ch-testi-inner">
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", color: "#c9a84c", lineHeight: 1, marginBottom: 16 }}>"</p>
            <p className="ch-testi-quote">
              Alex doesn't just give you a plan. She gives you the clarity to actually follow through. I went from stuck to fully launched in 60 days.
            </p>
            <p className="ch-testi-attr">Jordan K. · Executive Coach</p>
          </div>
          <div className="ch-testi-stats">
            {[
              { num: "500+", label: "Clients Served" },
              { num: "25+",  label: "Countries Reached" },
              { num: "60+",  label: "Five-Star Reviews" },
            ].map(({ num, label }) => (
              <div key={label} style={{ borderLeft: "3px solid rgba(201,168,76,0.3)", paddingLeft: 24 }}>
                <div className="ch-testi-stat-num">{num}</div>
                <div className="ch-testi-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="ch-footer-cta">
        <div className="ch-cta-inner">
          <div className="ch-cta-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
              stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11,2 13.9,8.3 21,9.3 16,14.1 17.2,21 11,17.8 4.8,21 6,14.1 1,9.3 8.1,8.3"/>
            </svg>
          </div>
          <h2 className="ch-cta-title">Ready For Your Next Step?</h2>
          <p className="ch-cta-sub">
            Let's create clarity. Take action. Make it happen.
          </p>
          <a href="mailto:hello@alexcarter.com?subject=Let's Get Started" className="ch-btn-gold">
            LET'S GET STARTED →
          </a>
        </div>
      </section>

    </div>
  );
}
