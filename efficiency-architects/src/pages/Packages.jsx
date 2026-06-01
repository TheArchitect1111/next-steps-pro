import React from 'react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Business Reset™',
    price: '$997',
    tag: 'For businesses that feel disorganized, overwhelmed, or stuck.',
    feeling: "You know something is off, but you're too deep in daily operations to fix it.",
    problems: ['Things falling through the cracks', 'Missed follow-up with leads or clients', 'Scheduling and admin consuming your day', 'Too many manual processes', 'No clear systems or organization'],
    delivers: ['Identify your biggest sources of frustration', 'Simplify the processes creating the most chaos', 'Reduce unnecessary manual work', 'Implement practical systems and automation', 'Create organization and consistency'],
    result: 'The business becomes easier to manage. Less stress. Fewer fires. You feel organized and back in control.',
    emotion: 'Relieved. Organized. Back in control.',
    featured: false,
  },
  {
    name: 'Get Your Time Back™',
    price: '$2,497',
    tag: 'For businesses that are growing but feel harder to run than they should.',
    feeling: "You're busy but not as productive as you should be. Growth is creating more work, not more profit.",
    problems: ['Too much repetitive, manual work', 'Communication issues across the team', 'Inconsistent customer experience', "Owner doing work that shouldn't require them", 'No time to focus on growth'],
    delivers: ['Improve multiple connected areas at once', 'Reduce repetitive and manual tasks', 'Improve team communication and coordination', 'Automate customer touchpoints', 'Create consistency throughout operations'],
    result: 'You spend less time managing problems and more time leading. Operations become smoother. The business creates breathing room.',
    emotion: 'Less overwhelmed. More productive. More focused.',
    featured: true,
  },
  {
    name: 'Business Freedom™',
    price: '$7,500+',
    tag: 'For businesses preparing for growth or struggling with owner dependency.',
    feeling: "Everything depends on you. Growth is getting harder to manage. You're the bottleneck.",
    problems: ["Business can't function without the owner", 'Team coordination is inconsistent', 'Growth creating complexity and chaos', 'No accountability or visibility', 'Operational inconsistency slowing you down'],
    delivers: ['Evaluate how work moves through the entire business', 'Improve communication and accountability structures', 'Create repeatable, documented systems', 'Build automation and operational infrastructure', 'Create visibility and decision-making support'],
    result: 'The business becomes less dependent on you. Growth is easier to manage. Operations are more predictable. You feel free.',
    emotion: 'Lighter. More focused. More free. More confident.',
    featured: false,
  },
];

export default function Packages() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ background: '#FAFAF7', padding: '100px 48px 60px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <p className="label fade-up">Service Packages</p>
          <div className="divider fade-up divider-center" />
          <h1 className="fade-up" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#0F1F3D', marginBottom: 20 }}>
            You're not buying deliverables.<br />You're buying a better business.
          </h1>
          <p className="fade-up" style={{ fontSize: '1rem', color: '#4A5568', lineHeight: 1.8 }}>
            Every package starts with understanding your specific situation. We improve what matters most first.
          </p>
        </div>
      </section>

      <section style={{ background: '#FFFFFF', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {packages.map(({ name, price, tag, feeling, problems, delivers, result, emotion, featured }) => (
            <div key={name} className="fade-up" style={{
              display: 'grid',
              gridTemplateColumns: featured ? '1fr' : '1fr 1fr 1fr',
              background: featured ? '#0F1F3D' : '#FAFAF7',
              borderLeft: `4px solid ${featured ? '#C9A84C' : '#E8E4DC'}`,
              position: 'relative',
            }}>
              {featured && (
                <div style={{ position: 'absolute', top: 0, left: 0, background: '#C9A84C', color: '#0F1F3D', fontFamily: 'DM Mono', fontSize: '0.65rem', letterSpacing: '0.12em', padding: '5px 20px' }}>
                  MOST POPULAR
                </div>
              )}

              {featured ? (
                <div style={{ padding: '56px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48 }}>
                  <div>
                    <p className="label" style={{ marginBottom: 8 }}>{price}</p>
                    <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#FAFAF7', marginBottom: 16 }}>{name}</h2>
                    <p style={{ fontSize: '0.88rem', color: '#9AA3B0', lineHeight: 1.7, marginBottom: 16 }}>{tag}</p>
                    <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.7, fontStyle: 'italic' }}>{feeling}</p>
                  </div>
                  <div>
                    <p className="label" style={{ marginBottom: 16 }}>Common Problems</p>
                    {problems.map(p => (
                      <div key={p} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                        <span style={{ color: '#C9A84C' }}>·</span>
                        <span style={{ fontSize: '0.85rem', color: '#9AA3B0', lineHeight: 1.5 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="label" style={{ marginBottom: 16 }}>What We Do</p>
                    {delivers.map(d => (
                      <div key={d} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                        <span style={{ color: '#C9A84C' }}>✓</span>
                        <span style={{ fontSize: '0.85rem', color: '#CBD5E0', lineHeight: 1.5 }}>{d}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: 24, padding: '20px', background: '#0a1829' }}>
                      <p style={{ fontSize: '0.85rem', color: '#CBD5E0', lineHeight: 1.7, marginBottom: 8 }}>{result}</p>
                      <p style={{ fontFamily: 'Playfair Display', fontSize: '0.95rem', fontStyle: 'italic', color: '#C9A84C' }}>{emotion}</p>
                    </div>
                    <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', justifyContent: 'center', marginTop: 20, fontSize: '0.82rem' }}>
                      Get Started →
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ padding: '40px 36px' }}>
                    <p className="label" style={{ marginBottom: 8 }}>{price}</p>
                    <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.6rem', color: '#0F1F3D', marginBottom: 12 }}>{name}</h2>
                    <p style={{ fontSize: '0.88rem', color: '#4A5568', lineHeight: 1.7, marginBottom: 12 }}>{tag}</p>
                    <p style={{ fontSize: '0.85rem', color: '#9AA3B0', lineHeight: 1.7, fontStyle: 'italic' }}>{feeling}</p>
                  </div>
                  <div style={{ padding: '40px 36px', background: '#F4F4F0' }}>
                    <p className="label" style={{ marginBottom: 16 }}>What We Do</p>
                    {delivers.map(d => (
                      <div key={d} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                        <span style={{ color: '#C9A84C' }}>✓</span>
                        <span style={{ fontSize: '0.85rem', color: '#4A5568', lineHeight: 1.5 }}>{d}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '40px 36px' }}>
                    <p className="label" style={{ marginBottom: 16 }}>The Result</p>
                    <p style={{ fontSize: '0.88rem', color: '#4A5568', lineHeight: 1.7, marginBottom: 16 }}>{result}</p>
                    <p style={{ fontFamily: 'Playfair Display', fontSize: '1rem', fontStyle: 'italic', color: '#C9A84C', marginBottom: 24 }}>{emotion}</p>
                    <Link to="/contact" className="btn-secondary" style={{ fontSize: '0.82rem', padding: '12px 24px' }}>Get Started →</Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 680, margin: '80px auto 0', textAlign: 'center', padding: '48px', background: '#FAFAF7', borderTop: '3px solid #C9A84C' }}>
          <p className="label fade-up">Not Sure Where to Start?</p>
          <div className="divider fade-up divider-center" />
          <p className="fade-up" style={{ fontSize: '0.95rem', color: '#4A5568', lineHeight: 1.8, marginBottom: 28 }}>
            Take the free Operational MRI™ first. It will identify your highest-impact opportunities and tell you exactly which package is right for your situation.
          </p>
          <Link to="/mri" className="btn-primary">Take the Free Operational MRI™ →</Link>
        </div>
      </section>
    </div>
  );
}
