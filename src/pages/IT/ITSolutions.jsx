import React, { useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ITSolutions.css';
import Footer from '../../components/Footer';
import '../../styles/Articles.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/red_logo.png'
import { Helmet } from 'react-helmet';
import '../cars/Nav.css'

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
                                <ClientImage className="it_service-icon" src={service.icon} style={{ width: "5rem", height: "5rem" }} />
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
                    <ClientLink 
  href={data.footer_cta_link} 
  className="cta-button" 
  style={{ textDecoration: "none" }}
>
  {data.footer_cta_link.text}
</ClientLink>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default ITSolutions;
