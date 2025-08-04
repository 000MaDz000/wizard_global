import React, { useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom'; import AOS from "aos";
import "aos/dist/aos.css";
import "./About_Details.css";
// import aboutImage from "../assets/pexels-pixabay-269077.jpg";
import cars from "../assets/pexels-mikebirdy-120049.jpg";
import ecom from "../assets/pexels-karolina-grabowska-5632402.jpg";
import it from "../assets/pexels-luckysam-50614.jpg";
import Footer from "../components/Footer";
import logo from '../assets/wazir.png'
import OurServices from '../components/Services';
import video from '../assets/video.mp4'

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
                <video autoPlay muted loop playsInline className="background-video">
                    <source src={video} type="video/mp4" />
                    متصفحك لا يدعم تشغيل الفيديو.
                </video>
                <div className="text">
                    <h1> Wazir <span style={{ color: "#4a6ad5ff" }}>GlobalX FZCO</span></h1>
                    <p className="intro-subtext">
                        تأسست شركتنا في منطقة IFZA - دبي لتكون بوابتك لحلول عالمية في مجالات السيارات، وتكنولوجيا المعلومات، والتجارة الإلكترونية...
                    </p>
                </div>
            </section>




            <section className="about-story" data-aos="fade-up">
                <div className="about-text">
                    <h2>رحلتنا نحو التميز</h2>
                    <p>
                        Wazir GlobalX FZCO هي منصة تجارية وتقنية تأسست في دبي - الإمارات، وتعمل من خلال موقعها الاستراتيجي في منطقة IFZA لتقدم حلولًا متكاملة في استيراد وتصدير السيارات، تطوير البرمجيات، والتجارة الإلكترونية. نلتزم بأعلى معايير الجودة ونركز على الابتكار والشراكة لخلق تأثير حقيقي في المنطقة وخارجها.
                    </p>
                </div>
            </section>

            {/* <section className="core-services">
                <h2 data-aos="fade-up"><span style={{ color: "#1141D8" }}>خدماتنا</span></h2>
                <div className="services-grid">
                    <div className="service-card" data-aos="fade-up" data-aos-delay="100">
                        <img src={cars} alt="السيارات" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <p>نقدّم خدمات متكاملة تشمل الشحن، التخليص الجمركي...</p>
                                <button>اعرف المزيد</button>
                            </div>
                        </div>
                        <h3>استيراد وتصدير السيارات</h3>
                    </div>

                    <div className="service-card" data-aos="fade-up" data-aos-delay="200">
                        <img src={it} alt="التقنية" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <p>نُطوّر تطبيقات ذكية، منصات رقمية، وأنظمة...</p>
                                <button>اعرف المزيد</button>
                            </div>
                        </div>
                        <h3>تطوير البرمجيات والتقنية</h3>
                    </div>

                    <div className="service-card" data-aos="fade-up" data-aos-delay="300">
                        <img src={ecom} alt="التجارة الإلكترونية" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <p>ندير متاجر B2B وB2C، ونوفر حلول دفع...</p>
                                <button>اعرف المزيد</button>
                            </div>
                        </div>
                        <h3>حلول التجارة الإلكترونية</h3>
                    </div>
                </div>
            </section> */}
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
                    <div className="chart_section">
                        الخريطه هنا
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
