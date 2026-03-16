import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const navSectionIds = ['about', 'projects', 'strategy', 'depth', 'ai', 'framework', 'experience', 'contact'];

const Navbar = ({ theme, onToggleTheme, onPrint }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const isKorean = location.pathname === '/';
  const nextThemeLabel = theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark');
  const nextThemeAriaLabel = theme === 'dark' ? t('nav.themeToLightAria') : t('nav.themeToDarkAria');
  const navItems = [
    { id: 'about', label: t('nav.identity') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'strategy', label: t('nav.strategy') },
    { id: 'depth', label: t('nav.depth') },
    { id: 'ai', label: t('nav.ai') },
    { id: 'framework', label: t('nav.framework') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const switchLanguage = (lang, e) => {
    e.preventDefault();
    if (lang === 'ko' && !isKorean) navigate('/');
    if (lang === 'en' && isKorean) navigate('/en');
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', ...navSectionIds];
    const observers = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(sectionId);
              }
            });
          },
          { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="logo" onClick={(e) => scrollToSection(e, 'hero')}>
          <span className="logo-name">{t('hero.name')}</span>
        </a>
        
        {/* Hamburger Icon */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={(e) => scrollToSection(e, id)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <div className="lang-switcher">
              <button
                type="button"
                className={`lang-option ${isKorean ? 'active' : ''}`}
                onClick={(e) => switchLanguage('ko', e)}
                aria-label={t('nav.languageKoreanAria')}
              >
                KR
              </button>
              <span className="lang-divider">|</span>
              <button
                type="button"
                className={`lang-option ${!isKorean ? 'active' : ''}`}
                onClick={(e) => switchLanguage('en', e)}
                aria-label={t('nav.languageEnglishAria')}
              >
                EN
              </button>
            </div>
          </li>

          <li className="nav-extra-actions">
            <button
              type="button"
              className="nav-action-btn"
              onClick={() => { onToggleTheme(); setIsMobileMenuOpen(false); }}
              aria-label={nextThemeAriaLabel}
              title={nextThemeAriaLabel}
            >
              {nextThemeLabel}
            </button>
            <button
              type="button"
              className="nav-action-btn"
              onClick={() => { onPrint(); setIsMobileMenuOpen(false); }}
              aria-label={t('nav.printAria')}
              title={t('nav.printAria')}
            >
              {t('nav.print')}
            </button>
          </li>
        </ul>
      </div>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
