import React from 'react';
import './MyWork.css';
import profile_img from '../../../assets/profile_img.png'

const MyWork = () => {
    return (
        <div id='projects' className='mywork'>
            <div className="mywork-title">
                <h1>Featured Projects</h1>
                <p>Some of my recent work</p>
            </div>

            <div className="mywork-container">

                {/* Project */}
                <div className="work-card">
                    <img src={profile_img} alt="" />
                    <div className="work-overlay">
                        <h3>Portfolio Website</h3>
                        <p>React + Animation</p>
                        <div className="work-btns">
                            <a href="https://afizul2459.github.io/afizul-react-portfolio/">Live</a>
                            <a href="https://github.com/Afizul2459/afizul-react-portfolio">Github</a>
                        </div>
                    </div>
                </div>

                <div className="work-card">
                    <img src="https://afizul2459.github.io/agricultural-information/" alt="" />
                    <div className="work-overlay">
                        <h3>POS System</h3>
                        <p>Laravel + MySQL</p>
                        <div className="work-btns">
                            <a href="https://afizul2459.github.io/agricultural-information/">Live</a>
                            <a href="#">Github</a>
                        </div>
                    </div>
                </div>

                <div className="work-card">
                    <img src="https://images.unsplash.com/photo-1581091012184-5caba5e2afc8?w=600" alt="" />
                    <div className="work-overlay">
                        <h3>Flight Booking UI</h3>
                        <p>React + API</p>
                        <div className="work-btns">
                            <a href="#">Live</a>
                            <a href="#">Github</a>
                        </div>
                    </div>
                </div>

                <div className="work-card">
                    <img src="https://images.unsplash.com/photo-1581091012184-5caba5e2afc8?w=600" alt="" />
                    <div className="work-overlay">
                        <h3>Ecommerce Dashboard</h3>
                        <p>React + Charts</p>
                        <div className="work-btns">
                            <a href="#">Live</a>
                            <a href="#">Github</a>
                        </div>
                    </div>
                </div>
                <div className="work-card">
                    <img
                        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600"
                        alt="Agriculture Information Hub"
                    />

                    <div className="work-overlay">
                        <h3>Agriculture Information Hub</h3>
                        <p>HTML • CSS • JavaScript</p>

                        <div className="work-btns">
                            <a
                                href="https://afizul2459.github.io/agricultural-information/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live
                            </a>

                            <a
                                href="https://github.com/Afizul2459/agricultural-information"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>


            </div>

            <div className="show-more">
                <a href="#">View All Projects →</a>
            </div>

        </div>
    );
};

export default MyWork;
