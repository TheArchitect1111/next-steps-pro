import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const links = [
    { label: 'Operational MRI™', path: '/mri' },
    { label: 'Packages', path: '/packages' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 72,
        background: scrolled ? 'rgba(250,250,247,0.96)' : 'rgba(250,250,247,0.92)',
        borderBottom: scrolled ? '1px solid #E8E4DC' : '1px solid transparent',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.3s',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/EA_Logo.png" alt="Efficiency Architects" style={{ height: 44, mixBlendMode: 'multiply' }} />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-links">
          {links.map(({ label, path }) => (
            <Link key={path} to={path} style={{
              fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.85rem',
              color: location.pathname === path ? '#C9A84C' : '#0F1F3D',
              textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.01em',
            }}>{label}</Link>
          ))}
          <Link to="/mri" className="btn-primary" style={{ padding: '11px 24px', fontSize: '0.82rem' }}>
            Take the Free MRI™ →
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="hamburger" style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8,
          flexDirection: 'column', gap: 5,
        }}>
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: 22, height: 1.5, background: '#0F1F3D' }} />)}
        </button>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, zIndex: 999,
          background: '#FAFAF7', borderBottom: '1px solid #E8E4DC',
          padding: '24px 24px 32px', display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {links.map(({ label, path }) => (
            <Link key={path} to={path} style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '1rem', color: '#0F1F3D', textDecoration: 'none' }}>{label}</Link>
          ))}
          <Link to="/mri" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>Take the Free MRI™ →</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
