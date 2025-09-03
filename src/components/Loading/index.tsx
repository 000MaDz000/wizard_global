import React from "react";
import "./Loading.css";
import logo from '../../assets/red_logo.png'
const Loading = () => {
    return (
        <div className="loading-container">
            <img className="lod_img" src={logo} alt=""/>
            <div className="skeleton-card">
                <div className="skeleton thumbnail"></div>
                <div className="skeleton text-line short"></div>
                <div className="skeleton text-line"></div>
                <div className="skeleton text-line"></div>
            </div>

            <div className="skeleton-card">
                <div className="skeleton thumbnail"></div>
                <div className="skeleton text-line short"></div>
                <div className="skeleton text-line"></div>
                <div className="skeleton text-line"></div>
            </div>
        </div>
    );
};

export default Loading;
