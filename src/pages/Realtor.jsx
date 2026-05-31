import { useEffect } from "react";

const GOLD = "#c9a84c";
const GOLD_LIGHT = "#e8c97a";
const DARK = "#0a0a0a";
const DARK2 = "#111008";
const DARK3 = "#1a1208";
const BORDER = "#2a2010";
const TEXT = "#f5f0e8";
const MUTED = "#b5a88a";
const DIM = "#7a6e5a";
const FAINT = "#4a4030";

const styles = {
  page: {
    fontFamily: "'Georgia', serif",
    background: DARK,
    minHeight: "100vh",
    color: TEXT,
    margin: 0,
    padding: 0,
  },
};

export default function Realtor() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={styles.page}>

      {/* NAV */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 40px", background: DARK,
        borderBottom: `1px solid ${BORDER}`, position: "sticky", top: 0, zIndex: 100
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 700, color: DARK
          }}>SM</div>
          <div>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: TEXT, letterSpacing: 1 }}>SARAH MITCHELL</p>
            <p style={{ margin: 0, fontSize: 11, color: DIM, letterSpacing: 2, textTransform: "uppercase" }}>Realtor · Houston, TX</p>
          </div>
        </div>
        <a href="#valuation" style={{
          background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
          color: DARK, padding: "10px 24px", borderRadius: 4,
          textDecoration: "none", fontSize: 13, fontWeight: 700, letterSpacing: 1
        }}>FREE HOME VALUATION</a>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: 580, display: "flex", alignItems: "center" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80')",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.3)"
        }} />
        <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, width: "100%", maxWidth: 1100, margin: "0 auto", padding: "60px 40px", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: 4, color: GOLD, textTransform: "uppercase", margin: "0 0 20px" }}>
              Welcome to My LaunchPad
            </p>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 400, color: TEXT, margin: "0 0 8px", lineHeight: 1.1 }}>
              Your Houston
            </h1>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 400, color: GOLD, margin: "0 0 28px", lineHeight: 1.1, fontStyle: "italic" }}>
              Home Expert.
            </h1>
            <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.7, margin: "0 0 12px", maxWidth: 440 }}>
              Buying. Selling. Investing. I've done it all in this city for 15 years — and I'll do it right for you.
            </p>
            <p style={{ fontSize: 13, color: DIM, fontStyle: "italic", margin: "0 0 40px" }}>Sarah Mitchell · Compass Real Estate</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#valuation" style={{
                background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
                color: DARK, padding: "14px 28px", borderRadius: 4,
                textDecoration: "none", fontSize: 14, fontWeight: 700, letterSpacing: 0.5
              }}>Get My Free Valuation</a>
              <a href="#tour" style={{
                border: `1px solid ${GOLD}`, color: GOLD,
                padding: "14px 28px", borderRadius: 4,
                textDecoration: "none", fontSize: 14, letterSpacing: 0.5
              }}>Book a Home Tour</a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=420&q=80"
                alt="Sarah Mitchell, Realtor"
                style={{
                  width: 320, height: 420, objectFit: "cover",
                  borderRadius: 6, display: "block",
                  border: `2px solid ${GOLD}`
                }}
              />
              <div style={{
                position: "absolute", bottom: -20, left: -20,
                background: DARK2, border: `1px solid ${BORDER}`,
                borderRadius: 6, padding: "16px 20px", minWidth: 200
              }}>
                <p style={{ fontSize: 11, color: DIM, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 6px" }}>15 Years · Top 1%</p>
                <p style={{ fontSize: 22, fontWeight: 700, color: GOLD, margin: "0 0 2px" }}>$140M+</p>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>in closed transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: DARK2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "40px 40px 32px" }}>
        <div style={{
          maxWidth: 900, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center"
        }}>
          {[
            { stat: "400+", label: "Families Served" },
            { stat: "18", label: "Avg Days on Market" },
            { stat: "98.7%", label: "List-to-Sale Ratio" },
            { stat: "5★", label: "Average Rating" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p style={{ fontSize: 30, fontWeight: 700, color: GOLD, margin: 0, letterSpacing: -1 }}>{stat}</p>
              <p style={{ fontSize: 11, color: DIM, margin: "6px 0 0", letterSpacing: 2, textTransform: "uppercase" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT BRINGS YOU HERE */}
      <section style={{ padding: "72px 40px", background: DARK }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: 4, color: GOLD, textTransform: "uppercase", margin: "0 0 12px" }}>One Next Step</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, color: TEXT, margin: "0 0 48px", lineHeight: 1.3 }}>
            What can I help you with today?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { icon: "🏡", title: "Buy a Home", desc: "Tell me your must-haves. I'll find listings that actually match — and walk every one with you.", cta: "Start My Search" },
              { icon: "📋", title: "Sell My Home", desc: "Find out what your home is worth today. No pressure. Real numbers from the local market.", cta: "Get Free Valuation", featured: true },
              { icon: "📈", title: "Invest in Property", desc: "Single-family to multi-unit. I work with investors at every level and know where the deals are.", cta: "Book Strategy Call" },
              { icon: "💬", title: "Just Have Questions", desc: "Not ready to move yet? That's okay. Ask me anything about Houston, timing, or what to expect.", cta: "Send a Message" },
            ].map(({ icon, title, desc, cta, featured }) => (
              <a key={title} href="#valuation" style={{
                display: "block", padding: "28px 24px",
                border: featured ? `1px solid ${GOLD}` : `1px solid ${BORDER}`,
                borderRadius: 6, background: featured ? DARK3 : DARK2,
                textDecoration: "none", transition: "border-color 0.2s"
              }}>
                <span style={{ fontSize: 30, display: "block", marginBottom: 16 }}>{icon}</span>
                <p style={{ fontSize: 16, fontWeight: 600, color: featured ? GOLD : TEXT, margin: "0 0 10px" }}>{title}</p>
                <p style={{ fontSize: 13, color: DIM, lineHeight: 1.6, margin: "0 0 16px" }}>{desc}</p>
                <span style={{ fontSize: 12, color: featured ? GOLD : MUTED, letterSpacing: 0.5 }}>{cta} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY PHOTO STRIP */}
      <section style={{ padding: "0 40px 72px", background: DARK }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 12, borderRadius: 8, overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" alt="Luxury home" style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }} />
            <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=300&q=80" alt="Modern kitchen" style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }} />
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&q=80" alt="Living room" style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }} />
          </div>
          <p style={{ fontSize: 12, color: FAINT, textAlign: "center", marginTop: 12, letterSpacing: 1 }}>
            Serving the Heights · Montrose · River Oaks · Katy corridors
          </p>
        </div>
      </section>

      {/* FREE VALUATION FORM */}
      <section id="valuation" style={{ background: DARK2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "72px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: 4, color: GOLD, textTransform: "uppercase", margin: "0 0 16px" }}>Free · No Obligation</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 400, color: TEXT, margin: "0 0 20px", lineHeight: 1.3 }}>
              What is your home worth right now?
            </h2>
            <p style={{ fontSize: 15, color: DIM, lineHeight: 1.8, margin: "0 0 32px" }}>
              Houston's market shifts fast. I'll send you a real comparable market analysis — not a Zillow estimate — within 24 hours. Completely free, zero pressure.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Accurate local comps, not algorithms", "Delivered within 24 hours", "No obligation to list with me", "Honest advice regardless"].map(item => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ color: GOLD, fontSize: 16 }}>✓</span>
                  <p style={{ fontSize: 14, color: MUTED, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: DARK, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "36px 32px" }}>
            {[
              { label: "Property address", placeholder: "123 Oak St, Houston, TX" },
              { label: "Your name", placeholder: "First and last name" },
              { label: "Email address", placeholder: "you@example.com" },
              { label: "Phone (optional)", placeholder: "(832) 555-0000" },
            ].map(({ label, placeholder }) => (
              <div key={label} style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 12, color: MUTED, marginBottom: 8, letterSpacing: 0.5 }}>{label}</label>
                <input type="text" placeholder={placeholder} style={{
                  width: "100%", boxSizing: "border-box",
                  background: DARK2, border: `1px solid ${BORDER}`,
                  borderRadius: 4, padding: "12px 16px",
                  color: TEXT, fontSize: 14, outline: "none",
                  fontFamily: "Georgia, serif"
                }} />
              </div>
            ))}
            <button style={{
              width: "100%",
              background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
              color: DARK, border: "none", padding: "16px",
              borderRadius: 4, fontSize: 14, fontWeight: 700,
              cursor: "pointer", letterSpacing: 0.5, fontFamily: "Georgia, serif"
            }}>Request My Free Valuation</button>
            <p style={{ textAlign: "center", fontSize: 11, color: FAINT, margin: "14px 0 0" }}>No spam. No sales pressure. Just real data.</p>
          </div>
        </div>
      </section>

      {/* BOOK A TOUR */}
      <section id="tour" style={{ background: DARK, padding: "72px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80"
              alt="Home tour"
              style={{ width: "100%", height: 380, objectFit: "cover", borderRadius: 6, display: "block", border: `1px solid ${BORDER}` }}
            />
            <div style={{
              position: "absolute", top: 24, right: -24,
              background: DARK2, border: `1px solid ${GOLD}`,
              borderRadius: 6, padding: "14px 18px"
            }}>
              <p style={{ fontSize: 11, color: DIM, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 4px" }}>Available</p>
              <p style={{ fontSize: 14, color: GOLD, margin: 0 }}>Evenings & Weekends</p>
            </div>
          </div>
          <div>
            <p style={{ fontSize: 11, letterSpacing: 4, color: GOLD, textTransform: "uppercase", margin: "0 0 16px" }}>For Buyers</p>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 400, color: TEXT, margin: "0 0 20px", lineHeight: 1.3 }}>
              I personally lead every home tour.
            </h2>
            <p style={{ fontSize: 15, color: DIM, lineHeight: 1.8, margin: "0 0 28px" }}>
              No assistants. No handoffs. I walk every home with you, tell you what I see — good and bad — and give you my honest take before you make any decisions.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {[
                "Evening and weekend tours available",
                "I pull comps and inspection history before we walk in",
                "Zero pressure to make an offer on the spot",
                "Honest feedback on every property",
              ].map(item => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: GOLD, fontSize: 16, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.5 }}>{item}</p>
                </div>
              ))}
            </div>
            <a href="#contact" style={{
              display: "inline-block",
              border: `1px solid ${GOLD}`, color: GOLD,
              padding: "14px 28px", borderRadius: 4,
              textDecoration: "none", fontSize: 14, letterSpacing: 0.5
            }}>Pick a Time That Works</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: DARK2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "72px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: 4, color: GOLD, textTransform: "uppercase", margin: "0 0 48px", textAlign: "center" }}>What Clients Say</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { quote: "Sarah sold our home in 11 days — $18,000 over asking. She told us exactly what to fix before listing. She was right about all of it.", name: "Marcus & Diane T.", detail: "Sold in Katy, TX" },
              { quote: "First-time buyers. We had no idea what we were doing. Sarah walked us through everything and never made us feel rushed or pressured.", name: "Priya N.", detail: "Purchased in Sugar Land, TX" },
              { quote: "I've bought four investment properties with Sarah. She finds deals I'd never find on my own and she always knows when to walk away.", name: "Derek L.", detail: "Real estate investor, Houston" },
            ].map(({ quote, name, detail }) => (
              <div key={name} style={{ background: DARK, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "28px 24px" }}>
                <p style={{ fontSize: 28, color: GOLD, margin: "0 0 12px", lineHeight: 1 }}>"</p>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.75, margin: "0 0 20px", fontStyle: "italic" }}>{quote}</p>
                <p style={{ fontSize: 13, color: TEXT, margin: "0 0 4px", fontWeight: 600 }}>{name}</p>
                <p style={{ fontSize: 11, color: FAINT, margin: 0, letterSpacing: 1 }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SARAH */}
      <section style={{ background: DARK, padding: "72px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: 4, color: GOLD, textTransform: "uppercase", margin: "0 0 16px" }}>About Sarah</p>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 400, color: TEXT, margin: "0 0 24px", lineHeight: 1.3 }}>
              15 years. One city. All in.
            </h2>
            <p style={{ fontSize: 15, color: DIM, lineHeight: 1.8, margin: "0 0 20px" }}>
              I grew up in Houston, raised my family here, and I've watched this city change block by block. When you work with me, you get someone who actually knows these neighborhoods — not just the MLS data.
            </p>
            <p style={{ fontSize: 15, color: DIM, lineHeight: 1.8, margin: "0 0 36px" }}>
              Whether you're buying your first home or your fourth investment property, I work the same way: straight talk, real numbers, no runaround.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { label: "Specialties", value: "Heights · Montrose · River Oaks · Katy" },
                { label: "Brokerage", value: "Compass Real Estate" },
                { label: "License", value: "TX #0594812" },
                { label: "Memberships", value: "HAR · NAR · TREPAC" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{ fontSize: 10, color: FAINT, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 4px" }}>{label}</p>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.5 }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=480&q=80"
              alt="Sarah Mitchell"
              style={{ width: "100%", height: 460, objectFit: "cover", borderRadius: 6, display: "block", border: `1px solid ${BORDER}` }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT FOOTER CTA */}
      <section id="contact" style={{ background: DARK2, borderTop: `1px solid ${BORDER}`, padding: "72px 40px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: 4, color: GOLD, textTransform: "uppercase", margin: "0 0 16px" }}>Let's Talk</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 400, color: TEXT, margin: "0 0 16px" }}>
            Ready to take your next step?
          </h2>
          <p style={{ fontSize: 15, color: DIM, margin: "0 0 48px", lineHeight: 1.7 }}>
            Reach out however works best for you. I respond within a few hours on business days.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 56 }}>
            {[
              { icon: "📞", label: "Call or Text", value: "(832) 555-0194" },
              { icon: "✉️", label: "Email", value: "sarah@sarahmitchell.com" },
              { icon: "📅", label: "Schedule Online", value: "Pick a time on my calendar" },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{
                background: DARK, border: `1px solid ${BORDER}`,
                borderRadius: 6, padding: "20px 16px"
              }}>
                <span style={{ fontSize: 24, display: "block", marginBottom: 10 }}>{icon}</span>
                <p style={{ fontSize: 11, color: FAINT, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 6px" }}>{label}</p>
                <p style={{ fontSize: 14, color: GOLD, margin: 0 }}>{value}</p>
              </div>
            ))}
          </div>
          <a href="#valuation" style={{
            display: "inline-block",
            background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
            color: DARK, padding: "16px 40px", borderRadius: 4,
            textDecoration: "none", fontSize: 15, fontWeight: 700,
            letterSpacing: 0.5, marginBottom: 48
          }}>Get My Free Home Valuation →</a>
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 32 }}>
            <p style={{ fontSize: 12, color: BORDER, margin: "0 0 6px" }}>This LaunchPad was built by</p>
            <p style={{ fontSize: 14, color: FAINT, margin: 0, letterSpacing: 1 }}>NextStepsPro · nextstepspro.vercel.app</p>
          </div>
        </div>
      </section>

    </div>
  );
}
