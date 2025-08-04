import React, { useState,useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BiLinkExternal, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import Footer from '../../components/Footer';
import logo from '../../assets/wazir.png';
import './ProjectDetails.css'; 


const ProjectDetails = () => {
     useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const projects = [
        {
            id: 1,
            name: "LingoWise",
            description: "تطبيق ترجمة المكالمات",
            details: "تطبيق متقدم لترجمة المكالمات الصوتية في الوقت الحقيقي يدعم 40 لغة مع ميزة التعرف على اللهجات المحلية.",
            features: [
                "ترجمة فورية للمكالمات الصوتية",
                "دعم 40 لغة مختلفة",
                "تخزين محادثات للمراجعة لاحقاً",
                "واجهة سهلة الاستخدام"
            ],
            technologies: ["Flutter", "Firebase", "Google Cloud Speech API"],
            demoUrl: "https://demo.example.com",
            screenshots: [
                "https://images.pexels.com/photos/33242735/pexels-photo-33242735.jpeg",
                "https://images.pexels.com/photos/33242735/pexels-photo-33242735.jpeg",
                "https://images.pexels.com/photos/33242735/pexels-photo-33242735.jpeg",
                
            ]
        },
        {
            id: 2,
            name: "SmartAgri",
            description: "نظام زراعي ذكي",
            details: "نظام إدارة المزارع الذكية باستخدام إنترنت الأشياء والذكاء الاصطناعي لتحسين إنتاجية المحاصيل.",
            features: [
                "مراقبة مستويات رطوبة التربة",
                "توصيات الري الذكية",
                "تنبؤات نمو المحاصيل",
                "إنذارات مبكرة للأمراض النباتية"
            ],
            technologies: ["React", "Node.js", "TensorFlow", "IoT"],
            demoUrl: "https://demo.example.com",
            screenshots: [
                "https://images.pexels.com/photos/33242735/pexels-photo-33242735.jpeg",
                "https://images.pexels.com/photos/33242735/pexels-photo-33242735.jpeg",
                "https://images.pexels.com/photos/33242735/pexels-photo-33242735.jpeg",
                
            ]
        }
    ];

    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return <div className="project-not-found">Project not found</div>;
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === project.screenshots.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? project.screenshots.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <nav className="navbar_bar" style={{background:"#0a1f3d"}}>
                <div className="navbar_bar-container">
                    <div className="navbar_bar-contact" >
                        <Link to="/it" className="back-button">
                            <BsArrowLeft /> العودة للمشاريع
                        </Link>
                    </div>
                    <div className="navbar_bar-links">
                        <Link to="/">
                            <img src={logo} alt="logo" className="nav-logo" />
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="project-details-container">
                <div className="project-header">
                    <h1 className='it_h1'>{project.name}</h1>
                    <p className="project-tagline">{project.description}</p>
                    
                    <div className="gallery-container">
                        <div className="gallery-image-wrapper">
                            <img 
                                src={project.screenshots[currentImageIndex]} 
                                alt={`${project.name} Screenshot ${currentImageIndex + 1}`} 
                                className="gallery-main-image"
                            />
                            
                            <button className="nav-button prev-button" onClick={prevImage}>
                                <BiChevronLeft size={32} />
                            </button>
                            
                            {/* <button className="nav-button next-button" onClick={nextImage}>
                                <BiChevronRight size={32} />
                            </button> */}
                        </div>
                        
                        <div className="gallery-thumbnails">
                            {project.screenshots.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                    
                    <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="demo-button"
                    >
                        <BiLinkExternal /> تجربة العرض الحي
                    </a>
                </div>

                <div className="project-content">
                    <section className="project-section">
                        <h2>تفاصيل المشروع</h2>
                        <p>{project.details}</p>
                    </section>
                    
                    <section className="project-section">
                        <h2>المميزات الرئيسية</h2>
                        <ul className="features-list">
                            {project.features.map((feature, index) => (
                                <li key={index}>
                                    <span className="feature-icon">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </section>
                    
                    <section className="project-section">
                        <h2>التقنيات المستخدمة</h2>
                        <div className="technologies-tags">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProjectDetails;