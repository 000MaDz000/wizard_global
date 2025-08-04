import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/WhyChooseUs.css";
import { FaMapMarkerAlt, FaHandshake, FaLayerGroup, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="why-choose-section">
            <h2 className="section-title" data-aos="fade-up">لماذا تختارنا؟</h2>
            <div className="details">
                {/* <div className="first_p">شريكك الموثوق دائما</div> */}
                <div className="second_p">تندرج حت مظلة "شركة Wazir" مجموعة من الشركاء الاستراتيجيين الذين يدعمون نجاحنا المستمر في مجالات متنوعة. تحت مظلة "شركة Wazir" مجموعة من الشركاء الاستراتيجيين الذين يدعمون نجاحنا المستمر في مجالات متنوعة.
                </div>
            </div>
            {/* الجداول */}
            {/* <div className="reasons-grid">
                <div className="reason-card" data-aos="zoom-in">
                    <FaMapMarkerAlt className="reason-icon" />
                    <h3>موقع استراتيجي</h3>
                    <p>دبي – منطقة حرة IFZA</p>
                </div>
                <div className="reason-card" data-aos="zoom-in" data-aos-delay="100">
                    <FaHandshake className="reason-icon" />
                    <h3>شراكات دولية</h3>
                    <p>نتعاون مع كيانات عالمية لدعم أعمالك</p>
                </div>
                <div className="reason-card" data-aos="zoom-in" data-aos-delay="200">
                    <FaLayerGroup className="reason-icon" />
                    <h3>منصة موحدة متعددة الأنشطة</h3>
                    <p>خدمات متنوعة تحت سقف واحد</p>
                </div>
                <div className="reason-card" data-aos="zoom-in" data-aos-delay="300">
                    <FaHeadset className="reason-icon" />
                    <h3>دعم تقني مستمر</h3>
                    <p>فريقنا جاهز لمساعدتك في أي وقت</p>
                </div>
            </div> */}
        </section>
    );
};

export default WhyChooseUs;
