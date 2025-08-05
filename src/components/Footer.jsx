import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/wazir.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p>© 2025 Wazir GlobalX FZCO. All Rights Reserved.</p>
                    <p>IFZA Digital Park - A2, Dubai Silicon Oasis, Dubai - UAE</p>
                </div>
                <div className="footer-center">
                    <a href="/terms">سياسة الخصوصية</a>
                    <a href="/terms">شروط الاستخدام</a>
                </div>
                <div className="footer-right">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
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
