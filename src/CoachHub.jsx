import { useEffect } from "react";

const C = {
  green:       "#1a3a2a",
  greenMid:    "#234d38",
  cream:       "#faf8f4",
  gold:        "#c9a84c",
  white:       "#ffffff",
  text:        "#1a2010",
  muted:       "#6b7a6e",
  border:      "#dfe8df",
  cardBg:      "#f4f7f4",
};

export default function CoachHub() {
  useEffect(() => {
    if (!document.getElementById("ch-fonts")) {
      const link = document.createElement("link");
      link.id = "ch-fonts";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap";
      document.head.appendChild(link);
    }
    if (!document.getElementById("ch-css")) {
      const style = document.createElement("style");
      style.id = "ch-css";
      style.textContent = `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .ch-body { font-family: 'Inter', sans-serif; background: #faf8f4; color: #1a2010; }

        /* ── HERO ── */
        .ch-hero {
          background: linear-gradient(160deg, #1a3a2a 0%, #234d38 55%, #1a3a2a 100%);
          padding: 100px 24px 120px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ch-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .ch-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #c9a84c, #e8c96d);
          border: 4px solid rgba(201,168,76,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 32px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.25);
          position: relative;
          z-index: 1;
        }
        .ch-avatar-initials {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: #1a3a2a;
          letter-spacing: 0.03em;
          line-height: 1;
        }
        .ch-hero-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }
        .ch-hero-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #c9a84c;
          font-weight: 500;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }
        .ch-hero-tagline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.1rem, 2.5vw, 1.55rem);
          color: rgba(255,255,255,0.78);
          max-width: 580px;
          margin: 0 auto 52px;
          line-height: 1.65;
          font-style: italic;
          font-weight: 400;
          position: relative;
          z-index: 1;
        }
        .ch-hero-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }
        .ch-btn-gold {
          display: inline-block;
          background: #c9a84c;
          color: #1a3a2a;
          border: none;
          padding: 15px 36px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.18s, transform 0.18s;
        }
        .ch-btn-gold:hover { opacity: 0.88; transform: translateY(-1px); }
        .ch-btn-outline {
          display: inline-block;
          background: transparent;
          color: #ffffff;
          border: 2px solid rgba(255,255,255,0.45);
          padding: 14px 36px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.18s;
        }
        .ch-btn-outline:hover { border-color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.07); }

        /* ── SECTIONS ── */
        .ch-section { padding: 88px 24px; }
        .ch-inner { max-width: 1040px; margin: 0 auto; }
        .ch-inner-narrow { max-width: 680px; margin: 0 auto; }
        .ch-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #c9a84c;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .ch-section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: #1a3a2a;
          line-height: 1.25;
          margin-bottom: 20px;
        }
        .ch-section-title-light { color: #ffffff; }

        /* ── ABOUT ── */
        .ch-about { background: #faf8f4; }
        .ch-about-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: #2e4a36;
          line-height: 1.9;
          font-weight: 400;
        }
        .ch-about-rule {
          width: 48px;
          height: 2px;
          background: #c9a84c;
          margin: 0 auto 36px;
        }

        /* ── OFFERS ── */
        .ch-offers { background: #f0f5f0; }
        .ch-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 52px;
        }
        .ch-card {
          background: #ffffff;
          border: 1px solid #dfe8df;
          border-radius: 14px;
          padding: 36px 28px;
          box-shadow: 0 2px 18px rgba(26,58,42,0.06);
          display: flex;
          flex-direction: column;
        }
        .ch-card-featured {
          border: 2px solid #c9a84c;
          box-shadow: 0 8px 36px rgba(201,168,76,0.13);
        }
        .ch-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(26,58,42,0.08), rgba(26,58,42,0.04));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 20px;
        }
        .ch-card-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.3rem;
          color: #1a3a2a;
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .ch-card-tag {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c9a84c;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .ch-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #6b7a6e;
          line-height: 1.7;
          font-weight: 300;
          flex: 1;
          margin-bottom: 28px;
        }
        .ch-card-btn {
          display: block;
          text-align: center;
          background: #1a3a2a;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: opacity 0.18s, transform 0.18s;
        }
        .ch-card-btn:hover { opacity: 0.82; transform: translateY(-1px); }
        .ch-card-btn-gold {
          background: #c9a84c;
          color: #1a3a2a;
        }

        /* ── SOCIAL ── */
        .ch-social { background: #faf8f4; }
        .ch-social-grid {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 40px;
        }
        .ch-social-link {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid #dfe8df;
          border-radius: 10px;
          padding: 14px 24px;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #1a3a2a;
          transition: all 0.18s;
          box-shadow: 0 1px 8px rgba(0,0,0,0.04);
        }
        .ch-social-link:hover {
          border-color: #c9a84c;
          box-shadow: 0 4px 16px rgba(201,168,76,0.14);
          transform: translateY(-1px);
        }
        .ch-social-icon { font-size: 1.15rem; }

        /* ── CTA BAND ── */
        .ch-cta-band {
          background: linear-gradient(135deg, #1a3a2a 0%, #234d38 100%);
          padding: 88px 24px;
          text-align: center;
        }
        .ch-cta-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.6rem, 3.5vw, 2.5rem);
          color: #ffffff;
          font-weight: 700;
          line-height: 1.3;
          max-width: 560px;
          margin: 0 auto 14px;
        }
        .ch-cta-sub {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.65);
          max-width: 420px;
          margin: 0 auto 40px;
          line-height: 1.7;
          font-weight: 300;
        }

        /* ── FOOTER ── */
        .ch-footer {
          background: #0e2218;
          padding: 48px 24px;
          text-align: center;
        }
        .ch-footer-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.3rem;
          color: #ffffff;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .ch-footer-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
          margin-bottom: 20px;
          letter-spacing: 0.04em;
        }
        .ch-footer-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: #c9a84c;
          text-decoration: none;
          font-weight: 500;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .ch-cards { grid-template-columns: 1fr; max-width: 440px; margin-left: auto; margin-right: auto; }
          .ch-social-grid { gap: 12px; }
        }
        @media (max-width: 540px) {
          .ch-hero-btns { flex-direction: column; align-items: center; }
          .ch-btn-gold, .ch-btn-outline { width: 100%; max-width: 280px; text-align: center; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const scrollToBook = () => {
    document.getElementById("ch-book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ch-body">

      {/* ── HERO ── */}
      <section className="ch-hero">
        <div className="ch-avatar">
          <span className="ch-avatar-initials">AC</span>
        </div>
        <div className="ch-hero-title">Life &amp; Leadership Coach</div>
        <h1 className="ch-hero-name">Alex Carter</h1>
        <p className="ch-hero-tagline">
          Helping ambitious people stop drifting and start moving — with clarity, purpose, and a plan that actually fits their life.
        </p>
        <div className="ch-hero-btns">
          <button className="ch-btn-gold" onClick={scrollToBook}>
            Book a Discovery Call
          </button>
          <a href="#offers" className="ch-btn-outline"
            onClick={e => { e.preventDefault(); document.getElementById("offers")?.scrollIntoView({ behavior:"smooth" }); }}>
            See What I Offer
          </a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="ch-section ch-about" id="about">
        <div className="ch-inner-narrow" style={{ textAlign:"center" }}>
          <div className="ch-eyebrow">About Alex</div>
          <h2 className="ch-section-title" style={{ marginBottom:28 }}>Built on Real Experience. Focused on Real Results.</h2>
          <div className="ch-about-rule" />
          <p className="ch-about-text">
            After a decade of working at the intersection of leadership development and personal transformation, Alex Carter built a coaching practice grounded in one simple belief: that most people already have what they need — they just need a clearer picture of where they are, where they want to go, and the right structure to get there. Alex works with entrepreneurs, executives, and high performers who are ready to stop reacting and start building a life that feels as intentional as it looks.
          </p>
        </div>
      </section>

      {/* ── WHAT I OFFER ── */}
      <section className="ch-section ch-offers" id="offers">
        <div className="ch-inner">
          <div style={{ textAlign:"center" }}>
            <div className="ch-eyebrow">What I Offer</div>
            <h2 className="ch-section-title">Three Ways to Work Together</h2>
          </div>
          <div className="ch-cards">

            {/* 1:1 Coaching */}
            <div className="ch-card">
              <div className="ch-card-icon">🎯</div>
              <div className="ch-card-tag">Signature Offer</div>
              <div className="ch-card-name">1:1 Coaching</div>
              <p className="ch-card-desc">
                Private, high-touch coaching built around your specific goals and situation. Sessions are structured, direct, and designed to move you forward — not just process where you are.
              </p>
              <a href="#ch-book" className="ch-card-btn"
                onClick={e => { e.preventDefault(); document.getElementById("ch-book")?.scrollIntoView({ behavior:"smooth" }); }}>
                Apply Now
              </a>
            </div>

            {/* Group Program */}
            <div className="ch-card ch-card-featured">
              <div className="ch-card-icon">👥</div>
              <div className="ch-card-tag">Most Popular</div>
              <div className="ch-card-name">Group Program</div>
              <p className="ch-card-desc">
                A 12-week live cohort for driven individuals who want structure, accountability, and community. You get the frameworks, the group, and the momentum — all at once.
              </p>
              <a href="#ch-book" className="ch-card-btn ch-card-btn-gold"
                onClick={e => { e.preventDefault(); document.getElementById("ch-book")?.scrollIntoView({ behavior:"smooth" }); }}>
                Join the Waitlist
              </a>
            </div>

            {/* Strategy Intensive */}
            <div className="ch-card">
              <div className="ch-card-icon">⚡</div>
              <div className="ch-card-tag">Half-Day Session</div>
              <div className="ch-card-name">Strategy Intensive</div>
              <p className="ch-card-desc">
                A focused half-day session for clients who need a clear roadmap fast. We map your current situation, identify the highest-leverage moves, and leave with a 90-day action plan.
              </p>
              <a href="#ch-book" className="ch-card-btn"
                onClick={e => { e.preventDefault(); document.getElementById("ch-book")?.scrollIntoView({ behavior:"smooth" }); }}>
                Book a Session
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── SOCIAL LINKS ── */}
      <section className="ch-section ch-social" id="connect">
        <div className="ch-inner" style={{ textAlign:"center" }}>
          <div className="ch-eyebrow">Stay Connected</div>
          <h2 className="ch-section-title">Follow the Journey</h2>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"0.95rem", color:C.muted, lineHeight:1.7, fontWeight:300, maxWidth:440, margin:"0 auto" }}>
            Weekly insights on clarity, leadership, and building a life on your own terms.
          </p>
          <div className="ch-social-grid">
            {[
              { icon:"📸", label:"Instagram",  href:"https://instagram.com" },
              { icon:"💼", label:"LinkedIn",   href:"https://linkedin.com"  },
              { icon:"▶️",  label:"YouTube",   href:"https://youtube.com"   },
              { icon:"🎙️", label:"Podcast",   href:"#"                     },
            ].map(({ icon, label, href }) => (
              <a key={label} href={href} className="ch-social-link" target="_blank" rel="noopener noreferrer">
                <span className="ch-social-icon">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="ch-cta-band" id="ch-book">
        <div className="ch-eyebrow" style={{ color:C.gold }}>Ready to Begin?</div>
        <h2 className="ch-cta-headline">Book Your Free Discovery Call</h2>
        <p className="ch-cta-sub">
          A 30-minute conversation to see if we're the right fit. No pressure, no pitch. Just clarity.
        </p>
        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="ch-btn-gold">
          Schedule Your Call
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ch-footer">
        <div className="ch-footer-name">Alex Carter</div>
        <div className="ch-footer-tagline">Life &amp; Leadership Coach</div>
        <a href="mailto:hello@alexcarter.com" className="ch-footer-link">hello@alexcarter.com</a>
      </footer>

    </div>
  );
}
