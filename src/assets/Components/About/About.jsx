import React from 'react';
import './About.css';
import { Link } from "react-scroll";
import profile_img from '../../../assets/profile_img.png';

const About = () => {
    return (
        <div id='about' className='about-container'>

            {/* ===== ABOUT ===== */}
            <section className='about-section'>
                <div className="about-left">
                    <img src={profile_img} alt="Profile" />
                </div>

                <div className="about-right">
                    <h1 className="section-title gradient-text">About Me</h1>

                    <p>
                        I’m <b>Afizul Islam</b>, a passionate Frontend & Laravel Developer who
                        loves building fast, modern and user-friendly web applications.
                    </p>

                    <p>
                        My mission is to help businesses grow online with beautiful UI,
                        high-performance websites and scalable backend solutions.
                    </p>

                    <div className="skills">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>PHP</span>
                        <span>Laravel</span>
                    </div>

                    {/* <a href="#contact" className="about-cta">Hire Me →</a> */}
                    <Link to="contact" smooth={true} duration={500}>
                        <button className="about-cta">Hire Me →</button>
                    </Link>
                </div>
            </section>

            {/* ===== ACHIEVEMENTS ===== */}
            <section className='achievement-section'>
                <h1 className="section-title gradient-text">Achievements</h1>

                <div className="achievement-grid">
                    <div className="achievement-card">
                        <h2>2+</h2>
                        <p>Years Experience</p>
                    </div>

                    <div className="achievement-card">
                        <h2>10+</h2>
                        <p>Projects Completed</p>
                    </div>

                    <div className="achievement-card">
                        <h2>20+</h2>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
