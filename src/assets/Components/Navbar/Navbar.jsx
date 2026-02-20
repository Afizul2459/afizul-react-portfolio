import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [open, setOpen] = useState(false);

    const handleClick = (item) => {
        setMenu(item);
        setOpen(false); // close menu on mobile
    };

    return (
        <nav className="navbar">
            <h1 className="brand-name">Afizul</h1>

            {/* Hamburger */}
            <div className="hamburger" onClick={() => setOpen(!open)}>
                ☰
            </div>

            {/* Menu */}
            <ul className={`nav-menu ${open ? "active" : ""}`}>
                <li>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className={menu === "home" ? "active-link" : ""}
                        onClick={() => handleClick("home")}
                    >
                        HOME
                    </Link>
                </li>

                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className={menu === "about" ? "active-link" : ""}
                        onClick={() => handleClick("about")}
                    >
                        ABOUT
                    </Link>
                </li>

                <li>
                    <Link
                        to="services"
                        smooth={true}
                        duration={500}
                        className={menu === "services" ? "active-link" : ""}
                        onClick={() => handleClick("services")}
                    >
                        SERVICES
                    </Link>
                </li>

                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className={menu === "portfolio" ? "active-link" : ""}
                        onClick={() => handleClick("portfolio")}
                    >
                        PORTFOLIO
                    </Link>
                </li>

                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className={menu === "contact" ? "active-link" : ""}
                        onClick={() => handleClick("contact")}
                    >
                        CONTACT
                    </Link>
                </li>
            </ul>

            {/* Let's Talk Button */}
            <Link to="contact" smooth={true} duration={500}>
                <button className="nav-connect">Let's Talk</button>
            </Link>
        </nav>
    );
};

export default Navbar;
