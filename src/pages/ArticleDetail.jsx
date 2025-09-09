import React, { useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import  './cars/Nav.css'

import '../styles/Articles.css';
import Footer from '../components/Footer';

import logo from '../assets/red_logo.png';
import { useArticle } from '../api/hooks';
import Loading from '../components/Loading';
import ClientImage from '../components/ClientImage';
import LanguageSelector from '../components/LanguageSelector';

const ArticleDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const articleRes = useArticle(id);

    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/', { state: { scrollToContact: true } });
    };

    if (articleRes.isLoading) return <Loading />;

    const article = articleRes.data.data;

    if (!article) {
        return <div className="article-not-found">المقال غير موجود</div>;
    }

    return (
        <>
            <Helmet>
                <html lang={currentLang} />
                <title>
                    {currentLang === 'ar'
                        ? `${article.title} | مقالات Wazir GlobalX`
                        : `${article.title} | Wazir GlobalX Articles`}
                </title>
                <meta
                    name="description"
                    content={
                        currentLang === 'ar'
                            ? `اقرأ مقال "${article.title}" من مقالات Wazir GlobalX. مواضيع متعلقة بالسيارات، التكنولوجيا، والتجارة الإلكترونية.`
                            : `Read the article "${article.title}" from Wazir GlobalX Articles. Topics include cars, technology, and e-commerce.`
                    }
                />
            </Helmet>

            <div className="article-detail-page">
               
                <nav className="navbar_bar">
                    <div className="navbar_bar-container">
                        <div className="navbar_bar-contact">
                            <a style={{ cursor: "pointer" }} onClick={handleContactClick} className="contact-link">
                                {article.navbar_contact_link_text}
                            </a>
                        {/* <LanguageSelector /> */}

                        </div>
                        <div className="navbar_bar-links">
                            <NavLink to="/">
                                <img src={logo} alt="new" />
                            </NavLink>
                        </div>
                    </div>
                </nav>

                <ClientImage src={article.image} alt={article.title} className="article-detail-image" />
                <div className="article-detail-content">
                    <h1>{article.title}</h1>
                    <div className="article-meta">
                        <span className="article-date">{article.date}</span>
                    </div>
                    <div className="article-text" dangerouslySetInnerHTML={{ __html: article.content }}>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ArticleDetail;
