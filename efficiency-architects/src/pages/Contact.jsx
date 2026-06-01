import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', challenge: '', package: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ background: '#FAFAF7', padding: '100px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <p className="label fade-up">Get In Touch</p>
            <div className="divider fade-up" />
            <h1 className="fade-up" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#0F1F3D', marginBottom: 24 }}>
              Let's find your hidden opportunities.
            </h1>
            <p className="fade-up" style={{ fontSize: '1rem', color: '#4A5568', lineHeight: 1.8, marginBottom: 48 }}>
              Tell us about your business. We'll respond within one business day.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {[
                { label: 'Response Time', value: 'Within 1 business day' },
                { label: 'Website', value: 'efficiencyarchitects.online' },
                { label: 'Parent Company', value: 'Ascension Systems LLC' },
              ].map(({ label, value }) => (
                <div key={label} className="fade-up">
                  <p className="label" style={{ marginBottom: 4 }}>{label}</p>
                  <p style={{ fontSize: '0.95rem', color: '#4A5568' }}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '48px', border: '1px solid #E8E4DC' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontFamily: 'Playfair Display', fontSize: '3rem', color: '#C9A84C', marginBottom: 20 }}>✓</div>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', color: '#0F1F3D', marginBottom: 12 }}>Message received.</h3>
                <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { label: 'Full Name', key: 'name', type: 'text', placeholder: 'John Smith' },
                  { label: 'Email Address', key: 'email', type: 'email', placeholder: 'john@company.com' },
                  { label: 'Company Name', key: 'company', type: 'text', placeholder: 'Your Business' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label style={{ display: 'block', fontFamily: 'DM Mono', fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0F1F3D', marginBottom: 8 }}>{label}</label>
                    <input type={type} placeholder={placeholder} required value={form[key]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', border: '1px solid #E8E4DC', background: '#FAFAF7', fontFamily: 'DM Sans', fontSize: '0.9rem', color: '#0F1F3D', outline: 'none', transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = '#C9A84C'}
                      onBlur={e => e.target.style.borderColor = '#E8E4DC'}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: 'DM Mono', fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0F1F3D', marginBottom: 8 }}>Interested In</label>
                  <select value={form.package} onChange={e => setForm({ ...form, package: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', border: '1px solid #E8E4DC', background: '#FAFAF7', fontFamily: 'DM Sans', fontSize: '0.9rem', color: '#0F1F3D', outline: 'none' }}>
                    <option value="">Select a package</option>
                    <option>Business Reset™ — $997</option>
                    <option>Get Your Time Back™ — $2,497</option>
                    <option>Business Freedom™ — $7,500+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'DM Mono', fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0F1F3D', marginBottom: 8 }}>Biggest Challenge Right Now</label>
                  <textarea rows={5} required placeholder="Describe what's going on in your business..."
                    value={form.challenge} onChange={e => setForm({ ...form, challenge: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', border: '1px solid #E8E4DC', background: '#FAFAF7', fontFamily: 'DM Sans', fontSize: '0.9rem', color: '#0F1F3D', outline: 'none', resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'}
                    onBlur={e => e.target.style.borderColor = '#E8E4DC'}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
