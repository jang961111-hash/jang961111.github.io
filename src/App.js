import React, { useEffect } from "react";
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

const pageMetadata = {
  ko: {
    htmlLang: "ko",
    locale: "ko_KR",
    title: "장병헌 | Technical Product Manager",
    description:
      "장병헌 포트폴리오. 제품 전략, 확장 가능한 플랫폼 설계, AI 의사결정 시스템에 집중하는 Technical Product Manager입니다.",
  },
  en: {
    htmlLang: "en",
    locale: "en_US",
    title: "Byeongheon Jang | Technical Product Manager",
    description:
      "Portfolio of Byeongheon Jang, a technical product manager focused on product strategy, scalable platforms, and AI decision-support systems.",
  },
};

const updateMetaTag = (selector, content) => {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute("content", content);
  }
};

// Layout component handles the shared structure
const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
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
    </div>
  );
};

// Route component handles locale sync
const LocaleRoute = ({ lang }) => {
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

  return <Layout />;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LocaleRoute lang="ko" />} />
        <Route path="/en" element={<LocaleRoute lang="en" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
