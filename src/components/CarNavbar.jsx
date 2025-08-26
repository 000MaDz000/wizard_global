import React, { useState } from "react";
import "../styles/Car-Navbar.css";
import { useNavigate } from "react-router-dom";

import logo from '../assets/red_logo.png';

const CarNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="car-navbar" >
            <div className="car-navbar-container" >
                {/* Logo / Title */}
                <div className="car-navbar-logo"><img src={logo} alt=""
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")} /></div>

                {/* زر القائمة للموبايل */}
                <button
                    className="car-navbar-toggle"
                    style={{ color: "black" }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* الروابط */}
                <ul className={`car-navbar-list ${isOpen ? "open" : ""}`}>
                    <li className="car-navbar-item">
                        <a href="#cars-section" className="car-navbar-link">
                            السيارات
                        </a>
                    </li>
                    <li className="car-navbar-item">
                        <a href="#services-section" className="car-navbar-link">
                            الخدمات
                        </a>
                    </li>
                    <li className="car-navbar-item">
                        <a href="#contact-section" className="car-navbar-link">
                            تواصل معنا
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default CarNavbar;
