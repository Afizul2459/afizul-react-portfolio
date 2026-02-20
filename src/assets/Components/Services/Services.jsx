import React from 'react';
import './Services.css'
import { Link as ScrollLink } from "react-scroll"; 
import { FaLaptopCode, FaGlobe, FaBullhorn, FaShareAlt, FaPalette } from "react-icons/fa";

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <p className="services-subtitle">
                    Helping businesses grow with modern digital solutions
                </p>
            </div>

            <div className="services-container">

                {/* Web Design */}
                <div id='ui-ux-web' className="service-card">
                    <FaLaptopCode className='service-icon' />
                    <h3>UI/UX Web Design</h3>
                    <p>Create modern, responsive & user-friendly website design using Figma & Adobe XD.</p>
                    <span className="tech">Figma • Adobe XD • Responsive Design</span>
                    <ScrollLink to="projects" smooth={true} duration={500}>
                        <button className="service-btn">View Work</button>
                    </ScrollLink>
                </div>

                {/* Development */}
                <div id='web-development' className="service-card">
                    <FaGlobe className='service-icon' />
                    <h3>Web Development</h3>
                    <p>Build fast & scalable websites that convert visitors into customers.</p>
                    <span className="tech">React • Laravel • REST API • MySQL</span>
                    <ScrollLink to="projects" smooth={true} duration={500}>
                        <button className="service-btn">View Work</button>
                    </ScrollLink>
                </div>



                {/* Graphic Design */}
                <div id='graphic-design' className="service-card">
                    <FaPalette className='service-icon' />
                    <h3>Graphic Design</h3>
                    <p>Professional branding, logo & social media design to boost brand identity.</p>
                    <span className="tech">Photoshop • Illustrator • Canva</span>
                    <ScrollLink to="projects" smooth={true} duration={500}>
                        <button className="service-btn">View Work</button>
                    </ScrollLink>
                </div>

                {/* Social Media */}
                <div className="service-card">
                    <FaShareAlt className='service-icon' />
                    <h3>Social Media Management</h3>
                    <p>Grow your audience and engagement with strategic content planning.</p>
                    <span className="tech">Facebook • Instagram • Content Strategy</span>
                    <ScrollLink to="projects" smooth={true} duration={500}>
                        <button className="service-btn">View Work</button>
                    </ScrollLink>
                </div>

                {/* Marketing */}
                <div id='digital-marketing' className="service-card">
                    <FaBullhorn className='service-icon' />
                    <h3>Digital Marketing</h3>
                    <p>Grow your business and increase sales with targeted SEO & Ads campaigns.</p>
                    <span className="tech">SEO • Google Ads • Facebook Ads</span>
                    <ScrollLink to="projects" smooth={true} duration={500}>
                        <button className="service-btn">View Work</button>
                    </ScrollLink>
                </div>

            </div>

            {/* ⭐ Social Proof */}
            <div className="client-review">
                ⭐ "Amazing developer! Delivered my website before deadline." – Client from Fiverr  
            </div>

            {/* 🎯 CTA */}
            <a href="#contact" className="main-cta">
                Get a Free Quote →
            </a>

        </div>
    );
};

export default Services;
