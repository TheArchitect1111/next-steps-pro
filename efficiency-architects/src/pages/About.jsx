import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ background: '#FAFAF7', padding: '100px 48px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p className="label fade-up">About</p>
            <div className="divider fade-up" />
            <h1 className="fade-up" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#0F1F3D', marginBottom: 24 }}>
              We are not an automation agency.
            </h1>
            <p className="fade-up" style={{ fontSize: '1rem', color: '#4A5568', lineHeight: 1.8, marginBottom: 20 }}>
              Efficiency Architects is a business improvement and operational transformation company. We help organizations identify what's slowing them down, uncover hidden opportunities, and create capacity for growth.
            </p>
            <p className="fade-up" style={{ fontSize: '1rem', color: '#4A5568', lineHeight: 1.8, marginBottom: 20 }}>
              Technology is the tool. Business improvement is the product.
            </p>
            <p className="fade-up" style={{ fontSize: '1rem', color: '#4A5568', lineHeight: 1.8, marginBottom: 40 }}>
              We operate under <strong style={{ color: '#0F1F3D' }}>Ascension Systems LLC</strong>.
            </p>
            <div className="fade-up" style={{ padding: '32px', background: '#0F1F3D', marginBottom: 40 }}>
              <p style={{ fontFamily: 'Playfair Display', fontSize: '1.4rem', color: '#FAFAF7', fontStyle: 'italic', lineHeight: 1.5 }}>
                "Most businesses don't have a people problem. They have a visibility, process, and systems problem."
              </p>
            </div>
            <Link to="/mri" className="btn-primary">Start with the Free Operational MRI™ →</Link>
          </div>
          <div>
            <div style={{ background: '#FFFFFF', border: '1px solid #E8E4DC', padding: '40px' }}>
              <p className="label" style={{ marginBottom: 24 }}>Our Philosophy</p>
              {[
                { title: 'Outcomes over technology', desc: 'Business owners buy more time and less stress. Not software.' },
                { title: 'Diagnosis before prescription', desc: "We identify what's actually broken before recommending solutions." },
                { title: 'Practical over theoretical', desc: 'Every improvement we make creates a measurable business result.' },
                { title: 'Systems that scale', desc: 'We build infrastructure that grows with your business, not against it.' },
              ].map(({ title, desc }, i) => (
                <div key={title} className="fade-up" style={{ marginBottom: 28, paddingBottom: 28, borderBottom: i < 3 ? '1px solid #E8E4DC' : 'none' }}>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem', color: '#0F1F3D', marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#0F1F3D', padding: '100px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p className="label fade-up" style={{ color: '#C9A84C' }}>Long-Term Vision</p>
          <div className="divider fade-up divider-center" />
          <h2 className="fade-up" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#FAFAF7', marginBottom: 24 }}>
            Today a service. Tomorrow a platform.
          </h2>
          <p className="fade-up" style={{ fontSize: '1rem', color: '#9AA3B0', lineHeight: 1.8, marginBottom: 40 }}>
            The long-term vision is an AI-powered business improvement platform — helping any business identify, recover, and expand hidden capacity at scale.
          </p>
          <Link to="/mri" className="btn-primary">Start with the Free MRI™ →</Link>
        </div>
      </section>
    </div>
  );
}
