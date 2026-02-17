import React from "react";
import "./Hero.css";
import profile_img from "../../../assets/profile_img.png";

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">

                <div className="hero-img">
                    <img src={profile_img} alt="Afizul" />
                </div>

                <h1>
                    Hi 👋 I'm <span>Afizul Islam</span> <br />
                    Frontend Developer
                </h1>

                <p>
                    I create modern, responsive and high-performance web applications
                    using React & modern web technologies.
                </p>

                <div className="hero-action">
                    <a href="#contact">
                        <button className="primary-btn">Let's Talk</button>
                    </a>
                    <a href="/CV_Afizul_Islam.pdf" download className="cv-btn" target="_blank"
                        rel="noopener noreferrer">
                        Download CV
                    </a>


                </div>

            </div>
        </section>
    );
};

export default Hero;
