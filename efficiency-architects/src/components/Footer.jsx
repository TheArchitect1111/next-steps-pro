import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#0F1F3D', color: '#FAFAF7', padding: '80px 48px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 64, marginBottom: 64 }}>
          <div>
            <img src="/EA_Logo.png" alt="Efficiency Architects" style={{ height: 40, filter: 'brightness(0) invert(1)', marginBottom: 20 }} />
            <p style={{ fontSize: '0.9rem', color: '#9AA3B0', lineHeight: 1.8, maxWidth: 300, marginBottom: 16 }}>
              Systems That Transform Businesses.
            </p>
            <p style={{ fontSize: '0.78rem', color: '#4A5568', fontFamily: 'DM Mono', letterSpacing: '0.08em' }}>
              ASCENSION SYSTEMS LLC
            </p>
          </div>
          <div>
            <p className="label" style={{ marginBottom: 20 }}>Site</p>
            {[
              { label: 'Operational MRI™', path: '/mri' },
              { label: 'Packages', path: '/packages' },
              { label: 'About', path: '/about' },
              { label: 'Contact', path: '/contact' },
            ].map(({ label, path }) => (
              <div key={path} style={{ marginBottom: 12 }}>
                <Link to={path} style={{ color: '#9AA3B0', textDecoration: 'none', fontSize: '0.88rem' }}
                  onMouseEnter={e => e.target.style.color = '#C9A84C'}
                  onMouseLeave={e => e.target.style.color = '#9AA3B0'}
                >{label}</Link>
              </div>
            ))}
          </div>
          <div>
            <p className="label" style={{ marginBottom: 20 }}>Start Here</p>
            <p style={{ color: '#9AA3B0', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 24 }}>
              The free Operational MRI™ takes 5 minutes and shows you exactly where your business is losing time, money, and opportunity.
            </p>
            <Link to="/mri" className="btn-primary" style={{ fontSize: '0.8rem', padding: '13px 24px' }}>
              Take the Free MRI™ →
            </Link>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1E3358', paddingTop: 28, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#4A5568', fontSize: '0.78rem', fontFamily: 'DM Mono' }}>© {new Date().getFullYear()} ASCENSION SYSTEMS LLC</p>
          <p style={{ color: '#4A5568', fontSize: '0.78rem', fontFamily: 'DM Mono' }}>EFFICIENCYARCHITECTS.ONLINE</p>
        </div>
      </div>
    </footer>
  );
}
