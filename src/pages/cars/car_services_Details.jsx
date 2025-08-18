import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, NavLink } from 'react-router-dom';

import Footer from "../../components/Footer";
import '../../styles/vision_message.css';
import logo from '../../assets/red_logo.png';

const CarServiceDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
    }, []);
    // dummy data

    const services = [
        {
            id: 1,
            name: "خدمه 1 ",
            description:
                "شركة متخصصة في تقديم حلول تكنولوجية مبتكرة لدعم الأعمال وتحقيق التطوير المستدام."
        },
        {
            id: 2,
            name: "خدمه 1 ",
            description:
                "تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة."
        },
        {
            id: 3,
            name: "خدمه 1 ",
            description:
                "متخصصة في مشاريع البنية التحتية وتطوير العقارات بأحدث المعايير العالمية.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة.تركز على تقديم استشارات واستراتيجيات أعمال متكاملة للشركات الناشئة."
        },
        {
            id: 4,
            name: "خدمه 1 ",
            description:
                "تقدم خدمات اتصالات وإنترنت عالية السرعة وحلول ذكية للشركات والأفراد."
        }
    ];

    const { id } = useParams();
    const service = services.find((c) => c.id === Number(id));

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
        fontSize: "2.7rem",
        color: "#ffffffff",
        marginBottom: "15px",
        textAlign: "center"
    };

    const textStyle = {
        fontSize: "1.2rem",
        lineHeight: "1.8",
        color: "#000000ff",
        textAlign:"center"
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
