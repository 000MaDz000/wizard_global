import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import { useParams, NavLink } from 'react-router-dom';
import './cars/Nav.css'
import Footer from "../components/Footer";
import '../styles/vision_message.css'; // استيراد ملف CSS المنفصل
import logo from '../assets/red_logo.png';
import { useVisionPage } from '../api/hooks/useVisionPage';
import Loading from '../components/Loading';
const VisionDetails = () => {
    const navigate = useNavigate();
    const pageRes = useVisionPage();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
    }, []);

    if (pageRes.isLoading) return <Loading />;
    const data = pageRes.data?.data;

    if (!data) return;

    return (
        <div className="details-page vision-page">
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
            <section className="details-intro" data-aos="fade-up">
                <div className="details-container">
                    <h1>{data.title}</h1>
                </div>
            </section>

            <section className="details-content" data-aos="fade-up">
                <p>{data.description}</p>

                <h3 className="details-section-title">{data.goals_section.title}</h3>
                <ul className="details-list">
                    {data.goals_section.texts.map(({ text: goal }, index) => (
                        <li key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                            {goal}
                        </li>
                    ))}
                </ul>

                <h3 className="details-section-title">{data.values.title}</h3>
                <ul className="details-list">
                    {data.values.texts.map(({ text: value }, index) => (
                        <li key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                            {value}
                        </li>
                    ))}
                </ul>

                <p data-aos="fade-up">{data.conclusion}</p>


            </section>

            <Footer />
        </div>
    );
};

export default VisionDetails;