import { axios } from './axios';
import { StrapiResponse, PaginationParams } from '../types/strapi';
import {
    Article,
    ArticleCategory,
    Car,
    CarBrand,
    CarFuelType,
    CarModel,
    Project,
    ECommerceFutureProject,
    Testimonial,
    Homepage,
    CarsPage,
    ECommerce,
    IT,
    Term
} from '../types/content-types';
import { articlePopulation, carPopulation, carsPopulation, eCommerceFutureProjectPopulation, projectPopulation } from '../const/populations';

// Helper function to build query string
const buildQueryString = (params: PaginationParams = {}): string => {
    const searchParams = new URLSearchParams();

    if (params.page) searchParams.append('pagination[page]', params.page.toString());
    if (params.pageSize) searchParams.append('pagination[pageSize]', params.pageSize.toString());
    // if (params.sort) searchParams.append('sort', params.sort);

    if (params.populate instanceof URLSearchParams) {
        params.populate.forEach((value, key) => {
            searchParams.append(key, value);
        });
    } else if (typeof params.populate === 'string') {
        searchParams.append('populate', params.populate);
    } else if (Array.isArray(params.populate)) {
        params.populate.forEach((field) => {
            searchParams.append('populate', field);
        });
    }

    if (params.filters) {
        Object.entries(params.filters).forEach(([key, value]) => {
            searchParams.append(`filters[${key}]`, value);
        });
    }

    return searchParams.toString();
};

// Collection Type Fetchers
export const fetchArticles = async (params?: PaginationParams): Promise<StrapiResponse<Article[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/articles?${queryString}`);
    return response.data;
};

export const fetchArticle = async (id: number): Promise<StrapiResponse<Article>> => {
    // const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/articles`, {
        params: {
            filter: {
                id: {
                    $eq: id
                }
            },
            populate: articlePopulation
        }
    });

    if (response.data?.data?.[0]) {
        response.data.data = response.data.data[0];
    }

    return response.data
};

export const fetchArticleCategories = async (params?: PaginationParams): Promise<StrapiResponse<ArticleCategory[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/article-categories?${queryString}`);
    return response.data;
};

export const fetchArticleCategory = async (id: number, populate?: string | string[]): Promise<StrapiResponse<ArticleCategory>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/article-categories/${id}?${queryString}`);
    return response.data;
};

export const fetchCars = async (params?: PaginationParams): Promise<StrapiResponse<Car[]>> => {
    // const queryString = buildQueryString(params);
    const response = await axios.get(`/cars`, {
        params: {
            populate: carsPopulation
        }
    });
    return response.data;
};

export const fetchCar = async (id: number): Promise<StrapiResponse<Car>> => {
    const response = await axios.get(`/cars/`, {
        params: {
            populate: carPopulation,
            filter: {
                id: {
                    $eq: id
                }
            }
        }
    });


    if (response.data?.data?.[0]) {
        response.data.data = response.data.data[0];
    }

    return response.data;
};

export const fetchCarBrands = async (params?: PaginationParams): Promise<StrapiResponse<CarBrand[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/car-brands?${queryString}`);
    return response.data;
};

export const fetchCarBrand = async (id: number, populate?: string | string[]): Promise<StrapiResponse<CarBrand>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/car-brands/${id}?${queryString}`);
    return response.data;
};

export const fetchCarFuelTypes = async (params?: PaginationParams): Promise<StrapiResponse<CarFuelType[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/car-fuel-types?${queryString}`);
    return response.data;
};

export const fetchCarFuelType = async (id: number, populate?: string | string[]): Promise<StrapiResponse<CarFuelType>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/car-fuel-types/${id}?${queryString}`);
    return response.data;
};

export const fetchCarModels = async (params?: PaginationParams): Promise<StrapiResponse<CarModel[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/car-models?${queryString}`);
    return response.data;
};

export const fetchCarModel = async (id: number, populate?: string | string[]): Promise<StrapiResponse<CarModel>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/car-models/${id}?${queryString}`);
    return response.data;
};

export const fetchItProjects = async (params?: PaginationParams): Promise<StrapiResponse<Project[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/projects?${queryString}`);
    return response.data;
};

export const fetchItProject = async (id: number): Promise<StrapiResponse<Project>> => {
    const response = await axios.get(`/projects`, {
        params: {
            populate: projectPopulation,
            filter: {
                id: {
                    $eq: id
                }
            }
        }
    });

    if (response.data?.data?.[0]) {
        response.data.data = response.data.data[0];
    }

    return response.data;
};

export const fetchECommerceFutureProjects = async (params?: PaginationParams): Promise<StrapiResponse<ECommerceFutureProject[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/e-commerce-future-projects?${queryString}`);
    return response.data;
};

export const fetchECommerceFutureProject = async (id: number): Promise<StrapiResponse<ECommerceFutureProject>> => {
    const response = await axios.get(`/e-commerce-future-projects`, {
        params: {
            filter: {
                id: {
                    $eq: id
                }
            },
            populate: eCommerceFutureProjectPopulation
        }
    });


    if (response.data?.data?.[0]) {
        response.data.data = response.data.data[0];
    }

    return response.data;
};

export const fetchTestimonials = async (params?: PaginationParams): Promise<StrapiResponse<Testimonial[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/testimonials?${queryString}`);
    return response.data;
};

export const fetchTestimonial = async (id: number, populate?: string | string[]): Promise<StrapiResponse<Testimonial>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/testimonials/${id}?${queryString}`);
    return response.data;
};

// Single Type Fetchers
export const fetchHomepage = async (populate?: string | string[]): Promise<StrapiResponse<Homepage>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/homepage?${queryString}`);
    return response.data;
};

export const fetchCarsPage = async (populate?: string | string[]): Promise<StrapiResponse<CarsPage>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/cars-page?${queryString}`);
    return response.data;
};

export const fetchECommerce = async (populate?: string | string[]): Promise<StrapiResponse<ECommerce>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/e-commerce?${queryString}`);
    return response.data;
};

export const fetchIT = async (populate?: string | string[]): Promise<StrapiResponse<IT>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/it?${queryString}`);
    return response.data;
};

export const fetchTerm = async (populate?: string | string[]): Promise<StrapiResponse<Term>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/term?${queryString}`);
    return response.data;
};
