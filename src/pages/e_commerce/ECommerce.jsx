import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, useNavigate } from 'react-router-dom';
import './ECommerce.css';
import Footer from '../../components/Footer';
import logo from '../../assets/red_logo.png';
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(currentLang === 'ar' ? 'تم استلام طلبك بنجاح! سنتواصل معك قريباً' : 'Your request has been received successfully! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            businessType: '',
            budget: '',
            requirements: ''
        });
    };


    const handleProjectClick = (projectId) => {
        navigate(`/ecommerc_projects/${projectId}`);
    };

    if (res.isLoading) return <Loading />;

    const eCommerceData = {
        e_commerce_intro: "نساعد عملاءنا على الدخول إلى عالم التجارة الإلكترونية من خلال حلول متكاملة تشمل إنشاء المتاجر، التسويق الرقمي، وخدمات لوجستية احترافية.",

        e_commerce_services: [
            {
                id: 1,
                service_name: "إنشاء متاجر إلكترونية",
                service_details: "(Shopify / WooCommerce)",
                service_icon: <FaShoppingCart className="service-icon" />
            },
            {
                id: 2,
                service_name: "تجهيز بوابات الدفع والتوصيل",
                service_details: "",
                service_icon: <FaCreditCard className="service-icon" />
            },
            {
                id: 3,
                service_name: "إدارة المخزون والطلبات",
                service_details: "",
                service_icon: <FaBoxOpen className="service-icon" />
            },
            {
                id: 4,
                service_name: "حملات تسويق رقمي",
                service_details: "(Google – Meta)",
                service_icon: <FaBullhorn className="service-icon" />
            },
            {
                id: 5,
                service_name: "استشارات لوجستية وتخزين",
                service_details: "",
                service_icon: <FaTruck className="service-icon" />
            }
        ],

        e_commerce_platform: {
            platform_name: "متجرك معنا",
            platform_description: "هل ترغب في متجر إلكتروني خاص بك؟ املأ النموذج",
            platform_form_link: "#contact-form"
        },

        e_commerce_future_projects: [
            {
                id: 1,
                project_name: "e-Market for Auto Parts",
                project_description: "سوق إلكتروني متخصص في قطع غيار السيارات",
                details: "منصة متكاملة لبيع قطع غيار السيارات عبر الإنترنت مع نظام توصيل متطور",
                features: [
                    "بحث متقدم بمعايير متعددة",
                    "نظام توصيل ذكي",
                    "تقييمات البائعين والمشترين",
                    "دعم فني متخصص"
                ],
                images: [
                    "https://via.placeholder.com/800x500?text=Auto+Parts+Market+1",
                    "https://via.placeholder.com/800x500?text=Auto+Parts+Market+2",
                    "https://via.placeholder.com/800x500?text=Auto+Parts+Market+3"
                ],
                expected_launch: "Q1 2024"
            },
            {
                id: 2,
                project_name: "منصة تجارية بين المصنع والموزّع",
                project_description: "حلول B2B للتجارة الإلكترونية",
                details: "منصة متخصصة في الربط بين المصانع والموزعين لتبسيط عمليات الشراء بالجملة",
                features: [
                    "نظام طلبات متكامل",
                    "إدارة المخزون الآلي",
                    "تقارير مبيعات مفصلة",
                    "دعم متعدد اللغات"
                ],
                images: [
                    "https://via.placeholder.com/800x500?text=B2B+Platform+1",
                    "https://via.placeholder.com/800x500?text=B2B+Platform+2",
                    "https://via.placeholder.com/800x500?text=B2B+Platform+3"
                ],
                expected_launch: "Q2 2024"
            }
        ],

        e_commerce_video: {
            video_title: "دورة التجارة الإلكترونية",
            video_url: "https://www.youtube.com/embed/9d_EykIDid4",
            video_placeholder: "https://i.ytimg.com/vi/9d_EykIDid4/maxresdefault.jpg"
        }
    };

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
                            <a href="/contact" className="contact-link">
                                {data.hero_contact_button_text}
                            </a>
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
                                    <ClientImage src={service.service_icon} style={{ width: '8rem', height: '8rem' }} />
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
                            <h2 className='proje_h2'>{data.video_section?.video_title}</h2>
                            <div className="e-commerce-video-container">
                                <iframe
                                    width="100%"
                                    height="500"
                                    src={`${data.video_section?.video.url}`}
                                    title={data.video_section?.video_title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
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
                            <label htmlFor="phone"><FaPhone className="input-icon" /> رقم الهاتف:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="businessType"><FaStore className="input-icon" /> نوع النشاط التجاري:</label>
                            <select
                                id="businessType"
                                name="businessType"
                                value={formData.businessType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">اختر نوع النشاط</option>
                                <option value="retail">بيع بالتجزئة</option>
                                <option value="wholesale">بيع بالجملة</option>
                                <option value="services">خدمات</option>
                                <option value="other">أخرى</option>
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
                                <option value="">{data.contact_section.form.budget.title}</option>
                                {
                                    data.contact_section.form.budget.chooices.map(choice => (
                                        <option key={choice} value={choice.text}>{choice.text}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="requirements"><FaCommentAlt className="input-icon" /> متطلبات إضافية:</label>
                            <textarea
                                id="requirements"
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
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