import React from 'react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../hooks/useScrollReveal';
import './Section.css';

const ProblemSolving = () => {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useScrollReveal();

  const frameworkKeys = ['1', '2', '3', '4', '5'];

  return (
    <section className="section" id="framework">
      <div
        ref={elementRef}
        className={`section-container reveal-base ${isVisible ? 'reveal-visible' : ''}`}
      >
        <h2 className="section-title">
          <span className="text-highlight">06.</span> {t('framework.title')}
        </h2>
        <p className="section-subtitle mono text-muted" style={{ marginBottom: '3rem' }}>
          {t('framework.subtitle')}
        </p>
        
        <div className="timeline">
          {frameworkKeys.map((key) => (
            <div key={key} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content structural-card">
                <h3 className="role">{t(`framework.steps.${key}.name`)}</h3>
                <p className="description">{t(`framework.steps.${key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
