import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section.css';

const TechnicalApproach = () => {
  const { t } = useTranslation();
  
  const approachKeys = ['state', 'realtime', 'fsd', 'philosophy'];

  return (
    <section className="section bg-dark text-light" id="approach">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 className="section-title text-highlight">
            <span className="section-number" style={{ marginRight: '1rem', opacity: 0.5 }}>03.</span>
            {t('approach.title')}
          </h2>
        </div>
        
        <div className="structural-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {approachKeys.map((key) => (
            <div key={key} className="structural-card" style={{ padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.02)' }}>
              <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>{t(`approach.items.${key}.title`)}</h3>
              <p className="card-text" style={{ color: '#a0a0a0', lineHeight: 1.6 }}>{t(`approach.items.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalApproach;
