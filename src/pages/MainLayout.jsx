import React from "react";
import Navbar from "../assets/Components/Navbar/Navbar";
import Hero from "../assets/Components/Hero/Hero";
import About from "../assets/Components/About/About";
import Services from "../assets/Components/Services/Services";
import MyWork from "../assets/Components/MyWork/MyWork";
import Contact from "../assets/Components/Contact/Contact";
import Footer from "../assets/Components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <MyWork />
            <Contact />
            <Footer />
        </>
    );
};

export default MainLayout;
