import React from 'react';
import { Link } from 'react-router-dom';

export default function MRI() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ background: '#FAFAF7', padding: '100px 48px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p className="label fade-up">Free Business Diagnostic</p>
          <div className="divider fade-up divider-center" />
          <h1 className="fade-up" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#0F1F3D', marginBottom: 24 }}>
            The Operational MRI™
          </h1>
          <p className="fade-up" style={{ fontSize: '1.1rem', color: '#4A5568', lineHeight: 1.8, marginBottom: 20 }}>
            A free diagnostic that reveals where your business is losing time, money, and growth potential.
          </p>
          <p className="fade-up" style={{ fontSize: '0.9rem', color: '#9AA3B0', marginBottom: 56 }}>
            Free · 5 minutes · Results delivered immediately · No sales call required
          </p>

          <div className="fade-up" style={{ background: '#0F1F3D', padding: '64px 48px', textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 48 }}>
              {[
                { icon: '◎', title: 'Capacity Score', desc: 'A 0–100 score showing how efficiently your business is operating.' },
                { icon: '◈', title: 'Friction Classification', desc: 'Identifies whether your friction is low, moderate, high, or critical.' },
                { icon: '◉', title: 'Top Opportunities', desc: 'The highest-impact areas for immediate improvement.' },
                { icon: '◆', title: 'Recommended Path', desc: 'A clear recommendation for your next step forward.' },
              ].map(({ icon, title, desc }) => (
                <div key={title}>
                  <div style={{ color: '#C9A84C', fontSize: '1.5rem', marginBottom: 12 }}>{icon}</div>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.2rem', color: '#FAFAF7', marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#9AA3B0', lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid #1E3358', paddingTop: 40, textAlign: 'center' }}>
              <p style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#FAFAF7', fontStyle: 'italic', marginBottom: 12 }}>
                The MRI is being built.
              </p>
              <p style={{ color: '#9AA3B0', fontSize: '0.9rem', marginBottom: 32, lineHeight: 1.7 }}>
                The full Operational MRI™ assessment is in development. In the meantime, contact us directly for a live diagnostic session at no charge.
              </p>
              <Link to="/contact" className="btn-primary">Request a Live MRI™ Session →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
