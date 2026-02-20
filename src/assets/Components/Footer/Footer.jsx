// Footer.jsx
import React from "react";
import "./Footer.css";
import NewsletterPopup from "../Newsletter/NewsletterPopup";
import { Link as ScrollLink } from "react-scroll"; // for smooth scrolling
import { Link as RouterLink } from "react-router-dom"; // for page navigation
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* LEFT: BRAND + SOCIAL */}
                <div className="footer-brand">
                    <h1>Afizul</h1>
                    <p>
                        Frontend Developer from Bangladesh.
                        I build modern, responsive and user-friendly web applications.
                    </p>

                    <div className="social-icons">
                        <a href="https://github.com/afizul2459" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/afizul-islam" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://facebook.com/afizul.islam.2459" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="mailto:afizul2459@email.com">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ScrollLink to="home" smooth={true} duration={500}>
                        <button>Home</button>
                    </ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={500}>
                        <button>About</button>
                    </ScrollLink>
                    <ScrollLink to="projects" smooth={true} duration={500}>
                        <button>Projects</button>
                    </ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={500}>
                        <button>Contact</button>
                    </ScrollLink>
                </div>

                {/* SERVICES */}
                <div className="footer-links">
                    <h3>Services</h3>
                    <ScrollLink to="ui-ux-web" smooth={true} duration={500}>
                        <button>UI/UX Web Design</button>
                    </ScrollLink>
                    <ScrollLink to="web-development" smooth={true} duration={500}>
                        <button>Frontend Development</button>
                    </ScrollLink>
                    <ScrollLink to="digital-marketing" smooth={true} duration={500}>
                        <button>Digital Marketing</button>
                    </ScrollLink>
                    <ScrollLink to="graphic-design" smooth={true} duration={500}>
                        <button>Graphic Design</button>
                    </ScrollLink>
                </div>

                {/* NEWSLETTER */}
                <div className="footer-newsletter">
                    <h3>Newsletter</h3>
                    <p>Stay updated with my latest tech articles & projects!</p>
                    <NewsletterPopup />
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="footer-bottom">
                <p>© 2026 Afizul Islam. All Rights Reserved.</p>
                <div className="footer-policy">
                    <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
                    <RouterLink to="/terms">Terms & Conditions</RouterLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;