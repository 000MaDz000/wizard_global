import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Articles.css';
import ClientImage from './ClientImage';

/**
 * 
 * @param {{data?: import('../api/types/components').Articles}} param0 
 * @returns 
 */
const ArticlesList = ({ data }) => {
    const allArticles = data?.articles || [];
    const [activeCategory, setActiveCategory] = useState('all');
    const [visibleCount, setVisibleCount] = useState(3);
    const [showAll, setShowAll] = useState(false);

    const filteredArticles = activeCategory === 'all'
        ? allArticles
        : allArticles.filter(article => article.article_category.name === activeCategory);

    const displayedArticles = showAll ? filteredArticles : filteredArticles.slice(0, 3);

    const toggleShowAll = () => setShowAll(prev => !prev);

    // const handleCategoryChange = (category) => {
    //     setActiveCategory(category);
    //     setShowAll(false); // reset to first 3 articles when category changes
    // };

    if (!data) return null;

    return (
        <div className="articles-page">
            <h1>{data.title.title_start} {data.title.title_end}</h1>

            <div className="articles-categories">
                <button className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => { setActiveCategory('all'); setVisibleCount(3); }}>
                    {data.all_categories_text}
                </button>
                {
                    data.categories?.map(category => (
                        <button key={category.id} className={`category-btn ${activeCategory === category.name ? 'active' : ''}`} onClick={() => { setActiveCategory(category.name); setVisibleCount(3); }}>
                            {category.name}
                        </button>
                    ))
                }

            </div>

            <div className="articles-grid">
                {displayedArticles.map(article => (
                    <article key={article.id} className="article-card">
                        <Link style={{ textDecoration: "none" }} to={`/articles/${article.id}`}>
                            {article.image && <ClientImage src={article.image} alt={article.image?.alternativeText || article.title} className="article-image" />}
                            <div className="article-content">
                                <h2>{article.title}</h2>
                                <p className="article-summary">{article.summary}</p>
                                <div className="article-meta">
                                    <span className="article-date">{article.date}</span>
                                    <span className="article-category">
                                        {article.article_category?.name}
                                    </span>
                                    <span className="read-more">{data.readmore_text}</span>
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
                        {showAll ? data.show_less_text : data.show_more_text}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ArticlesList;