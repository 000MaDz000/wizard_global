import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CarDetailsPage.css';
import Footer from '../../components/Footer';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);
    const nextImage = () => {
        setActiveImage((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setActiveImage((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
    };

    useEffect(() => {
        const dummyCars = [
            {
                id: 1,
                brand: 'Mercedes',
                model: 'C-Class',
                year: 2022,
                price: 1200000,
                condition: 'new',
                images: [
                    'https://www.topgear.com/sites/default/files/2023/12/6%20Mercedes%20E-Class%20review.jpg?w=1784&h=1004',
                    'https://www.topgear.com/sites/default/files/2023/12/7%20Mercedes%20E-Class%20review.jpg?w=1784&h=1004',
                    'https://www.topgear.com/sites/default/files/2023/12/10%20Mercedes%20E-Class%20review.jpg?w=1784&h=1004',
                    'https://www.topgear.com/sites/default/files/2023/12/11%20Mercedes%20E-Class%20review.jpg?w=1784&h=1004',
                    'https://www.topgear.com/sites/default/files/2023/12/12%20Mercedes%20E-Class%20review.jpg?w=1784&h=1004'
                ],
                overview: 'مرسيدس C-Class 2022 هي سيارة سيدان فاخرة تجمع بين الأناقة والأداء العالي. تتميز بتصميم عصري من الخارج وداخل فاخر مزود بأحدث التقنيات. السيارة مناسبة للعائلات والأفراد الذين يبحثون عن راحة القيادة مع الأداء المتميز.',
                description: 'سيارة مرسيدس C-Class موديل 2022 بحالة ممتازة',
                features: [
                    'ناقل حركة أوتوماتيك',
                    'محرك 2000 سي سي',
                    'فول أوبشن',
                    'شاشة عرض',
                    'كاميرا خلفية',
                    'تحكم في السرعة'
                ],
                mileage: '5000 كم',
                color: 'أسود',
                fuelType: 'بنزين',
                transmission: 'أوتوماتيك',
                engine: '2.0L Turbo 4-Cylinder',
                horsepower: '255 HP',
                seatingCapacity: '5',
                safetyFeatures: [
                    'نظام فرامل مانعة للانغلاق (ABS)',
                    'وسائد هوائية متعددة',
                    'نظام ثبات إلكتروني',
                    'نظام تحذير من مغادرة المسار'
                ]
            },
            {
                id: 2,
                brand: 'BMW',
                model: 'X5',
                year: 2021,
                price: 1500000,
                condition: 'used',
                images: [
                    'https://www.topgear.com/sites/default/files/2023/02/1-BMW-M3-Touring.jpg?w=1784&h=1004',
                    'https://www.topgear.com/sites/default/files/2023/02/2-BMW-M3-Touring.jpg?w=1784&h=1004',
                    'https://www.topgear.com/sites/default/files/2023/02/3-BMW-M3-Touring.jpg?w=1784&h=1004',
                    'https://www.topgear.com/sites/default/files/2023/02/4-BMW-M3-Touring.jpg?w=1784&h=1004',
                    'https://www.topgear.com/sites/default/files/2023/02/5-BMW-M3-Touring.jpg?w=1784&h=1004',
                    'https://www.topgear.com/sites/default/files/2023/02/6-BMW-M3-Touring.jpg?w=1784&h=1004',
                ],
                overview: 'بي إم دبليو X5 2021 هي سيارة دفع رباعي فاخرة تجمع بين القوة والراحة. تتميز بتصميم رياضي من الخارج وداخل فاخر مع مساحة واسعة للركاب والأمتعة. السيارة مناسبة للطرق الوعرة والرحلات الطويلة.',
                description: 'بي ام دبليو X5 موديل 2021 بحالة جيدة',
                features: [
                    'ناقل حركة أوتوماتيك',
                    'محرك 3000 سي سي',
                    'دفع رباعي',
                    'شاشة عرض كبيرة',
                    'تحكم في السرعة',
                    'مقاعد جلد'
                ],
                mileage: '25000 كم',
                color: 'أبيض',
                fuelType: 'بنزين',
                transmission: 'أوتوماتيك',
                engine: '3.0L Turbo 6-Cylinder',
                horsepower: '335 HP',
                seatingCapacity: '5',
                safetyFeatures: [
                    'نظام فرامل مانعة للانغلاق (ABS)',
                    'وسائد هوائية متعددة',
                    'نظام ثبات إلكتروني',
                    'نظام مراقبة النقاط العمياء'
                ]
            }
        ];

        const foundCar = dummyCars.find(c => c.id === parseInt(id));
        setCar(foundCar);
        setIsLoading(false);
    }, [id]);

    if (isLoading) {
        return <div className="loading">جاري التحميل...</div>;
    }

    if (!car) {
        return <div className="not-found">السيارة غير موجودة</div>;
    }

    return (
        <>
              <div className="car-details-page">
            <Link to="/cars" className="back-link">← العودة إلى قائمة السيارات</Link>

            <h1>{car.brand} {car.model} - {car.year}</h1>
            {/* <p>{car.description}</p> */}

            <div className="car-gallery">
                <div className="main-image">
                    <img src={car.images[activeImage]} alt={`${car.brand} ${car.model}`} />
                    <button className="nav-button prev-button" onClick={prevImage}>❮</button>
                    {/* <button className="nav-button next-button" onClick={nextImage}>❯</button> */}
                </div>
                <div className="thumbnails">
                    {car.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${car.brand} ${car.model} ${index + 1}`}
                            className={index === activeImage ? 'active' : ''}
                            onClick={() => setActiveImage(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="car-content">


                <div className="car-specs">
                    <h2>مواصفات السيارة</h2>
                    <div className="specs-grid">
                        <div className="spec-item">
                            <span className="spec-label">السعر:</span>
                            <span className="spec-value">{car.price.toLocaleString()} جنيه</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">الحالة:</span>
                            <span className="spec-value">{car.condition === 'new' ? 'جديدة' : 'مستعملة'}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">الموديل:</span>
                            <span className="spec-value">{car.model}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">السنة:</span>
                            <span className="spec-value">{car.year}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">المسافة المقطوعة:</span>
                            <span className="spec-value">{car.mileage}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">اللون:</span>
                            <span className="spec-value">{car.color}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">نوع الوقود:</span>
                            <span className="spec-value">{car.fuelType}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">ناقل الحركة:</span>
                            <span className="spec-value">{car.transmission}</span>
                        </div>
                    </div>
                </div>

                <div className="car-features">
                    <h2>المميزات</h2>
                    <ul>
                        {car.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="car-safety">
                    <h2>ميزات الأمان</h2>
                    <ul>
                        {car.safetyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* <div className="car-description">
                    <h2>الوصف التفصيلي</h2>
                    <p>{car.description}</p>
                </div> */}
                <div className="car-overview">
                    <h2>نظرة عامة</h2>
                    <p>{car.overview}</p>

                    <div className="quick-specs">
                        <div className="quick-spec-item">
                            <span className="quick-spec-label">المحرك:</span>
                            <span className="quick-spec-value">{car.engine}</span>
                        </div>
                        <div className="quick-spec-item">
                            <span className="quick-spec-label">القوة:</span>
                            <span className="quick-spec-value">{car.horsepower}</span>
                        </div>
                        <div className="quick-spec-item">
                            <span className="quick-spec-label">السعة:</span>
                            <span className="quick-spec-value">{car.seatingCapacity} ركاب</span>
                        </div>
                    </div>
                    </div>
                    {/* رقم رجل المبيعات تبع السيارات */}
                <button className="contact-btn">اتصل بنا للاستفسار</button>
            </div>
            </div>
            <Footer/>
        </>
      
    );
};

export default CarDetails;