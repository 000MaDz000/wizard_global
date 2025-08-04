import React, { useState } from 'react';
import { FaShippingFast, FaSearch, FaFileAlt, FaCarSide } from 'react-icons/fa';
import './Features.css';

const CarServicesSection = () => {
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
    const handleSubmit = (e) => {
        e.preventDefault();

        // تحضير بيانات التواصل
        const contactDetails = {
            email: requestForm.contact_email,
            phone: requestForm.contact_phone,
            whatsapp: requestForm.contact_whatsapp
        };

        const formData = {
            ...requestForm,
            contact_details: contactDetails
        };

        console.log('طلب سيارة:', formData);
        alert('تم استلام طلبك بنجاح! سنتواصل معك قريباً');

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

    return (
        <div className="car-services-container">
            {/* قسم الخدمات */}
            <section className="car-services">
                <h2>خدماتنا في تجارة السيارات</h2>
                <p className="services-description">
                    {carServicesData.car_services_description}
                </p>

                <div className="car-services-grid">
                    {carServicesData.car_services_list.map(service => (
                        <div key={service.car_service_id} className="car-service-card">
                            <div className="car-service-icon">
                                {renderServiceIcon(service.car_service_icon)}
                            </div>
                            <h3>{service.car_service_title}</h3>
                            <p>{service.car_service_description}</p>
                        </div>
                    ))}
                </div>

                <div className="car-categories">
                    <h3>الأنواع المتوفرة:</h3>
                    <div className="categories-list">
                        {carServicesData.car_available_categories.map((category, index) => (
                            <span key={index} className="category-badge">{category}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* نموذج طلب السيارة */}
            <section className="car-request-form">
                <h2>طلب سيارة خاصة</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="car_type">نوع السيارة:</label>
                        <select
                            id="car_type"
                            name="car_type"
                            value={requestForm.car_type}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">اختر نوع السيارة</option>
                            {carServicesData.car_available_types.map((type, index) => (
                                <option key={index} value={type.value}>{type.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="destination">البلد المستهدف:</label>
                        <input
                            type="text"
                            id="destination"
                            name="destination"
                            value={requestForm.destination}
                            onChange={handleInputChange}
                            required
                            placeholder="أدخل اسم البلد"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="budget">الميزانية:</label>
                        <select
                            id="budget"
                            name="budget"
                            value={requestForm.budget}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">اختر الميزانية</option>
                            {carServicesData.car_budget_ranges.map((range, index) => (
                                <option key={index} value={range.value}>{range.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>طريقة التواصل:</label>
                        <div className="contact-methods">
                            {carServicesData.car_contact_methods.map((method, index) => (
                                <label key={index} className="method-option">
                                    <input
                                        type="radio"
                                        name="contact_method"
                                        value={method.value}
                                        checked={requestForm.contact_method === method.value}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    {method.label}
                                </label>
                            ))}
                        </div>

                        {/* حقول التواصل الديناميكية */}
                        {requestForm.contact_method === 'email' && (
                            <div className="contact-detail-field">
                                <label htmlFor="contact_email">البريد الإلكتروني:</label>
                                <input
                                    type="email"
                                    id="contact_email"
                                    name="contact_email"
                                    value={requestForm.contact_email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="example@domain.com"
                                />
                            </div>
                        )}

                        {requestForm.contact_method === 'phone' && (
                            <div className="contact-detail-field">
                                <label htmlFor="contact_phone">رقم الهاتف:</label>
                                <input
                                    type="tel"
                                    id="contact_phone"
                                    name="contact_phone"
                                    value={requestForm.contact_phone}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="01XXXXXXXXX"
                                />
                            </div>
                        )}

                        {requestForm.contact_method === 'whatsapp' && (
                            <div className="contact-detail-field">
                                <label htmlFor="contact_whatsapp">رقم الواتساب:</label>
                                <input
                                    type="tel"
                                    id="contact_whatsapp"
                                    name="contact_whatsapp"
                                    value={requestForm.contact_whatsapp}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="01XXXXXXXXX"
                                />
                            </div>
                        )}
                    </div>

                    <button type="submit" className="submit-btn">إرسال الطلب</button>
                </form>
            </section>
        </div>
    );
};

export default CarServicesSection;