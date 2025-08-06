import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/ClientsPartners.css";
import partner1 from '../assets/Frame 48.png';
import partner2 from '../assets/Frame 49.png';
import partner3 from '../assets/Frame 50.png';
import partner4 from '../assets/Frame 51.png';
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const testimonials = [
    {
        name: "أحمد محمد",
        job: "مدير مشاريع",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        feedback: "خدمة ممتازة وسرعة في الاستجابة. أوصي بهم بشدة!",
    },
    {
        name: "سارة علي",
        job: "مديرة تسويق",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        feedback: "تعامل راقٍ وفريق دعم محترف. تجربة رائعة.",
    },
    {
        name: "خالد سمير",
        job: "رائد أعمال",
        image: "https://randomuser.me/api/portraits/men/56.jpg",
        rating: 5,
        feedback: "منصة متكاملة سهلت علينا الكثير من الإجراءات.",
    },
    {
        name: "ليلى أحمد",
        job: "مديرة مبيعات",
        image: "https://randomuser.me/api/portraits/women/63.jpg",
        rating: 5,
        feedback: "أفضل خدمة عملاء واجهتها في مجال السيارات.",
    },
    {
        name: "محمد خالد",
        job: "مالك شركة",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 4,
        feedback: "سرعة في التنفيذ ودقة في المواعيد.",
    },
];

const ClientsPartners = ({ isAuthenticated }) => {
    const [showAllTestimonials, setShowAllTestimonials] = useState(false);
    const [displayedTestimonials, setDisplayedTestimonials] = useState([]);
    const [newTestimonial, setNewTestimonial] = useState({
        name: "",
        job: "",
        rating: 5,
        feedback: ""
    });
    const [showTestimonialForm, setShowTestimonialForm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        setDisplayedTestimonials(testimonials.slice(0, 3));
    }, []);

    useEffect(() => {
        if (showAllTestimonials) {
            setDisplayedTestimonials(testimonials);
        } else {
            setDisplayedTestimonials(testimonials.slice(0, 3));
        }
    }, [showAllTestimonials]);

    const toggleTestimonials = () => {
        setShowAllTestimonials(!showAllTestimonials);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTestimonial(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRatingChange = (rating) => {
        setNewTestimonial(prev => ({
            ...prev,
            rating
        }));
    };

    const handleSubmitTestimonial = (e) => {
        e.preventDefault();
        // هنا سيتم إرسال البيانات إلى الخادم عند اكتمال الجزء الخلفي
        const submittedTestimonial = {
            ...newTestimonial,
            image: "https://randomuser.me/api/portraits/men/1.jpg" // صورة افتراضية
        };
        
        testimonials.unshift(submittedTestimonial);
        setDisplayedTestimonials(showAllTestimonials ? [...testimonials] : [...testimonials.slice(0, 3)]);
        setNewTestimonial({
            name: "",
            job: "",
            rating: 5,
            feedback: ""
        });
        setShowTestimonialForm(false);
    };

    const handleAddTestimonialClick = () => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }
        setShowTestimonialForm(true);
    };

    return (
        <section className="clients-section">
            {/* شركاؤنا */}
            <div className="partners-section" data-aos="fade-up">
                <h4>شركائنا في النجاح </h4>
                <p>تندرج تحت مظلة "شركة Wazir" مجموعة من الشركاء الاستراتيجيين الذين يدعمون نجاحنا المستمر في مجالات متنوعة.</p>
                <div className="partners-logos" data-aos="zoom-in">
                    <img src={partner1} alt="شريك 1" />
                    <img src={partner2} alt="شريك 2" />
                    <img src={partner3} alt="شريك 3" />
                    <img src={partner4} alt="شريك 4" />
                </div>
            </div>

            {/* آراء العملاء */}
            <div className="testimonials" data-aos="fade-up" data-aos-delay="200">
                <div className="testimonials-header">
                    <h4>آراء عملائنا</h4>
                    <button 
                        onClick={handleAddTestimonialClick}
                        className="add-testimonial-btn"
                    >
                        أضف رأيك
                    </button>
                </div>
                
                {showTestimonialForm && (
                    <form onSubmit={handleSubmitTestimonial} className="testimonial-form" data-aos="fade-up">
                        <h3>أضف رأيك</h3>
                        <div className="form-group">
                            <label>الاسم</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={newTestimonial.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>الوظيفة</label>
                            <input 
                                type="text" 
                                name="job" 
                                value={newTestimonial.job}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>التقييم</label>
                            <div className="rating-stars">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar 
                                        key={star}
                                        className={`star-icon ${star <= newTestimonial.rating ? 'active' : ''}`}
                                        onClick={() => handleRatingChange(star)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="form-group">
                            <label>الرأي</label>
                            <textarea 
                                name="feedback" 
                                value={newTestimonial.feedback}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="submit-btn">إرسال</button>
                            <button 
                                type="button" 
                                className="cancel-btn"
                                onClick={() => setShowTestimonialForm(false)}
                            >
                                إلغاء
                            </button>
                        </div>
                    </form>
                )}

                <div className="opinion">
                    {displayedTestimonials.map((t, i) => (
                        <div key={i} className="testimonial-card" data-aos="fade-up" data-aos-delay={300 + i * 100}>
                            <img className="testimonial-img" src={t.image} alt={t.name} />
                            <h3>{t.name}</h3>
                            <p className="job-title">{t.job}</p>
                            <div className="stars">
                                {[...Array(t.rating)].map((_, i) => (
                                    <FaStar key={i} className="star-icon" />
                                ))}
                            </div>
                            <p className="feedback">"{t.feedback}"</p>
                        </div>
                    ))}
                </div>
                
                {testimonials.length > 3 && (
                    <button 
                        onClick={toggleTestimonials} 
                        className="show-more-btn"
                        data-aos="fade-up"
                    >
                        {showAllTestimonials ? 'عرض أقل' : 'عرض المزيد'}
                    </button>
                )}
            </div>
        </section>
    );
};

export default ClientsPartners;
