import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import './CarListPage.css';
import Footer from '../../components/Footer';
import Navbar_bar from './Nav';
import Features from './Features';
import { useCars, useCarsPage } from '../../api/hooks';
import { buildStrapiPopulateParams, carsPagePopulation, carsPopulation } from '../../api/const/populations';
import Loading from '../../components/Loading';
import ClientImage from '../../components/ClientImage';

const CarList = () => {
    const carsRes = useCars(buildStrapiPopulateParams(carsPopulation));
    const pageRes = useCarsPage(buildStrapiPopulateParams(carsPagePopulation));

    // const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('all');
    const [selectedCondition, setSelectedCondition] = useState('all');
    const [selectedModel, setSelectedModel] = useState('all');
    const [selectedFuelType, setSelectedFuelType] = useState('all'); // ✅ جديد
    const [searchTerm, setSearchTerm] = useState('');

    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const handleSearch = (query) => {
        setSearchTerm(query.toLowerCase());
    };


    // useEffect(() => {
    // const dummyCars = [
    //     {
    //         id: 1,
    //         brand: 'Mercedes',
    //         model: 'C-Class',
    //         year: 2022,
    //         price: 1200000,
    //         condition: 'new',
    //         fuelType: 'بنزين',
    //         image: 'https://www.topgear.com/sites/default/files/2023/12/6%20Mercedes%20E-Class%20review.jpg?w=1784&h=1004',
    //         description: 'سيارة مرسيدس C-Class موديل 2022 بحالة ممتازة'
    //     },
    //     {
    //         id: 2,
    //         brand: 'BMW',
    //         model: 'X5',
    //         year: 2021,
    //         price: 1500000,
    //         condition: 'used',
    //         fuelType: 'ديزل',
    //         image: 'https://www.topgear.com/sites/default/files/2023/02/1-BMW-M3-Touring.jpg?w=1784&h=1004',
    //         description: 'بي ام دبليو X5 موديل 2021 بحالة جيدة'
    //     },
    //     {
    //         id: 3,
    //         brand: 'Audi',
    //         model: 'A4',
    //         year: 2023,
    //         price: 1100000,
    //         condition: 'new',
    //         fuelType: 'كهرباء',
    //         image: 'https://www.topgear.com/sites/default/files/2025/07/1-Hyundai-Ioniq-9-review-UK-2025.jpg?w=1784&h=1004',
    //         description: 'أودي A4 موديل 2023 جديدة تماماً'
    //     },
    //     {
    //         id: 4,
    //         brand: 'Mercedes',
    //         model: 'E-Class',
    //         year: 2020,
    //         price: 900000,
    //         condition: 'used',
    //         fuelType: 'بنزين',
    //         image: 'https://www.topgear.com/sites/default/files/2023/02/1-BMW-M3-Touring.jpg?w=1784&h=1004',
    //         description: 'مرسيدس E-Class موديل 2020 بحالة ممتازة'
    //     },
    //     {
    //         id: 5,
    //         brand: 'BMW',
    //         model: '3 Series',
    //         year: 2023,
    //         price: 1300000,
    //         condition: 'new',
    //         fuelType: 'ديزل',
    //         image: 'https://www.topgear.com/sites/default/files/2023/02/1-BMW-M3-Touring.jpg?w=1784&h=1004',
    //         description: 'بي ام دبليو 3 Series موديل 2023 جديدة'
    //     },
    //     {
    //         id: 6,
    //         brand: 'Toyota',
    //         model: 'Camry',
    //         year: 2022,
    //         price: 800000,
    //         condition: 'used',
    //         fuelType: 'بنزين',
    //         image: 'https://www.topgear.com/sites/default/files/2023/02/1-BMW-M3-Touring.jpg?w=1784&h=1004',
    //         description: 'تويوتا كامري موديل 2022 بحالة جيدة جداً'
    //     }
    // ];

    // setCars(dummyCars);
    // setFilteredCars(dummyCars);
    // setIsLoading(false);
    // }, []);


    const resetFilters = () => {
        setSelectedBrand('all');
        setSelectedCondition('all');
        setSelectedModel('all');
        setSelectedFuelType('all');
    };

    /**
     * 
     * @param {import('../../api/types/components').Filters} filter 
     */
    const renderFilterOptions = (filter) => {
        switch (filter.type) {
            case "brand":
                return filter.brands.map(brand => (
                    <label
                        key={brand.id}
                        className={`filter-option ${selectedBrand === brand.name ? 'active' : ''}`}
                    >
                        <input
                            type="radio"
                            name="brand"
                            value={brand.name}
                            checked={selectedBrand === brand.name}
                            onChange={() => setSelectedBrand(brand.name)}
                        />
                        {brand.name}
                    </label>
                ))
                break;
            case "fuel":
                return filter.fuel_types.map(fuel => (
                    <label
                        key={fuel.id}
                        className={`filter-option ${selectedBrand === fuel.name ? 'active' : ''}`}
                    >
                        <input
                            type="radio"
                            name="brand"
                            value={fuel.name}
                            checked={selectedFuelType === fuel.name}
                            onChange={() => setSelectedFuelType(fuel.name)}
                        />
                        {fuel.name}
                    </label>
                ))
                break;
            case "model":
                return filter.models.map(model => (
                    <label
                        key={model.id}
                        className={`filter-option ${selectedModel === model.name ? 'active' : ''}`}
                    >
                        <input
                            type="radio"
                            name="brand"
                            value={model.name}
                            checked={selectedBrand === model.name}
                            onChange={() => setSelectedModel(model.name)}
                        />
                        {model.name}
                    </label>
                ))
                break;
            case "condition":
                return (
                    <>
                        <label className={`filter-option ${selectedCondition === 'all' ? 'active' : ''}`}>
                            <input
                                type="radio"
                                name="condition"
                                value="all"
                                checked={selectedCondition === 'all'}
                                onChange={() => setSelectedCondition('all')}
                            />
                            {filter.all_condition_text}
                        </label>

                        <label className={`filter-option ${selectedCondition === 'new' ? 'active' : ''}`}>
                            <input
                                type="radio"
                                name="condition"
                                value="new"
                                checked={selectedCondition === 'new'}
                                onChange={() => setSelectedCondition('new')}
                            />
                            {filter.new_condition_text}
                        </label>

                        <label className={`filter-option ${selectedCondition === 'used' ? 'active' : ''}`}>
                            <input
                                type="radio"
                                name="condition"
                                value="used"
                                checked={selectedCondition === 'used'}
                                onChange={() => setSelectedCondition('used')}
                            />
                            {filter.used_condition_text}
                        </label>
                    </>
                )
        }
    }


    if (pageRes.isLoading) return <Loading />;
    if (!pageRes.data) return null;

    const isLoading = carsRes.isLoading;
    const page = pageRes.data.data;
    const cars = carsRes.data?.data || [];


    // useEffect(() => {
    //     let results = cars;

    //     if (selectedBrand !== 'all') {
    //         results = results.filter(car => car.brand === selectedBrand);
    //     }

    //     if (selectedCondition !== 'all') {
    //         results = results.filter(car => car.condition === selectedCondition);
    //     }

    //     if (selectedModel !== 'all') {
    //         results = results.filter(car => car.model === selectedModel);
    //     }

    //     if (selectedFuelType !== 'all') {
    //         results = results.filter(car => car.fuelType === selectedFuelType);
    //     }

    //     if (searchTerm) {
    //         results = results.filter(car =>
    //             car.brand.toLowerCase().includes(searchTerm) ||
    //             car.model.toLowerCase().includes(searchTerm) ||
    //             car.year.toString().includes(searchTerm) ||
    //             car.description.toLowerCase().includes(searchTerm)
    //         );
    //     }

    //     setFilteredCars(results);
    // }, [selectedBrand, selectedCondition, selectedModel, selectedFuelType, searchTerm, cars]);

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
                        <h1>{page.hero_title}</h1>
                    </div>
                </div>

                {/* الفلاتر */}
                <div className="filters-section">

                    {
                        page.filters.map(filter => (
                            <div className='filter-group' key={filter.id}>
                                <h3 className='filter-title'>{filter.title}</h3>
                                <div className='filter-options'>
                                    {
                                        renderFilterOptions(filter)
                                    }
                                </div>
                            </div>

                        ))
                    }

                    <button className="reset-btn" onClick={resetFilters}>{page.reset_filters_text}</button>
                </div>

                {/* عرض السيارات */}
                <div className="cars-grid">
                    {isLoading ? (
                        <div className="loading">{page.loading_text}</div>
                    ) : cars.length === 0 ? (
                        <div className="no-results">{page.no_results_text}</div>
                    ) : (
                        cars.map(car => (
                            <div key={car.id} className="car-card">
                                <ClientImage src={car.thumbnail} alt={car.brand?.name + ' ' + car.model?.name} />
                                <div className="car-info">
                                    <h3>{car.brand.name} {car.model.name}</h3>
                                    <p>{car.year_field_text} {car.year}</p>
                                    <p>{car.condition_field_text} {car.condition === 'new' ? 'جديدة' : 'مستعملة'}</p>
                                    <p>{car.fuel_type_field_text} {car.fuel_type.name}</p>
                                    <p className="price">{car.price.toLocaleString()} {car.currency_sign}</p>
                                    <a href={`/cars/${car.id}`} className="details-btn">{car.details_button_text}</a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Features data={{
                ...page.services_section,
                categories_section_title: page.categories_section_title,
                categories: page.categories
            }} />
            <Footer />
        </>
    );
};

export default CarList;
