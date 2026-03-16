import React from 'react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../hooks/useScrollReveal';
import './Section.css'; // Reusable section styles

const About = () => {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section">
      <div 
        ref={elementRef} 
        className={`section-container reveal-base ${isVisible ? 'reveal-visible' : ''}`}
      >
        <h2 className="section-title">
          <span className="text-highlight">01.</span> {t('identity.title')}
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>{t('identity.text1')}</p>
            <p>{t('identity.text2')}</p>
            <p>{t('identity.text3')}</p>
            <div className="skill-group">
              <p className="skills-subtitle">{t('identity.skills_title')}</p>
              <ul className="skills-list">
                <li>{t('identity.skills.platform')}</li>
                <li>{t('identity.skills.decision')}</li>
                <li>{t('identity.skills.tech')}</li>
                <li>{t('identity.skills.ai')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
