import './landing.css';

export default function Home() {
  return (
    <>
      
      
      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">
          <div className="nav-logo-mark">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#F5A800"/>
            </svg>
          </div>
          <div className="nav-logo-text">
            <div className="nav-logo-name">NEXT <span>STEPS</span> PRO</div>
            <div className="nav-logo-sub">Your Next Step. All In One Place.</div>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#who">Who It's For</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#apply" className="nav-cta">Get Started</a></li>
        </ul>
      </nav>
      
      {/* HERO */}
      <section className="hero">
        <div className="hero-photo"></div>
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">Opportunity Platform</div>
            <h1>When <em>Opportunity</em><br />Arrives,<br />Be Ready.</h1>
            <div className="hero-h1-sub">Your Next Step. All In One Place.</div>
            <p className="hero-sub">Too many opportunities are lost because information is scattered, outdated, hard to find, or presented unprofessionally. Next Steps Pro organizes everything into one powerful, professional presence built around you.</p>
            <div className="hero-buttons">
              <a href="#apply" className="btn-primary">
                Build My Professional Profile
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#problem" className="btn-ghost">
                See The Problem
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </a>
            </div>
            <div className="hero-proof">
              <div className="hero-proof-stat">
                <div className="hero-proof-num">200<span>+</span></div>
                <div className="hero-proof-label">Profiles Built</div>
              </div>
              <div className="hero-proof-div"></div>
              <div className="hero-proof-stat">
                <div className="hero-proof-num">48<span>hr</span></div>
                <div className="hero-proof-label">Build Time</div>
              </div>
              <div className="hero-proof-div"></div>
              <div className="hero-proof-stat">
                <div className="hero-proof-num">6<span>+</span></div>
                <div className="hero-proof-label">Industries</div>
              </div>
            </div>
          </div>
      
          <div className="hero-visual">
            <div className="launchpad-preview">
              <div className="lp-browser-bar">
                <div className="lp-browser-dots"><span></span><span></span><span></span></div>
                <div className="lp-browser-url">nextstepspro.online/ava-harrison</div>
              </div>
              <div className="lp-body" style={{padding:'0',overflow:'hidden'}}>
                <img src="/ava-harrison-full-profile.jpg" alt="Sample LaunchPad - Ava Harrison" style={{width:'100%',display:'block',maxHeight:'520px',objectFit:'cover',objectPosition:'top'}} />
              </div>
            </div>
            <div className="float-chip chip1">
              <div className="chip-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A800" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              Live in 48 Hours
            </div>
            <div className="float-chip chip2">
              <div className="chip-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A800" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              100% Custom Design
            </div>
          </div>
        </div>
      </section>
      
      {/* THE PROBLEM */}
      <section className="section problem-section" id="problem">
        <div className="section-inner">
          <div className="section-label">The Problem</div>
          <h2 className="section-title">Opportunity Moves Fast.<br /><em>Most People Aren't Ready.</em></h2>
          <p className="section-sub">When someone wants to learn more about you, what do they find? And how fast can they find it?</p>
          <div className="problem-grid">
            <div className="problem-list">
      
              <div className="problem-item">
                <div className="icon-wrap light">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.75"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                </div>
                <div className="problem-text">
                  <strong>When someone reaches out, you scramble.</strong>
                  Highlights are on YouTube. Stats in a PDF. Transcripts in email. Achievements on social media. <em>By the time you find everything, the opportunity is gone.</em>
                </div>
              </div>
      
              <div className="problem-item">
                <div className="icon-wrap light">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.75"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </div>
                <div className="problem-text">
                  <strong>You send multiple links and people get lost.</strong>
                  Instagram here. Website there. Calendly somewhere else. <em>Confusion kills conversions. Every extra step loses someone.</em>
                </div>
              </div>
      
              <div className="problem-item">
                <div className="icon-wrap light">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.75"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
                </div>
                <div className="problem-text">
                  <strong>Your online presence doesn't reflect your real value.</strong>
                  A scattered, outdated, or unprofessional digital presence costs you credibility before the first conversation. <em>First impressions are formed before you speak.</em>
                </div>
              </div>
      
              <div className="problem-item">
                <div className="icon-wrap light">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.75"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <div className="problem-text">
                  <strong>Opportunity does not wait for you to get organized.</strong>
                  Coaches, recruiters, event organizers, and clients move on quickly. <em>Being unprepared is not a small inconvenience. It is a missed opportunity.</em>
                </div>
              </div>
      
            </div>
      
            <div className="problem-right">
              {/* Young woman smiling with her LaunchPad */}
              <div className="problem-photo-wrap">
                <img
                  src="/ava-harrison-mobile.jpg"
                  alt="Young woman smiling while reviewing her LaunchPad"
                  className="problem-photo"
                  style={{height:'320px',objectPosition:'center top'}}
                />
                <div className="problem-photo-chip">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A800" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  <span>Her profile went live in 48 hours.</span>
                </div>
              </div>
      
              <div className="compare-card before">
                <div className="compare-label">Without Next Steps Pro</div>
                <div className="compare-title">Someone asks for your information.</div>
                <div className="compare-steps">
                  <div className="compare-step">
                    <svg className="compare-step-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="2.5" style={{flexShrink:'0',marginTop:'3px'}}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                    You search through old emails and messages.
                  </div>
                  <div className="compare-step">
                    <svg className="compare-step-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="2.5" style={{flexShrink:'0',marginTop:'3px'}}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                    You send four separate links and a PDF.
                  </div>
                  <div className="compare-step">
                    <svg className="compare-step-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="2.5" style={{flexShrink:'0',marginTop:'3px'}}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                    It takes hours. The response feels disorganized.
                  </div>
                </div>
                <div className="compare-result">The opportunity moves on to someone more prepared.</div>
              </div>
      
              <div className="compare-card after">
                <div className="compare-label">With Next Steps Pro</div>
                <div className="compare-title" style={{color:'white'}}>Someone asks for your information.</div>
                <div className="compare-steps">
                  <div className="compare-step">
                    <svg className="compare-step-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" style={{flexShrink:'0',marginTop:'3px'}}><polyline points="20 6 9 17 4 12"/></svg>
                    You send one link. Immediately.
                  </div>
                  <div className="compare-step">
                    <svg className="compare-step-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" style={{flexShrink:'0',marginTop:'3px'}}><polyline points="20 6 9 17 4 12"/></svg>
                    Everything is there. Organized. Professional.
                  </div>
                  <div className="compare-step">
                    <svg className="compare-step-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" style={{flexShrink:'0',marginTop:'3px'}}><polyline points="20 6 9 17 4 12"/></svg>
                    The impression you make matches the work you put in.
                  </div>
                </div>
                <div className="compare-result">You are ready. The opportunity moves forward.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* WHO IT'S FOR */}
      <section className="section who-section" id="who">
        <div className="section-inner">
          <div className="section-label">Who It's For</div>
          <h2 className="section-title">Built for Anyone Whose<br /><em>Next Step Matters.</em></h2>
          <p className="section-sub" style={{marginBottom:'48px'}}>If you have a message, a skill, a service, or an opportunity to pursue, you need to be organized, visible, and ready. Here is who we build for.</p>
      
          {/* Featured: two real LaunchPad examples side by side */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginBottom:'48px'}}>
            <div style={{borderRadius:'16px',overflow:'hidden',boxShadow:'0 16px 48px rgba(0,0,0,0.1)',border:'1px solid var(--border)'}}>
              <img src="/jalen-carter-profile.jpg" alt="Jalen Carter - Athlete LaunchPad" style={{width:'100%',display:'block',maxHeight:'480px',objectFit:'cover',objectPosition:'top'}} />
              <div style={{padding:'16px 20px',background:'var(--off-white)',borderTop:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div>
                  <div style={{fontWeight:'700',fontSize:'14px',color:'var(--black)'}}>Jalen Carter</div>
                  <div style={{fontSize:'12px',color:'var(--light-gray)',marginTop:'2px'}}>Athlete Recruiting Profile</div>
                </div>
                <div style={{background:'var(--gold)',color:'var(--black)',fontSize:'10px',fontWeight:'700',padding:'3px 10px',borderRadius:'100px',letterSpacing:'1px'}}>LIVE</div>
              </div>
            </div>
            <div style={{borderRadius:'16px',overflow:'hidden',boxShadow:'0 16px 48px rgba(0,0,0,0.1)',border:'1px solid var(--border)'}}>
              <img src="/ava-harrison-full-profile.jpg" alt="Ava Harrison - Creator LaunchPad" style={{width:'100%',display:'block',maxHeight:'480px',objectFit:'cover',objectPosition:'top'}} />
              <div style={{padding:'16px 20px',background:'var(--off-white)',borderTop:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div>
                  <div style={{fontWeight:'700',fontSize:'14px',color:'var(--black)'}}>Ava Harrison</div>
                  <div style={{fontSize:'12px',color:'var(--light-gray)',marginTop:'2px'}}>Creator &amp; Entrepreneur Profile</div>
                </div>
                <div style={{background:'var(--gold)',color:'var(--black)',fontSize:'10px',fontWeight:'700',padding:'3px 10px',borderRadius:'100px',letterSpacing:'1px'}}>LIVE</div>
              </div>
            </div>
          </div>
      
          <div className="who-grid">
            <div className="who-card">
              <div className="who-card-icon">
                <div className="icon-wrap dark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F5A800" strokeWidth="1.75"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                </div>
              </div>
              <div className="who-card-title">Athletes &amp; Recruits</div>
              <div className="who-card-pain">"Coaches can't find everything they need in one place."</div>
              <p className="who-card-desc">A complete recruiting profile with highlights, stats, transcripts, achievements, and contact. Everything coaches need, organized professionally, always ready.</p>
            </div>
            <div className="who-card">
              <div className="who-card-icon">
                <div className="icon-wrap dark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F5A800" strokeWidth="1.75"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
              </div>
              <div className="who-card-title">Coaches &amp; Trainers</div>
              <div className="who-card-pain">"Prospects can't quickly understand what I offer or how to book me."</div>
              <p className="who-card-desc">Credentials, services, pricing, booking form, and testimonials in one professional hub. Converts interest into clients without the back-and-forth.</p>
            </div>
            <div className="who-card">
              <div className="who-card-icon">
                <div className="icon-wrap dark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F5A800" strokeWidth="1.75"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
              </div>
              <div className="who-card-title">Speakers &amp; Educators</div>
              <div className="who-card-pain">"Event organizers can't find what they need to book me."</div>
              <p className="who-card-desc">Speaking reel, topics, biography, past engagements, fees, and a direct booking form. Everything an organizer needs in one professional destination.</p>
            </div>
            <div className="who-card">
              <div className="who-card-icon">
                <div className="icon-wrap dark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F5A800" strokeWidth="1.75"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
              </div>
              <div className="who-card-title">Organizations &amp; Churches</div>
              <div className="who-card-pain">"Our information is scattered and nothing is up to date."</div>
              <p className="who-card-desc">Events, giving portals, service times, mission, leadership, and community resources organized into one central, always-current destination.</p>
            </div>
            <div className="who-card">
              <div className="who-card-icon">
                <div className="icon-wrap dark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F5A800" strokeWidth="1.75"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
                </div>
              </div>
              <div className="who-card-title">Service Professionals</div>
              <div className="who-card-pain">"My online presence doesn't reflect the quality of my work."</div>
              <p className="who-card-desc">Financial advisors, consultants, attorneys, and insurance professionals. A premium presence that builds trust and earns credibility before the first meeting.</p>
            </div>
            <div className="who-card">
              <div className="who-card-icon">
                <div className="icon-wrap dark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F5A800" strokeWidth="1.75"><path d="M3 9l9-7 9 7"/><path d="M9 22V12h6v10"/><rect x="2" y="9" width="20" height="13" rx="1"/></svg>
                </div>
              </div>
              <div className="who-card-title">Real Estate Professionals</div>
              <div className="who-card-pain">"Clients can't quickly find my listings, reviews, or contact."</div>
              <p className="who-card-desc">Listings, testimonials, market expertise, a home valuation form, and direct contact. Everything a buyer or seller needs to choose you with confidence.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* WHAT HAPPENS WHEN EVERYTHING IS IN ONE PLACE */}
      <section className="results-section" id="results">
        <div className="section-inner">
          <div className="section-label" style={{color:'var(--gold)'}}>The Difference</div>
          <h2 className="section-title" style={{color:'var(--white)'}}>What Happens When<br /><em style={{color:'var(--gold)'}}>Everything Is In One Place.</em></h2>
          <p className="section-sub" style={{color:'rgba(255,255,255,0.45)'}}>Organization creates visibility. Visibility creates opportunity. This is what changes.</p>
          <div style={{marginTop:'48px',borderRadius:'20px',overflow:'hidden',background:'var(--white)',padding:'8px'}}>
            <img src="/nsp-hub-diagram.jpg" alt="Everything your LaunchPad includes" style={{width:'100%',display:'block',borderRadius:'14px'}} />
          </div>
        </div>
      </section>
      
      {/* HOW IT WORKS */}
      <section className="section how-section" id="how">
        <div className="section-inner">
          <div className="how-grid">
            <div>
              <div className="section-label">How It Works</div>
              <h2 className="section-title">Done For You.<br /><em>In 48 Hours.</em></h2>
              <p className="section-sub">You do not need to be a designer or a developer. Fill out a form. We build your professional presence. You share one link and stay ready.</p>
              <div className="how-steps-list">
                <div className="how-step">
                  <div className="how-step-num">1</div>
                  <div>
                    <div className="how-step-title">Fill the Intake Form</div>
                    <p className="how-step-desc">Tell us about yourself, your goals, your brand, and what you want people to do when they arrive. About 10 minutes.</p>
                  </div>
                </div>
                <div className="how-step">
                  <div className="how-step-num">2</div>
                  <div>
                    <div className="how-step-title">We Build Your Profile</div>
                    <p className="how-step-desc">Custom design. Custom copy. Built around your specific goals and audience. No templates. Done in 48 hours.</p>
                  </div>
                </div>
                <div className="how-step">
                  <div className="how-step-num">3</div>
                  <div>
                    <div className="how-step-title">You Review and Approve</div>
                    <p className="how-step-desc">See your profile before it goes live. Request changes. We revise until it represents you exactly right.</p>
                  </div>
                </div>
                <div className="how-step">
                  <div className="how-step-num">4</div>
                  <div>
                    <div className="how-step-title">Go Live. Share One Link.</div>
                    <p className="how-step-desc">Your professional profile is live at your personal URL. Share it everywhere. Update it anytime. Always be ready.</p>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="how-visual-card">
              <div className="how-visual-label">Your Build Timeline</div>
              <div className="timeline">
                <div className="tl-item">
                  <div className="tl-dot active">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#F5A800" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="tl-body">
                    <div className="tl-label">Intake Form Submitted</div>
                    <div className="tl-sub">You share your goals, brand, and content.</div>
                    <div className="tl-badge">Day 1 · 10 minutes</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot active">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#F5A800" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="tl-body">
                    <div className="tl-label">Design &amp; Build</div>
                    <div className="tl-sub">Custom design and copy. We handle everything.</div>
                    <div className="tl-badge">Day 1–2 · We handle it</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot active">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#F5A800" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="tl-body">
                    <div className="tl-label">Review &amp; Revise</div>
                    <div className="tl-sub">You approve. We refine until it is exactly right.</div>
                    <div className="tl-badge">Day 2 · Your approval</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  </div>
                  <div className="tl-body">
                    <div className="tl-label">Go Live</div>
                    <div className="tl-sub">Your profile is live. Share one link. Be ready.</div>
                    <div className="tl-badge">Day 2–3 · You're live</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-num">200+</div><div className="stat-label">Profiles Built</div></div>
          <div className="stat-item"><div className="stat-num">48hr</div><div className="stat-label">Average Build Time</div></div>
          <div className="stat-item"><div className="stat-num">6+</div><div className="stat-label">Industries Served</div></div>
          <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">Custom Every Time</div></div>
        </div>
      </div>
      
      {/* PRICING */}
      <section className="section pricing-section" id="pricing">
        <div className="section-inner">
          <div className="pricing-header">
            <div className="section-label" style={{display:'flex',justifyContent:'center'}}>Investment</div>
            <h2 className="section-title" style={{textAlign:'center'}}>Simple Pricing.<br /><em>No Surprises.</em></h2>
            <p className="section-sub">One flat rate. Everything included. No monthly fees. No hidden costs. You own your profile.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Starter</div>
              <div className="pricing-name">Opportunity Profile</div>
              <div className="pricing-price"><span>$</span>497</div>
              <div className="pricing-period">One-time build fee · No monthly fees</div>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Custom professional profile</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Bio, photo, and contact section</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Up to 5 organized link sections</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Mobile optimized</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>One revision round included</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Live in 48 hours</li>
              </ul>
              <a href="#apply" className="pricing-btn">Get Started</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-popular">Most Popular</div>
              <div className="pricing-tier">Professional</div>
              <div className="pricing-name">Digital Command Center</div>
              <div className="pricing-price"><span>$</span>997</div>
              <div className="pricing-period">One-time build fee · No monthly fees</div>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Everything in Starter</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Full custom design system</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Embedded video and media</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Lead capture and booking form</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Analytics and tracking</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Auto-update via intake form</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Two revision rounds included</li>
              </ul>
              <a href="#apply" className="pricing-btn">Build My Profile</a>
            </div>
            <div className="pricing-card">
              <div className="pricing-tier">Premium</div>
              <div className="pricing-name">Opportunity Platform</div>
              <div className="pricing-price"><span>$</span>1,997</div>
              <div className="pricing-period">One-time build fee · No monthly fees</div>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Everything in Professional</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Multi-page build</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Payment and booking integration</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>CRM automation setup</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Custom domain setup</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Monthly update plan included</li>
                <li><span className="pricing-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>Priority 24-hour build</li>
              </ul>
              <a href="#apply" className="pricing-btn">Get Started</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* TESTIMONIALS */}
      <section className="section testimonials-section" id="testimonials">
        <div className="section-inner">
          <div style={{textAlign:'center',marginBottom:'8px'}}>
            <div className="section-label" style={{display:'flex',justifyContent:'center'}}>What They Say</div>
            <h2 className="section-title" style={{textAlign:'center'}}>Real People.<br /><em>Real Results.</em></h2>
          </div>
          <div className="testimonials-grid">
            <div className="t-card">
              <div className="t-quote-mark">"</div>
              <p className="t-quote">A coach from Michigan reached out two days after we launched the profile. Everything they needed was right there. We hadn't been able to get responses like that before.</p>
              <div className="t-author">
                <img className="t-photo" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&auto=format&fit=crop&q=80" alt="Tamara J." />
                <div>
                  <div className="t-name">Tamara J.</div>
                  <div className="t-role">Parent of D1 Recruit · Charlotte, NC</div>
                </div>
              </div>
            </div>
            <div className="t-card">
              <div className="t-quote-mark">"</div>
              <p className="t-quote">I was sending people to Instagram, then my website, then Calendly. Clients were getting lost. Now I send one link and the booking rate is completely different.</p>
              <div className="t-author">
                <img className="t-photo" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Marcus J." />
                <div>
                  <div className="t-name">Marcus J.</div>
                  <div className="t-role">Performance Coach · Atlanta, GA</div>
                </div>
              </div>
            </div>
            <div className="t-card">
              <div className="t-quote-mark">"</div>
              <p className="t-quote">Event organizers used to ask me to send a bio, a photo, a video, and topics separately. Now I send one link. I've booked three speaking engagements this month.</p>
              <div className="t-author">
                <img className="t-photo" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" alt="Dr. Regina W." />
                <div>
                  <div className="t-name">Dr. Regina W.</div>
                  <div className="t-role">Keynote Speaker · Washington, DC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FINAL CTA */}
      <section className="cta-section" id="apply">
        <div className="cta-photo">
          <div className="cta-photo-img" style={{backgroundImage:"url('/nsp-woman-phone.jpg')"}}></div>
          <div className="cta-photo-overlay"></div>
          <div className="cta-inner">
            <div className="section-label" style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>Get Started Today</div>
            <h2 className="section-title" style={{color:'var(--white)',textAlign:'center'}}>Stop Losing<br /><em>Opportunities.</em></h2>
            <p className="section-sub">You have worked too hard to miss an opportunity because your information was scattered, outdated, or hard to find. Let us organize everything in 48 hours.</p>
            <a href="/apply" className="btn-gold" style={{fontSize:'16px',padding:'20px 48px',display:'inline-flex'}}>
              Build My Professional Profile
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <div className="cta-badges">
              <div className="cta-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                48-Hour Build
              </div>
              <div className="cta-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                100% Custom
              </div>
              <div className="cta-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Flat Rate
              </div>
              <div className="cta-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                No Monthly Fees
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">NEXT <span>STEPS</span> PRO</div>
            <div className="footer-brand-tag">Your Next Step. All In One Place.</div>
            <p className="footer-brand-desc">Professional profiles, opportunity hubs, and recruiting systems built for anyone who is serious about being organized, visible, and ready when opportunity arrives.</p>
          </div>
          <div>
            <div className="footer-col-title">Platform</div>
            <ul className="footer-links">
              <li><a href="#who">Who It's For</a></li>
              <li><a href="#problem">The Problem</a></li>
              <li><a href="#results">The Results</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="mailto:hello@nextstepspro.online">hello@nextstepspro.online</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#apply">Get Started</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2025 Next Steps Pro · Ascension Systems LLC · All rights reserved.</div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
      
      
    </>
  );
}
