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
import { useHomepage } from '../api/hooks/useHomepage';
import { buildStrapiPopulateParams, homepagePopulation } from '../api/const/populations';
import Loading from '../components/Loading';
import { useAuth } from '../api/hooks/useAuth';

const Home = () => {
    const auth = useAuth();
    const isAuthenticated = Boolean(auth.data) && Boolean(!auth.isLoading);
    const location = useLocation();
    const { i18n } = useTranslation();
    const response = useHomepage(buildStrapiPopulateParams(homepagePopulation));
    const currentLang = i18n.language;

    useEffect(() => {
        if (location.state?.scrollToContact) {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    if (response.isLoading) {
        return <Loading />
    }

    const data = response.data?.data;


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

            <Hero data={data.hero} />

            <div id="about">
                <AboutUs data={data.about} />
            </div>
            <div id="services">
                <OurServices data={data.services} />
            </div>
            <div id="why">
                <WhyChooseUs data={data.why_us} />
            </div>

            <div id="clients">
                <ClientsPartners data={data.clients_partners} isAuthenticated={isAuthenticated} />
            </div>

            <div id="artical">
                <ArticlesList data={data.newest_articles} />
            </div>

            <div style={{ background: "linear-gradient( #113fd8b8,rgb(255, 255, 255))" }} id="contact">
                <br />
                <ContactForm data={data.contact} />
                <br />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
