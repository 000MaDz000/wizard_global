import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/wazir.png';

// 👇 استدعاء الأيقونات
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';
import { useNavbar } from '../api/hooks/useNavbar';
import Loading from './Loading';
import ClientLink from './ClientLink';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbar = useNavbar();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    if (navbar.isLoading) return <Loading />;

    return (
        <nav className="navbar">
          
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="new" />
                    </Link>
                </div>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
  {
    navbar.data?.data?.links.map(link => (
      <li key={link.text + link.href}>
        <ClientLink href={link}>{link.text}</ClientLink>
      </li>
    ))
  }

  {/* زرار اللغة كـ li */}
  <li className="language-selector-li">
    <LanguageSelector />
  </li>
</ul>


                <button className='cta'>  <a style={{ textDecoration: 'none', color: 'black' }} href="#contact">{navbar.data?.data?.contact_cta_text}</a></button>
                
                {/* زر فتح/غلق القائمة */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
