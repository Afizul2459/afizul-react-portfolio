import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [open, setOpen] = useState(false);

    const handleClick = (item) => {
        setMenu(item);
        setOpen(false);
    };

    return (
        <nav className="navbar">
            <h1 className="brand-name">Afizul</h1>

            <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>

            <ul className={`nav-menu ${open ? "active" : ""}`}>
                <li>
                    <a href="#home"
                        className={menu === "home" ? "active-link" : ""}
                        onClick={() => handleClick("home")}>HOME</a>
                </li>

                <li>
                    <a href="#about"
                        className={menu === "about" ? "active-link" : ""}
                        onClick={() => handleClick("about")}>ABOUT</a>
                </li>

                <li>
                    <a href="#services"
                        className={menu === "services" ? "active-link" : ""}
                        onClick={() => handleClick("services")}>SERVICES</a>
                </li>

                <li>
                    <a href="#projects"
                        className={menu === "portfolio" ? "active-link" : ""}
                        onClick={() => handleClick("portfolio")}>PORTFOLIO</a>
                </li>

                <li>
                    <a href="#contact"
                        className={menu === "contact" ? "active-link" : ""}
                        onClick={() => handleClick("contact")}>CONTACT</a>
                </li>
            </ul>

            <a href="#contact">
                <button className="nav-connect">Let's Talk</button>
            </a>
        </nav>
    );
};

export default Navbar;
