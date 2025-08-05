import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import './CarListPage.css';
import Footer from '../../components/Footer';
import Navbar_bar from './Nav';
import Features from './Features';

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('all');
    const [selectedCondition, setSelectedCondition] = useState('all');
    const [selectedModel, setSelectedModel] = useState('all');
    const [selectedFuelType, setSelectedFuelType] = useState('all'); // ✅ جديد
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const handleSearch = (query) => {
        setSearchTerm(query.toLowerCase());
    };

    useEffect(() => {
        let results = cars;

        if (selectedBrand !== 'all') {
            results = results.filter(car => car.brand === selectedBrand);
        }

        if (selectedCondition !== 'all') {
            results = results.filter(car => car.condition === selectedCondition);
        }

        if (selectedModel !== 'all') {
            results = results.filter(car => car.model === selectedModel);
        }

        if (selectedFuelType !== 'all') {
            results = results.filter(car => car.fuelType === selectedFuelType);
        }

        if (searchTerm) {
            results = results.filter(car =>
                car.brand.toLowerCase().includes(searchTerm) ||
                car.model.toLowerCase().includes(searchTerm) ||
                car.year.toString().includes(searchTerm) ||
                car.description.toLowerCase().includes(searchTerm)
            );
        }

        setFilteredCars(results);
    }, [selectedBrand, selectedCondition, selectedModel, selectedFuelType, searchTerm, cars]);

    useEffect(() => {
        const dummyCars = [
            {
                id: 1,
                brand: 'Mercedes',
                model: 'C-Class',
                year: 2022,
                price: 1200000,
                condition: 'new',
                fuelType: 'بنزين',
                image: 'https://www.topgear.com/sites/default/files/2023/12/6%20Mercedes%20E-Class%20review.jpg?w=1784&h=1004',
                description: 'سيارة مرسيدس C-Class موديل 2022 بحالة ممتازة'
            },
            {
                id: 2,
                brand: 'BMW',
                model: 'X5',
                year: 2021,
                price: 1500000,
                condition: 'used',
                fuelType: 'ديزل',
                image: 'https://www.topgear.com/sites/default/files/2023/02/1-BMW-M3-Touring.jpg?w=1784&h=1004',
                description: 'بي ام دبليو X5 موديل 2021 بحالة جيدة'
            },
            {
                id: 3,
                brand: 'Audi',
                model: 'A4',
                year: 2023,
                price: 1100000,
                condition: 'new',
                fuelType: 'كهرباء',
                image: 'https://www.topgear.com/sites/default/files/2025/07/1-Hyundai-Ioniq-9-review-UK-2025.jpg?w=1784&h=1004',
                description: 'أودي A4 موديل 2023 جديدة تماماً'
            },
            {
                id: 4,
                brand: 'Mercedes',
                model: 'E-Class',
                year: 2020,
                price: 900000,
                condition: 'used',
                fuelType: 'بنزين',
                image: 'https://www.topgear.com/sites/default/files/2023/02/1-BMW-M3-Touring.jpg?w=1784&h=1004',
                description: 'مرسيدس E-Class موديل 2020 بحالة ممتازة'
            },
            {
                id: 5,
                brand: 'BMW',
                model: '3 Series',
                year: 2023,
                price: 1300000,
                condition: 'new',
                fuelType: 'ديزل',
                image: 'https://www.topgear.com/sites/default/files/2023/02/1-BMW-M3-Touring.jpg?w=1784&h=1004',
                description: 'بي ام دبليو 3 Series موديل 2023 جديدة'
            },
            {
                id: 6,
                brand: 'Toyota',
                model: 'Camry',
                year: 2022,
                price: 800000,
                condition: 'used',
                fuelType: 'بنزين',
                image: 'https://www.topgear.com/sites/default/files/2023/02/1-BMW-M3-Touring.jpg?w=1784&h=1004',
                description: 'تويوتا كامري موديل 2022 بحالة جيدة جداً'
            }
        ];

        setCars(dummyCars);
        setFilteredCars(dummyCars);
        setIsLoading(false);
    }, []);

    const getUniqueModels = () => {
        const models = cars.map(car => car.model);
        return [...new Set(models)];
    };

    const getUniqueBrands = () => {
        const brands = cars.map(car => car.brand);
        return [...new Set(brands)];
    };

    const getUniqueFuelTypes = () => {
        const types = cars.map(car => car.fuelType);
        return [...new Set(types)];
    };

    const resetFilters = () => {
        setSelectedBrand('all');
        setSelectedCondition('all');
        setSelectedModel('all');
        setSelectedFuelType('all');
    };

    return (
        <>
            <Helmet>
                <html lang={currentLang} />
                <title>
                    {currentLang === 'ar'
                        ? 'قائمة السيارات | Wazir GlobalX'
                        : 'Car Listing | Wazir GlobalX'}
                </title>
                <meta
                    name="description"
                    content={
                        currentLang === 'ar'
                            ? 'استعرض مجموعة واسعة من السيارات الجديدة والمستعملة من أشهر الماركات مثل مرسيدس، بي إم دبليو، تويوتا وغيرها.'
                            : 'Explore a wide selection of new and used cars from top brands like Mercedes, BMW, Toyota, and more.'
                    }
                />
                <meta
                    name="keywords"
                    content={
                        currentLang === 'ar'
                            ? 'سيارات, مرسيدس, بي ام دبليو, تويوتا, سيارات جديدة, سيارات مستعملة, Wazir GlobalX'
                            : 'Cars, Mercedes, BMW, Toyota, new cars, used cars, Wazir GlobalX'
                    }
                />
            </Helmet>

            <Navbar_bar onSearch={handleSearch} />
            <div className="car-list-page">
                <div className="hero-section">
                    <div className="data_car">
                        <h1>اكتشف أفضل السيارات التي تناسب احتياجاتك</h1>
                    </div>
                </div>

                {/* الفلاتر */}
                <div className="filters-section">

                    {/* الماركة */}
                    <div className="filter-group">
                        <h3 className="filter-title">الماركة</h3>
                        <div className="filter-options">
                            <label className={`filter-option ${selectedBrand === 'all' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="brand"
                                    value="all"
                                    checked={selectedBrand === 'all'}
                                    onChange={() => setSelectedBrand('all')}
                                />
                                الكل
                            </label>
                            {getUniqueBrands().map((brand, index) => (
                                <label
                                    key={index}
                                    className={`filter-option ${selectedBrand === brand ? 'active' : ''}`}
                                >
                                    <input
                                        type="radio"
                                        name="brand"
                                        value={brand}
                                        checked={selectedBrand === brand}
                                        onChange={() => setSelectedBrand(brand)}
                                    />
                                    {brand}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* الحالة */}
                    <div className="filter-group">
                        <h3 className="filter-title">الحالة</h3>
                        <div className="filter-options">
                            <label className={`filter-option ${selectedCondition === 'all' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="condition"
                                    value="all"
                                    checked={selectedCondition === 'all'}
                                    onChange={() => setSelectedCondition('all')}
                                />
                                الكل
                            </label>
                            <label className={`filter-option ${selectedCondition === 'new' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="condition"
                                    value="new"
                                    checked={selectedCondition === 'new'}
                                    onChange={() => setSelectedCondition('new')}
                                />
                                جديد
                            </label>
                            <label className={`filter-option ${selectedCondition === 'used' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="condition"
                                    value="used"
                                    checked={selectedCondition === 'used'}
                                    onChange={() => setSelectedCondition('used')}
                                />
                                مستعمل
                            </label>
                        </div>
                    </div>

                    {/* الموديل */}
                    <div className="filter-group">
                        <h3 className="filter-title">الموديل</h3>
                        <div className="filter-options">
                            <label className={`filter-option ${selectedModel === 'all' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="model"
                                    value="all"
                                    checked={selectedModel === 'all'}
                                    onChange={() => setSelectedModel('all')}
                                />
                                الكل
                            </label>
                            {getUniqueModels().map((model, index) => (
                                <label
                                    key={index}
                                    className={`filter-option ${selectedModel === model ? 'active' : ''}`}
                                >
                                    <input
                                        type="radio"
                                        name="model"
                                        value={model}
                                        checked={selectedModel === model}
                                        onChange={() => setSelectedModel(model)}
                                    />
                                    {model}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* نوع الوقود ✅ جديد */}
                    <div className="filter-group">
                        <h3 className="filter-title">نوع الوقود</h3>
                        <div className="filter-options">
                            <label className={`filter-option ${selectedFuelType === 'all' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="fuelType"
                                    value="all"
                                    checked={selectedFuelType === 'all'}
                                    onChange={() => setSelectedFuelType('all')}
                                />
                                الكل
                            </label>
                            {getUniqueFuelTypes().map((type, index) => (
                                <label
                                    key={index}
                                    className={`filter-option ${selectedFuelType === type ? 'active' : ''}`}
                                >
                                    <input
                                        type="radio"
                                        name="fuelType"
                                        value={type}
                                        checked={selectedFuelType === type}
                                        onChange={() => setSelectedFuelType(type)}
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>
                    </div>

                    <button className="reset-btn" onClick={resetFilters}>إعادة الضبط</button>
                </div>

                {/* عرض السيارات */}
                <div className="cars-grid">
                    {isLoading ? (
                        <div className="loading">جاري التحميل...</div>
                    ) : filteredCars.length === 0 ? (
                        <div className="no-results">لا توجد سيارات مطابقة لبحثك</div>
                    ) : (
                        filteredCars.map(car => (
                            <div key={car.id} className="car-card">
                                <img src={car.image} alt={car.brand + ' ' + car.model} />
                                <div className="car-info">
                                    <h3>{car.brand} {car.model}</h3>
                                    <p>السنة: {car.year}</p>
                                    <p>الحالة: {car.condition === 'new' ? 'جديدة' : 'مستعملة'}</p>
                                    <p>الوقود: {car.fuelType}</p>
                                    <p className="price">{car.price.toLocaleString()} جنيه</p>
                                    <a href={`/cars/${car.id}`} className="details-btn">عرض التفاصيل</a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Features />
            <Footer />
        </>
    );
};

export default CarList;
