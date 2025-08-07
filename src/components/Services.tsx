import React from "react";
import "../styles/OurServices.css";
import it from '../assets/internet.png'
import { FaCar } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

import { FaGlobe } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ServicesSection } from "../api/types/components";
import ClientLink from "./ClientLink";
import ClientImage from "./ClientImage";

// import FaCar from 'react-icons'
const OurServices = ({ data }: { data: ServicesSection }) => {
    if (!data) return;
    return (
        <section className="services-section" data-aos="fade-up">
            <h2 className="section-title-h2" data-aos="fade-down" data-aos-delay="100">{data.title?.title_start} {data.title?.title_end}</h2>
            <div className="services-grid">
                {
                    data.services?.map(service => (
                        <div className="service-card" data-aos="zoom-in" data-aos-delay="200" key={(service as any).id}>
                            {/* <img src={cars} alt="سيارات" /> */}
                            <ClientImage src={service.icon} className="icon" />
                            <h3 className="servic_h3">{service.title}</h3>
                            <p>{data.services?.[1].title}</p>
                            <ClientLink href={service.link!} className="learn-more-btn">{service.link?.text}</ClientLink>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default OurServices;
