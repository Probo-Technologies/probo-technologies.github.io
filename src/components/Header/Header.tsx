import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink } from 'lucide-react';
import './Header.scss';
import { PROBO_GITHUB_URL, WEBSITE_NAME } from '../../constants'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headersNavList = ['Home', 'Products'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : 'header--transparent'}`}>
      <nav className="header__nav">
        <div className="header__container">
          {/* Logo */}
          <div className="header__logo">
            <div className="header__logo-icon">
              <Github />
            </div>
            <span className={`header__logo-text ${isScrolled ? 'header__logo-text--scrolled' : 'header__logo-text--transparent'}`}>
              {WEBSITE_NAME}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="header__nav-desktop">
            <div className="header__nav-list">
              {headersNavList.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`header__nav-button ${isScrolled ? 'header__nav-button--scrolled' : 'header__nav-button--transparent'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="header__cta-container">
            <a
              href={PROBO_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header__cta"
            >
              <Github />
              <span>View on GitHub</span>
              <ExternalLink />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="header__mobile-container">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`header__mobile-button ${isScrolled ? 'header__mobile-button--scrolled' : 'header__mobile-button--transparent'}`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="header__mobile-menu">
            {headersNavList.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="header__mobile-nav-button"
              >
                {item}
              </button>
            ))}
            <a
              href={PROBO_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header__mobile-cta"
            >
              <Github />
              <span>GitHub</span>
              <ExternalLink />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;