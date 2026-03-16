import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProductStrategy from "./components/ProductStrategy";
import TechnicalDepth from "./components/TechnicalDepth";
import AIStrategy from "./components/AIStrategy";
import ProblemSolving from "./components/ProblemSolving";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

const pageMetadata = {
  ko: {
    htmlLang: "ko",
    locale: "ko_KR",
    title: "장병헌 | Technical Product Manager",
    description:
      "장병헌 포트폴리오. 구조적으로 문제를 정의하고, 기술적 맥락을 이해한 상태에서 제품 방향과 서비스 경험을 설계하는 Technical Product Manager입니다.",
  },
  en: {
    htmlLang: "en",
    locale: "en_US",
    title: "Byeongheon Jang | Technical Product Manager",
    description:
      "Portfolio of Byeongheon Jang, a technical product manager focused on product direction, service structure, and AI-aware decision support.",
  },
};

const updateMetaTag = (selector, content) => {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute("content", content);
  }
};

const THEME_STORAGE_KEY = "portfolio-theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "light";
};

// Layout component handles the shared structure
const Layout = ({ theme, onToggleTheme, onPrint }) => {
  return (
    <div className="layout">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} onPrint={onPrint} />
      <main>
        <Hero />
        <About />
        <Projects />
        <ProductStrategy />
        <TechnicalDepth />
        <AIStrategy />
        <ProblemSolving />
        <Experience />
      </main>
      <Contact />
      <ScrollToTop />
    </div>
  );
};

// Route component handles locale sync
const LocaleRoute = ({ lang, theme, onToggleTheme, onPrint }) => {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    const metadata = pageMetadata[lang] ?? pageMetadata.ko;

    document.documentElement.lang = metadata.htmlLang;
    document.title = metadata.title;

    updateMetaTag('meta[name="description"]', metadata.description);
    updateMetaTag('meta[property="og:title"]', metadata.title);
    updateMetaTag('meta[property="og:description"]', metadata.description);
    updateMetaTag('meta[property="og:locale"]', metadata.locale);
    updateMetaTag('meta[name="twitter:title"]', metadata.title);
    updateMetaTag('meta[name="twitter:description"]', metadata.description);
  }, [lang]);

  return <Layout theme={theme} onToggleTheme={onToggleTheme} onPrint={onPrint} />;
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    updateMetaTag('meta[name="theme-color"]', theme === "dark" ? "#050505" : "#ffffff");
    updateMetaTag('meta[name="color-scheme"]', theme === "dark" ? "dark light" : "light dark");
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LocaleRoute
              lang="ko"
              theme={theme}
              onToggleTheme={handleToggleTheme}
              onPrint={handlePrint}
            />
          }
        />
        <Route
          path="/en"
          element={
            <LocaleRoute
              lang="en"
              theme={theme}
              onToggleTheme={handleToggleTheme}
              onPrint={handlePrint}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
