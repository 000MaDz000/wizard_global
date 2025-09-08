import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, NavLink } from 'react-router-dom';
import './cars/Nav.css'
import Footer from "../components/Footer";
import logo from '../assets/red_logo.png';
import "../styles/whyDetails.css";
import { useWhyUsPage } from '../api/hooks/useWhyUsPage';
import Loading from '../components/Loading';
import { Link } from "react-router-dom";


const WhyDetails = () => {
    const navigate = useNavigate();
    const pageRes = useWhyUsPage();

    if (pageRes.isLoading) return <Loading />;
    const data = pageRes.data.data;
    if (!data) return null;


    return (
        <>
            <nav className="navbar_bar">
                <div className="navbar_bar-container">
                    <div className="navbar_bar-contact">
                        <Link to={-1} className="contact-link">
                            {data.back_to_previous_page_text}
                        </Link>
                    </div>
                    <div className="navbar_bar-links">
                        <NavLink to="/">
                            <img src={logo} alt="new" />
                        </NavLink>
                    </div>
                </div>
            </nav>
            <div className="hero_why">
                <br />
                <br />
                <br />
                <h1 className="why-title">{data.title}</h1>
            </div>
            <div className="why-container">

                <p className="why-text">
                    {data.text}
                </p>
            </div>
            <Footer />
        </>

    );
};

export default WhyDetails;

