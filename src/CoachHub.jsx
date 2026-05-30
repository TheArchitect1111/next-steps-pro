import { useEffect, useState } from "react";


export default function CoachHub() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!document.getElementById("ch-fonts")) {
      const link = document.createElement("link");
      link.id = "ch-fonts";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
    if (!document.getElementById("ch-css")) {
      const style = document.createElement("style");
      style.id = "ch-css";
      style.textContent = `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .ch-root { font-family: 'Inter', sans-serif; background: #1a2744; color: #ffffff; }

        /* ── HERO ── */
        .ch-hero {
          background: #1a2744;
          padding: 100px 24px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ch-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 20%, rgba(201,168,76,0.09) 0%, transparent 62%);
          pointer-events: none;
        }
        .ch-hero::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: rgba(255,255,255,0.07);
        }

        .ch-avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: linear-gradient(135deg, #c9a84c 0%, #e8c96d 100%);
          border: 3px solid rgba(201,168,76,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 28px;
          box-shadow: 0 0 0 8px rgba(201,168,76,0.07), 0 16px 48px rgba(0,0,0,0.35);
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }
        .ch-avatar-initials {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #1a2744;
          letter-spacing: 0.02em;
          line-height: 1;
        }
        .ch-hero-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.4rem, 5.5vw, 3.8rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }
        .ch-hero-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #c9a84c;
          font-weight: 600;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }
        .ch-hero-tagline {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: clamp(1.05rem, 2.2vw, 1.4rem);
          color: rgba(255,255,255,0.7);
          max-width: 560px;
          margin: 0 auto 44px;
          line-height: 1.68;
          position: relative;
          z-index: 1;
          font-weight: 400;
        }
        .ch-hero-primary {
          position: relative;
          z-index: 1;
          margin-bottom: 28px;
        }
        .ch-btn-gold {
          display: inline-block;
          background: #c9a84c;
          color: #1a2744;
          border: none;
          padding: 16px 44px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border-radius: 7px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
          box-shadow: 0 4px 20px rgba(201,168,76,0.28);
        }
        .ch-btn-gold:hover { opacity: 0.88; transform: translateY(-1px); box-shadow: 0 8px 28px rgba(201,168,76,0.36); }
        .ch-hero-nav {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }
        .ch-nav-btn {
          display: inline-block;
          background: transparent;
          color: rgba(255,255,255,0.7);
          border: 1.5px solid rgba(255,255,255,0.2);
          padding: 10px 22px;
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.18s;
        }
        .ch-nav-btn:hover {
          border-color: rgba(201,168,76,0.55);
          color: #c9a84c;
          background: rgba(201,168,76,0.06);
        }

        /* ── SECTIONS ── */
        .ch-section { padding: 88px 24px; }
        .ch-section-alt { background: #1e2f52; }
        .ch-section-cream { background: #FAFAF8; }
        .ch-inner { max-width: 1060px; margin: 0 auto; }
        .ch-inner-narrow { max-width: 680px; margin: 0 auto; }
        .ch-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #c9a84c;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .ch-section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.22;
          margin-bottom: 20px;
        }
        .ch-section-title-dark { color: #1a2744; }
        .ch-section-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.975rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.78;
          font-weight: 300;
          max-width: 520px;
        }
        .ch-section-sub-dark { color: #6b7280; }
        .ch-rule {
          width: 44px; height: 2px;
          background: #c9a84c;
          margin: 0 auto 32px;
        }

        /* ── ABOUT ── */
        .ch-about-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          color: rgba(255,255,255,0.82);
          line-height: 1.92;
          font-weight: 400;
          text-align: center;
        }
        .ch-about-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .ch-stat-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #c9a84c;
          line-height: 1;
          margin-bottom: 6px;
        }
        .ch-stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.06em;
          font-weight: 400;
          text-align: center;
        }

        /* ── PROGRAMS ── */
        .ch-programs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 52px;
        }
        .ch-prog-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, background 0.2s;
        }
        .ch-prog-card:hover {
          border-color: rgba(201,168,76,0.35);
          background: rgba(201,168,76,0.04);
        }
        .ch-prog-card-feat {
          border: 1.5px solid rgba(201,168,76,0.45);
          background: rgba(201,168,76,0.05);
          box-shadow: 0 8px 40px rgba(201,168,76,0.1);
        }
        .ch-prog-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 22px;
        }
        .ch-prog-tag {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a84c;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .ch-prog-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.25rem;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .ch-prog-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.72;
          font-weight: 300;
          flex: 1;
          margin-bottom: 28px;
        }
        .ch-prog-btn {
          display: block;
          text-align: center;
          padding: 12px 20px;
          border-radius: 7px;
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          text-decoration: none;
          transition: opacity 0.18s, transform 0.18s;
          cursor: pointer;
        }
        .ch-prog-btn-outline {
          background: transparent;
          color: rgba(255,255,255,0.7);
          border: 1.5px solid rgba(255,255,255,0.2);
        }
        .ch-prog-btn-gold {
          background: #c9a84c;
          color: #1a2744;
          border: none;
          box-shadow: 0 4px 16px rgba(201,168,76,0.25);
        }
        .ch-prog-btn:hover { opacity: 0.85; transform: translateY(-1px); }

        /* ── TESTIMONIALS ── */
        .ch-testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 52px;
        }
        .ch-quote-card {
          background: #1a2744;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 40px 36px;
          position: relative;
        }
        .ch-quote-mark {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4rem;
          color: rgba(201,168,76,0.25);
          line-height: 1;
          position: absolute;
          top: 20px; left: 28px;
          pointer-events: none;
        }
        .ch-quote-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: rgba(255,255,255,0.82);
          line-height: 1.78;
          font-weight: 400;
          margin-bottom: 28px;
          padding-top: 20px;
        }
        .ch-quote-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .ch-quote-avatar {
          width: 42px; height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(201,168,76,0.3), rgba(201,168,76,0.12));
          border: 1.5px solid rgba(201,168,76,0.3);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #c9a84c;
          flex-shrink: 0;
        }
        .ch-quote-name {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 2px;
        }
        .ch-quote-role {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
        }
        .ch-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 16px;
        }
        .ch-star { color: #c9a84c; font-size: 0.9rem; }

        /* ── FREE RESOURCE ── */
        .ch-resource {
          background: #111d35;
          padding: 88px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ch-resource::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .ch-resource-box {
          max-width: 560px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .ch-resource-icon {
          width: 72px; height: 72px;
          border-radius: 18px;
          background: rgba(201,168,76,0.12);
          border: 1px solid rgba(201,168,76,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem;
          margin: 0 auto 28px;
        }
        .ch-resource-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.7rem, 3.5vw, 2.4rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 14px;
        }
        .ch-resource-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.975rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 36px;
        }
        .ch-email-form {
          display: flex;
          gap: 10px;
          max-width: 440px;
          margin: 0 auto;
        }
        .ch-email-input {
          flex: 1;
          background: rgba(255,255,255,0.07);
          border: 1.5px solid rgba(255,255,255,0.15);
          border-radius: 7px;
          padding: 14px 18px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #ffffff;
          outline: none;
          transition: border-color 0.18s;
        }
        .ch-email-input::placeholder { color: rgba(255,255,255,0.35); }
        .ch-email-input:focus { border-color: rgba(201,168,76,0.55); }
        .ch-email-submit {
          background: #c9a84c;
          color: #1a2744;
          border: none;
          padding: 14px 24px;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          border-radius: 7px;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.18s, transform 0.18s;
        }
        .ch-email-submit:hover { opacity: 0.88; transform: translateY(-1px); }
        .ch-resource-success {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #c9a84c;
          font-weight: 500;
          margin-top: 16px;
        }
        .ch-privacy {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
          margin-top: 14px;
        }

        /* ── CONTACT / FOOTER ── */
        .ch-footer {
          background: #0d1628;
          padding: 64px 24px 40px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .ch-footer-inner {
          max-width: 1060px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ch-footer-col {}
        .ch-footer-logo {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.3rem;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .ch-footer-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.38);
          font-weight: 300;
          line-height: 1.65;
        }
        .ch-footer-head {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          font-weight: 600;
          margin-bottom: 16px;
        }
        .ch-footer-link {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          font-weight: 300;
          margin-bottom: 10px;
          transition: color 0.15s;
        }
        .ch-footer-link:hover { color: #c9a84c; }
        .ch-footer-bottom {
          max-width: 1060px;
          margin: 28px auto 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ch-footer-copy {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.25);
          font-weight: 300;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .ch-programs-grid { grid-template-columns: 1fr; max-width: 440px; margin-left: auto; margin-right: auto; }
          .ch-testimonials-grid { grid-template-columns: 1fr; }
          .ch-footer-inner { grid-template-columns: 1fr; gap: 28px; }
          .ch-footer-bottom { flex-direction: column; text-align: center; }
        }
        @media (max-width: 540px) {
          .ch-email-form { flex-direction: column; }
          .ch-hero-nav { gap: 8px; }
          .ch-about-stats { gap: 28px; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ch-root">

      {/* ── HERO ── */}
      <section className="ch-hero" id="hero">
        <div className="ch-avatar">
          <span className="ch-avatar-initials">AC</span>
        </div>
        <div className="ch-hero-title">Life &amp; Leadership Coach</div>
        <h1 className="ch-hero-name">Alex Carter</h1>
        <p className="ch-hero-tagline">
          Helping ambitious people stop drifting and start building a life that feels as intentional as it looks.
        </p>
        <div className="ch-hero-primary">
          <button className="ch-btn-gold" onClick={() => scroll("book")}>
            Work With Me
          </button>
        </div>
        <div className="ch-hero-nav">
          <button className="ch-nav-btn" onClick={() => scroll("book")}>Book a Call</button>
          <button className="ch-nav-btn" onClick={() => scroll("programs")}>Programs</button>
          <button className="ch-nav-btn" onClick={() => scroll("resource")}>Free Resource</button>
          <button className="ch-nav-btn" onClick={() => scroll("stories")}>Success Stories</button>
          <button className="ch-nav-btn" onClick={() => scroll("contact")}>Contact</button>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="ch-section" id="about">
        <div className="ch-inner-narrow" style={{ textAlign: "center" }}>
          <div className="ch-eyebrow">About Alex</div>
          <h2 className="ch-section-title" style={{ marginBottom: 28 }}>
            Real experience. Practical frameworks. Lasting results.
          </h2>
          <div className="ch-rule" />
          <p className="ch-about-text">
            After a decade working at the intersection of leadership development and personal transformation, Alex Carter built a coaching practice grounded in one belief: most people already have what they need. They just need a clearer picture of where they are, where they want to go, and the right structure to get there. Alex works with entrepreneurs, executives, and high performers who are ready to stop reacting and start building with intention.
          </p>
          <div className="ch-about-stats">
            {[
              { num: "10+", label: "Years Coaching" },
              { num: "400+", label: "Clients Served" },
              { num: "92%", label: "Report Clarity Within 30 Days" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="ch-stat-num">{num}</div>
                <div className="ch-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="ch-section ch-section-alt" id="programs">
        <div className="ch-inner">
          <div style={{ marginBottom: 8 }}>
            <div className="ch-eyebrow">Ways to Work Together</div>
            <h2 className="ch-section-title">Three programs. One outcome: clarity with momentum.</h2>
            <p className="ch-section-sub">Choose the format that fits where you are right now.</p>
          </div>
          <div className="ch-programs-grid">

            <div className="ch-prog-card">
              <div className="ch-prog-icon">🎯</div>
              <div className="ch-prog-tag">Signature Offer</div>
              <div className="ch-prog-name">1:1 Private Coaching</div>
              <p className="ch-prog-desc">
                High-touch, private coaching built around your specific situation and goals. Sessions are structured, direct, and focused on the moves that actually matter — not endless processing.
              </p>
              <a href="#book" className="ch-prog-btn ch-prog-btn-outline"
                onClick={e => { e.preventDefault(); scroll("book"); }}>
                Apply Now
              </a>
            </div>

            <div className="ch-prog-card ch-prog-card-feat">
              <div className="ch-prog-icon">👥</div>
              <div className="ch-prog-tag">Most Popular</div>
              <div className="ch-prog-name">Group Cohort</div>
              <p className="ch-prog-desc">
                A 12-week live cohort for driven individuals who want structure, accountability, and community. You get the frameworks, the group, and the momentum — all at once.
              </p>
              <a href="#book" className="ch-prog-btn ch-prog-btn-gold"
                onClick={e => { e.preventDefault(); scroll("book"); }}>
                Join the Waitlist
              </a>
            </div>

            <div className="ch-prog-card">
              <div className="ch-prog-icon">⚡</div>
              <div className="ch-prog-tag">Half-Day Intensive</div>
              <div className="ch-prog-name">Strategy Day</div>
              <p className="ch-prog-desc">
                A focused half-day for clients who need a clear roadmap fast. We map your situation, identify the highest-leverage moves, and you leave with a full 90-day action plan.
              </p>
              <a href="#book" className="ch-prog-btn ch-prog-btn-outline"
                onClick={e => { e.preventDefault(); scroll("book"); }}>
                Book a Session
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="ch-section" id="stories">
        <div className="ch-inner">
          <div style={{ marginBottom: 8 }}>
            <div className="ch-eyebrow">Success Stories</div>
            <h2 className="ch-section-title">What clients say after working with Alex.</h2>
          </div>
          <div className="ch-testimonials-grid">

            <div className="ch-quote-card">
              <div className="ch-quote-mark">"</div>
              <div className="ch-stars">
                {[1,2,3,4,5].map(n => <span key={n} className="ch-star">★</span>)}
              </div>
              <p className="ch-quote-text">
                I came to Alex spinning my wheels — busy but not moving. Within eight weeks I had more clarity about my direction than I had in the previous three years. The framework Alex uses isn't just conceptual. It's actionable, it's specific, and it actually holds.
              </p>
              <div className="ch-quote-author">
                <div className="ch-quote-avatar">DM</div>
                <div>
                  <div className="ch-quote-name">David Mercer</div>
                  <div className="ch-quote-role">Entrepreneur, 1:1 Coaching Client</div>
                </div>
              </div>
            </div>

            <div className="ch-quote-card">
              <div className="ch-quote-mark">"</div>
              <div className="ch-stars">
                {[1,2,3,4,5].map(n => <span key={n} className="ch-star">★</span>)}
              </div>
              <p className="ch-quote-text">
                The Strategy Day alone was worth ten times the investment. We covered in six hours what would have taken me months to figure out on my own. Alex has a rare ability to cut through the noise and identify what actually matters. I left with a plan I could execute immediately.
              </p>
              <div className="ch-quote-author">
                <div className="ch-quote-avatar">KR</div>
                <div>
                  <div className="ch-quote-name">Keisha Roberts</div>
                  <div className="ch-quote-role">Marketing Director, Strategy Day Client</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FREE RESOURCE ── */}
      <section className="ch-resource" id="resource">
        <div className="ch-resource-box">
          <div className="ch-resource-icon">📋</div>
          <div className="ch-eyebrow" style={{ marginBottom: 16 }}>Free Download</div>
          <h2 className="ch-resource-title">The Clarity Audit: 10 Questions That Reveal Exactly Where You're Stuck</h2>
          <p className="ch-resource-sub">
            A free guided framework used in Alex's 1:1 sessions. Takes 15 minutes. Most people say it's the most honest conversation they've had with themselves in years.
          </p>
          {!submitted ? (
            <>
              <div className="ch-email-form">
                <input
                  type="email"
                  className="ch-email-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button
                  className="ch-email-submit"
                  onClick={() => { if (email) setSubmitted(true); }}
                >
                  Send It
                </button>
              </div>
              <p className="ch-privacy">No spam. Unsubscribe anytime.</p>
            </>
          ) : (
            <p className="ch-resource-success">Check your inbox — the Clarity Audit is on its way.</p>
          )}
        </div>
      </section>

      {/* ── BOOK / CTA ── */}
      <section className="ch-section" id="book" style={{ background: "#1e2f52", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div className="ch-eyebrow">Ready to Begin?</div>
          <h2 className="ch-section-title" style={{ marginBottom: 14 }}>
            Book Your Free Discovery Call
          </h2>
          <p className="ch-section-sub" style={{ maxWidth: 460, margin: "0 auto 40px", textAlign: "center" }}>
            A 30-minute conversation to see if we're the right fit. No pressure, no pitch — just a clear look at where you are and where you want to go.
          </p>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="ch-btn-gold">
            Schedule Your Call
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ch-footer" id="contact">
        <div className="ch-footer-inner">
          <div className="ch-footer-col">
            <div className="ch-footer-logo">Alex Carter</div>
            <p className="ch-footer-tagline">
              Life &amp; Leadership Coach helping ambitious people build lives that feel as intentional as they look.
            </p>
          </div>
          <div className="ch-footer-col">
            <div className="ch-footer-head">Navigate</div>
            {[
              { label: "About", id: "about" },
              { label: "Programs", id: "programs" },
              { label: "Success Stories", id: "stories" },
              { label: "Free Resource", id: "resource" },
              { label: "Book a Call", id: "book" },
            ].map(({ label, id }) => (
              <a key={id} href={`#${id}`} className="ch-footer-link"
                onClick={e => { e.preventDefault(); scroll(id); }}>
                {label}
              </a>
            ))}
          </div>
          <div className="ch-footer-col">
            <div className="ch-footer-head">Contact</div>
            <a href="mailto:hello@alexcarter.com" className="ch-footer-link">hello@alexcarter.com</a>
            <div className="ch-footer-head" style={{ marginTop: 24 }}>Follow</div>
            {[
              { label: "Instagram", href: "https://instagram.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "YouTube", href: "https://youtube.com" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="ch-footer-link" target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="ch-footer-bottom">
          <span className="ch-footer-copy">© 2025 Alex Carter. All rights reserved.</span>
          <a href="mailto:hello@alexcarter.com" className="ch-footer-copy" style={{ color: "rgba(201,168,76,0.5)", textDecoration: "none" }}>
            hello@alexcarter.com
          </a>
        </div>
      </footer>

    </div>
  );
}
