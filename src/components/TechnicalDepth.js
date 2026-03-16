import React from 'react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../hooks/useScrollReveal';
import './Section.css';

const TechnicalDepth = () => {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useScrollReveal();
  
  const depthKeys = ['state', 'realtime'];

  return (
    <section className="section" id="depth">
      <div
        ref={elementRef}
        className={`section-container reveal-base ${isVisible ? 'reveal-visible' : ''}`}
      >
        <h2 className="section-title">
          <span className="text-highlight">04.</span> {t('depth.title')}
        </h2>
        <p className="section-subtitle mono text-muted">{t('depth.subtitle')}</p>
        
        <div className="structural-grid">
          {depthKeys.map((key) => (
            <div key={key} className="structural-card">
              <h3 className="card-title">{t(`depth.items.${key}.title`)}</h3>
              <p className="card-text">{t(`depth.items.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalDepth;
