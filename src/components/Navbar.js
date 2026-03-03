import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const isKorean = location.pathname === '/';

  const switchLanguage = (lang, e) => {
    e.preventDefault();
    if (lang === 'ko' && !isKorean) navigate('/');
    if (lang === 'en' && isKorean) navigate('/en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="logo mono" onClick={(e) => scrollToSection(e, 'hero')} style={{ letterSpacing: '2px', fontWeight: 600 }}>
          [ <span className="text-highlight">STRUCTURE</span> ]
        </a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>{t('nav.identity')}</a></li>
          <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>{t('nav.projects')}</a></li>
          <li><a href="#strategy" onClick={(e) => scrollToSection(e, 'strategy')}>{t('nav.strategy')}</a></li>
          <li><a href="#depth" onClick={(e) => scrollToSection(e, 'depth')}>{t('nav.depth')}</a></li>
          <li><a href="#ai" onClick={(e) => scrollToSection(e, 'ai')}>{t('nav.ai')}</a></li>
          <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>{t('nav.experience')}</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>{t('nav.contact')}</a></li>
          <li>
            <div className="lang-switcher">
              <span 
                className={`lang-option ${isKorean ? 'active' : ''}`} 
                onClick={(e) => switchLanguage('ko', e)}
              >
                KR
              </span> 
              <span className="lang-divider">|</span> 
              <span 
                className={`lang-option ${!isKorean ? 'active' : ''}`} 
                onClick={(e) => switchLanguage('en', e)}
              >
                EN
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
