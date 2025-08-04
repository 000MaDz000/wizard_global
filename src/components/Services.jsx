import React from "react";
import "../styles/OurServices.css";
import cars from "../assets/pexels-mikebirdy-120049.jpg";
import ecom from "../assets/pexels-karolina-grabowska-5632402.jpg";
import it from "../assets/pexels-luckysam-50614.jpg";
import { FaCar } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

// import FaCar from 'react-icons'
const OurServices = () => {
    return (
        <section className="services-section" data-aos="fade-up">
            <h2 className="section-title-h2" data-aos="fade-down" data-aos-delay="100">خدماتنا</h2>
            <div className="services-grid">
                {/* استيراد وتصدير السيارات */}
                <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
                    {/* <img src={cars} alt="سيارات" /> */}
                    <FaCar className="icon"/>
                    <h3 className="servic_h3">استيراد وتصدير السيارات</h3>
                    <p>نقدم خدمات شحن وتخليص جمركي وتوزيع قطع الغيار.</p>
                    <a href="/cars" className="learn-more-btn">اعرف المزيد</a>
                </div>


                <div className="service-card" data-aos="zoom-in" data-aos-delay="400">
                    {/* <img src={it} alt="تكنولوجيا المعلومات" /> */}
                    <FaGlobe className="icon"/>
                    <h3 className="servic_h3">تكنولوجيا المعلومات وتطوير التطبيقات</h3>
                    <p>نشر تطبيقات الهاتف والمواقع وتطوير نظم معلومات مخصصة.</p>
                    <a href="/it" className="learn-more-btn">اعرف المزيد</a>
                </div>

                {/* التجارة الإلكترونية */}
                <div className="service-card" data-aos="zoom-in" data-aos-delay="600">
                    {/* <img src={ecom} alt="التجارة الإلكترونية" /> */}
                    <MdOutlineShoppingCart className="icon"/>

                    <h3 className="servic_h3">التجارة الإلكترونية</h3>
                    <p>بيع وشراء B2B – B2C، بوابات دفع، إدارة مخزون، حلول شحن.</p>
                    <a href="/ecommerce" className="learn-more-btn">اعرف المزيد</a>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
