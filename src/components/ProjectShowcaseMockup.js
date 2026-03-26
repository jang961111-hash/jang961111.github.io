import React from "react";
import "./ProjectShowcaseMockup.css";

const renderStreamPanel = (slot) => (
  <div className="project-mock-surface project-mock-surface-stream">
    <div className="project-mock-chrome">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="project-mock-chip-row">
      {slot.chips.map((chip) => (
        <span key={chip} className="project-mock-chip">
          {chip}
        </span>
      ))}
    </div>
    <div className="project-mock-log-stack">
      {slot.rows.map((row) => (
        <div key={row} className="project-mock-log-line">
          <span className="project-mock-log-pulse"></span>
          <span>{row}</span>
        </div>
      ))}
    </div>
  </div>
);

const renderFilterPanel = (slot) => (
  <div className="project-mock-surface project-mock-surface-filter">
    <div className="project-mock-search-bar">{slot.searchLabel}</div>
    <div className="project-mock-chip-row">
      {slot.chips.map((chip) => (
        <span key={chip} className="project-mock-chip">
          {chip}
        </span>
      ))}
    </div>
    <div className="project-mock-card-stack">
      {slot.rows.map((row) => (
        <div key={row} className="project-mock-mini-card">
          {row}
        </div>
      ))}
    </div>
  </div>
);

const renderReviewPanel = (slot) => (
  <div className="project-mock-surface project-mock-surface-review">
    <div className="project-mock-review-status">{slot.statusLabel}</div>
    <div className="project-mock-card-stack">
      {slot.rows.map((row) => (
        <div key={row} className="project-mock-review-item">
          <span className="project-mock-review-avatar"></span>
          <span>{row}</span>
        </div>
      ))}
    </div>
  </div>
);

const renderPanelBody = (slot) => {
  switch (slot.id) {
    case "stream":
      return renderStreamPanel(slot);
    case "filter":
      return renderFilterPanel(slot);
    case "review":
      return renderReviewPanel(slot);
    default:
      return (
        <div className="project-mock-surface">
          <div className="project-mock-card-stack">
            {slot.rows.map((row) => (
              <div key={row} className="project-mock-mini-card">
                {row}
              </div>
            ))}
          </div>
        </div>
      );
  }
};

const ProjectShowcaseMockup = ({ visuals, variant = "compact" }) => {
  if (!visuals?.slots?.length) {
    return null;
  }

  const [primarySlot, ...secondarySlots] = visuals.slots;
  const isDetail = variant === "detail";

  const renderPanel = (slot, emphasis) => (
    <article
      key={slot.id}
      className={`project-mock-panel ${emphasis ? `project-mock-panel-${emphasis}` : ""}`}
    >
      <div className="project-mock-copy">
        <span className="project-mock-kicker">{slot.kicker}</span>
        <h4 className="project-mock-title">{slot.title}</h4>
        <p className="project-mock-caption">{slot.caption}</p>
      </div>
      {renderPanelBody(slot)}
    </article>
  );

  return (
    <div className={`project-showcase project-showcase-${variant}`}>
      <div className="project-showcase-top">
        <div>
          <span className="detail-label">{visuals.kicker}</span>
          <p className="project-showcase-intro">{visuals.intro}</p>
        </div>
      </div>

      {isDetail ? (
        <div className="project-showcase-detail-grid">
          {visuals.slots.map((slot) => renderPanel(slot, "detail"))}
        </div>
      ) : (
        <div className="project-showcase-compact-grid">
          <div className="project-showcase-primary">
            {renderPanel(primarySlot, "primary")}
          </div>
          <div className="project-showcase-secondary">
            {secondarySlots.map((slot) => renderPanel(slot, "secondary"))}
          </div>
        </div>
      )}

      <p className="project-showcase-note">{visuals.note}</p>
    </div>
  );
};

export default ProjectShowcaseMockup;
