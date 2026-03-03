import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const profileLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/jang961111-hash',
  },
  {
    label: 'Email',
    href: 'mailto:jang961111@gmail.com',
  },
];

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
          {profileLinks.map((link) => {
            const isExternal = !link.href.startsWith('mailto:');

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <p className="copyright">
          Built by Byeongheon Jang. <br/>
          Designed with React and custom CSS.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
