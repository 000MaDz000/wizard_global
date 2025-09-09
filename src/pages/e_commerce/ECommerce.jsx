import React, { useCallback, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './ECommerce.css';
import Footer from '../../components/Footer';
import logo from '../../assets/red_logo.png';
// here is the problem
import '../cars/Nav.css';

import {
    FaShoppingCart,
    FaCreditCard,
    FaBoxOpen,
    FaBullhorn,
    FaTruck,
    FaEnvelope,
    FaPhone,
    FaUser,
    FaStore,
    FaMoneyBillWave,
    FaCommentAlt
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useECommerce } from '../../api/hooks';
import { buildStrapiPopulateParams, eCommercePopulation } from '../../api/const/populations';
import Loading from '../../components/Loading';
import ClientImage from '../../components/ClientImage';
import ClientLink from '../../components/ClientLink';
import { submitEcommerceContact } from '../../api/contact/senders';
import LanguageSelector from '../../components/LanguageSelector';

const ECommerce = () => {
    const res = useECommerce(buildStrapiPopulateParams(eCommercePopulation));
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        budget: '',
        requirements: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const [play, setPlay] = useState(false);
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                business_type: formData.businessType,
                budget: formData.budget,
                other_requirements: formData.requirements
            };

            await submitEcommerceContact(payload);

            alert(currentLang === 'ar'
                ? '✅ تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.'
                : '✅ Your request has been received! We will contact you shortly.');

            // إعادة تعيين النموذج
            setFormData({
                name: '',
                email: '',
                phone: '',
                businessType: '',
                budget: '',
                requirements: ''
            });

        } catch (error) {
            console.error('فشل إرسال النموذج:', error);
            alert(currentLang === 'ar'
                ? '❌ حدث خطأ أثناء إرسال النموذج. حاول مرة أخرى لاحقًا.'
                : '❌ Something went wrong while submitting the form. Please try again later.');
        }
    }, [formData]);



    const handleProjectClick = useCallback((projectId) => {
        navigate(`/ecommerc_projects/${projectId}`);
    }, [navigate]);

    if (res.isLoading) return <Loading />;

    const data = res.data?.data;
    if (!data) return;

    return (
        <>
            <Helmet>
                <html lang={currentLang} />
                <title>
                    {currentLang === 'ar' ? 'حلول التجارة الإلكترونية - Wazir GlobalX' : 'E-commerce Solutions - Wazir GlobalX'}
                </title>
                <meta
                    name="description"
                    content={
                        currentLang === 'ar'
                            ? 'حلول التجارة الإلكترونية من Wazir GlobalX. خدمات متكاملة لإنشاء المتاجر الإلكترونية، التسويق الرقمي، إدارة المخزون، والخدمات اللوجستية. مقرنا في دبي، نوفر حلول مبتكرة تلبي احتياجات عملك.'
                            : 'E-commerce solutions by Wazir GlobalX. Comprehensive services for building online stores, digital marketing, inventory management, and logistics. Based in Dubai, we provide innovative solutions tailored for your business needs.'
                    }
                />
            </Helmet>
            <div className="e-commerce-page">
                <nav className="navbar_bar">
                    <div className="navbar_bar-container">
                        <div className="navbar_bar-contact">
                            <a href="#contact-form" className="contact-link">
                                {data.hero_contact_button_text}
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
                <div className="e-commerce-hero">
                    <h1>{data.hero_title}</h1>
                    <p>{data.intro}</p>
                </div>

                {/* الخدمات */}
                <div className="e-commerce-section">
                    <h2>{data.services_section_title}</h2>
                    <div className="e-commerce-services-grid">
                        {data.services.map((service) => (
                            <div key={service.id} className="e-commerce-service-card">
                                <div className="e-commerce-service-icon">
                                    <ClientImage src={service.service_icon} className='e-commerce-icons' />
                                </div>

                                <h3>{service.service_name}</h3>
                                {service.service_details && <p>{service.service_details}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* المنصة */}
                {
                    data.cta ? (
                        <div className="e-commerce-platform">
                            <div className="e-commerce-platform-content">
                                <h2>{data.cta.title}</h2>
                                <p>{data.cta.description}</p>
                                <ClientLink href={data.cta.link} className="e-commerce-platform-button">
                                    {data.cta.link.text}
                                </ClientLink>
                            </div>
                        </div>
                    ) : null
                }

                {/* المشاريع المستقبلية */}
                {
                    data.future_projects_section ? (
                        <div className="e-commerce-section">
                            <h2>{data.future_projects_section?.title}</h2>
                            <div className="e-commerce-projects-grid">
                                {data.future_projects_section?.projects?.map((project) => (
                                    <div
                                        key={project.id}
                                        className="e-commerce-project-card"
                                        onClick={() => handleProjectClick(project.id)}
                                    >
                                        <h3>{project.project_name}</h3>
                                        <p>{project.project_description}</p>
                                        <div className="project-more-info">{data.click_for_more_details_button_text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null
                }

                {
                    data.video_section ? (
                        <div className="e-commerce-video-section">
                            <h2 className="proje_h2">{data.video_section?.video_title}</h2>
                            <div className="e-commerce-video-container" style={{ position: "relative" }}>
                                {play ? (
                                    // ✅ تشغيل الفيديو
                                    data.video_section?.video.url.includes("youtube.com") || data.video_section?.video.url.includes("youtu.be") ? (
                                        <iframe
                                            width="100%"
                                            height="500"
                                            src={`${data.video_section?.video.url}?autoplay=1`}
                                            title={data.video_section?.video_title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <video
                                            width="100%"
                                            height="500"
                                            controls
                                            autoPlay
                                        >
                                            <source src={data.video_section?.video.url} type="video/mp4" />
                                            متصفحك لا يدعم تشغيل الفيديو.
                                        </video>
                                    )
                                ) : (
                                    // ✅ صورة + زر تشغيل
                                    <>
                                        <img
                                            src={
                                                data.video_section?.video.url.includes("youtube.com") || data.video_section?.video.url.includes("youtu.be")
                                                    ? `https://img.youtube.com/vi/${data.video_section?.video.url.split("v=")[1]}/hqdefault.jpg`
                                                    : "/video-placeholder.jpg" // صورة افتراضية لو مش يوتيوب (ممكن تخليها أي صورة عندك)
                                            }
                                            alt="video thumbnail"
                                            style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                        />
                                        <button
                                            onClick={() => setPlay(true)}
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                background: "rgba(0,0,0,0.6)",
                                                border: "none",
                                                borderRadius: "50%",
                                                padding: "20px",
                                                cursor: "pointer",
                                                color: "#fff",
                                                fontSize: "24px"
                                            }}
                                        >
                                            ▶
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : null
                }

                {/* النموذج */}
                <div className="e-commerce-form-section" id="contact-form">
                    <h2>{data.contact_section?.title.title_start} {data.contact_section.title.title_end}</h2>
                    <form onSubmit={handleSubmit} className="e-commerce-form">
                        <div className="form-group">
                            <label htmlFor="name"><FaUser className="input-icon" /> {data.contact_section.form.name.label}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={data.contact_section.form.name.placeholder}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email"><FaEnvelope className="input-icon" /> {data.contact_section.form.email.label}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder={data.contact_section.form.email.placeholder}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone"><FaPhone className="input-icon" /> {data.contact_section.form.phone.label}</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder={data.contact_section.form.phone.placeholder}
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="businessType"><FaStore className="input-icon" /> {data.contact_section.form.business_type.title}</label>
                            <select
                                id="businessType"
                                name="businessType"
                                value={formData.businessType}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled selected>{data.contact_section.form.business_type.placeholder || data.contact_section.form.business_type.title}</option>
                                {data.contact_section.form.business_type.chooices.map(chooice => (
                                    <option value={chooice.text} key={chooice.text}>{chooice.text}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="budget"><FaMoneyBillWave className="input-icon" /> {data.contact_section.form.budget.title}</label>
                            <select
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                required
                            >
                                <option value="">{data.contact_section.form.budget.placeholder || data.contact_section.form.budget.title}</option>
                                {
                                    data.contact_section.form.budget.chooices.map(choice => (
                                        <option key={choice} value={choice.text}>{choice.text}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="requirements"><FaCommentAlt className="input-icon" /> {data.contact_section.form.requirements.label}</label>
                            <textarea
                                id="requirements"
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
                                placeholder={data.contact_section.form.requirements.placeholder}
                                rows="4"
                            ></textarea>
                        </div>

                        <button type="submit" className="form-submit-btn">
                            {data.contact_section.form.submit_button_text}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ECommerce;
