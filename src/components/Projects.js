import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section.css';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-highlight">02.</span> {t('projects.title')}
        </h2>
        
        <div className="project-wrapper structural-card">
          <div className="project-header">
            <h3 className="project-title">{t('projects.loggy.title')}</h3>
          </div>
          
          <div className="project-content">
            <div className="project-description-block">
              <p className="project-issue text-muted">{t('projects.loggy.problem')}</p>
              <p className="project-insight">{t('projects.loggy.insight')}</p>
              <p className="project-solution text-highlight">{t('projects.loggy.architecture')}</p>
            </div>
            
            <div className="project-details">
              <div className="detail-item">
                <span className="detail-label">Role</span>
                <p>{t('projects.loggy.role')}</p>
              </div>
              <div className="detail-item">
                <span className="detail-label">Key Takeaway</span>
                <p>{t('projects.loggy.learning')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
