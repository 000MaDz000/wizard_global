import React, { useCallback, useEffect } from 'react';
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
import { useIT } from '../../api/hooks';
import { buildStrapiPopulateParams, itPopulation } from '../../api/const/populations';
import ClientImage from '../../components/ClientImage';
import LanguageSelector from '../../components/LanguageSelector';
import ClientLink from '../../components/ClientLink';

const ITSolutions = () => {
    const res = useIT(buildStrapiPopulateParams(itPopulation));
    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = useCallback(() => {
        navigate('/', { state: { scrollToContact: true } });
    }, [navigate]);

    if (res.isLoading) return;
    const data = res.data?.data;
    if (!data) return;


    // Dummy Data للقسم
    // const itData = {
    //     hero_title: "حلول المعلومات والتقنية",
    //     intro: "نقدم حلول تقنية متكاملة تشمل تطوير التطبيقات الذكية، أنظمة إدارة الأعمال، ودمج تقنيات الذكاء الاصطناعي في بيئات العمل لضمان التوسع الرقمي.",

    //     services: [
    //         { name: "تطوير تطبيقات الهاتف (iOS وAndroid)", icon: <FaMobileAlt size={24} /> },
    //         { name: "استشارات تقنية لمشاريع الابتكار", icon: <FaTools size={24} /> },
    //         { name: "إدارة بيانات وتحليلات", icon: <FaDatabase size={24} /> },
    //         { name: "تطوير حلول ذكاء صناعي", icon: <FaRobot size={24} /> },
    //         { name: "ربط API بين الأنظمة", icon: <FaCode size={24} /> }
    //     ],

    //     technologies: [
    //         { name: "Flutter", icon: <SiFlutter size={24} /> },
    //         { name: "React", icon: <SiReact size={24} /> },
    //         { name: "Supabase", icon: <FaDatabase size={24} /> },
    //         { name: "GPT", icon: <SiOpenai size={24} /> },
    //         { name: "Node.js", icon: <SiNodedotjs size={24} /> },
    //         { name: "Firebase", icon: <FaFire size={24} /> }
    //     ],

    //     projects: [
    //         {
    //             id: 1,
    //             name: "LingoWise",
    //             description: "تطبيق ترجمة المكالمات",
    //             image: it,
    //             details: "تطبيق متقدم لترجمة المكالمات الصوتية في الوقت الحقيقي يدعم 40 لغة",
    //             features: ["ترجمة فورية", "دعم 40 لغة", "تخزين المحادثات"],
    //             demoUrl: "https://demo.example.com"
    //         },
    //         {
    //             id: 2,
    //             name: "SmartAgri",
    //             description: "نظام زراعي ذكي",
    //             image: it,
    //             details: "نظام إدارة المزارع الذكية باستخدام إنترنت الأشياء والذكاء الاصطناعي",
    //             features: ["مراقبة التربة", "توصيات الري", "تنبؤات المحاصيل"],
    //             demoUrl: "https://demo.example.com"
    //         },
    //         {
    //             id: 3,
    //             name: "CashierPro",
    //             description: "برنامج محاسبي ذكي",
    //             image: it,
    //             details: "نظام نقاط بيع متكامل مع تحليلات مالية ذكية",
    //             features: ["إدارة المخزون", "تقارير مالية", "تكامل مع البنوك"],
    //             demoUrl: "https://demo.example.com"
    //         }
    //     ]
    // };


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
                                {data.hero_contact_text}
                            </a>
                            <LanguageSelector />
                        </div>
                        <div className="navbar_bar-links">
                            <NavLink to="/">
                                <img src={logo} alt="new" />
                            </NavLink>
                        </div>
                    </div>
                </nav>
                <div className="it-hero">
                    <h1>{data.hero_title}</h1>
                    <p>{data.intro}</p>
                </div>

                {/* الخدمات */}
                <div className="it-section">
                    <h2>{data.services_section_title}</h2>
                    <div className="it_services-grid">
                        {data.services.map((service, index) => (
                            <div key={service.id} className="it_service-card">
                                <ClientImage className="it_service-icon" src={service.icon} style={{ width: "6rem", height: "6rem" }} />
                                <h3>{service.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* التقنيات */}
                <div className="it-section">
                    <h2>{data.technologies_section_title}</h2>
                    <div className="tech-grid">
                        {data.technologies.map((tech, index) => (
                            <div key={tech.id} className="tech-card">
                                <ClientImage className="tech-icon" src={tech.icon} style={{ width: "7rem", height: "7rem" }} />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* المشاريع */}
                <div className="it-section">
                    <h2>{data.projects_section_title}</h2>
                    <div className="projects-grid">
                        {data.projects?.map(({ project }) => (
                            <div key={project.id} className="project-card">
                                <ClientImage src={project.image} alt={project.name} />
                                <div className="project-info">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-buttons">
                                        <a
                                            href={project.demo_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-btn demo-btn"
                                        >
                                            <BiLinkExternal /> {data.live_demo_text}
                                        </a>
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="project-btn learn-btn"
                                        >
                                            <BsInfoCircle /> {data.learn_more_text}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="it-cta">
                    <h2>{data.footer_cta_title}</h2>
                    <p>{data.footer_cta_text}</p>
                    {/* رقم رجل المبيعات تبع السيارات */}
                    <ClientLink href={data.footer_cta_link} className="cta-button">{data.footer_cta_link.text}</ClientLink>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ITSolutions;
