import React, { useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom'; import AOS from "aos";
import "aos/dist/aos.css";
import "./About_Details.css";
// import aboutImage from "../assets/pexels-pixabay-269077.jpg";

import Footer from "../components/Footer";
import logo from '../assets/red_logo.png'
import OurServices from '../components/Services';
// import video from '../assets/video.mp4'

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/', { state: { scrollToContact: true } });
    };
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
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
                    {/* <h2>رحلتنا نحو التميز</h2> */}
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
            <div className="chart_section">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.909401653805!2d31.318069924610537!3d30.012030574939967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458393e3a91dda7%3A0xb257dd9ed39be432!2z2KzZhdi52YrYqSDZgdi22KfYoSDZhNix2LnYp9mK2Kkg2KfZhNi32YTYp9ioINin2YTZiNin2YHYr9mK2YY!5e1!3m2!1sar!2seg!4v1742359849366!5m2!1sar!2seg" width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="خريطة الموقع"
                        ></iframe>
                    </div>
            <Footer />
        </div>
    );
};

export default About;
