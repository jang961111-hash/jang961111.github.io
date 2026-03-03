import React from 'react';
import { useTranslation } from 'react-i18next';
import profilePhoto from '../assets/images/id-photo.jpg';
import './Hero.css';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const portraitAlt =
    i18n.language === 'ko'
      ? `${t('hero.name')} 프로필 사진`
      : `Profile photo of ${t('hero.name')}`;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-identity">
          <div className="hero-heading">
            <p className="hero-greeting">{t('hero.greeting')}</p>
            <h1 className="hero-title">{t('hero.name')}</h1>
          </div>
          <div className="hero-portrait-shell">
            <div className="hero-portrait-frame">
              <img
                className="hero-portrait"
                src={profilePhoto}
                alt={portraitAlt}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
        <p className="hero-description text-muted">{t('hero.mission')}</p>
        <div className="hero-cta">
          <a href="#projects" className="cta-button primary">{t('hero.viewProjects')}</a>
          <a href="#contact" className="cta-button secondary">{t('hero.getInTouch')}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
