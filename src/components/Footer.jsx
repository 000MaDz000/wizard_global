import React from 'react';
import '../styles/Footer.css';
import {
    FaWhatsapp,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaTelegram,
    FaEnvelope,
    FaPhone
} from 'react-icons/fa';
import logo from '../assets/wazir.png'
import { Link } from 'react-router-dom';
import { useFooter } from '../api/hooks/useFooter';
import Loading from './Loading';
const Footer = () => {
    const footerRes = useFooter();
    if (footerRes.isLoading) return <Loading />

    if (!footerRes.data?.data) return;

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p>{footerRes.data.data.copyright}</p>
                    <p>{footerRes.data.data.address}</p>
                </div>
                <div className="footer-center">
                    <a href="/terms">{footerRes.data.data.privacy_policy_text}</a>
                    <a href="/terms">{footerRes.data.data.terms_of_service_text}</a>
                </div>
                <div className="footer-right">
                    <a
                        href={`https://linkedin.com/in/${footerRes.data.data.contact_info?.linkedin_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon linkedin"
                    // title="لينكد إن"
                    >
                        <FaLinkedin size={28} />
                    </a>
                    <a
                        href={`https://facebook.com/${footerRes.data.data.contact_info?.facebook_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon facebook"
                    // title="فيسبوك"
                    >
                        <FaFacebook size={28} />
                    </a>
                    <a
                        href={`https://instagram.com/${footerRes.data.data.contact_info?.instagram_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon instagram"
                    // title="إنستجرام"
                    >
                        <FaInstagram size={28} />
                    </a>
                    <a
                        href={`https://twitter.com/${footerRes.data.data.contact_info?.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon twitter"
                    // title="تويتر"
                    >
                        <FaTwitter size={28} />
                    </a>

                    <a
                        href={`https://wa.me/${footerRes.data.data.contact_info?.whatsapp_number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon whatsapp"
                    // title="واتساب"
                    >
                        <FaWhatsapp size={28} />
                    </a>

                    <a
                        href={`https://t.me/${footerRes.data.data.contact_info?.telegram_number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon telegram"
                    // title="تيليجرام"
                    >
                        <FaTelegram size={28} />
                    </a>

                    <a
                        href={`mailto:${footerRes.data.data.contact_info?.email}`}
                        className="contact-icon email"
                    // title="البريد الإلكتروني"
                    >
                        <FaEnvelope size={28} />
                    </a>

                    <a
                        href={`tel:+${footerRes.data.data.contact_info?.phone}`}
                        className="contact-icon phone"
                    // title="اتصال هاتفي"
                    >
                        <FaPhone size={28} />
                    </a>
                </div>
                <div className="navs_links">
                    <Link to="/">
                        <img src={logo} alt="new" />
                    </Link>
                    {/* <ul className='navs_ul'>
                        <li><a href="/">الرئيسية</a></li>
                        <li><a href="#about">من نحن</a></li>
                        <li><a href="#services">خدماتنا</a></li>
                        <li><a href="#clients">عملائنا</a></li>
                        <li><a href="#contact">تواصل معنا</a></li>
                        <li><a href="#artical"> المقالات</a></li>
                    </ul> */}

                </div>
            </div>
        </footer>
    );
};

export default Footer;
