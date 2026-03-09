import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section.css';

const ProblemSolving = () => {
  const { t } = useTranslation();

  const frameworkKeys = ['1', '2', '3', '4', '5'];

  return (
    <section className="section bg-dark text-light" id="framework">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <h2 className="section-title text-highlight" style={{ marginBottom: '0.5rem' }}>
            <span className="section-number" style={{ marginRight: '1rem', opacity: 0.5 }}>06.</span>
            {t('framework.title')}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{t('framework.subtitle')}</p>
        </div>
        
        <div className="timeline" style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '2rem', marginLeft: '1rem' }}>
          {frameworkKeys.map((key) => (
            <div key={key} className="timeline-item" style={{ position: 'relative', marginBottom: '3rem' }}>
              <div 
                style={{ 
                  position: 'absolute', 
                  left: '-2.35rem', 
                  top: '0.2rem', 
                  width: '8px', 
                  height: '8px', 
                  background: 'var(--text-primary)', 
                  borderRadius: '50%' 
                }} 
              />
              <div className="timeline-content">
                <h3 className="timeline-title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  {t(`framework.steps.${key}.name`)}
                </h3>
                <p className="timeline-desc" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {t(`framework.steps.${key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
