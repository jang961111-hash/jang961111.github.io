import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section.css'; // Reusable section styles

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className="section-container">
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
