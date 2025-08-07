import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CarDetailsPage.css';
import Footer from '../../components/Footer';
import { useCar } from '../../api/hooks';
import Loading from '../../components/Loading';
import ClientImage from '../../components/ClientImage';

const CarDetails = () => {
    const { id } = useParams();
    const carRes = useCar(id);
    const [activeImage, setActiveImage] = useState(0);

    const nextImage = () => {
        setActiveImage((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setActiveImage((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
    };


    if (carRes.isLoading) {
        return <Loading className="loading">جاري التحميل...</Loading>;
    }

    const car = carRes.data.data;

    if (!car) {
        return <div className="not-found">السيارة غير موجودة</div>;
    }

    return (
        <>
            <div className="car-details-page">
                <Link to="/cars" className="back-link">{car.back_to_previous_page_text}</Link>

                <h1>{car.brand.name} {car.model.name} - {car.year}</h1>
                <p>{car.description}</p>

                <div className="car-gallery">
                    <div className="main-image">
                        <ClientImage src={car.images[activeImage]} alt={car.images[0]?.alternativeText || `${car.brand} ${car.model}`} />
                        <button className="nav-button prev-button" onClick={prevImage}>❮</button>
                        <button className="nav-button next-button" onClick={nextImage}>❯</button>
                    </div>
                    <div className="thumbnails">
                        {car.images?.map((img, index) => (
                            <ClientImage
                                key={index}
                                src={img}
                                alt={img?.alternativeText || `${car.brand} ${car.model} ${index + 1}`}
                                className={index === activeImage ? 'active' : ''}
                                onClick={() => setActiveImage(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="car-content">


                    <div className="car-specs">
                        <h2>{car.car_specifications_title}</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <span className="spec-label">{car.price_field_text}</span>
                                <span className="spec-value">{car.price} {car.currency_sign}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">{car.condition_field_text}</span>
                                <span className="spec-value">{car.condition === 'new' ? 'جديدة' : 'مستعملة'}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">{car.model_field_text}</span>
                                <span className="spec-value">{car.model.name}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">{car.year_field_text}</span>
                                <span className="spec-value">{car.year}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">{car.covered_distances_field_text}</span>
                                <span className="spec-value">{car.mileage}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">{car.color_field_text}</span>
                                <span className="spec-value">{car.color}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">{car.fuel_type_field_text}</span>
                                <span className="spec-value">{car.fuel_type.name}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">{car.transmission_field_text}</span>
                                <span className="spec-value">{car.transmission}</span>
                            </div>
                        </div>
                    </div>

                    <div className="car-features">
                        <h2>المميزات</h2>
                        <ul>
                            {car.features?.map((feature, index) => (
                                <li key={index}>{feature.text}</li>
                            ))}
                        </ul>
                    </div>

                    {
                        car.safety_features ? (
                            <div className="car-safety">
                                <h2>{car.safety_features_title}</h2>
                                <ul>
                                    {car.safety_features?.map((feature, index) => (
                                        <li key={index}>{feature.text}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : null
                    }

                    {/* <div className="car-description">
                    <h2>الوصف التفصيلي</h2>
                    <p>{car.description}</p>
                </div> */}
                    <div className="car-overview">
                        <h2>{car.overview_section_title}</h2>
                        <p>{car.overview}</p>

                        <div className="quick-specs">
                            <div className="quick-spec-item">
                                <span className="quick-spec-label">{car.engine_field_text}</span>
                                <span className="quick-spec-value">{car.engine}</span>
                            </div>
                            <div className="quick-spec-item">
                                <span className="quick-spec-label">{car.horsepower_field_text}</span>
                                <span className="quick-spec-value">{car.horsepower}</span>
                            </div>
                            <div className="quick-spec-item">
                                <span className="quick-spec-label">{car.capacity_field_text}</span>
                                <span className="quick-spec-value">{car.seating_capacity}</span>
                            </div>
                        </div>
                    </div>
                    {/* رقم رجل المبيعات تبع السيارات */}
                    <button className="contact-btn">{car.cta_button_text}</button>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default CarDetails;