import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section.css';

const AIStrategy = () => {
  const { t } = useTranslation();
  
  const aiKeys = ['responsibility', 'integration'];

  return (
    <section className="section bg-dark text-light" id="ai">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 className="section-title text-highlight">
            <span className="section-number">05.</span>
            {t('ai.title')}
          </h2>
          <p className="mono" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{t('ai.subtitle')}</p>
        </div>
        
        <div className="structural-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {aiKeys.map((key) => (
            <div key={key} className="structural-card">
              <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>{t(`ai.items.${key}.title`)}</h3>
              <p className="card-text" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t(`ai.items.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIStrategy;
