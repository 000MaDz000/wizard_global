import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ITSolutions.css';
import Footer from '../../components/Footer';
import '../../styles/Articles.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/red_logo.png'
import it from '../../assets/pexels-luckysam-50614.jpg'
import { Helmet } from 'react-helmet';

// React Icons
import { FaTools, FaMobileAlt, FaRobot, FaDatabase, FaCode, FaFire } from 'react-icons/fa';
import { SiFlutter, SiReact, SiNodedotjs, SiOpenai } from 'react-icons/si';
import { BiLinkExternal } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';

const ITSolutions = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/', { state: { scrollToContact: true } });
    };
    // Dummy Data للقسم
    const itData = {
        intro: "نقدم حلول تقنية متكاملة تشمل تطوير التطبيقات الذكية، أنظمة إدارة الأعمال، ودمج تقنيات الذكاء الاصطناعي في بيئات العمل لضمان التوسع الرقمي.",

        services: [
            { name: "تطوير تطبيقات الهاتف (iOS وAndroid)", icon: <FaMobileAlt size={24} /> },
            { name: "استشارات تقنية لمشاريع الابتكار", icon: <FaTools size={24} /> },
            { name: "إدارة بيانات وتحليلات", icon: <FaDatabase size={24} /> },
            { name: "تطوير حلول ذكاء صناعي", icon: <FaRobot size={24} /> },
            { name: "ربط API بين الأنظمة", icon: <FaCode size={24} /> }
        ],

        technologies: [
            { name: "Flutter", icon: <SiFlutter size={24} /> },
            { name: "React", icon: <SiReact size={24} /> },
            { name: "Supabase", icon: <FaDatabase size={24} /> },
            { name: "GPT", icon: <SiOpenai size={24} /> },
            { name: "Node.js", icon: <SiNodedotjs size={24} /> },
            { name: "Firebase", icon: <FaFire size={24} /> }
        ],

        projects: [
            {
                id: 1,
                name: "LingoWise",
                description: "تطبيق ترجمة المكالمات",
                image: it,
                details: "تطبيق متقدم لترجمة المكالمات الصوتية في الوقت الحقيقي يدعم 40 لغة",
                features: ["ترجمة فورية", "دعم 40 لغة", "تخزين المحادثات"],
                demoUrl: "https://demo.example.com"
            },
            {
                id: 2,
                name: "SmartAgri",
                description: "نظام زراعي ذكي",
                image: it,
                details: "نظام إدارة المزارع الذكية باستخدام إنترنت الأشياء والذكاء الاصطناعي",
                features: ["مراقبة التربة", "توصيات الري", "تنبؤات المحاصيل"],
                demoUrl: "https://demo.example.com"
            },
            {
                id: 3,
                name: "CashierPro",
                description: "برنامج محاسبي ذكي",
                image: it,
                details: "نظام نقاط بيع متكامل مع تحليلات مالية ذكية",
                features: ["إدارة المخزون", "تقارير مالية", "تكامل مع البنوك"],
                demoUrl: "https://demo.example.com"
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>حلول المعلومات والتقنية - Wazir GlobalX</title>
                <meta name="description" content="نقدم حلول تقنية متكاملة تشمل تطوير التطبيقات الذكية، أنظمة إدارة الأعمال، ودمج تقنيات الذكاء الاصطناعي." />
            </Helmet>
            <div className="it-solutions-page">
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
                <div className="it-hero">
                    <h1>حلول المعلومات والتقنية</h1>
                    <p>{itData.intro}</p>
                </div>

                {/* الخدمات */}
                <div className="it-section">
                    <h2>الخدمات المقدمة</h2>
                    <div className="it_services-grid">
                        {itData.services.map((service, index) => (
                            <div key={index} className="it_service-card">
                                <div className="it_service-icon">{service.icon}</div>
                                <h3>{service.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* التقنيات */}
                <div className="it-section">
                    <h2>التقنيات المستخدمة</h2>
                    <div className="tech-grid">
                        {itData.technologies.map((tech, index) => (
                            <div key={index} className="tech-card">
                                <span className="tech-icon">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* المشاريع */}
                <div className="it-section">
                    <h2>نماذج مشاريعنا</h2>
                    <div className="projects-grid">
                        {itData.projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <img src={project.image} alt={project.name} />
                                <div className="project-info">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-buttons">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-btn demo-btn"
                                        >
                                            <BiLinkExternal /> Live Demo
                                        </a>
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="project-btn learn-btn"
                                        >
                                            <BsInfoCircle /> Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="it-cta">
                    <h2>هل ترغب في تطوير تطبيقك الخاص؟</h2>
                    {/* رقم رجل المبيعات تبع السيارات */}
                    <button className="cta-button">تواصل معنا الآن</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ITSolutions;