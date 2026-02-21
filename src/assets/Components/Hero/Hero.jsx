import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
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
                    
                    <Link to="contact" smooth={true} duration={500}>
                        <button className="primary-btn">Let's Talk</button>
                    </Link>


                    <a href={`${import.meta.env.BASE_URL}Md_Afizul_Islam_CV.pdf`} download className="cv-btn" 
                        rel="noopener noreferrer">
                        Download CV
                    </a>


                </div>

            </div>
        </section>
    );
};

export default Hero;
