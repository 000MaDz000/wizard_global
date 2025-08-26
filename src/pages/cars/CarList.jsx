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
import CarNavbar from '../../components/CarNavbar';
import { CiSearch } from "react-icons/ci";


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
      const [searchQuery, setSearchQuery] = useState('');
    
    const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchQuery.toLowerCase());

    // نزّل الصفحة مباشرة على قسم السيارات
    const carsSection = document.getElementById('cars-section');
    if (carsSection) {
        carsSection.scrollIntoView({ behavior: 'smooth' });
    }
};

    useEffect(() => {
        if (!carsRes.data?.data) return;

        const lowerSearch = searchTerm.toLowerCase();

        const results = carsRes.data.data.filter(car => {
            // Brand filter
            if (selectedBrand !== 'all' && car.brand?.name !== selectedBrand) return false;

            // Condition filter
            if (selectedCondition !== 'all' && car.condition !== selectedCondition) return false;

            // Model filter
            if (selectedModel !== 'all' && car.model?.name !== selectedModel) return false;

            // Fuel type filter
            if (selectedFuelType !== 'all' && car.fuel_type?.name !== selectedFuelType) return false;

            // Search filter
            if (lowerSearch) {
                const matchesSearch =
                    car.brand?.name?.toLowerCase().includes(lowerSearch) ||
                    car.model?.name?.toLowerCase().includes(lowerSearch) ||
                    car.year?.toString().includes(lowerSearch) ||
                    car.description?.toLowerCase().includes(lowerSearch);
                if (!matchesSearch) return false;
            }

            return true; // Passed all filters
        });

        setFilteredCars(results);
    }, [
        searchTerm,
        selectedBrand,
        selectedCondition,
        selectedFuelType,
        selectedModel,
        carsRes.data?.data
    ]);

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
                return filter.brands.map((brand) => (
                    <label
                        key={brand.id}
                        className={`filter-option ${selectedBrand === brand.name ? "active" : ""}`}
                    >
                        <input
                            type="radio"
                            name="brand"
                            checked={selectedBrand === brand.name}
                            onChange={() => setSelectedBrand(brand.name)}
                        />
                        {brand.name}
                    </label>
                ))

            case "model":
                return filter.models.map((model) => (
                    <label
                        key={model.id}
                        className={`filter-option ${selectedModel === model.name ? "active" : ""}`}
                    >
                        <input
                            type="radio"
                            name="model"
                            checked={selectedModel === model.name}
                            onChange={() => setSelectedModel(model.name)}
                        />
                        {model.name}
                    </label>
                ))

            case "fuel":
                return filter.fuel_types.map((fuel) => (
                    <label
                        key={fuel.id}
                        className={`filter-option ${selectedFuelType === fuel.name ? "active" : ""}`}
                    >
                        <input
                            type="radio"
                            name="fuel"
                            checked={selectedFuelType === fuel.name}
                            onChange={() => setSelectedFuelType(fuel.name)}
                        />
                        {fuel.name}
                    </label>
                ))
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

    /** * @type {import('../../api/types/content-types').Car[]} */
    const cars = filteredCars || carsRes.data?.data || [];

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

            <div className="carr" style={{ background: "white" }}>
                <CarNavbar data={page.navbar} />
            </div>

            <div className="car-list-page">
                <div className="hero-section">
                    <div className="data_car">
                        <h1>{page.hero_title}</h1>
                    </div>
                     <br />

                    <div className="car-navbar_bar-search">
                        <div className="d">
                            <form onSubmit={handleSearch}>

                                <input
                                    className='search-input'
                                    type="text"
                                    placeholder="🚗..................................."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}

                                />
                                <button className='search-button' type="submit">

                                    <CiSearch className="search-car-icon" />
                                </button>


                            </form>
                        </div>
                    </div>
                </div>

                {/* الفلاتر */}
                <div className="filters-section">
                     <button className="reset-btn" onClick={resetFilters}>{page.reset_filters_text}</button>
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

                   
                </div>

                {/* عرض السيارات */}
                <div id="cars-section" className="cars-grid">
                    {isLoading ? (
                        <div className="loading">{page.loading_text}</div>
                    ) : cars.length === 0 ? (
                        <div className="no-results">{page.no_results_text}</div>
                    ) : (
                        cars.map(car => (
                            <div key={car.id} className="car-card">
                                <ClientImage src={car.thumbnail} alt={car.brand?.name + ': ' + car.model?.name} />
                                <div className="car-info">
                                    <h3>{car.brand?.name}: {car.model?.name}</h3>
                                    <p>{car.year_field_text}: {car.year}</p>
                                    <p>{car.condition_field_text}: {car.condition_display_text}</p>
                                    <p>{car.fuel_type_field_text}: {car.fuel_type?.name}</p>
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
