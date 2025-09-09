import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Nav.css';
import Footer from "../../components/Footer";
import '../../styles/vision_message.css';
import logo from '../../assets/red_logo.png';
import { useServiceDetail } from '../../api/hooks/useServiceDetail';
import Loading from '../../components/Loading';

const CarServiceDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const pageRes = useServiceDetail(id);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
    }, []);
    // dummy data

    if (pageRes.isLoading) return <Loading />;
    const service = pageRes.data?.data;
    if (!service) return null;


    // ستايلات الصفحة
    const containerStyle = {
        maxWidth: "800px",
        margin: "5px auto",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        textAlign: "center"
    };

    const titleStyle = {
        fontSize: "2rem",
        color: "#ffffffff",
        marginBottom: "15px",
        textAlign: "center"
    };

    const textStyle = {
        fontSize: "1.2rem",
        lineHeight: "1.8",
        color: "#000000ff",
        textAlign: "center"
    };
    if (!service) {
        return (
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
                الخدمه غير موجودة
            </h2>
        );
    }

    return (
        <>
            <nav className="navbar_bar">
                <div className="navbar_bar-container">
                    <div className="navbar_bar-contact">
                        <Link to={-1} className="contact-link">
                            {service.service_translation?.back_to_previous_page_text}
                        </Link>
                    </div>
                    <div className="navbar_bar-links">
                        <NavLink to="/">
                            <img src={logo} alt="new" />
                        </NavLink>
                    </div>
                </div>
            </nav>
            <div className="hero_comp" id='hero_serv'>
                <br />
                <h1 style={titleStyle}>{service.name}</h1>
            </div>
            <div style={containerStyle}>
                <p style={textStyle}>{service.description}</p>
            </div>
            <Footer />
        </>

    );
};

export default CarServiceDetails;


