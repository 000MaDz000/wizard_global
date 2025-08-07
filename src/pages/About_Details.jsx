import React, { useEffect, useState } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import "./About_Details.css";

import Footer from "../components/Footer";
import logo from '../assets/red_logo.png';
import OurServices from '../components/Services';

const About = () => {
    const navigate = useNavigate();
    const [mapUrl, setMapUrl] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleContactClick = () => {
        navigate('/', { state: { scrollToContact: true } });
    };

    // 🗺️ محاكاة لجلب رابط الخريطة من API (مثلاً Strapi لاحقًا)
    useEffect(() => {
        // رابط خريطة IFZA - دبي (موقع منطقي)
        const dummyApiCall = () => {
            const dummyMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.2764815067795!2d55.41553737594537!3d25.161227932492056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f5483f24d3b1%3A0x6f61a477b8e9947b!2sIFZA%20Business%20Park!5e0!3m2!1sen!2sae!4v1690818983220!5m2!1sen!2sae";
            setMapUrl(dummyMapUrl);
        };

        dummyApiCall(); // وكأنك بتجيب الرابط من API
    }, []);

    return (
        <div className="about-page">
            <div className="hero_about">
                <nav className="navbar_bar">
                    <div className="navbar_bar-container">
                        <div className="navbar_bar-contact">
                            <a style={{ cursor: "pointer" }} onClick={handleContactClick} className="contact-link">
                                تواصل معنا
                            </a>
                        </div>
                        <div className="navbar_bar-links">
                            <NavLink to="/">
                                <img src={logo} alt="new" />
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>

            <section className="about-image" data-aos="zoom-in">
                {/* <img src={aboutImage} alt="مقر الشركة" /> */}
            </section>

            <section className="intro" data-aos="fade-up">
                <div className="text">
                    <h1> Wazir GlobalX</h1>
                    <h2>IFZA DIGITAL PARK - A2</h2>
                    <p className="intro-subtext">
                        تأسست شركتنا في منطقة IFZA - دبي لتكون بوابتك لحلول عالمية في مجالات السيارات، وتكنولوجيا المعلومات، والتجارة الإلكترونية...
                    </p>
                </div>
            </section>

            <section className="about-story" data-aos="fade-up">
                <div className="about-text">
                    <p>
                        Wazir GlobalX FZCO هي منصة تجارية وتقنية تأسست في دبي - الإمارات، وتعمل من خلال موقعها الاستراتيجي في منطقة IFZA لتقدم حلولًا متكاملة في استيراد وتصدير السيارات، تطوير البرمجيات، والتجارة الإلكترونية. نلتزم بأعلى معايير الجودة ونركز على الابتكار والشراكة لخلق تأثير حقيقي في المنطقة وخارجها.
                    </p>
                </div>
            </section>

            <OurServices />

            <section className="vision-section" data-aos="fade-up">
                <div className="vision-container">
                    <div className="vision-image-wrapper" data-aos="fade-right">
                        <div className="vision-image-background" />
                    </div>
                    <div className="vision-content" data-aos="fade-left">
                        <div className="vision-block">
                            <h2 className="vision-title">رؤيتنا</h2>
                            <p className="vision-text">
                                أن نكون الشريك المفضل إقليميًا وعالميًا في الحلول الذكية للتجارة والخدمات الرقمية...
                            </p>
                        </div>
                        <div className="vision-block">
                            <h2 className="vision-title">رسالتنا</h2>
                            <p className="vision-text">
                                نهدف إلى تمكين الأفراد والشركات عبر تقديم خدمات موثوقة وسريعة...
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🗺️ خريطة موقع IFZA - دبي من API وهمي */}
            {mapUrl && (
                <div className="chart_section">
                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="خريطة الموقع"
                    ></iframe>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default About;
