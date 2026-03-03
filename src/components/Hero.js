import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">{t('hero.greeting')}</p>
        <h1 className="hero-title">
          {t('hero.name')}
        </h1>
        <h2 className="hero-subtitle" style={{ whiteSpace: 'pre-line', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          {t('hero.subtitle')}
        </h2>
        <p className="hero-description text-muted" style={{ marginTop: '20px' }}>
          {t('hero.mission')}
        </p>
        <div className="hero-cta">
          <a href="#projects" className="cta-button primary">{t('hero.viewProjects')}</a>
          <a href="#contact" className="cta-button secondary">{t('hero.getInTouch')}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
