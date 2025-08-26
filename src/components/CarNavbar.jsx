import React, { useState } from "react";
import "../styles/Car-Navbar.css";
import { useNavigate } from "react-router-dom";
import ClientLink from './ClientLink';
import logo from '../assets/red_logo.png';

/**
 * 
 * @param {{data?: import("../api/types/content-types").Navbar}} param0 
 */
const CarNavbar = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    if (!data) return;

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
                    {
                        data.links.map((link, i) => (
                            <li className="car-navbar-item">
                                <ClientLink href={link} className="car-navbar-link" key={i}>
                                    {link.text}
                                </ClientLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default CarNavbar;
