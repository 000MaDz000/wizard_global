import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, NavLink } from 'react-router-dom';

import Footer from "../components/Footer";
import '../styles/vision_message.css'; // استيراد ملف CSS المنفصل
import logo from '../assets/red_logo.png';
const VisionDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
    }, []);

    // بيانات وهمية للرؤية
    const visionDetails = {
        title: "رؤيتنا",
        description: "تتطلع Wazir GlobalX إلى أن تصبح رائدة في مجال الحلول المتكاملة للتجارة والتكنولوجيا على مستوى المنطقة والعالم. نطمح إلى إحداث تغيير جذري في طريقة عمل الشركات من خلال تقديم حلول ذكية ومبتكرة.",
        goals: [
            "الريادة في مجال الحلول الرقمية المتكاملة",
            "التوسع إلى 10 دول جديدة خلال السنوات الخمس القادمة",
            "تحقيق أعلى معدلات رضا العملاء في القطاع",
            "الابتكار المستمر في المنتجات والخدمات"
        ],
        values: [
            "التميز في الأداء",
            "التركيز على العميل",
            "الشفافية والنزاهة",
            "العمل بروح الفريق"
        ],
        conclusion: "نسعى جاهدين لتحقيق هذه الرؤية من خلال فريق عمل متميز وشراكات استراتيجية قوية."
    };

    return (
        <div className="details-page vision-page">
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
                    <h1>{visionDetails.title}</h1>
                </div>
            </section>

            <section className="details-content" data-aos="fade-up">
                <p>{visionDetails.description}</p>
                
                <h3 className="details-section-title">أهدافنا</h3>
                <ul className="details-list">
                    {visionDetails.goals.map((goal, index) => (
                        <li key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                            {goal}
                        </li>
                    ))}
                </ul>
                
                <h3 className="details-section-title">قيمنا</h3>
                <ul className="details-list">
                    {visionDetails.values.map((value, index) => (
                        <li key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                            {value}
                        </li>
                    ))}
                </ul>
                
                <p data-aos="fade-up">{visionDetails.conclusion}</p>

               
            </section>

            <Footer />
        </div>
    );
};

export default VisionDetails;