import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, NavLink } from 'react-router-dom';

import Footer from "../components/Footer";
import '../styles/vision_message.css';
import logo from '../assets/red_logo.png';

const MessageDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
    }, []);

    // بيانات وهمية للرسالة
    const messageDetails = {
        title: "رسالتنا",
        description: "في Wazir GlobalX، نؤمن بأن التكنولوجيا والتجارة يجب أن تكونا في متناول الجميع. رسالتنا تتمثل في توفير حلول مبتكرة وعملية تساعد الشركات والأفراد على تحقيق أهدافهم بكفاءة وسهولة. من خلال ",
        points: [
            "تقديم خدمات عالية الجودة تلبي احتياجات العملاء",
            "الابتكار المستمر في الحلول التقنية والتجارية",
            "بناء شراكات استراتيجية طويلة الأمد",
            "الالتزام بأعلى معايير الشفافية والأخلاقيات المهنية"
        ],
        conclusion: "نحن هنا لنساعدك في تحقيق رؤيتك من خلال حلول مخصصة تلبي احتياجاتك الخاصة."
    };

    return (
        <div className="details-page message-page">
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
            <section className="details-intro" data-aos="fade-up">
                <div className="details-container">
                    <h1>{messageDetails.title}</h1>
                </div>
            </section>

            <section className="details-content" data-aos="fade-up">
                <p>{messageDetails.description}</p>

                <ul className="details-list">
                    {messageDetails.points.map((point, index) => (
                        <li key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                            {point}
                        </li>
                    ))}
                </ul>

                <p data-aos="fade-up">{messageDetails.conclusion}</p>

               
            </section>

            <Footer />
        </div>
    );
};

export default MessageDetails;