import { useEffect } from "react";

function PhotoPlaceholder({ h = 480, id = "ph" }) {
  return (
    <svg viewBox="0 0 360 480" style={{ width: "100%", height: h, display: "block" }} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#243058" />
          <stop offset="100%" stopColor="#0d1628" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${id}g)`} />
      <ellipse cx="180" cy="70" rx="130" ry="65" fill="rgba(201,168,76,0.05)" />
      <ellipse cx="180" cy="155" rx="56" ry="60" fill="rgba(255,255,255,0.07)" />
      <path d="M30 440 Q180 290 330 440Z" fill="rgba(255,255,255,0.04)" />
      <line x1="145" y1="428" x2="215" y2="428" stroke="rgba(201,168,76,0.22)" strokeWidth="1" />
    </svg>
  );
}

const CalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="16" height="15" rx="2"/><line x1="6" y1="1" x2="6" y2="5"/><line x1="14" y1="1" x2="14" y2="5"/><line x1="2" y1="9" x2="18" y2="9"/>
  </svg>
);
const DlIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 3v10M6 9l4 4 4-4"/><line x1="3" y1="17" x2="17" y2="17"/>
  </svg>
);
const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="8"/><path d="M8 7l6 3-6 3V7z" fill="#c9a84c" stroke="none"/>
  </svg>
);
const PplIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="6" r="3.5"/><circle cx="14" cy="6" r="3"/><path d="M1 19c0-3.3 2.7-6 6-6"/><path d="M9 19c0-2.8 2.2-5 5-5s5 2.2 5 5"/>
  </svg>
);
const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 9a5 5 0 0110 0v4l2 2H3l2-2V9z"/><line x1="8" y1="18" x2="12" y2="18"/>
  </svg>
);
const CmpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="8"/><path d="M13.5 6.5l-3.5 7-3.5-3.5 7-3.5z" fill="rgba(201,168,76,0.35)" strokeWidth="1"/>
  </svg>
);

const SERVICES = [
  { Icon: CalIcon,  title: "Book a Call",         desc: "Schedule a 1:1 strategy session",                                   link: "Book Now →" },
  { Icon: DlIcon,   title: "Free Resource",        desc: "Download guides and tools to help you grow",                       link: "Download →" },
  { Icon: PlayIcon, title: "Watch and Learn",      desc: "Actionable trainings and insights",                                link: "Watch Now →" },
  { Icon: PplIcon,  title: "Join the Community",   desc: "Connect, learn, and grow with like-minded professionals",          link: "Join Now →" },
  { Icon: BellIcon, title: "Latest Updates",       desc: "Get updates, new content, and exclusive invites",                 link: "Subscribe →" },
  { Icon: CmpIcon,  title: "Explore Services",     desc: "See how we can work together",                                    link: "Explore →" },
];

const SOCIAL = [
  { name: "Facebook", svg: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 1.5H7.5a3 3 0 00-3 3v2H2v3h2.5v5H8v-5h2l.5-3H8V4.5a1 1 0 011-1h.5v-2z"/>
    </svg>
  )},
  { name: "Instagram", svg: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="12" height="12" rx="3.5"/>
      <circle cx="8" cy="8" r="3"/>
      <circle cx="11.5" cy="4.5" r="0.6" fill="rgba(255,255,255,0.7)" stroke="none"/>
    </svg>
  )},
  { name: "LinkedIn", svg: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="12" height="12" rx="2"/>
      <line x1="5" y1="7" x2="5" y2="11"/>
      <circle cx="5" cy="5.3" r="0.6" fill="rgba(255,255,255,0.7)" stroke="none"/>
      <path d="M8 7v1.5a2 2 0 004 0V7"/>
    </svg>
  )},
  { name: "YouTube", svg: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8s0-4.5 6-4.5S14 8 14 8s0 4.5-6 4.5S2 12.5 2 8z"/>
      <polygon points="6.5,5.5 10.5,8 6.5,10.5" fill="rgba(255,255,255,0.7)" stroke="none"/>
    </svg>
  )},
  { name: "Podcast", svg: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5.5" y="1.5" width="5" height="7.5" rx="2.5"/>
      <path d="M3 9a5 5 0 0010 0"/>
      <line x1="8" y1="14" x2="8" y2="16"/>
      <line x1="6" y1="16" x2="10" y2="16"/>
    </svg>
  )},
  { name: "Email", svg: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="3.5" width="13" height="10" rx="1.5"/>
      <path d="M1.5 5.5l6.5 4.5 6.5-4.5"/>
    </svg>
  )},
];

const ABOUT_STATS = [
  {
    title: "Clarity First",
    desc: "Start with the right question, not the loudest answer.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 14h6M7 16h4M9 2a5 5 0 015 5c0 2-1.2 3.5-2.5 4.5H6.5C5.2 10.5 4 9 4 7a5 5 0 015-5z"/>
      </svg>
    ),
  },
  {
    title: "Connection Always",
    desc: "Relationships are the strategy. Community is the result.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10a4 4 0 006 0l2-2a4 4 0 00-5.7-5.7l-1 1"/>
        <path d="M11 8a4 4 0 00-6 0l-2 2a4 4 0 005.7 5.7l1-1"/>
      </svg>
    ),
  },
  {
    title: "Results That Last",
    desc: "Build systems, not streaks. Progress that compounds.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="7"/><circle cx="9" cy="9" r="4"/>
        <circle cx="9" cy="9" r="1.5" fill="#c9a84c" stroke="none"/>
      </svg>
    ),
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
          background: rgba(250,250,248,0.96);
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(26,39,68,0.09);
          padding: 0 32px; height: 72px; display: flex; align-items: center;
        }
        .ch-header-inner {
          max-width: 1100px; width: 100%; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
        }
        .ch-header-left { display: flex; align-items: center; gap: 14px; }
        .ch-monogram {
          width: 44px; height: 44px; border-radius: 50%;
          background: #1a2744; display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif; font-size: 15px; font-weight: 700;
          color: #c9a84c; letter-spacing: 0.02em; flex-shrink: 0;
        }
        .ch-header-label {
          font-family: 'Inter', sans-serif; font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.28em; text-transform: uppercase; color: rgba(26,39,68,0.4);
        }

        /* BUTTONS */
        .ch-btn-gold {
          display: inline-block; background: #c9a84c; color: #1a2744; border: none;
          padding: 11px 28px; font-family: 'Inter', sans-serif; font-size: 0.78rem;
          font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase;
          border-radius: 6px; cursor: pointer; text-decoration: none;
          transition: opacity 0.18s, transform 0.18s;
        }
        .ch-btn-gold:hover { opacity: 0.85; transform: translateY(-1px); }
        .ch-btn-outline-dark {
          display: inline-block; background: transparent;
          color: rgba(255,255,255,0.82); border: 1.5px solid rgba(255,255,255,0.35);
          padding: 11px 28px; font-family: 'Inter', sans-serif; font-size: 0.78rem;
          font-weight: 600; letter-spacing: 0.09em; text-transform: uppercase;
          border-radius: 6px; cursor: pointer; text-decoration: none;
          transition: border-color 0.18s, opacity 0.18s;
        }
        .ch-btn-outline-dark:hover { border-color: rgba(201,168,76,0.6); opacity: 0.9; }

        /* HERO */
        .ch-hero { background: #FAFAF8; padding: 96px 32px 108px; }
        .ch-hero-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 400px; gap: 80px; align-items: center;
        }
        .ch-hero-eyebrow {
          font-family: 'Inter', sans-serif; font-size: 0.62rem; letter-spacing: 0.28em;
          text-transform: uppercase; color: #c9a84c; font-weight: 600; margin-bottom: 22px;
        }
        .ch-hero-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 700;
          color: #1a2744; line-height: 1.12; margin-bottom: 22px;
        }
        .ch-hero-gold-line {
          font-family: 'Inter', sans-serif; font-size: 0.8rem;
          font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;
          color: #c9a84c; margin-bottom: 28px;
        }
        .ch-gold-rule { width: 48px; height: 2px; background: #c9a84c; margin-bottom: 32px; }
        .ch-hero-name {
          font-family: 'Playfair Display', serif; font-style: italic;
          font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 400;
          color: #1a2744; margin-bottom: 10px; line-height: 1.18;
        }
        .ch-hero-titles {
          font-family: 'Inter', sans-serif; font-size: 0.66rem; font-weight: 600;
          letter-spacing: 0.24em; text-transform: uppercase; color: #6b7280;
        }
        .ch-photo-box { border-radius: 16px; overflow: hidden; }

        /* SOCIAL BAR */
        .ch-social-bar {
          background: #1a2744; padding: 22px 32px;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .ch-social-inner {
          max-width: 540px; margin: 0 auto;
          display: flex; align-items: center; justify-content: center; gap: 16px;
        }
        .ch-social-btn {
          width: 46px; height: 46px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.22);
          background: none; padding: 0;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; text-decoration: none;
          transition: border-color 0.18s, transform 0.18s; flex-shrink: 0;
        }
        .ch-social-btn:hover { border-color: rgba(201,168,76,0.65); transform: translateY(-2px); }

        /* SERVICES */
        .ch-services { background: #ffffff; padding: 100px 32px; border-top: 1px solid #e5e7eb; }
        .ch-services-inner { max-width: 1100px; margin: 0 auto; }
        .ch-eyebrow {
          font-family: 'Inter', sans-serif; font-size: 0.62rem; letter-spacing: 0.28em;
          text-transform: uppercase; color: #c9a84c; font-weight: 600; margin-bottom: 14px;
        }
        .ch-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700;
          color: #1a2744; line-height: 1.22; margin-bottom: 12px;
        }
        .ch-section-title-white { color: #ffffff; }
        .ch-section-accent { width: 48px; height: 2px; background: #c9a84c; margin-bottom: 52px; }
        .ch-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .ch-service-card {
          background: #FAFAF8; border: 1px solid #e5e7eb; border-radius: 16px;
          padding: 32px 26px; display: flex; flex-direction: column;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ch-service-card:hover { box-shadow: 0 8px 32px rgba(26,39,68,0.08); transform: translateY(-2px); }
        .ch-service-icon-wrap {
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.28);
          display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
        }
        .ch-service-title {
          font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700;
          color: #1a2744; margin-bottom: 8px;
        }
        .ch-service-desc {
          font-family: 'Inter', sans-serif; font-size: 0.875rem; color: #6b7280;
          line-height: 1.65; font-weight: 300; margin-bottom: 20px; flex: 1;
        }
        .ch-service-link {
          font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #c9a84c;
          font-weight: 600; text-decoration: none; transition: opacity 0.15s;
          background: none; border: none; padding: 0; cursor: pointer;
        }
        .ch-service-link:hover { opacity: 0.7; }

        /* ABOUT */
        .ch-about { background: #FAFAF8; padding: 100px 32px; border-top: 1px solid #e5e7eb; }
        .ch-about-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 400px 1fr; gap: 80px; align-items: center;
        }
        .ch-about-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 3vw, 2.5rem); font-weight: 700;
          color: #1a2744; line-height: 1.22; margin-bottom: 12px;
        }
        .ch-about-body {
          font-family: 'Inter', sans-serif; font-size: 1rem; color: #4b5563;
          line-height: 1.82; font-weight: 300; margin-bottom: 40px;
        }
        .ch-mini-stats { display: flex; flex-direction: column; gap: 20px; }
        .ch-mini-stat { display: flex; align-items: flex-start; gap: 14px; }
        .ch-mini-stat-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.24);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;
        }
        .ch-mini-stat-title {
          font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 700;
          color: #1a2744; margin-bottom: 3px;
        }
        .ch-mini-stat-desc {
          font-family: 'Inter', sans-serif; font-size: 0.82rem;
          color: #6b7280; font-weight: 300; line-height: 1.55;
        }

        /* PROGRAMS */
        .ch-programs {
          background: #1a2744; padding: 100px 32px;
          position: relative; overflow: hidden;
        }
        .ch-programs::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%);
          pointer-events: none;
        }
        .ch-programs-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
        .ch-programs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 52px; }
        .ch-prog-card {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px; padding: 36px 28px; display: flex; flex-direction: column;
          transition: border-color 0.2s, transform 0.2s;
        }
        .ch-prog-card:hover { border-color: rgba(201,168,76,0.35); transform: translateY(-2px); }
        .ch-prog-card.ch-prog-card-feat {
          border: 1px solid rgba(201,168,76,0.38); background: rgba(201,168,76,0.04);
        }
        .ch-prog-tag {
          font-family: 'Inter', sans-serif; font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase; color: #c9a84c; margin-bottom: 14px;
        }
        .ch-prog-title {
          font-family: 'Playfair Display', serif; font-size: 1.45rem; font-weight: 700;
          color: #ffffff; margin-bottom: 12px; line-height: 1.2;
        }
        .ch-prog-desc {
          font-family: 'Inter', sans-serif; font-size: 0.875rem; color: rgba(255,255,255,0.58);
          line-height: 1.72; font-weight: 300; flex: 1; margin-bottom: 28px;
        }
        .ch-prog-divider { height: 1px; background: rgba(255,255,255,0.08); margin-bottom: 24px; }

        /* TESTIMONIAL + STATS */
        .ch-testi { background: #ffffff; padding: 100px 32px; border-top: 1px solid #e5e7eb; }
        .ch-testi-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 320px; gap: 80px; align-items: center;
        }
        .ch-quote-mark {
          font-family: 'Playfair Display', serif; font-size: 5.5rem;
          color: rgba(201,168,76,0.2); line-height: 0.7; margin-bottom: 12px;
        }
        .ch-quote-text {
          font-family: 'Playfair Display', serif; font-style: italic;
          font-size: clamp(1.15rem, 2.2vw, 1.5rem); color: #1a2744;
          line-height: 1.6; margin-bottom: 28px; font-weight: 400;
        }
        .ch-quote-attr {
          font-family: 'Inter', sans-serif; font-size: 0.78rem; color: #6b7280;
          font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
        }
        .ch-numbers-col { display: flex; flex-direction: column; }
        .ch-number-item { padding: 26px 0; border-bottom: 1px solid #e5e7eb; }
        .ch-number-item:first-child { border-top: 1px solid #e5e7eb; }
        .ch-number-big {
          font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700;
          color: #1a2744; line-height: 1; margin-bottom: 4px;
        }
        .ch-number-gold { color: #c9a84c; }
        .ch-number-label {
          font-family: 'Inter', sans-serif; font-size: 0.72rem; color: #6b7280;
          font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
        }

        /* FOOTER CTA */
        .ch-footer-cta {
          background: #111d35; padding: 112px 32px; text-align: center;
          position: relative; overflow: hidden;
        }
        .ch-footer-cta::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 75%, rgba(201,168,76,0.09) 0%, transparent 65%);
          pointer-events: none;
        }
        .ch-cta-icon { display: flex; justify-content: center; margin-bottom: 28px; position: relative; z-index: 1; }
        .ch-cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 700;
          color: #ffffff; line-height: 1.18; margin-bottom: 16px; position: relative; z-index: 1;
        }
        .ch-cta-sub {
          font-family: 'Inter', sans-serif; font-size: 1rem;
          color: rgba(255,255,255,0.58); max-width: 440px; margin: 0 auto 44px;
          line-height: 1.78; font-weight: 300; position: relative; z-index: 1;
        }
        .ch-cta-btn-wrap { position: relative; z-index: 1; }
        .ch-footer-legal {
          margin-top: 64px; font-family: 'Inter', sans-serif; font-size: 0.72rem;
          color: rgba(255,255,255,0.22); letter-spacing: 0.06em; position: relative; z-index: 1;
        }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .ch-hero-inner { grid-template-columns: 1fr; }
          .ch-hero-right { display: none; }
          .ch-about-inner { grid-template-columns: 1fr; }
          .ch-about-photo { display: none; }
          .ch-testi-inner { grid-template-columns: 1fr; gap: 52px; }
          .ch-programs-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .ch-services-grid { grid-template-columns: 1fr; }
          .ch-social-inner { gap: 10px; }
          .ch-hero { padding: 72px 24px 80px; }
          .ch-services, .ch-about, .ch-testi, .ch-programs { padding: 80px 24px; }
          .ch-footer-cta { padding: 88px 24px; }
        }
      `;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div className="ch-wrap">

      {/* HEADER */}
      <header className="ch-header">
        <div className="ch-header-inner">
          <div className="ch-header-left">
            <div className="ch-monogram">AC</div>
            <span className="ch-header-label">LaunchPad</span>
          </div>
          <a href="mailto:hello@alexcarter.com?subject=Book a Call" className="ch-btn-gold">
            Book a Call
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="ch-hero">
        <div className="ch-hero-inner">
          <div className="ch-hero-left">
            <div className="ch-hero-eyebrow">Alex Carter Official LaunchPad</div>
            <h1 className="ch-hero-headline">
              Everything You Need.<br />One Place To Start.
            </h1>
            <p className="ch-hero-gold-line">Coaching. Resources. Opportunities.</p>
            <div className="ch-gold-rule" />
            <div className="ch-hero-name">Alex Carter</div>
            <div className="ch-hero-titles">COACH · SPEAKER · STRATEGIST</div>
          </div>
          <div className="ch-hero-right">
            <div className="ch-photo-box">
              <PhotoPlaceholder h={520} id="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL BAR */}
      <div className="ch-social-bar">
        <div className="ch-social-inner">
          {SOCIAL.map(({ name, svg }) => (
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
            {SERVICES.map(({ Icon, title, desc, link }) => (
              <div key={title} className="ch-service-card">
                <div className="ch-service-icon-wrap"><Icon /></div>
                <div className="ch-service-title">{title}</div>
                <p className="ch-service-desc">{desc}</p>
                <button className="ch-service-link">{link}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="ch-about" id="about">
        <div className="ch-about-inner">
          <div className="ch-about-photo">
            <div className="ch-photo-box">
              <PhotoPlaceholder h={520} id="about" />
            </div>
          </div>
          <div className="ch-about-content">
            <div className="ch-eyebrow">About Alex</div>
            <h2 className="ch-about-headline">
              I Help You Clarify, Connect, and Create Impact That Lasts.
            </h2>
            <div className="ch-gold-rule" />
            <p className="ch-about-body">
              For over a decade, Alex Carter has worked with coaches, entrepreneurs, and professionals across more than 25 countries to build clarity, confidence, and systems that create lasting results. This page is your starting point. Whether you are here for a strategy call, a community, or a program to take your next step, everything is in one place.
            </p>
            <div className="ch-mini-stats">
              {ABOUT_STATS.map(({ title, desc, icon }) => (
                <div key={title} className="ch-mini-stat">
                  <div className="ch-mini-stat-icon">{icon}</div>
                  <div>
                    <div className="ch-mini-stat-title">{title}</div>
                    <div className="ch-mini-stat-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="ch-programs" id="programs">
        <div className="ch-programs-inner">
          <div className="ch-eyebrow" style={{ color: "#c9a84c" }}>Work With Alex</div>
          <h2 className="ch-section-title ch-section-title-white">Choose Your Path Forward.</h2>
          <div className="ch-section-accent" />
          <div className="ch-programs-grid">

            <div className="ch-prog-card">
              <div className="ch-prog-tag">45-Minute Session</div>
              <h3 className="ch-prog-title">Strategy Call</h3>
              <p className="ch-prog-desc">A focused 45-minute call to tackle your most important challenge and leave with a clear, actionable plan.</p>
              <div className="ch-prog-divider" />
              <a href="mailto:hello@alexcarter.com?subject=Book a Strategy Call" className="ch-btn-gold">Book Now</a>
            </div>

            <div className="ch-prog-card ch-prog-card-feat">
              <div className="ch-prog-tag">90-Day Program</div>
              <h3 className="ch-prog-title">Growth Accelerator</h3>
              <p className="ch-prog-desc">A personalized 90-day program built around your goals, with strategy, accountability, and systems designed to work.</p>
              <div className="ch-prog-divider" />
              <a href="mailto:hello@alexcarter.com?subject=Growth Accelerator" className="ch-btn-outline-dark">Learn More</a>
            </div>

            <div className="ch-prog-card">
              <div className="ch-prog-tag">One-Day Intensive</div>
              <h3 className="ch-prog-title">VIP Day</h3>
              <p className="ch-prog-desc">One full day working together. Walk in with your challenge. Walk out with your roadmap. Limited availability.</p>
              <div className="ch-prog-divider" />
              <a href="mailto:hello@alexcarter.com?subject=VIP Day Application" className="ch-btn-gold">Apply Now</a>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIAL + STATS */}
      <section className="ch-testi" id="testimonials">
        <div className="ch-testi-inner">
          <div>
            <div className="ch-quote-mark">"</div>
            <blockquote className="ch-quote-text">
              Working with Alex changed everything. I had the clarity I needed within the first session. Within 90 days, I built systems that gave me more freedom and more revenue than I ever imagined.
            </blockquote>
            <div className="ch-quote-attr">Michael T. | Entrepreneur</div>
          </div>
          <div className="ch-numbers-col">
            {[
              { num: "500", plus: "+", label: "Clients Served" },
              { num: "25",  plus: "+", label: "Countries Reached" },
              { num: "60",  plus: "+", label: "Five-Star Reviews" },
            ].map(({ num, plus, label }) => (
              <div key={label} className="ch-number-item">
                <div className="ch-number-big">{num}<span className="ch-number-gold">{plus}</span></div>
                <div className="ch-number-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="ch-footer-cta" id="cta">
        <div className="ch-cta-icon">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 3l3.9 10.8H33l-9.5 6.9 3.6 11.1L18 25.6l-9.1 6.2 3.6-11.1L3 13.8h11.1L18 3z"/>
          </svg>
        </div>
        <h2 className="ch-cta-title">Ready For Your Next Step?</h2>
        <p className="ch-cta-sub">Let's create clarity. Take action. Make it happen.</p>
        <div className="ch-cta-btn-wrap">
          <a href="mailto:hello@alexcarter.com?subject=Getting Started" className="ch-btn-gold"
            style={{ fontSize: "0.8rem", letterSpacing: "0.12em", padding: "15px 44px" }}>
            LET'S GET STARTED →
          </a>
        </div>
        <p className="ch-footer-legal">Alex Carter · All Rights Reserved</p>
      </section>

    </div>
  );
}
