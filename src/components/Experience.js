import React from "react";
import { useTranslation } from "react-i18next";
import useScrollReveal from '../hooks/useScrollReveal';
import ssafyCollaborationPhoto from "../assets/images/ssafy-collaboration.jpg";
import ssafyTeamPhoto from "../assets/images/ssafy-team.jpg";
import "./Section.css";

const Experience = () => {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useScrollReveal();

  const experiences = ["ssafy", "marines", "jaguar", "restaurant"];

  return (
    <section id="experience" className="section">
      <div
        ref={elementRef}
        className={`section-container reveal-base ${isVisible ? 'reveal-visible' : ''}`}
      >
        <h2 className="section-title">
          <span className="text-highlight">07.</span> {t("experience.title")}
        </h2>

        <div className="timeline">
          {experiences.map((jobKey) => {
            const isSsafy = jobKey === "ssafy";
            // Count number of descriptions dynamically if needed,
            // but for simplicity we rely on the specific keys we know exist.
            const descKeys = [1, 2, 3];

            return (
              <div className="timeline-item" key={jobKey}>
                <div className="timeline-marker"></div>
                <div className="timeline-content structural-card">
                  <h3 className="role">
                    {t(`experience.jobs.${jobKey}.title`)}
                  </h3>
                  <h4 className="company">
                    {t(`experience.jobs.${jobKey}.company`)}
                  </h4>
                  <span className="date">
                    {t(`experience.jobs.${jobKey}.period`)}
                  </span>
                  <ul className="task-list">
                    {descKeys.map((num) => {
                      const text = t(`experience.jobs.${jobKey}.desc${num}`);
                      // Only render if translation actually exists for this item
                      return text &&
                        text !== `experience.jobs.${jobKey}.desc${num}` ? (
                        <li key={num}>{text}</li>
                      ) : null;
                    })}
                  </ul>
                  {isSsafy ? (
                    <div className="experience-media">
                      <span className="detail-label experience-media-kicker">
                        {t("experience.jobs.ssafy.media.kicker")}
                      </span>
                      <div className="experience-media-grid">
                        <div className="experience-media-card experience-media-card-main">
                          <img
                            className="experience-media-image"
                            src={ssafyCollaborationPhoto}
                            alt={t("experience.jobs.ssafy.media.altMain")}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="experience-media-card experience-media-card-secondary">
                          <img
                            className="experience-media-image"
                            src={ssafyTeamPhoto}
                            alt={t("experience.jobs.ssafy.media.altSecondary")}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                      <p className="experience-media-caption">
                        {t("experience.jobs.ssafy.media.caption")}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
