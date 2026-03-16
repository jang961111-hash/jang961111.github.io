import React from "react";
import { useTranslation } from "react-i18next";
import useScrollReveal from '../hooks/useScrollReveal';
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
