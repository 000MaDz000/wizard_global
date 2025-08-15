import React, { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import "./About_Details.css";

import Footer from "../components/Footer";
import logo from '../assets/red_logo.png';
import OurServices from '../components/Services';
import { useAboutDetails } from '../api/hooks/useAboutDetails';
import Loading from '../components/Loading';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const About = () => {
    const navigate = useNavigate();
    const pageRes = useAboutDetails();
    const mapRef = useRef(null);
    const leafletMapRef = useRef(null); // To prevent multiple maps

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleContactClick = () => {
        navigate('/', { state: { scrollToContact: true } });
    };

    const data = pageRes.data?.data;

    useEffect(() => {
        if (!data || !Array.isArray(data.map_coordinates) || data.map_coordinates.length === 0 || leafletMapRef.current) return;

        // Initialize map
        const initial = data.map_coordinates[0];
        const map = L.map(mapRef.current).setView([initial.lat, initial.lng], 6);
        leafletMapRef.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        const bounds = [];

        data.map_coordinates.forEach((coord) => {
            const marker = L.marker([coord.lat, coord.lng]).addTo(map);
            marker.bindPopup(`
                <div style="font-family:'Cairo'; text-align:right;">
                    <strong>Latitude:</strong> ${coord.lat}<br/>
                    <strong>Longitude:</strong> ${coord.lng}
                </div>
            `);
            marker.on('mouseover', function () { this.openPopup(); });
            marker.on('mouseout', function () { this.closePopup(); });
            bounds.push([coord.lat, coord.lng]);
        });

        if (bounds.length > 1) {
            map.fitBounds(bounds, { padding: [50, 50] });
        }

    }, [data]);

    if (pageRes.isLoading) return <Loading />;
    if (!data) return null;

    return (
        <div className="about-page">
            <div className="hero_about">
                <nav className="navbar_bar">
                    <div className="navbar_bar-container">
                        <div className="navbar_bar-contact">
                            <a style={{ cursor: "pointer" }} onClick={handleContactClick} className="contact-link">
                                {data.navbar_contact_link_text}
                            </a>
                        </div>
                        <div className="navbar_bar-links">
                            <NavLink to="/">
                                <img src={logo} alt="new" />
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>

            <section className="about-image" data-aos="zoom-in">
                {/* Optional image */}
            </section>

            <section className="intro" data-aos="fade-up">
                <div className="text">
                    <h1>{data.intro.heading}</h1>
                    <h2>{data.intro.subheading}</h2>
                    <p className="intro-subtext">{data.intro.description}</p>
                </div>
            </section>

            <section className="about-story" data-aos="fade-up">
                <div className="about-text">
                    <p>{data.story.paragraph}</p>
                </div>
            </section>

            <OurServices />

            <section className="vision-section" data-aos="fade-up">
                <div className="vision-container">
                    <div className="vision-image-wrapper" data-aos="fade-right">
                        <div className="vision-image-background" />
                    </div>
                    <div className="vision-content" data-aos="fade-left">
                        <div className="vision-block">
                            <h2 className="vision-title">{data.vision.title}</h2>
                            <p className="vision-text">{data.vision.description}</p>
                             <button
                                style={{
                                    backgroundColor: "#3c56e7c6",
                                    color: "white",
                                    border: "none",
                                    padding: "10px 20px",
                                    marginTop: "15px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    fontSize: "18px",
                                    transition: "all 0.3s ease",
                                    width: "100%"
                                }}
                                onClick={() => navigate('/about/vision')}
                                onMouseOver={(e) => e.target.style.backgroundColor = "#302bc0ff"}
                                onMouseOut={(e) => e.target.style.backgroundColor = "#3c64e7ff"}
                            >
                                اعرف المزيد عن رؤيتنا
                            </button>
                        </div>
                        <div className="vision-block">
                            <h2 className="vision-title">{data.mission.title}</h2>
                            <p className="vision-text">{data.mission.description}</p>
                             <button
                                style={{
                                    backgroundColor: "#3c56e7c6",
                                    color: "white",
                                    border: "none",
                                    padding: "10px 20px",
                                    marginTop: "15px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    fontSize: "18px",
                                    transition: "all 0.3s ease",
                                    width: "100%"
                                }}
                                onClick={() => navigate('/about/vision')}
                                onMouseOver={(e) => e.target.style.backgroundColor = "#302bc0ff"}
                                onMouseOut={(e) => e.target.style.backgroundColor = "#3c64e7ff"}
                            >
                                اعرف المزيد عن رسالتنا
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {Array.isArray(data.map_coordinates) && data.map_coordinates.length > 0 && (
                <section className="chart_section" data-aos="fade-up" style={{ marginTop: "2rem" }}>
                    <div
                        ref={mapRef}
                        className="map-container"
                        style={{ height: "400px", width: "100%" }}
                    />
                </section>
            )}

            <Footer />
        </div>
    );
};

export default About;
