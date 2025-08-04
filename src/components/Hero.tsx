import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import Navbar from "./Navbar";
import all from '../assets/20250804_1539_Transparent Tech Elements_remix_01k1th9gygftzsd55g0jr0p4jt.png'
import car from '../assets/main_car-hpkzbezO.png'
import global from '../assets/global-network-digital-earth-visualization.png'
import ecom from '../assets/ecommerce.png'


const Hero = () => {
    return (
        <section className="hero" data-aos="fade-in">
            <Navbar />
            <div className="overlay"></div>
            <div className="all">
                <div className="hero-content">
                    <h1 data-aos="fade-down" data-aos-delay="300">
                        حلول عالمية في السيارات والتقنية والتجارة الإلكترونية
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="600">
                        نقدم حلولًا مبتكرة تعتمد على التكنولوجيا وتواكب تطورات السوق العالمي من تجارة السيارات إلى خدمات تقنية المعلومات والمنصات الإلكترونية.
                    </p>
                    <a href="#services" data-aos="zoom-in" data-aos-delay="900">
                        <button>أطلب خدماتك</button>
                    </a>
                </div>
                <div className="images">
                    <div className="car_it_ecom">
                        {/* سيبهم زي ما هما  */}
                        <img className="cartoon_imag" src={all} alt=""  data-aos="fade-left" data-aos-delay="1000"/>
                        {/* <img className="ecom" src={ecom} alt="" data-aos="fade-right" data-aos-delay="1800" />
                        <img className="global" src={global} alt="" data-aos="fade-up" data-aos-delay="1500" />
                        <img className="car" src={car} alt="" data-aos="fade-left" data-aos-delay="1300" /> */}

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
