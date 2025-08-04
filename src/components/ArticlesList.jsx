import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Articles.css';
import car from '../assets/neil-mark-thomas-vCX0NQeXWiY-unsplash.jpg';
import car1 from '../assets/colin-lloyd-titfVBWn_hc-unsplash.jpg';
import car2 from '../assets/pexels-egeardaphotos-2148533277-30149547.jpg';
import tech1 from '../assets/b6.webp';
import tech2 from '../assets/b6.webp';
import ecommerce1 from '../assets/b6.webp';

const ArticlesList = () => {
    const allArticles = [
        {
            id: 1,
            title: "أفضل السيارات الكهربائية لعام 2023",
            summary: "تعرف على أحدث السيارات الكهربائية وأكثرها كفاءة في استهلاك الطاقة لهذا العام",
            image: car,
            date: "15 أكتوبر 2023",
            content: "المحتوى الكامل للمقال عن السيارات الكهربائية...",
            category: "cars"
        },
           {
            id: 5,
            title: "مستقبل إنترنت الأشياء في المنازل الذكية",
            summary: "كيف ستعيش في منزل ذكي بالكامل خلال السنوات القادمة؟",
            image: 'https://images.prismic.io//intuzwebsite/21a68fa0-00a6-4513-95a4-d06900a4c3dd_Frame+14443%402x.png?w=2400&q=80&auto=format,compress&fm=png8',
            date: "28 أكتوبر 2023",
            content: "المحتوى الكامل عن المنازل الذكية وإنترنت الأشياء...",
            category: "technology"
        },
             {
            id: 7,
            title: "أدوات لا غنى عنها لإدارة المتاجر الإلكترونية",
            summary: "تعرف على أهم الأدوات التي ستسهل إدارة متجرك الإلكتروني",
                 date: "15 نوفمبر 2023",
                 image: 'https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg',
                 content: "المحتوى الكامل عن أدوات إدارة المتاجر الإلكترونية...",
            category: "ecommerce"
        }
        ,
        {
            id: 2,
            title: "كيف تحافظ على سيارتك في فصل الشتاء",
            summary: "نصائح مهمة للحفاظ على سيارتك أثناء الطقس البارد والأمطار",
            image: car1,
            date: "5 نوفمبر 2023",
            content: "المحتوى الكامل للمقال عن صيانة السيارات في الشتاء...",
            category: "cars"
        },
        {
            id: 3,
            title: "دليل شراء السيارات المستعملة",
            summary: "خطوات عملية لفحص وشراء سيارة مستعملة بثقة",
            image: car2,
            date: "20 سبتمبر 2023",
            content: "المحتوى الكامل للمقال عن شراء السيارات المستعملة...",
            category: "cars"
        },
        {
            id: 4,
            title: "أحدث تقنيات الذكاء الاصطناعي في 2023",
            summary: "كيف تغير تقنيات الذكاء الاصطناعي عالمنا هذا العام؟",
            image: tech1,
            date: "10 نوفمبر 2023",
            content: "المحتوى الكامل عن تقنيات الذكاء الاصطناعي...",
            category: "technology"
        },
        {
            id: 6,
            title: "كتب تزيد مبيعات متجرك الإلكتروني",
            summary: "أفضل الاستراتيجيات المثبتة لزيادة مبيعات المتاجر الإلكترونية",
            image: ecommerce1,
            date: "1 ديسمبر 2023",
            content: "المحتوى الكامل عن استراتيجيات زيادة المبيعات...",
            category: "ecommerce"
        },
        {
            id: 7,
            title: "أدوات لا غنى عنها لإدارة المتاجر الإلكترونية",
            summary: "تعرف على أهم الأدوات التي ستسهل إدارة متجرك الإلكتروني",
            date: "15 نوفمبر 2023",
            content: "المحتوى الكامل عن أدوات إدارة المتاجر الإلكترونية...",
            category: "ecommerce"
        }
    ];
    const [activeCategory, setActiveCategory] = useState('all');
    const [visibleCount, setVisibleCount] = useState(3);
    const [showAll, setShowAll] = useState(false);
    const filteredArticles = activeCategory === 'all'
        ? allArticles
        : allArticles.filter(article => article.category === activeCategory);

    const displayedArticles = showAll ? filteredArticles : filteredArticles.slice(0, 3);

    const toggleShowAll = () => setShowAll(prev => !prev);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setShowAll(false); // reset to first 3 articles when category changes
    };

    return (
        <div className="articles-page">
            <h1>أحدث المقالات</h1>

            <div className="articles-categories">
                <button className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => { setActiveCategory('all'); setVisibleCount(3); }}>
                    الكل
                </button>
                <button className={`category-btn ${activeCategory === 'cars' ? 'active' : ''}`} onClick={() => { setActiveCategory('cars'); setVisibleCount(3); }}>
                    السيارات
                </button>
                <button className={`category-btn ${activeCategory === 'technology' ? 'active' : ''}`} onClick={() => { setActiveCategory('technology'); setVisibleCount(3); }}>
                    التكنولوجيا
                </button>
                <button className={`category-btn ${activeCategory === 'ecommerce' ? 'active' : ''}`} onClick={() => { setActiveCategory('ecommerce'); setVisibleCount(3); }}>
                    التجارة الإلكترونية
                </button>
            </div>

            <div className="articles-grid">
                {displayedArticles.map(article => (
                    <article key={article.id} className="article-card">
                        <Link style={{ textDecoration: "none" }} to={`/articles/${article.id}`}>
                            {article.image && <img src={article.image} alt={article.title} className="article-image" />}
                            <div className="article-content">
                                <h2>{article.title}</h2>
                                <p className="article-summary">{article.summary}</p>
                                <div className="article-meta">
                                    <span className="article-date">{article.date}</span>
                                    <span className="article-category">
                                        {article.category === 'cars' ? 'سيارات' :
                                            article.category === 'technology' ? 'تكنولوجيا' :
                                                'تجارة إلكترونية'}
                                    </span>
                                    <span className="read-more">اقرأ المزيد →</span>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>

            {/* زر عرض المزيد / عرض أقل */}
            {filteredArticles.length > 3 && (
                <div className="show-more-wrapper">
                    <button className="show-more-btn" onClick={toggleShowAll}>
                        {showAll ? 'عرض أقل' : 'عرض المزيد'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ArticlesList;