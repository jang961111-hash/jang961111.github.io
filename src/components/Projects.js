import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section.css';

const Projects = () => {
  const { t } = useTranslation();
  const projectBaseKey = 'projects.items.loggy';

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-highlight">02.</span> {t('projects.title')}
        </h2>
        
        <div className="project-wrapper structural-card">
          <div className="project-header">
            <h3 className="project-title">{t(`${projectBaseKey}.title`)}</h3>
          </div>
          
          <div className="project-content">
            <div className="project-description-block">
              <p className="project-issue text-muted">{t(`${projectBaseKey}.problem`)}</p>
              <p className="project-insight">{t(`${projectBaseKey}.insight`)}</p>
              <p className="project-solution text-highlight">{t(`${projectBaseKey}.architecture`)}</p>
            </div>
            
            <div className="project-details">
              <div className="detail-item">
                <span className="detail-label">Role</span>
                <p>{t(`${projectBaseKey}.role`)}</p>
              </div>
              <div className="detail-item">
                <span className="detail-label">Key Takeaway</span>
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
