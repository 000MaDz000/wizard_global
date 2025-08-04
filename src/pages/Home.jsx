import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import AboutUs from '../components/About'
import OurServices from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import ClientsPartners from '../components/ClientsPartners'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ArticlesList from '../components/ArticlesList'

const Home = () => {
    const location = useLocation();

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
    )
}

export default Home
