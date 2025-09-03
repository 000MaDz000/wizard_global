import React, { useState, useEffect, useCallback } from "react";
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
    FaPhone,
} from "react-icons/fa";
import "../styles/ContactForm.css";
import { submitHomeContact } from "../api/contact/senders";

/**
 * 
 * @param {{data?: import("../api/types/components").ContactSection}} param0 
 * @returns 
 */
const ContactForm = ({ data }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        service: "",
        message: "",
    });

    const services = data?.form?.service?.chooices?.map(item => item.text) || []

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        await submitHomeContact({
            name: formData.name,
            email: formData.email,
            country: formData.country,
            service: formData.service,
            message: formData.message
        });

        alert("تم إرسال الرسالة! شكراً لتواصلك معنا.");
        setFormData({ name: "", email: "", country: "", service: "", message: "" });
    }, [formData]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    if (!data) return null;

    return (
        <section className="contact-section" dir="rtl">
            <h2>{data.title.title_start} {data.title.title_end}</h2>

            <div className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
                <div className="form-grid">
                    <div className="form-group" data-aos="zoom-in">
                        <span>{data.form.name.label}</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={data.form.name.placeholder}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <span>{data.form.email.label}</span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={data.form.email.label}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <span>{data.form.country.label}</span>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder={data.form.country.label}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <span>{data.form.choose_service_text}</span>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>{data.form.choose_service_text}</option>
                            {services.map((service, i) => (
                                <option key={i} value={service}>{service}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <span>{data.form.message.label}</span>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={data.form.message.placeholder}
                        rows="5"
                        required
                    />
                </div>

                <button type="button" className="submit-btn" onClick={handleSubmit}>{data.form.submit_button_text}</button>
            </div>

            <div className="contact-info">
                {/* قسم التواصل المباشر */}
                <div className="direct-contact">
                    <h3>{data.direct_contact_title}</h3>
                    <div className="contact-icons">
                        <a
                            href={`https://wa.me/${data.contact_info?.whatsapp_number}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-icon whatsapp"
                        >
                            <FaWhatsapp size={28} />
                        </a>

                        <a
                            href={`https://t.me/${data.contact_info?.telegram_number}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-icon telegram"
                        >
                            <FaTelegram size={28} />
                        </a>

                        <a
                            href={`https://botim.me/${data.contact_info?.botim_number}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-icon botim"
                        >
                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "50%",
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    fontSize: "45px"
                                }}
                            >
                                b
                            </span>
                        </a>

                        <a
                            href={`mailto:${data.contact_info?.email}`}
                            className="contact-icon email"
                        >
                            <FaEnvelope size={28} />
                        </a>

                        <a
                            href={`tel:+${data.contact_info?.phone}`}
                            className="contact-icon phone"
                        >
                            <FaPhone size={28} />
                        </a>
                    </div>
                </div>

                {/* وسائل التواصل الاجتماعي */}
                <div className="social-media">
                    <h3>{data.social_media_contact_title}</h3>
                    <div className="social-links">
                        <a
                            href={`https://linkedin.com/in/${data.contact_info?.linkedin_username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon linkedin"
                        >
                            <FaLinkedin size={28} />
                        </a>
                        <a
                            href={`https://facebook.com/${data.contact_info?.facebook_username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon facebook"
                        >
                            <FaFacebook size={28} />
                        </a>
                        <a
                            href={`https://instagram.com/${data.contact_info?.instagram_username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon instagram"
                        >
                            <FaInstagram size={28} />
                        </a>
                        <a
                            href={`https://twitter.com/${data.contact_info?.twitter_username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon twitter"
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
            
