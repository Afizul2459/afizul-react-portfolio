import React from "react";
import "./Footer.css";
import NewsletterPopup from "../Newsletter/NewsletterPopup";

import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* LEFT */}
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
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#project">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                {/* SERVICES */}
                <div className="footer-links">
                    <h3>Services</h3>
                    <a href="#ui-ux-web">UI/UX Web Design</a>
                    <a href="#web-development">Frontend Development</a>
                    <a href="#digital-marketing">Digital Marketing</a>
                    <a href="#graphic-design">Graphic Design</a>
                </div>

                {/* NEWSLETTER */}
                <div className="footer-newsletter">
                    <h3>Newsletter</h3>
                    <p>Stay updated with my latest tech articles & projects!</p>

                    <NewsletterPopup />
                </div>



            </div>

            {/* BOTTOM */}
            <div className="footer-bottom">
                <p>© 2026 Afizul Islam. All Rights Reserved.</p>
                <div className="footer-policy">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms">Terms & Conditions</Link>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
