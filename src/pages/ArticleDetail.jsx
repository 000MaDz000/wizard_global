import React, { useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import '../styles/Articles.css';
import car from '../assets/neil-mark-thomas-vCX0NQeXWiY-unsplash.jpg';
import car1 from '../assets/colin-lloyd-titfVBWn_hc-unsplash.jpg';
import car2 from '../assets/pexels-egeardaphotos-2148533277-30149547.jpg';
import tech1 from '../assets/b6.webp';
import ecommerce1 from '../assets/b6.webp';
import logo from '../assets/red_logo.png';
import Footer from '../components/Footer';

const ArticleDetail = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/', { state: { scrollToContact: true } });
    };

    const { id } = useParams();

    const articles = [
        { id: 1, title: "أفضل السيارات الكهربائية لعام 2023", summary: "تعرف على أحدث السيارات الكهربائية...", image: car, date: "15 أكتوبر 2023", content: "المحتوى الكامل للمقال عن السيارات الكهربائية...", category: "cars" },
        { id: 5, title: "مستقبل إنترنت الأشياء في المنازل الذكية", summary: "كيف ستعيش في منزل ذكي بالكامل...", image: 'https://images.prismic.io//intuzwebsite/21a68fa0-00a6-4513-95a4-d06900a4c3dd_Frame+14443%402x.png?w=2400&q=80&auto=format,compress&fm=png8', date: "28 أكتوبر 2023", content: "المحتوى الكامل عن المنازل الذكية وإنترنت الأشياء...", category: "technology" },
        { id: 7, title: "أدوات لا غنى عنها لإدارة المتاجر الإلكترونية", summary: "تعرف على أهم الأدوات...", date: "15 نوفمبر 2023", image: 'https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg', content: "المحتوى الكامل عن أدوات إدارة المتاجر الإلكترونية...", category: "ecommerce" },
        { id: 2, title: "كيف تحافظ على سيارتك في فصل الشتاء", summary: "نصائح مهمة للحفاظ على سيارتك...", image: car1, date: "5 نوفمبر 2023", content: "المحتوى الكامل للمقال عن صيانة السيارات في الشتاء...", category: "cars" },
        { id: 3, title: "دليل شراء السيارات المستعملة", summary: "خطوات عملية لفحص وشراء سيارة...", image: car2, date: "20 سبتمبر 2023", content: "المحتوى الكامل للمقال عن شراء السيارات المستعملة...", category: "cars" },
        { id: 4, title: "أحدث تقنيات الذكاء الاصطناعي في 2023", summary: "كيف تغير تقنيات الذكاء الاصطناعي...", image: tech1, date: "10 نوفمبر 2023", content: "المحتوى الكامل عن تقنيات الذكاء الاصطناعي...", category: "technology" },
        { id: 6, title: "كتب تزيد مبيعات متجرك الإلكتروني", summary: "أفضل الاستراتيجيات لزيادة مبيعات المتاجر الإلكترونية", image: ecommerce1, date: "1 ديسمبر 2023", content: "المحتوى الكامل عن استراتيجيات زيادة المبيعات...", category: "ecommerce" }
    ];

    const article = articles.find(article => article.id === parseInt(id));

    if (!article) {
        return <div className="article-not-found">المقال غير موجود</div>;
    }

    return (
        <>
            <div className="article-detail-page">
                <nav className="navbar_bar">
                    <div className="navbar_bar-container">
                        <div className="navbar_bar-contact">
                            <a style={{ cursor:"pointer"}} onClick={handleContactClick} className="contact-link">
                                تواصل معنا
                            </a>
                        </div>
                        <div className="navbar_bar-links">
                            <NavLink to="/">
                                <img src={logo} alt="new" />
                            </NavLink>
                        </div>
                    </div>
                </nav>

                <img src={article.image} alt={article.title} className="article-detail-image" />
                <div className="article-detail-content">
                    <h1>{article.title}</h1>
                    <div className="article-meta">
                        <span className="article-date">{article.date}</span>
                    </div>
                    <div className="article-text">
                        {article.content.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ArticleDetail;
