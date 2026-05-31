const GOLD = "#c9a84c";
const NAVY = "#1a2744";
const W = 680;

const PERSONAS = [
  {
    initials: "AC", avatarColor: GOLD, avatarText: NAVY,
    label: "LIFE COACH",
    title: "LIFE COACH · AUTHOR · SPEAKER",
    headline: "Everything You Need.\nOne Place To Start.",
    tagline: "Clarity. Confidence. Results.",
    signature: "Alex Carter",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    services: [
      { icon: "◷", title: "Book a Call", desc: "Schedule a 1:1 strategy session", link: "Book Now" },
      { icon: "⬇", title: "Free Resource", desc: "Download tools to help you grow", link: "Download" },
      { icon: "▶", title: "Watch & Learn", desc: "Actionable trainings & insights", link: "Watch Now" },
      { icon: "◉", title: "Join Community", desc: "Connect with like-minded pros", link: "Join Now" },
      { icon: "◈", title: "Latest Updates", desc: "New content & exclusive invites", link: "Subscribe" },
      { icon: "⊕", title: "Explore Programs", desc: "See how we can work together", link: "Explore" },
    ],
    aboutHeadline: "I Help You Unlock Your Next Level.",
    pillars: ["Clarity First", "Accountability Always", "Results That Last"],
    programs: [
      { label: "1:1 INTENSIVE", name: "Clarity Intensive", price: "$297", cta: "Book Now", feat: true },
      { label: "GROUP PROGRAM", name: "90-Day Accelerator", price: "$997", cta: "Learn More", feat: false },
      { label: "PREMIUM", name: "VIP Day", price: "$2,500", cta: "Apply Now", feat: true },
    ],
    testimonial: "Alex gave me the clarity and confidence to finally make the leap.",
    testimonialAttr: "Jordan T., Entrepreneur",
    stats: [{ num: "200+", label: "Clients Served" }, { num: "15+", label: "Countries" }, { num: "50+", label: "Reviews" }],
    footerCta: "Ready For Your Next Step?", footerBtn: "LET'S GET STARTED →",
  },
  {
    initials: "SM", avatarColor: "#2d7a4f", avatarText: "#ffffff",
    label: "REALTOR",
    title: "REALTOR · INVESTMENT ADVISOR · COMMUNITY BUILDER",
    headline: "Your Home. Your Future.\nOne Place.",
    tagline: "Listings. Resources. Real Results.",
    signature: "Sarah Mitchell",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    services: [
      { icon: "⊞", title: "Search Listings", desc: "Browse available properties", link: "View Now" },
      { icon: "⬇", title: "Free Valuation", desc: "Get your home's current value", link: "Get Valuation" },
      { icon: "◷", title: "Buyer Guide", desc: "Step-by-step home buying guide", link: "Download" },
      { icon: "◉", title: "Investment Properties", desc: "Find income-generating assets", link: "Explore" },
      { icon: "▶", title: "Market Reports", desc: "Current trends & insights", link: "Read Now" },
      { icon: "⊕", title: "Book a Call", desc: "Let's discuss your goals", link: "Book Now" },
    ],
    aboutHeadline: "I Help Families Find Home and Build Wealth.",
    pillars: ["Market Expertise", "Client First", "Long-Term Results"],
    programs: [
      { label: "CONSULTATION", name: "Home Buyer Consult", price: "Free", cta: "Book Now", feat: true },
      { label: "STRATEGY", name: "Investor Strategy Call", price: "$197", cta: "Book Now", feat: false },
      { label: "FULL SERVICE", name: "Full Concierge", price: "Custom", cta: "Contact Us", feat: true },
    ],
    testimonial: "Sarah made buying our first home feel simple and stress-free.",
    testimonialAttr: "The Patel Family",
    stats: [{ num: "150+", label: "Homes Sold" }, { num: "12", label: "Years Experience" }, { num: "98%", label: "Satisfaction" }],
    footerCta: "Ready To Find Your Home?", footerBtn: "LET'S CONNECT →",
  },
  {
    initials: "MJ", avatarColor: "#6b4c9a", avatarText: "#ffffff",
    label: "SPEAKER",
    title: "KEYNOTE SPEAKER · AUTHOR · CONSULTANT",
    headline: "One Message.\nThousands Moved.",
    tagline: "Stages. Stories. Impact.",
    signature: "Marcus Johnson",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    services: [
      { icon: "◷", title: "Book Marcus", desc: "Bring Marcus to your next event", link: "Inquire Now" },
      { icon: "▶", title: "Watch a Keynote", desc: "See Marcus in action", link: "Watch Now" },
      { icon: "⬇", title: "Get the Book", desc: "Order the bestselling book", link: "Order Now" },
      { icon: "◉", title: "Corporate Training", desc: "Custom workshops for your team", link: "Learn More" },
      { icon: "⊞", title: "Media Kit", desc: "Press & booking resources", link: "Download" },
      { icon: "⊕", title: "Contact", desc: "Get in touch with the team", link: "Contact" },
    ],
    aboutHeadline: "I Help Organizations Activate Their People.",
    pillars: ["Authentic Message", "Real Stories", "Lasting Change"],
    programs: [
      { label: "KEYNOTE", name: "Keynote Presentation", price: "From $5,000", cta: "Book Now", feat: true },
      { label: "WORKSHOP", name: "Half-Day Workshop", price: "$3,500", cta: "Inquire", feat: false },
      { label: "FULL-DAY", name: "Full-Day Intensive", price: "$7,500", cta: "Apply Now", feat: true },
    ],
    testimonial: "Marcus brought our entire team to their feet. Unforgettable.",
    testimonialAttr: "VP, Fortune 500",
    stats: [{ num: "300+", label: "Stages" }, { num: "40+", label: "Countries" }, { num: "60+", label: "5-Star Reviews" }],
    footerCta: "Ready To Book Marcus?", footerBtn: "CHECK AVAILABILITY →",
  },
  {
    initials: "DK", avatarColor: NAVY, avatarText: "#ffffff",
    label: "FAITH COMMUNITY",
    title: "SENIOR PASTOR · AUTHOR · COMMUNITY LEADER",
    headline: "One Place.\nEvery Next Step.",
    tagline: "Faith. Community. Growth.",
    signature: "Pastor David King",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    services: [
      { icon: "◉", title: "Join Our Community", desc: "Connect with our family", link: "Join Now" },
      { icon: "▶", title: "Watch This Week", desc: "Latest messages & teachings", link: "Watch Now" },
      { icon: "⊕", title: "Give Online", desc: "Support the ministry", link: "Give Now" },
      { icon: "⬇", title: "Get the Devotional", desc: "Free daily devotional guide", link: "Download" },
      { icon: "◷", title: "Event Calendar", desc: "Upcoming events & services", link: "View Events" },
      { icon: "⊞", title: "Prayer Request", desc: "Submit a prayer request", link: "Submit" },
    ],
    aboutHeadline: "We Help People Take Their Next Step in Faith.",
    pillars: ["Authentic Community", "Biblical Truth", "Everyone Welcome"],
    programs: [
      { label: "WORSHIP", name: "Sunday Experience", price: "Free", cta: "Join Us", feat: true },
      { label: "DISCIPLESHIP", name: "Growth Track", price: "Free", cta: "Sign Up", feat: false },
      { label: "LEADERSHIP", name: "Leadership Academy", price: "By Application", cta: "Apply Now", feat: true },
    ],
    testimonial: "This community changed my family. Everyone is welcome here.",
    testimonialAttr: "Jennifer M., Member",
    stats: [{ num: "2,000+", label: "Members" }, { num: "8", label: "Campuses" }, { num: "15", label: "Years of Ministry" }],
    footerCta: "Ready For Your Next Step?", footerBtn: "JOIN US SUNDAY →",
  },
];

function PhoneFrame({ p }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      {/* Phone shell */}
      <div style={{
        width: 260, height: 520, borderRadius: 44, background: "#1e293b",
        boxShadow: "0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        overflow: "hidden", position: "relative", flexShrink: 0,
      }}>
        {/* Notch */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 96, height: 26, background: "#1e293b",
          borderRadius: "0 0 18px 18px", zIndex: 10,
        }} />

        {/* Scaled internal page */}
        <div style={{ transform: "scale(0.38)", transformOrigin: "top left", width: W, background: "#FAFAF8" }}>

          {/* NAVBAR */}
          <div style={{ background: "#FAFAF8", padding: "18px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e5e7eb" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: p.avatarColor, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: p.avatarText, fontFamily: "Arial,sans-serif" }}>{p.initials}</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.16em", color: NAVY, fontFamily: "Arial,sans-serif" }}>LAUNCHPAD</span>
            </div>
            <div style={{ background: GOLD, color: NAVY, fontSize: 11, fontWeight: 700, padding: "8px 18px", borderRadius: 5, fontFamily: "Arial,sans-serif", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>BOOK A CALL</div>
          </div>

          {/* HERO with photo */}
          <div style={{ position: "relative", height: 300, overflow: "hidden" }}>
            <img src={p.photo} alt={p.signature} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.3) 55%, transparent 100%)" }} />
            <div style={{ position: "absolute", bottom: 28, left: 32, right: 32 }}>
              <div style={{ fontSize: 10, letterSpacing: "0.22em", color: GOLD, fontWeight: 700, fontFamily: "Arial,sans-serif", marginBottom: 10 }}>WELCOME TO MY LAUNCHPAD</div>
              <div style={{ fontSize: 29, fontWeight: 700, color: "#ffffff", lineHeight: 1.18, fontFamily: "Georgia,serif", marginBottom: 10, whiteSpace: "pre-line" }}>{p.headline}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", fontFamily: "Arial,sans-serif", marginBottom: 14 }}>{p.tagline}</div>
              <div style={{ fontSize: 22, fontStyle: "italic", color: GOLD, fontFamily: "Georgia,serif", marginBottom: 6 }}>{p.signature}</div>
              <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.42)", fontFamily: "Arial,sans-serif" }}>{p.title}</div>
            </div>
          </div>

          {/* SOCIAL BAR */}
          <div style={{ background: NAVY, padding: "18px 32px", display: "flex", justifyContent: "center", gap: 16 }}>
            {["f", "in", "▶", "◉", "✉"].map((s, i) => (
              <div key={i} style={{ width: 38, height: 38, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontFamily: "Arial,sans-serif" }}>{s}</span>
              </div>
            ))}
          </div>

          {/* SERVICES */}
          <div style={{ padding: "44px 32px", background: "#FAFAF8" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.22em", color: GOLD, fontWeight: 700, fontFamily: "Arial,sans-serif", marginBottom: 10 }}>WHAT YOU CAN DO HERE</div>
            <div style={{ fontSize: 26, fontWeight: 700, color: NAVY, fontFamily: "Georgia,serif", marginBottom: 28 }}>Everything In One Place.</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {p.services.map((svc, i) => (
                <div key={i} style={{ background: "#ffffff", borderRadius: 12, padding: "20px 16px", border: "1px solid #e5e7eb" }}>
                  <div style={{ fontSize: 20, color: GOLD, marginBottom: 10 }}>{svc.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, fontFamily: "Arial,sans-serif", marginBottom: 5 }}>{svc.title}</div>
                  <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "Arial,sans-serif", lineHeight: 1.5, marginBottom: 10 }}>{svc.desc}</div>
                  <div style={{ fontSize: 12, color: GOLD, fontWeight: 600, fontFamily: "Arial,sans-serif" }}>{svc.link} →</div>
                </div>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <div style={{ background: "#ffffff", padding: "44px 32px", borderTop: "1px solid #e5e7eb" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.22em", color: GOLD, fontWeight: 700, fontFamily: "Arial,sans-serif", marginBottom: 10 }}>ABOUT</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: NAVY, fontFamily: "Georgia,serif", lineHeight: 1.3, marginBottom: 18 }}>{p.aboutHeadline}</div>
            <div style={{ width: 44, height: 3, background: GOLD, borderRadius: 2, marginBottom: 24 }} />
            {p.pillars.map((pl, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 14, color: GOLD }}>✓</span>
                </div>
                <span style={{ fontSize: 14, fontWeight: 600, color: NAVY, fontFamily: "Arial,sans-serif" }}>{pl}</span>
              </div>
            ))}
          </div>

          {/* PROGRAMS */}
          <div style={{ background: NAVY, padding: "44px 32px" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.22em", color: GOLD, fontWeight: 700, fontFamily: "Arial,sans-serif", marginBottom: 10 }}>WORK WITH ME</div>
            <div style={{ fontSize: 26, fontWeight: 700, color: "#ffffff", fontFamily: "Georgia,serif", marginBottom: 28 }}>Choose Your Path.</div>
            {p.programs.map((prog, i) => (
              <div key={i} style={{
                background: prog.feat ? "rgba(201,168,76,0.07)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${prog.feat ? "rgba(201,168,76,0.28)" : "rgba(255,255,255,0.1)"}`,
                borderRadius: 12, padding: "22px", marginBottom: i < p.programs.length - 1 ? 14 : 0,
              }}>
                <div style={{ fontSize: 10, letterSpacing: "0.18em", color: GOLD, fontWeight: 700, fontFamily: "Arial,sans-serif", marginBottom: 8 }}>{prog.label}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", fontFamily: "Georgia,serif", marginBottom: 5 }}>{prog.name}</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontFamily: "Arial,sans-serif", marginBottom: 14 }}>{prog.price}</div>
                <div style={{ display: "inline-block", background: prog.feat ? GOLD : "transparent", color: prog.feat ? NAVY : "rgba(255,255,255,0.72)", border: prog.feat ? "none" : "1px solid rgba(255,255,255,0.25)", borderRadius: 5, padding: "9px 20px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", fontFamily: "Arial,sans-serif" }}>{prog.cta}</div>
              </div>
            ))}
          </div>

          {/* TESTIMONIAL + STATS */}
          <div style={{ background: "#ffffff", padding: "44px 32px", borderTop: "1px solid #e5e7eb" }}>
            <div style={{ fontSize: 36, color: GOLD, fontFamily: "Georgia,serif", lineHeight: 1, marginBottom: 12 }}>"</div>
            <div style={{ fontSize: 16, fontStyle: "italic", color: NAVY, lineHeight: 1.65, fontFamily: "Georgia,serif", marginBottom: 16 }}>{p.testimonial}</div>
            <div style={{ fontSize: 12, color: "#6b7280", letterSpacing: "0.1em", fontFamily: "Arial,sans-serif", marginBottom: 36 }}>— {p.testimonialAttr}</div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {p.stats.map((st, i) => (
                <div key={i} style={{ borderLeft: "3px solid rgba(201,168,76,0.3)", paddingLeft: 18 }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: GOLD, fontFamily: "Georgia,serif", lineHeight: 1 }}>{st.num}</div>
                  <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "Arial,sans-serif", marginTop: 5 }}>{st.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER CTA */}
          <div style={{ background: NAVY, padding: "52px 32px", textAlign: "center" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(201,168,76,0.15)", border: "1.5px solid rgba(201,168,76,0.35)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
              <span style={{ fontSize: 22, color: GOLD }}>⊕</span>
            </div>
            <div style={{ fontSize: 26, fontWeight: 700, color: "#ffffff", fontFamily: "Georgia,serif", lineHeight: 1.25, marginBottom: 20 }}>{p.footerCta}</div>
            <div style={{ display: "inline-block", background: GOLD, color: NAVY, fontSize: 13, fontWeight: 700, padding: "15px 34px", borderRadius: 6, letterSpacing: "0.1em", fontFamily: "Arial,sans-serif" }}>{p.footerBtn}</div>
          </div>

        </div>
      </div>

      {/* Label below phone */}
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: GOLD, fontFamily: "Arial,sans-serif", textTransform: "uppercase", textAlign: "center" }}>
        {p.label}
      </div>
    </div>
  );
}

export default function PremiumMockups() {
  return (
    <section id="demos" style={{ background: "#0f172a", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <div style={{ fontSize: "0.68rem", letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD, fontWeight: 600, fontFamily: "Inter,sans-serif", textAlign: "center", marginBottom: 16 }}>
          Live Examples
        </div>
        <h2 style={{ fontFamily: "Playfair Display,Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, color: "#ffffff", textAlign: "center", lineHeight: 1.22, marginBottom: 16 }}>
          See What Your LaunchPad Looks Like
        </h2>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.5)", textAlign: "center", maxWidth: 520, margin: "0 auto 72px", lineHeight: 1.75, fontWeight: 300 }}>
          Every LaunchPad is built for your profession. Here's a preview of what your clients will see.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, justifyItems: "center" }}>
          {PERSONAS.map(p => <PhoneFrame key={p.initials} p={p} />)}
        </div>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", marginTop: 56 }}>
          <a href="/coach" style={{ fontFamily: "Inter,sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em", color: GOLD, textDecoration: "none", border: "1px solid rgba(201,168,76,0.35)", borderRadius: 6, padding: "10px 22px" }}>
            View Coach LaunchPad Demo →
          </a>
          <a href="/realtor" style={{ fontFamily: "Inter,sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em", color: GOLD, textDecoration: "none", border: "1px solid rgba(201,168,76,0.35)", borderRadius: 6, padding: "10px 22px" }}>
            View Realtor LaunchPad Demo →
          </a>
        </div>

      </div>
    </section>
  );
}
