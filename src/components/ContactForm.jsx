import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaWhatsapp, 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter,
  FaTelegram,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";
import "../styles/ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        service: "",
        message: "",
    });

    const services = [
        "استيراد وتصدير السيارات",
        "تكنولوجيا المعلومات وتطوير التطبيقات",
        "التجارة الإلكترونية",
        "خدمة أخرى",
    ];

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("تم إرسال الرسالة! شكراً لتواصلك معنا.");
        setFormData({ name: "", email: "", country: "", service: "", message: "" });
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="contact-section" dir="rtl">
            <h2>تواصل معنا</h2>

            <div className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
                <div className="form-grid">
                    <div className="form-group" data-aos="zoom-in">
                        <span>الاسم</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="أدخل اسمك"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <span>البريد الإلكتروني</span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <span>الدولة</span>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="مثلاً: مصر، السعودية"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <span>نوع الخدمة المطلوبة</span>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>اختر الخدمة</option>
                            {services.map((service, i) => (
                                <option key={i} value={service}>{service}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <span>الرسالة</span>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="اكتب رسالتك هنا..."
                        rows="5"
                        required
                    />
                </div>

                <button type="button" className="submit-btn" onClick={handleSubmit}>إرسال</button>
            </div>

            <div className="contact-info">
                {/* قسم التواصل المباشر */}
                <div className="direct-contact">
                    <h3>تواصل مباشر</h3>
                    <div className="contact-icons">
                        <a 
                            href="https://wa.me/201118069683" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contact-icon whatsapp"
                            title="واتساب"
                        >
                            <FaWhatsapp size={28} />
                        </a>
                        
                        <a 
                            href="https://t.me/username" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contact-icon telegram"
                            title="تيليجرام"
                        >
                            <FaTelegram size={28} />
                        </a>
                        
                        <a 
                            href="mailto:info@example.com" 
                            className="contact-icon email"
                            title="البريد الإلكتروني"
                        >
                            <FaEnvelope size={28} />
                        </a>
                        
                        <a 
                            href="tel:+201118069683" 
                            className="contact-icon phone"
                            title="اتصال هاتفي"
                        >
                            <FaPhone size={28} />
                        </a>
                    </div>
                </div>

                {/* وسائل التواصل الاجتماعي */}
                <div className="social-media">
                    <h3>تابعنا على وسائل التواصل الاجتماعي</h3>
                    <div className="social-links">
                        <a 
                            href="https://linkedin.com/in/username" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon linkedin"
                            title="لينكد إن"
                        >
                            <FaLinkedin size={28} />
                        </a>
                        <a 
                            href="https://facebook.com/username" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon facebook"
                            title="فيسبوك"
                        >
                            <FaFacebook size={28} />
                        </a>
                        <a 
                            href="https://instagram.com/username" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon instagram"
                            title="إنستجرام"
                        >
                            <FaInstagram size={28} />
                        </a>
                        <a 
                            href="https://twitter.com/username" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon twitter"
                            title="تويتر"
                        >
                            <FaTwitter size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;