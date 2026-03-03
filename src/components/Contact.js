import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <p className="contact-overline"><span className="text-highlight">08.</span> {t('contact.subtitle')}</p>
        <h2 className="contact-title">{t('contact.title')}</h2>
        <p className="contact-description">
          {t('contact.description')}
        </p>
        <a href="mailto:jang961111@gmail.com" className="cta-button primary">{t('contact.button')}</a>
      </div>
      
      <footer className="footer-content">
        <div className="social-links">
          <a href="https://github.com/jang961111-hash" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://velog.io" target="_blank" rel="noopener noreferrer">Blog</a>
        </div>
        <p className="copyright">
          Built by Jang Byunghun. <br/>
          Designed with React and custom CSS.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
