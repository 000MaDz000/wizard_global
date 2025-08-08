import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/wazir.png';

// 👇 استدعاء الأيقونات
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <LanguageSelector />
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="new" />
                    </Link>
                </div>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {/* <li><a href="/">الرئيسية</a></li> */}
                    <li><a href="#about">من نحن</a></li>
                    <li><a href="#services">خدماتنا</a></li>
                    <li><a href="#clients">عملائنا</a></li>
                    <li><a href="#clients">شركائنا</a></li>
                    <li><a href="#artical"> المقالات</a></li>
                </ul>

                <button className='cta'>  <a style={{ textDecoration: 'none', color: 'black' }} href="#contact">تواصل معنا</a></button>

                {/* زر فتح/غلق القائمة */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
