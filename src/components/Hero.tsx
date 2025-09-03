import React from "react";
import "../styles/Hero.css";
import Navbar from "./Navbar";
import all from '../assets/20250804_1539_Transparent Tech Elements_remix_01k1th9gygftzsd55g0jr0p4jt.png'
import type { Hero } from "../api/types/components";
import ClientLink from "./ClientLink";

const Hero = ({ data }: { data?: Hero }) => {
  if (!data) return null;

  return (
    <section className="hero">
      <Navbar />
      <div className="overlay"></div>
      <div className="all">
        <div className="hero-content animate-hero">
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
          <ClientLink href={data.cta}>
            <button>{data.cta.text}</button>
          </ClientLink>
        </div>
        <div className="images animate-hero">
          <div className="car_it_ecom">
            <img className="cartoon_imag" src={all} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
