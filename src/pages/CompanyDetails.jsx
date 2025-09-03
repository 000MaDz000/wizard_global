import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, NavLink } from 'react-router-dom';
import  './cars/Nav.css'
import Footer from "../components/Footer";
import '../styles/vision_message.css'; // استيراد ملف CSS المنفصل
import logo from '../assets/red_logo.png';
import { useCompany } from '../api/hooks/useCompany';
import Loading from '../components/Loading';

const CompanyDetails = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const dataRes = useCompany(slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
    }, []);
    // dummy data



    // ستايلات الصفحة
    const containerStyle = {
        maxWidth: "800px",
        margin: "5px auto",
        padding: "15px",
        backgroundColor: "#f8f9fa",
        
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        textAlign: "center"
    };

    const titleStyle = {
        fontSize: "2.7rem",
        color: "#ffffffff",
        marginBottom: "15px",
        textAlign: "center"
    };

    const textStyle = {
        fontSize: "1.2rem",
        lineHeight: "1.8",
        color: "#000000555",
        textAlign: "center"
    };

    if (dataRes.isLoading) return <Loading />;

    const company = dataRes.data?.data;

    if (!company) {
        return (
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
                الشركة غير موجودة
            </h2>
        );
    }

    return (
        <>
            <nav className="navbar_bar">
                <div className="navbar_bar-container">
                    <div className="navbar_bar-contact">
                        <a style={{ cursor: "pointer" }} onClick={() => navigate(-1)}
                            className="contact-link">
                            {company.company_translation.back_to_previous_page_text}
                        </a>
                    </div>
                    <div className="navbar_bar-links">
                        <NavLink to="/">
                            <img src={logo} alt="new" />
                        </NavLink>
                    </div>
                </div>
            </nav>
            <div className="hero_comp">
                <br />
                <br />
                <br />
                <h1 style={titleStyle}>{company.name}</h1>
            </div>
            <div style={containerStyle}>
                
                <p style={textStyle}>{company.description}</p>
            </div>
            <Footer />
        </>

    );
};

export default CompanyDetails;

