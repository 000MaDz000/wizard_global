import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import './CarListPage.css';
import Footer from '../../components/Footer';
import Navbar_bar from './Nav';
import Features from './Features';
import { useCars, useCarsPage } from '../../api/hooks';
import Loading from '../../components/Loading';
import ClientImage from '../../components/ClientImage';
import CarNavbar from '../../components/CarNavbar';
import { CiSearch } from "react-icons/ci";

const CarList = () => {
    const [selectedBrand, setSelectedBrand] = useState('all');
    const [selectedCondition, setSelectedCondition] = useState('all');
    const [selectedModel, setSelectedModel] = useState('all');
    const [selectedFuelType, setSelectedFuelType] = useState('all');
    const [_searchTerm, setSearchTerm] = useState('');

    const filters = useMemo(() => ({
        brand: typeof selectedBrand === "string" ? undefined : selectedBrand,
        model: typeof selectedModel === "string" ? undefined : selectedModel,
        fuel_type: typeof selectedFuelType === "string" ? undefined : selectedFuelType,
        condition: selectedCondition === "all" ? undefined : selectedCondition,
    }), [selectedBrand, selectedModel, selectedFuelType, selectedCondition]);

    const carsRes = useCars(filters);
    const pageRes = useCarsPage();

    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(searchQuery.toLowerCase());
        const carsSection = document.getElementById('cars-section');
        if (carsSection) carsSection.scrollIntoView({ behavior: 'smooth' });
    };

    const resetFilters = () => {
        setSelectedBrand('all');
        setSelectedCondition('all');
        setSelectedModel('all');
        setSelectedFuelType('all');
    };

    const renderFilterOptions = (filter) => {
        switch (filter.type) {
            case "brand":
                return filter.brands.map((brand) => (
                    <label
                        key={brand.id}
                        className={`filter-option ${selectedBrand?.name === brand.name ? "active" : ""}`}
                    >
                        <ClientImage src={brand.logo}
                            onClick={() => setSelectedBrand(brand)}
                            style={{ width: 50, height: 50 }}
                        />
                    </label>
                ));
            case "model":
                return filter.models?.map((model) => (
                    <label
                        key={model.id}
                        className={`filter-option ${selectedModel?.name === model.name ? "active" : ""}`}
                    >
                        <input
                            type="radio"
                            name="model"
                            checked={selectedModel?.name === model.name}
                            onChange={() => setSelectedModel(model)}
                        />
                        {model.name}
                    </label>
                ));
            case "fuel":
                return filter.fuel_types.map((fuel) => (
                    <label
                        key={fuel.id}
                        className={`filter-option ${selectedFuelType?.name === fuel.name ? "active" : ""}`}
                    >
                        <input
                            type="radio"
                            name="fuel"
                            checked={selectedFuelType?.name === fuel.name}
                            onChange={() => setSelectedFuelType(fuel)}
                        />
                        {fuel.name}
                    </label>
                ));
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
                );
        }
    };

    if (pageRes.isLoading) return <Loading />;
    if (!pageRes.data) return null;

    const isLoading = carsRes.isLoading;
    const page = pageRes.data.data;
    const cars = carsRes.data?.data || [];

    return (
        <>
            <Helmet>
                <html lang={currentLang} />
                <title>{currentLang === 'ar' ? 'قائمة السيارات | Wazir GlobalX' : 'Car Listing | Wazir GlobalX'}</title>
                <meta name="description" content={currentLang === 'ar' ? 'استعرض مجموعة واسعة من السيارات الجديدة والمستعملة من أشهر الماركات.' : 'Explore a wide selection of new and used cars.'} />
                <meta name="keywords" content={currentLang === 'ar' ? 'سيارات, مرسيدس, بي ام دبليو, تويوتا' : 'Cars, Mercedes, BMW, Toyota'} />
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

                {/* الفلاتر */}
                <div className="filters-section">
                    <button className="reset-btn" onClick={resetFilters}>{page.reset_filters_text}</button>

                    {/* البراند */}
                    <div className="filter-group brand-filter">
                        <h3 className="filter-title">{page.filters.find(f => f.type === "brand")?.title}</h3>
                        <div className="brand-options">
                            {renderFilterOptions(page.filters.find(f => f.type === "brand"))}
                        </div>
                    </div>

                    {/* الموديل */}
                    {filters.brand && filters.brand.models?.length > 0 && (
                        <div className="filter-group model-filter">
                            <h3 className="filter-title">
                                {page.filters.find(item => Boolean(item.choose_model_filter_title) && item.type === "brand")?.choose_model_filter_title}
                            </h3>
                            <div className="filter-options">
                                {renderFilterOptions({ type: "model", models: filters.brand.models })}
                            </div>
                        </div>
                    )}

                    {/* الحالة والوقود جنب بعض */}
                    <div className="filters-row">
                        {/* الحالة */}
                        <div className="filter-group condition-filter">
                            <h3 className="filter-title">{page.filters.find(f => f.type === "condition")?.title}</h3>
                            <div className="filter-options">
                                {renderFilterOptions(page.filters.find(f => f.type === "condition"))}
                            </div>
                        </div>

                        {/* الوقود */}
                        <div className="filter-group fuel-filter">
                            <h3 className="filter-title">{page.filters.find(f => f.type === "fuel")?.title}</h3>
                            <div className="filter-options">
                                {renderFilterOptions(page.filters.find(f => f.type === "fuel"))}
                            </div>
                        </div>
                    </div>
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
