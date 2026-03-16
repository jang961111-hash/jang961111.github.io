import React from 'react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../hooks/useScrollReveal';
import './Section.css';

const ProductStrategy = () => {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useScrollReveal();
  
  const strategyKeys = ['platform', 'alignment'];

  return (
    <section className="section" id="strategy">
      <div
        ref={elementRef}
        className={`section-container reveal-base ${isVisible ? 'reveal-visible' : ''}`}
      >
        <h2 className="section-title">
          <span className="text-highlight">03.</span> {t('strategy.title')}
        </h2>
        
        <div className="structural-grid">
          {strategyKeys.map((key) => (
            <div key={key} className="structural-card">
              <h3 className="card-title">{t(`strategy.items.${key}.title`)}</h3>
              <p className="card-text">{t(`strategy.items.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductStrategy;
