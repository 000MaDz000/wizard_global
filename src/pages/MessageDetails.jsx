import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, NavLink } from 'react-router-dom';
import './cars/Nav.css'
import Footer from "../components/Footer";
import '../styles/vision_message.css';
import logo from '../assets/red_logo.png';
import { useMessagePage } from '../api/hooks/useMessagePage';
import Loading from '../components/Loading';

const MessageDetails = () => {
    const navigate = useNavigate();
    const pageRes = useMessagePage();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
    }, []);

    if (pageRes.isLoading) return <Loading />;
    const data = pageRes.data?.data;

    if (!data) return null;


    return (
        <div className="details-page message-page">
            <nav className="navbar_bar">
                <div className="navbar_bar-container">
                    <div className="navbar_bar-contact">
                        <a style={{ cursor: "pointer" }} onClick={() => navigate(-1)}
                            className="contact-link">
                            {data.back_to_previous_page_text}
                        </a>
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

                <ul className="details-list">
                    {data.points.map(({ text: point }, index) => (
                        <li key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                            {point}
                        </li>
                    ))}
                </ul>

                <p data-aos="fade-up">{data.conclusion}</p>


            </section>

            <Footer />
        </div>
    );
};

export default MessageDetails;