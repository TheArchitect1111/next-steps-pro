import React from 'react';
import { Link } from 'react-router-dom';

const friction = [
  { stat: '23%', label: 'of the average workday is lost to manual tasks that should be automated' },
  { stat: '48hrs', label: 'is the average follow-up delay for new leads — costing businesses thousands monthly' },
  { stat: '67%', label: 'of business owners say they spend more time in their business than working on it' },
  { stat: '$50K+', label: 'is the average annual cost of operational inefficiency for a small business' },
];

const examples = [
  {
    type: 'Professional Services',
    problem: 'New leads sitting in email for 3+ days before follow-up',
    loss: '$40,000/yr in missed revenue',
    fix: 'Automated lead response and follow-up sequence',
    recovered: '6 hours per week',
  },
  {
    type: 'Real Estate',
    problem: 'Manual scheduling, confirmations, and document collection',
    loss: '15 hours per week in admin work',
    fix: 'Automated scheduling, reminders, and document workflows',
    recovered: '12 hours per week',
  },
  {
    type: 'Coaching Business',
    problem: 'No consistent onboarding — every client is a manual process',
    loss: 'Poor client experience and owner stress',
    fix: 'Standardized onboarding system with automated touchpoints',
    recovered: '8 hours per week',
  },
  {
    type: 'Service Business',
    problem: 'No visibility into team workload or project status',
    loss: 'Missed deadlines and owner micromanagement',
    fix: 'Operational dashboard and team accountability system',
    recovered: 'Owner focus restored',
  },
  {
    type: 'Growing Company',
    problem: "Growth creating more chaos, not more profit",
    loss: "Owner dependency — business can't scale",
    fix: 'Systems and automation that scale with the business',
    recovered: 'Capacity for sustainable growth',
  },
];

const steps = [
  { num: '01', title: 'Take the MRI™', desc: 'Answer 15 questions about your business operations. Free. Takes 5 minutes.' },
  { num: '02', title: 'See Your Score', desc: "Receive a Capacity Score and Friction Classification that shows where you're losing the most." },
  { num: '03', title: 'Get Recommendations', desc: 'Receive a full report identifying your highest-impact improvement opportunities.' },
  { num: '04', title: 'Choose Your Path', desc: 'Implement improvements yourself or let Efficiency Architects handle it for you.' },
];

const differences = [
  { them: 'Sells software and integrations', us: 'Delivers business improvement' },
  { them: 'Leads with technology', us: 'Leads with outcomes' },
  { them: 'Solves one problem at a time', us: 'Improves connected areas together' },
  { them: 'Implementation only', us: 'Diagnosis + implementation + results' },
  { them: 'You manage the tools', us: 'We manage the transformation' },
];

export default function Home() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* HERO */}
      <section style={{ background: '#FAFAF7', padding: '100px 48px 90px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p className="label fade-up">Business Diagnostic Platform</p>
            <div className="divider fade-up" />
            <h1 className="fade-up" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 700, color: '#0F1F3D', marginBottom: 24 }}>
              Your business is<br />
              leaking time, money,<br />
              <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>and opportunity.</span>
            </h1>
            <p className="fade-up" style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: 1.8, marginBottom: 12, maxWidth: 500 }}>
              The Operational MRI™ is a free 5-minute diagnostic that shows business owners exactly where they are losing time, money, and growth potential — and what to do about it.
            </p>
            <p className="fade-up" style={{ fontSize: '0.88rem', color: '#9AA3B0', marginBottom: 36 }}>
              No sales call required. No obligation.
            </p>
            <div className="fade-up" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/mri" className="btn-primary">Take the Free Operational MRI™ →</Link>
              <Link to="/packages" className="btn-secondary">View Packages</Link>
            </div>
            <div className="fade-up" style={{ marginTop: 40, display: 'flex', gap: 40 }}>
              {[['Free', 'No cost, no catch'], ['5 Min', 'Quick diagnostic'], ['Instant', 'Results immediately']].map(([val, desc]) => (
                <div key={val}>
                  <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.4rem', color: '#C9A84C' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: '#9AA3B0', fontFamily: 'DM Mono', letterSpacing: '0.08em' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual — diagnostic card */}
          <div className="fade-up">
            <div style={{ background: '#FFFFFF', border: '1px solid #E8E4DC', padding: '40px', boxShadow: '0 24px 64px rgba(15,31,61,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                <p className="label">Operational MRI™ · Sample Result</p>
                <span style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#9AA3B0' }}>CONFIDENTIAL</span>
              </div>

              <div style={{ textAlign: 'center', marginBottom: 32 }}>
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 140, height: 140, borderRadius: '50%', border: '3px solid #C9A84C', background: '#FAFAF7', marginBottom: 12 }}>
                  <span style={{ fontFamily: 'Playfair Display', fontSize: '2.8rem', fontWeight: 700, color: '#0F1F3D', lineHeight: 1 }}>62</span>
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', color: '#9AA3B0', letterSpacing: '0.1em' }}>CAPACITY SCORE</span>
                </div>
                <p style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color: '#C9A84C', letterSpacing: '0.12em' }}>MODERATE FRICTION DETECTED</p>
              </div>

              {[
                { area: 'Lead Follow-Up', level: 82, color: '#ef4444' },
                { area: 'Administrative Work', level: 65, color: '#f97316' },
                { area: 'Team Communication', level: 44, color: '#C9A84C' },
                { area: 'Customer Experience', level: 28, color: '#22c55e' },
              ].map(({ area, level, color }) => (
                <div key={area} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: '0.82rem', color: '#4A5568' }}>{area}</span>
                    <span style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color }}>{level}% friction</span>
                  </div>
                  <div style={{ height: 4, background: '#F4F4F0', borderRadius: 2 }}>
                    <div style={{ height: '100%', width: `${level}%`, background: color, borderRadius: 2 }} />
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 24, padding: '16px', background: '#FAFAF7', borderLeft: '3px solid #C9A84C' }}>
                <p style={{ fontSize: '0.82rem', color: '#4A5568', lineHeight: 1.6 }}>
                  <strong style={{ color: '#0F1F3D' }}>Primary opportunity:</strong> Lead follow-up automation could recover an estimated 8 hours/week and $32K+ annually.
                </p>
              </div>

              <Link to="/mri" className="btn-primary" style={{ display: 'block', textAlign: 'center', justifyContent: 'center', marginTop: 20, fontSize: '0.82rem' }}>
                Get Your Real Score →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COST OF FRICTION */}
      <section style={{ background: '#FFFFFF', padding: '100px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 600, marginBottom: 64 }}>
            <p className="label fade-up">The Hidden Cost</p>
            <div className="divider fade-up" />
            <h2 className="fade-up" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#0F1F3D', marginBottom: 20 }}>
              Operational friction is costing your business more than you think.
            </h2>
            <p className="fade-up" style={{ fontSize: '1rem', color: '#4A5568', lineHeight: 1.8 }}>
              Most business owners know something is off. They feel it every day. But without a diagnostic, they're guessing at solutions to problems they haven't fully identified.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginBottom: 80 }}>
            {friction.map(({ stat, label }, i) => (
              <div key={i} className="fade-up" style={{ background: i % 2 === 0 ? '#FAFAF7' : '#0F1F3D', padding: '48px 32px' }}>
                <div style={{ fontFamily: 'Playfair Display', fontSize: '3rem', fontWeight: 700, color: '#C9A84C', marginBottom: 16, lineHeight: 1 }}>{stat}</div>
                <p style={{ fontSize: '0.88rem', color: i % 2 === 0 ? '#4A5568' : '#9AA3B0', lineHeight: 1.7 }}>{label}</p>
              </div>
            ))}
          </div>

          <div className="fade-up" style={{ marginBottom: 16 }}>
            <p className="label">Real-World Examples</p>
            <div className="divider" />
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', color: '#0F1F3D', marginBottom: 40 }}>What operational friction looks like in practice.</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {examples.slice(0, 3).map(({ type, problem, loss, fix, recovered }, i) => (
              <div key={i} className="fade-up" style={{ background: '#FAFAF7', padding: '36px 32px', borderTop: '3px solid #E8E4DC', transition: 'border-top-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderTopColor = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.borderTopColor = '#E8E4DC'}
              >
                <p className="label" style={{ marginBottom: 12 }}>{type}</p>
                <p style={{ fontSize: '0.9rem', color: '#4A5568', lineHeight: 1.7, marginBottom: 20 }}><strong style={{ color: '#0F1F3D' }}>Problem:</strong> {problem}</p>
                <div style={{ background: '#fff0f0', padding: '12px 16px', marginBottom: 12, borderLeft: '2px solid #ef4444' }}>
                  <p style={{ fontSize: '0.82rem', color: '#ef4444', fontWeight: 600 }}>Cost: {loss}</p>
                </div>
                <div style={{ background: '#f0fdf4', padding: '12px 16px', marginBottom: 12, borderLeft: '2px solid #22c55e' }}>
                  <p style={{ fontSize: '0.82rem', color: '#166534' }}>Fix: {fix}</p>
                </div>
                <p style={{ fontSize: '0.82rem', color: '#C9A84C', fontFamily: 'DM Mono', letterSpacing: '0.06em' }}>↗ {recovered}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginTop: 2 }}>
            {examples.slice(3).map(({ type, problem, loss, fix, recovered }, i) => (
              <div key={i} className="fade-up" style={{ background: '#FAFAF7', padding: '36px 32px', borderTop: '3px solid #E8E4DC', transition: 'border-top-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderTopColor = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.borderTopColor = '#E8E4DC'}
              >
                <p className="label" style={{ marginBottom: 12 }}>{type}</p>
                <p style={{ fontSize: '0.9rem', color: '#4A5568', lineHeight: 1.7, marginBottom: 20 }}><strong style={{ color: '#0F1F3D' }}>Problem:</strong> {problem}</p>
                <div style={{ background: '#fff0f0', padding: '12px 16px', marginBottom: 12, borderLeft: '2px solid #ef4444' }}>
                  <p style={{ fontSize: '0.82rem', color: '#ef4444', fontWeight: 600 }}>Cost: {loss}</p>
                </div>
                <div style={{ background: '#f0fdf4', padding: '12px 16px', marginBottom: 12, borderLeft: '2px solid #22c55e' }}>
                  <p style={{ fontSize: '0.82rem', color: '#166534' }}>Fix: {fix}</p>
                </div>
                <p style={{ fontSize: '0.82rem', color: '#C9A84C', fontFamily: 'DM Mono', letterSpacing: '0.06em' }}>↗ {recovered}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONAL MRI FEATURE */}
      <section style={{ background: '#0F1F3D', padding: '100px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p className="label fade-up" style={{ color: '#C9A84C' }}>Free Business Diagnostic</p>
            <div className="divider fade-up" />
            <h2 className="fade-up" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#FAFAF7', marginBottom: 24 }}>
              The Operational MRI™
            </h2>
            <p className="fade-up" style={{ fontSize: '1rem', color: '#9AA3B0', lineHeight: 1.8, marginBottom: 32 }}>
              Most business owners know something isn't working. The MRI tells you exactly what it is — and what it's costing you.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {[
                ['Time Leaks', 'Where hours are disappearing'],
                ['Missed Opportunities', 'Revenue left on the table'],
                ['Process Breakdowns', 'Where things fall through'],
                ['Growth Barriers', "What's blocking your next level"],
                ['Hidden Capacity', 'Untapped potential in your business'],
              ].map(([title, desc]) => (
                <div key={title} className="fade-up" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ color: '#C9A84C', marginTop: 2, fontSize: '1rem' }}>→</span>
                  <div>
                    <span style={{ color: '#FAFAF7', fontWeight: 600, fontSize: '0.9rem' }}>{title}</span>
                    <span style={{ color: '#6B7280', fontSize: '0.88rem' }}> · {desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/mri" className="btn-primary" style={{ fontSize: '0.88rem' }}>
              Take the Free Operational MRI™ →
            </Link>
            <p style={{ marginTop: 12, color: '#4A5568', fontSize: '0.78rem', fontFamily: 'DM Mono', letterSpacing: '0.08em' }}>FREE · 5 MINUTES · NO SALES CALL</p>
          </div>

          <div>
            <p className="label fade-up" style={{ color: '#C9A84C', marginBottom: 32 }}>How It Works</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {steps.map(({ num, title, desc }, i) => (
                <div key={num} className="fade-up" style={{ background: '#0a1829', padding: '28px 32px', display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#C9A84C', letterSpacing: '0.1em', paddingTop: 3 }}>{num}</span>
                  <div>
                    <p style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem', color: '#FAFAF7', marginBottom: 8 }}>{title}</p>
                    <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section style={{ background: '#FAFAF7', padding: '100px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="label fade-up">What Makes Us Different</p>
            <div className="divider fade-up divider-center" />
            <h2 className="fade-up" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#0F1F3D', maxWidth: 600, margin: '0 auto' }}>
              We don't sell automation. We deliver better businesses.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <div style={{ background: '#F4F4F0', padding: '48px 40px' }}>
              <p className="label" style={{ color: '#9AA3B0', marginBottom: 28 }}>Typical Automation Agency</p>
              {differences.map(({ them }, i) => (
                <div key={i} className="fade-up" style={{ display: 'flex', gap: 14, marginBottom: 16, alignItems: 'center' }}>
                  <span style={{ color: '#D1D5DB', fontSize: '1rem' }}>✕</span>
                  <span style={{ fontSize: '0.9rem', color: '#9AA3B0' }}>{them}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#0F1F3D', padding: '48px 40px' }}>
              <p className="label" style={{ color: '#C9A84C', marginBottom: 28 }}>Efficiency Architects</p>
              {differences.map(({ us }, i) => (
                <div key={i} className="fade-up" style={{ display: 'flex', gap: 14, marginBottom: 16, alignItems: 'center' }}>
                  <span style={{ color: '#C9A84C', fontSize: '1rem' }}>✓</span>
                  <span style={{ fontSize: '0.9rem', color: '#CBD5E0' }}>{us}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section style={{ background: '#FFFFFF', padding: '100px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p className="label fade-up">Service Packages</p>
            <div className="divider fade-up" />
            <h2 className="fade-up" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#0F1F3D', maxWidth: 560 }}>
              Choose the level of transformation you need.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              { name: 'Business Reset™', price: '$997', tag: 'Overwhelmed or stuck', result: 'Your business becomes easier to manage. Less stress. More control.' },
              { name: 'Get Your Time Back™', price: '$2,497', tag: 'Busy but inefficient', result: 'You spend less time managing problems and more time leading your business.', featured: true },
              { name: 'Business Freedom™', price: '$7,500+', tag: 'Ready to scale', result: 'Your business runs without depending on you. Growth becomes sustainable.' },
            ].map(({ name, price, tag, result, featured }) => (
              <div key={name} className="fade-up" style={{ background: featured ? '#0F1F3D' : '#FAFAF7', padding: '44px 36px', borderTop: `3px solid ${featured ? '#C9A84C' : '#E8E4DC'}`, position: 'relative' }}>
                {featured && <div style={{ position: 'absolute', top: 0, right: 32, background: '#C9A84C', color: '#0F1F3D', fontFamily: 'DM Mono', fontSize: '0.65rem', letterSpacing: '0.12em', padding: '5px 14px' }}>MOST POPULAR</div>}
                <p className="label" style={{ marginBottom: 8 }}>For businesses that are {tag}</p>
                <div style={{ fontFamily: 'Playfair Display', fontSize: '2.4rem', fontWeight: 700, color: featured ? '#FAFAF7' : '#0F1F3D', marginBottom: 4 }}>{price}</div>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.4rem', color: featured ? '#FAFAF7' : '#0F1F3D', marginBottom: 20 }}>{name}</h3>
                <p style={{ fontSize: '0.88rem', color: featured ? '#9AA3B0' : '#6B7280', lineHeight: 1.7, marginBottom: 28 }}>{result}</p>
                <Link to="/packages" style={{ color: '#C9A84C', fontFamily: 'DM Sans', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ fontSize: '0.9rem', color: '#9AA3B0', marginBottom: 20 }}>Not sure where to start?</p>
            <Link to="/mri" className="btn-primary">Take the Free MRI™ First →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: '#C9A84C', padding: '100px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p className="label fade-up" style={{ color: '#0F1F3D' }}>Free · 5 Minutes · No Obligation</p>
          <div className="divider fade-up divider-center" style={{ background: '#0F1F3D' }} />
          <h2 className="fade-up" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#0F1F3D', marginBottom: 20 }}>
            Find out what your business is actually capable of.
          </h2>
          <p className="fade-up" style={{ fontSize: '1rem', color: '#1a2f52', lineHeight: 1.8, marginBottom: 40 }}>
            The Operational MRI™ takes 5 minutes and shows you exactly where your business is losing time, money, and opportunity — and what to do about it.
          </p>
          <Link to="/mri" className="fade-up" style={{
            display: 'inline-block', background: '#0F1F3D', color: '#FAFAF7',
            fontFamily: 'DM Sans', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.04em',
            padding: '18px 48px', textDecoration: 'none',
          }}>Take the Free Operational MRI™ →</Link>
        </div>
      </section>

    </div>
  );
}
