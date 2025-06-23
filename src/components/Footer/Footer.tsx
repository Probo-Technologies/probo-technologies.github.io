import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';
import './Footer.scss';
import { WEBSITE_NAME,EMAIL, PROBO_GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '../../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: PROBO_GITHUB_URL, label: 'GitHub' },
    { icon: Twitter, href: TWITTER_URL, label: 'Twitter' },
    { icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${EMAIL}`, label: 'Email' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main Footer Content */}
        <div className="footer__main">
          {/* Company Info */}
          <div className="footer__company">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <Github />
              </div>
              <span className="footer__logo-text">{WEBSITE_NAME}</span>
            </div>
            <p className="footer__description">
              Building powerful, accessible, and beautifully designed open source tools that empower developers worldwide to create amazing applications.
            </p>
            <div className="footer__social">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={social.label}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <div className="footer__copyright">
              <span>© {currentYear} {WEBSITE_NAME} Made with</span>
              <Heart />
              <span>for the open source community.</span>
            </div>
            <div className="footer__bottom-text">
              <span>All code is open source and available on GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;