import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/WhyChooseUs.css";
import { FaMapMarkerAlt, FaHandshake, FaLayerGroup, FaHeadset } from "react-icons/fa";

/**
 * 
 * @param {{data?: import("../api/types/components").WhyUs}} param0 
 * @returns 
 */
const WhyChooseUs = ({ data }) => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    if (!data) return null;

    return (
        <section className="why-choose-section">
            <h2 className="section-title" data-aos="fade-up">{data.title.title_start} {data.title.title_end}</h2>
            <div className="details">
                {/* <div className="first_p">شريكك الموثوق دائما</div> */}
                <div  style={{textAlign:"center"}} className="second_p">
                    {data.description}
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
             <a
                href="/why"
                style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    transition: "background-color 0.3s",
                    marginTop:"23px"
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = "#0056b3"}
                onMouseOut={e => e.currentTarget.style.backgroundColor = "#007bff"}
            >
                اعرف المزيد
            </a>
        </section>
    );
};

export default WhyChooseUs;
