import React from 'react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../hooks/useScrollReveal';
import './Section.css';

const Projects = () => {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useScrollReveal();
  const projectBaseKey = 'projects.items.loggy';

  return (
    <section id="projects" className="section">
      <div 
        ref={elementRef} 
        className={`section-container reveal-base ${isVisible ? 'reveal-visible' : ''}`}
      >
        <h2 className="section-title">
          <span className="text-highlight">02.</span> {t('projects.title')}
        </h2>
        <p className="section-subtitle">{t('projects.intro')}</p>
        
        <div className="project-wrapper structural-card">
          <div className="project-header">
            <h3 className="project-title">{t(`${projectBaseKey}.title`)}</h3>
          </div>

          <div className="project-content">
            <p className="project-summary">{t(`${projectBaseKey}.summary`)}</p>
            <div className="project-metrics">
              {['1', '2', '3'].map((metricKey) => (
                <span key={metricKey} className="metric-badge">
                  {t(`${projectBaseKey}.metrics.${metricKey}`)}
                </span>
              ))}
            </div>

            <div className="project-description-block">
              <p className="project-issue text-muted">{t(`${projectBaseKey}.problem`)}</p>
              <p className="project-insight">{t(`${projectBaseKey}.insight`)}</p>
              <p className="project-solution text-highlight">{t(`${projectBaseKey}.architecture`)}</p>
            </div>

            <div className="project-details project-detail-grid">
              <div className="detail-item">
                <span className="detail-label">{t('projects.labels.role')}</span>
                <p>{t(`${projectBaseKey}.role`)}</p>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t('projects.labels.learning')}</span>
                <p>{t(`${projectBaseKey}.learning`)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
