import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Nav.css';
import { CiSearch } from "react-icons/ci";
import logo from '../../assets/red_logo.png'

const Navbar_bar = ({ onSearch }) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/', { state: { scrollToContact: true } });
    };

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <nav className="navbar_bar">
            <div className="navbar_bar-container">
                <div className="navbar_bar-contact">
                    <a style={{ cursor: "pointer" }} onClick={handleContactClick} className="contact-link">
                        تواصل معنا
                    </a>
                </div>

                <div className="navbar_bar-search">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="ابحث عن سيارة..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit">
                            {/* <i className="search-icon">🔍</i> */}
                            <CiSearch className="search-icon" />
                        </button>
                    </form>
                </div>


                <div className="navbar_bar-links">
                    <NavLink to="/">
                        <img src={logo} alt="new" />
                    </NavLink>
                </div>


            </div>
        </nav>
    );
};

export default Navbar_bar;