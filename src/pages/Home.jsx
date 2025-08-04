import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import AboutUs from '../components/About';
import OurServices from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientsPartners from '../components/ClientsPartners';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ArticlesList from '../components/ArticlesList';

const Home = () => {
    const location = useLocation();
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    useEffect(() => {
        if (location.state?.scrollToContact) {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div>
            <Helmet>
                <html lang={currentLang} />
                <title>
                    {currentLang === 'ar'
                        ? 'Wazir GlobalX FZCO | حلول تجارة السيارات والتقنية والمتاجر الإلكترونية - دبي'
                        : 'Wazir GlobalX FZCO | Automotive, Tech, and E-commerce Solutions - Dubai'}
                </title>
                <meta
                    name="description"
                    content={
                        currentLang === 'ar'
                            ? 'شركة Wazir GlobalX FZCO تقدم خدمات متكاملة في مجالات تجارة السيارات، وتكنولوجيا المعلومات، وإنشاء المتاجر الإلكترونية، انطلاقاً من مقرها في IFZA - دبي.'
                            : 'Wazir GlobalX FZCO provides integrated services in car trading, IT solutions, and e-commerce store development, operating from its headquarters in IFZA - Dubai.'
                    }
                />
                <meta
                    name="keywords"
                    content={
                        currentLang === 'ar'
                            ? 'تجارة السيارات, تقنية المعلومات, المتاجر الإلكترونية, دبي, Wazir GlobalX'
                            : 'car trading, IT solutions, ecommerce, Dubai, Wazir GlobalX'
                    }
                />
            </Helmet>

            <Hero />
            <div id="about">
                <AboutUs />
            </div>
            <div id="services">
                <OurServices />
            </div>
            <div id="why">
                <WhyChooseUs />
            </div>
            <div id="clients">
                <ClientsPartners />
            </div>
            <div id="artical">
                <ArticlesList />
            </div>
            <div style={{ background: "linear-gradient( #113fd8b8,rgb(255, 255, 255))" }} id="contact">
                <br />
                <ContactForm />
                <br />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
