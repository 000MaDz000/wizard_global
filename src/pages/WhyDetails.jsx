import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, NavLink } from 'react-router-dom';

import Footer from "../components/Footer";
import logo from '../assets/red_logo.png';
import "../styles/whyDetails.css";

const WhyDetails = () => {
        const navigate = useNavigate();
    
    return (
        <>
            <nav className="navbar_bar">
                <div className="navbar_bar-container">
                    <div className="navbar_bar-contact">
                        <a style={{ cursor: "pointer" }} onClick={() => navigate(-1)}
                            className="contact-link">
                            العودة للصفحة السابقة
                        </a>
                    </div>
                    <div className="navbar_bar-links">
                        <NavLink to="/">
                            <img src={logo} alt="new" />
                        </NavLink>
                    </div>
                </div>
            </nav>
            <div className="why-container">
                <h1 className="why-title">لماذا تختار شركتنا؟</h1>
                <p className="why-text">
                    نحن نقدم أفضل الخدمات بأعلى معايير الجودة، مع فريق عمل محترف يلتزم بتلبية
                    احتياجاتك وتحقيق أهدافك. نحرص دائماً على الابتكار وتقديم حلول فعّالة
                    تساعدك على النجاح.
                    نحن نقدم أفضل الخدمات بأعلى معايير الجودة، مع فريق عمل محترف يلتزم بتلبية
                    احتياجاتك وتحقيق أهدافك. نحرص دائماً على الابتكار وتقديم حلول فعّالة
                    تساعدك على النجاح.
                    نحن نقدم أفضل الخدمات بأعلى معايير الجودة، مع فريق عمل محترف يلتزم بتلبية
                    احتياجاتك وتحقيق أهدافك. نحرص دائماً على الابتكار وتقديم حلول فعّالة
                    تساعدك على النجاح.
                    نحن نقدم أفضل الخدمات بأعلى معايير الجودة، مع فريق عمل محترف يلتزم بتلبية
                    احتياجاتك وتحقيق أهدافك. نحرص دائماً على الابتكار وتقديم حلول فعّالة
                    تساعدك على النجاح.
                    نحن نقدم أفضل الخدمات بأعلى معايير الجودة، مع فريق عمل محترف يلتزم بتلبية
                    احتياجاتك وتحقيق أهدافك. نحرص دائماً على الابتكار وتقديم حلول فعّالة
                    تساعدك على النجاح.
                    نحن نقدم أفضل الخدمات بأعلى معايير الجودة، مع فريق عمل محترف يلتزم بتلبية
                    احتياجاتك وتحقيق أهدافك. نحرص دائماً على الابتكار وتقديم حلول فعّالة
                    تساعدك على النجاح.
                </p>
            </div>
            <Footer/>
        </>

    );
};

export default WhyDetails;
