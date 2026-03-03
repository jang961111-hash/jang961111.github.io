import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section.css';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-highlight">07.</span> {t('experience.title')}
        </h2>
        
        <div className="timeline">
          {/* SSAFY */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content structural-card">
              <h3 className="role">{t('experience.jobs.ssafy.title')}</h3>
              <h4 className="company">{t('experience.jobs.ssafy.company')}</h4>
              <span className="date">{t('experience.jobs.ssafy.period')}</span>
              <ul className="task-list">
                <li>{t('experience.jobs.ssafy.desc1')}</li>
                <li>{t('experience.jobs.ssafy.desc2')}</li>
                <li>{t('experience.jobs.ssafy.desc3')}</li>
              </ul>
            </div>
          </div>

          {/* Marines */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content structural-card">
              <h3 className="role">{t('experience.jobs.marines.title')}</h3>
              <h4 className="company">{t('experience.jobs.marines.company')}</h4>
              <span className="date">{t('experience.jobs.marines.period')}</span>
              <ul className="task-list">
                <li>{t('experience.jobs.marines.desc1')}</li>
                <li>{t('experience.jobs.marines.desc2')}</li>
              </ul>
            </div>
          </div>

          {/* Jaguar */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content structural-card">
              <h3 className="role">{t('experience.jobs.jaguar.title')}</h3>
              <h4 className="company">{t('experience.jobs.jaguar.company')}</h4>
              <span className="date">{t('experience.jobs.jaguar.period')}</span>
              <ul className="task-list">
                <li>{t('experience.jobs.jaguar.desc1')}</li>
                <li>{t('experience.jobs.jaguar.desc2')}</li>
              </ul>
            </div>
          </div>

          {/* Restaurant */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content structural-card">
              <h3 className="role">{t('experience.jobs.restaurant.title')}</h3>
              <h4 className="company">{t('experience.jobs.restaurant.company')}</h4>
              <span className="date">{t('experience.jobs.restaurant.period')}</span>
              <ul className="task-list">
                <li>{t('experience.jobs.restaurant.desc1')}</li>
                <li>{t('experience.jobs.restaurant.desc2')}</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
