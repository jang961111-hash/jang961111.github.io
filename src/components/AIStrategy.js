import React from 'react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../hooks/useScrollReveal';
import './Section.css';

const AIStrategy = () => {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useScrollReveal();
  
  const aiKeys = ['responsibility', 'integration'];

  return (
    <section className="section" id="ai">
      <div
        ref={elementRef}
        className={`section-container reveal-base ${isVisible ? 'reveal-visible' : ''}`}
      >
        <h2 className="section-title">
          <span className="text-highlight">05.</span> {t('ai.title')}
        </h2>
        <p className="section-subtitle mono text-muted">{t('ai.subtitle')}</p>
        
        <div className="structural-grid">
          {aiKeys.map((key) => (
            <div key={key} className="structural-card">
              <h3 className="card-title">{t(`ai.items.${key}.title`)}</h3>
              <p className="card-text">{t(`ai.items.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIStrategy;
