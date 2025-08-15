import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, NavLink } from 'react-router-dom';

import Footer from "../components/Footer";
import '../styles/vision_message.css'; // استيراد ملف CSS المنفصل
import logo from '../assets/red_logo.png';

const CompanyDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
    }, []);
    // dummy data

    const companies = [
        {
            id: 1,
            name: "شركة المستقبل",
            description:
                "شركة متخصصة في تقديم حلول تكنولوجية مبتكرة لدعم الأعمال وتحقيق التطوير المستدام."
        },
        {
            id: 2,
            name: "شركة الرؤية",
            description:
                "تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة."
        },
        {
            id: 3,
            name: "شركة البناء",
            description:
                "متخصصة في مشاريع البنية التحتية وتطوير العقارات بأحدث المعايير العالمية.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة."
        },
        {
            id: 4,
            name: "شركة الاتصالات المتقدمة",
            description:
                "تقدم خدمات اتصالات وإنترنت عالية السرعة وحلول ذكية للشركات والأفراد."
        }
    ];

    const { id } = useParams();
    const company = companies.find((c) => c.id === Number(id));

    // ستايلات الصفحة
    const containerStyle = {
        maxWidth: "800px",
        margin: "50px auto",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        textAlign: "center"
    };

    const titleStyle = {
        fontSize: "2rem",
        color: "#222",
        marginBottom: "15px"
    };

    const textStyle = {
        fontSize: "1.4rem",
        lineHeight: "1.8",
        color: "#555"
    };

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
                            العودة للصفحة السابقة
                        </a>
                    </div>
                    <div className="navbar_bar-links">
                        <NavLink to="/">
                            <img src={logo} alt="new" />
                        </NavLink>
                    </div>
                </div>
            </nav>
            <div style={containerStyle}>
                <h1 style={titleStyle}>{company.name}</h1>
                <p style={textStyle}>{company.description}</p>
            </div>
            <Footer />
        </>

    );
};

export default CompanyDetails;
