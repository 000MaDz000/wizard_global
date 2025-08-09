import React, { useState } from 'react';
import { FaShippingFast, FaSearch, FaFileAlt, FaCarSide } from 'react-icons/fa';
import './Features.css';
import ClientImage from '../../components/ClientImage';
import { submitCarContact } from '../../api/contact/senders';

/**
 * 
 * @param {{data?: import('../../api/types/content-types').CarsPage['services_section'] & {categories_section_title?: string, categories?: import('../../api/types/content-types').CarsPage['categories']}}} param0 
 * @returns 
 */
const CarServicesSection = ({ data }) => {
    if (!data) return;
    // بيانات الخدمات والأنواع
    const carServicesData = {
        car_services_description: "تقدم شركتنا خدمات استيراد وتصدير السيارات الجديدة والمستعملة من أسواق متعددة، مع التركيز على الجودة، التوثيق الكامل، والشحن الآمن إلى الأسواق العالمية.",

        car_services_list: [
            {
                car_service_id: 1,
                car_service_title: "شحن السيارات عالمياً",
                car_service_description: "خدمات شحن آمنة وسريعة لجميع الوجهات العالمية",
                car_service_icon: "shipping"
            },
            {
                car_service_id: 2,
                car_service_title: "فحص ومعاينة دقيقة",
                car_service_description: "فحص شامل لكل سيارة قبل عملية الشحن",
                car_service_icon: "inspection"
            },
            {
                car_service_id: 3,
                car_service_title: "توثيق جمركي كامل",
                car_service_description: "جميع الأوراق والمستندات القانونية المطلوبة",
                car_service_icon: "documents"
            },
            {
                car_service_id: 4,
                car_service_title: "سيارات حسب الطلب",
                car_service_description: "نجد لك السيارة التي تناسب احتياجاتك بالضبط",
                car_service_icon: "custom"
            }
        ],

        car_available_categories: [
            "سيارات كهربائية",
            "سيارات تجارية",
            "سيارات دفع رباعي",
            "سيارات أوروبية",
            "سيارات صينية",
            "سيارات يابانية"
        ],

        car_available_types: [
            { value: "electric", label: "سيارات كهربائية" },
            { value: "commercial", label: "سيارات تجارية" },
            { value: "suv", label: "سيارات دفع رباعي" },
            { value: "european", label: "سيارات أوروبية" },
            { value: "chinese", label: "سيارات صينية" },
            { value: "japanese", label: "سيارات يابانية" }
        ],

        car_budget_ranges: [
            { value: "10-20", label: "10,000 - 20,000 دولار" },
            { value: "20-30", label: "20,000 - 30,000 دولار" },
            { value: "30-50", label: "30,000 - 50,000 دولار" },
            { value: "50+", label: "أكثر من 50,000 دولار" }
        ],

        car_contact_methods: [
            { value: "whatsapp", label: "واتساب" },
            { value: "email", label: "بريد إلكتروني" },
            { value: "phone", label: "مكالمة هاتفية" }
        ]
    };

    const [requestForm, setRequestForm] = useState({
        car_type: '',
        destination: '',
        budget: '',
        contact_method: '',
        contact_email: '',
        contact_phone: '',
        contact_whatsapp: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setRequestForm(prev => ({
            ...prev,
            [name]: value,
            // مسح القيم الأخرى عند تغيير طريقة التواصل
            ...(name === 'contact_method' && {
                contact_email: '',
                contact_phone: '',
                contact_whatsapp: ''
            })
        }));
    };

    // معالجة إرسال النموذج
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // استخراج وسيلة التواصل حسب الاختيار
            let contact_info = '';
            if (requestForm.contact_method === 'email') contact_info = requestForm.contact_email;
            if (requestForm.contact_method === 'phone') contact_info = requestForm.contact_phone;
            if (requestForm.contact_method === 'whatsapp') contact_info = requestForm.contact_whatsapp;

            // تجهيز البيانات لإرسالها
            const payload = {
                car_type: requestForm.car_type,
                country: requestForm.destination,
                budget: requestForm.budget,
                contact_method: requestForm.contact_method,
                contact_info,
            };

            await submitCarContact(payload);

            alert('✅ تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.');

            // إعادة تعيين النموذج
            setRequestForm({
                car_type: '',
                destination: '',
                budget: '',
                contact_method: '',
                contact_email: '',
                contact_phone: '',
                contact_whatsapp: ''
            });

        } catch (error) {
            console.error('فشل إرسال الطلب:', error);
            alert('❌ حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى لاحقًا.');
        }
    };


    // عرض أيقونة الخدمة
    const renderServiceIcon = (icon) => {
        switch (icon) {
            case 'shipping': return <FaShippingFast />;
            case 'inspection': return <FaSearch />;
            case 'documents': return <FaFileAlt />;
            case 'custom': return <FaCarSide />;
            default: return <FaCarSide />;
        }
    };

    console.log(data);

    return (
        <div className="car-services-container">
            {/* قسم الخدمات */}
            <section className="car-services">
                <h2>{data.title}</h2>
                <p className="services-description">
                    {data.description}
                </p>

                <div className="car-services-grid">
                    {data.services?.map(service => (
                        <div key={service.id} className="car-service-card">
                            <div className="car-service-icon">
                                <ClientImage src={service.service_icon} style={{ width: "8rem", height: "8rem" }} />
                            </div>
                            <h3>{service.service_name}</h3>
                            <p>{service.service_details}</p>
                        </div>
                    ))}
                </div>

                <div className="car-categories">
                    <h3>{data.categories_section_title}</h3>
                    <div className="categories-list">
                        {data.categories?.map((category, index) => (
                            <span key={category.text} className="category-badge">{category.text}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* نموذج طلب السيارة */}
            <section className="car-request-form">
                <h2>{data.contact_section.title}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="car_type">{data.contact_section.form.car_type.title}</label>
                        <select
                            id="car_type"
                            name="car_type"
                            value={requestForm.car_type}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">{data.contact_section.form.car_type.placeholder || data.contact_section.form.car_type.title}</option>
                            {data.contact_section.form.car_type.chooices.map((type, index) => (
                                <option key={type.text} value={type.text}>{type.text}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="destination">{data.contact_section.form.destination.label}</label>
                        <input
                            type="text"
                            id="destination"
                            name="destination"
                            value={requestForm.destination}
                            onChange={handleInputChange}
                            required
                            placeholder={data.contact_section.form.destination.placeholder}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="budget">{data.contact_section.form.budget.title}</label>
                        <select
                            id="budget"
                            name="budget"
                            value={requestForm.budget}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">{data.contact_section.form.budget.placeholder || data.contact_section.form.budget.title}</option>
                            {data.contact_section.form.budget.chooices.map((range) => (
                                <option key={range} value={range.text}>{range.text}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>{data.contact_section.form.contact_method_title}</label>
                        <div className="contact-methods">
                            <label className="method-option">
                                <input
                                    type="radio"
                                    name="contact_method"
                                    value={"whatsapp"}
                                    checked={requestForm.contact_method === "whatsapp"}
                                    onChange={handleInputChange}
                                    placeholder={data.contact_section.form.whatsapp.placeholder}
                                    required
                                />
                                {data.contact_section.form.whatsapp_contact_chooice_text}
                            </label>

                            <label className="method-option">
                                <input
                                    type="radio"
                                    name="contact_method"
                                    value={"email"}
                                    checked={requestForm.contact_method === "email"}
                                    onChange={handleInputChange}
                                    placeholder={data.contact_section.form.email.placeholder}
                                    required
                                />
                                {data.contact_section.form.email_contact_chooice_text}
                            </label>

                            <label className="method-option">
                                <input
                                    type="radio"
                                    name="contact_method"
                                    value={"phone"}
                                    checked={requestForm.contact_method === "phone"}
                                    onChange={handleInputChange}
                                    placeholder={data.contact_section.form.phone.placeholder}
                                    required
                                />
                                {data.contact_section.form.phone_contact_chooice_text}
                            </label>

                        </div>

                        {/* حقول التواصل الديناميكية */}
                        {requestForm.contact_method === 'email' && (
                            <div className="contact-detail-field">
                                <label htmlFor="contact_email">{data.contact_section.form.email.label}</label>
                                <input
                                    type="email"
                                    id="contact_email"
                                    name="contact_email"
                                    value={requestForm.contact_email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder={data.contact_section.form.email.placeholder}
                                />
                            </div>
                        )}

                        {requestForm.contact_method === 'phone' && (
                            <div className="contact-detail-field">
                                <label htmlFor="contact_phone">{data.contact_section.form.phone.label}</label>
                                <input
                                    type="tel"
                                    id="contact_phone"
                                    name="contact_phone"
                                    value={requestForm.contact_phone}
                                    onChange={handleInputChange}
                                    required
                                    placeholder={data.contact_section.form.phone.placeholder}
                                />
                            </div>
                        )}

                        {requestForm.contact_method === 'whatsapp' && (
                            <div className="contact-detail-field">
                                <label htmlFor="contact_whatsapp">{data.contact_section.form.whatsapp.label}</label>
                                <input
                                    type="tel"
                                    id="contact_whatsapp"
                                    name="contact_whatsapp"
                                    value={requestForm.contact_whatsapp}
                                    onChange={handleInputChange}
                                    required
                                    placeholder={data.contact_section.form.whatsapp.placeholder}
                                />
                            </div>
                        )}
                    </div>

                    <button type="submit" className="submit-btn">{data.contact_section.form.submit_button_text}</button>
                </form>
            </section>
        </div>
    );
};

export default CarServicesSection;