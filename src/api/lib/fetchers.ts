import { getCurrentLocale } from "../../providers/LocaleContext";

import { axios } from './axios';
import { StrapiResponse, PaginationParams } from '../types/strapi';
import { AiChatbotPopulation, articlePopulation, carPopulation, carsPagePopulation, carsPopulation, companyPopulation, eCommerceFutureProjectPopulation, messagePagePopulation, projectPopulation, visionPagePopulation, whyUsPagePopulation } from '../const/populations';
import { AuthCredentials, AuthSignupData, AuthResponse, AuthUser } from '../types/auth';
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
    Term,
    Footer,
    AboutDetails,
    LoginPage,
    RegisterPage,
    TestimonialInput,
    Navbar,
    AiChatbot,
    VisionPage,
    MessagePage,
    WhyUsPage,
    Company,
    ServiceDetail
} from '../types/content-types';




// Helper function to build query string
const buildQueryString = (params: PaginationParams = {}): string => {
    const searchParams = new URLSearchParams();

    if (params.page) searchParams.append('pagination[page]', params.page.toString());
    if (params.pageSize) searchParams.append('pagination[pageSize]', params.pageSize.toString());

    if (params.populate instanceof URLSearchParams) {
        params.populate.forEach((value, key) => searchParams.append(key, value));
    } else if (typeof params.populate === 'string') {
        searchParams.append('populate', params.populate);
    } else if (Array.isArray(params.populate)) {
        params.populate.forEach((field) => searchParams.append('populate', field));
    }

    if (params.filters) {
        Object.entries(params.filters).forEach(([key, value]) => {
            searchParams.append(`filters[${key}]`, value);
        });
    }

    return searchParams.toString();
};

// Utility to add locale param
const withLocale = () => ({ locale: getCurrentLocale() });

// --------------------------- Fetchers --------------------------- //

export const fetchArticles = async (params?: PaginationParams): Promise<StrapiResponse<Article[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/articles?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchArticle = async (id: number): Promise<StrapiResponse<Article>> => {
    const response = await axios.get(`/articles`, {
        params: {
            ...withLocale(),
            filters: { id: { $eq: id } },
            populate: articlePopulation
        }
    });
    if (response.data?.data?.[0]) response.data.data = response.data.data[0];
    return response.data;
};

export const fetchArticleCategories = async (params?: PaginationParams): Promise<StrapiResponse<ArticleCategory[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/article-categories?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchArticleCategory = async (id: number, populate?: string | string[]): Promise<StrapiResponse<ArticleCategory>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/article-categories/${id}?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchCars = async (filterData: { brand?: CarBrand, model?: CarModel, fuel_type?: CarFuelType, condition?: "new" | "used" }): Promise<StrapiResponse<Car[]>> => {
    const filters: Record<any, any> = {};

    if (filterData.brand) {
        filters.brand = {
            id: {
                $eq: filterData.brand.id
            }
        }
    }

    if (filterData.model) {
        filters.model = {
            id: {
                $eq: filterData.model.id
            }
        }
    }

    if (filterData.fuel_type) {
        filters.fuel_type = {
            id: {
                $eq: filterData.fuel_type.id
            }
        }
    }

    if (filterData.condition) {
        filters.condition = {
            $eq: filterData.condition
        }
    }

    const response = await axios.get(`/cars`, {
        params: {
            ...withLocale(),
            populate: carsPopulation,
            filters
        }
    });

    response.data.data.forEach(item => {
        const id = item.id;

        Object.assign(item, item.car_translation || {});

        item.id = id;
        delete item.car_translation;
    })
    return response.data;
};

export const fetchCar = async (id: number): Promise<StrapiResponse<Car>> => {
    const response = await axios.get(`/cars`, {
        params: {
            ...withLocale(),
            populate: carPopulation,
            filters: { id: { $eq: id } }
        }
    });
    if (response.data?.data?.[0]) response.data.data = response.data.data[0];

    response.data.data = {
        ...(response.data.data || {}),
        ...(response.data.data.car_translation || {})
    };

    delete response.data.data.car_translation


    return response.data;
};

export const fetchService = async (id: number): Promise<StrapiResponse<ServiceDetail>> => {
    const response = await axios.get(`/service-details`, {
        params: {
            ...withLocale(),
            populate: ['service_translation'],
            filters: { id: { $eq: id } }
        }
    });

    if (response.data?.data?.[0]) response.data.data = response.data.data[0];

    return response.data;
};

export const fetchCarBrands = async (params?: PaginationParams): Promise<StrapiResponse<CarBrand[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/car-brands?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchCarBrand = async (id: number, populate?: string | string[]): Promise<StrapiResponse<CarBrand>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/car-brands/${id}?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchCarFuelTypes = async (params?: PaginationParams): Promise<StrapiResponse<CarFuelType[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/car-fuel-types?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchCarFuelType = async (id: number, populate?: string | string[]): Promise<StrapiResponse<CarFuelType>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/car-fuel-types/${id}?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchCarModels = async (params?: PaginationParams): Promise<StrapiResponse<CarModel[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/car-models?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchCarModel = async (id: number, populate?: string | string[]): Promise<StrapiResponse<CarModel>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/car-models/${id}?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchItProjects = async (params?: PaginationParams): Promise<StrapiResponse<Project[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/projects?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchItProject = async (id: number): Promise<StrapiResponse<Project>> => {
    const response = await axios.get(`/projects`, {
        params: {
            ...withLocale(),
            populate: projectPopulation,
            filters: { id: { $eq: id } }
        }
    });
    if (response.data?.data?.[0]) response.data.data = response.data.data[0];
    return response.data;
};

export const fetchECommerceFutureProjects = async (params?: PaginationParams): Promise<StrapiResponse<ECommerceFutureProject[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/e-commerce-future-projects?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchFooter = async (): Promise<StrapiResponse<Footer>> => {
    const response = await axios.get("/footer", {
        params: {
            ...withLocale(),
            populate: { contact_info: true }
        }
    });
    return response.data;
};

export const fetchECommerceFutureProject = async (id: number): Promise<StrapiResponse<ECommerceFutureProject>> => {
    const response = await axios.get(`/e-commerce-future-projects`, {
        params: {
            ...withLocale(),
            filters: { id: { $eq: id } },
            populate: eCommerceFutureProjectPopulation
        }
    });
    if (response.data?.data?.[0]) response.data.data = response.data.data[0];
    return response.data;
};

export const fetchTestimonials = async (params?: PaginationParams): Promise<StrapiResponse<Testimonial[]>> => {
    const queryString = buildQueryString(params);
    const response = await axios.get(`/testimonials?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchTestimonial = async (id: number, populate?: string | string[]): Promise<StrapiResponse<Testimonial>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/testimonials/${id}?${queryString}`, { params: withLocale() });
    return response.data;
};

// --------------------- Single Types ---------------------

export const fetchHomepage = async (populate?: string | string[]): Promise<StrapiResponse<Homepage>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/homepage?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchCarsPage = async (): Promise<StrapiResponse<CarsPage>> => {
    const response = await axios.get(`/cars-page`, {
        params: {
            ...withLocale(),
            populate: carsPagePopulation
        }
    });
    return response.data;
};

export const fetchECommerce = async (populate?: string | string[]): Promise<StrapiResponse<ECommerce>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/e-commerce?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchIT = async (populate?: string | string[]): Promise<StrapiResponse<IT>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/it?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchTerm = async (populate?: string | string[]): Promise<StrapiResponse<Term>> => {
    const queryString = populate ? buildQueryString({ populate }) : '';
    const response = await axios.get(`/term?${queryString}`, { params: withLocale() });
    return response.data;
};

export const fetchAboutDetails = async (): Promise<StrapiResponse<AboutDetails>> => {
    const response = await axios.get(`/about`, {
        params: {
            ...withLocale(),
            populate: ["intro", "story", "vision", "mission", "map_coordinates"]
        }
    });
    return response.data;
};

export const fetchNavbar = async (): Promise<StrapiResponse<Navbar>> => {
    const response = await axios.get(`/navbar`, {
        params: {
            ...withLocale(),
            populate: ["links"]
        }
    });

    return response.data;
};

export const fetchLoginPage = async (): Promise<StrapiResponse<LoginPage>> => {
    const response = await axios.get(`/login`, {
        params: {
            ...withLocale(),
            populate: ["email", "password"]
        }
    });
    return response.data;
};

export const fetchRegisterPage = async (): Promise<StrapiResponse<RegisterPage>> => {
    const response = await axios.get(`/register`, {
        params: {
            ...withLocale(),
            populate: ["full_name", "email", "password", "phone", "country", "password_confirmation"]
        }
    });
    return response.data;
};

// --------------------- Auth ---------------------

const API = '';

export const login = async (data: AuthCredentials): Promise<AuthResponse> => {
    const res = await axios.post(`${API}/auth/local`, data, { headers: { Authorization: null } });
    return res.data;
};

export const signup = async (data: AuthSignupData): Promise<AuthResponse> => {
    const res = await axios.post(`${API}/custom-user-action/register`, data, { headers: { Authorization: null } });
    return res.data;
};

export const getMe = async (jwt: string): Promise<AuthUser> => {
    const res = await axios.get(`${API}/users/me`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    return res.data;
};

export const sendTestimonial = async (data: TestimonialInput, token: string) => {
    const response = await axios.post('/testimonials', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
};


export const fetchAiChatbot = async () => {
    const response = await axios.get("/ai-chatbot", {
        params: {
            ...withLocale(),
            populate: AiChatbotPopulation
        }
    });

    return response.data
};

export const fetchVisionPage = async (): Promise<StrapiResponse<VisionPage>> => {
    const response = await axios.get(`/vision-page`, {
        params: {
            ...withLocale(),
            populate: visionPagePopulation,
        },
    });
    return response.data;
};

export const fetchMessagePage = async (): Promise<
    StrapiResponse<MessagePage>
> => {
    const response = await axios.get(`/message-page`, {
        params: {
            ...withLocale(),
            populate: messagePagePopulation,
        },
    });
    return response.data;
};

export const fetchWhyUsPage = async (): Promise<StrapiResponse<WhyUsPage>> => {
    const response = await axios.get(`/why-us`, {
        params: {
            ...withLocale(),
            populate: whyUsPagePopulation,
        },
    });
    return response.data;
};

export const fetchCompany = async (slug: string): Promise<StrapiResponse<Company>> => {
    const response = await axios.get(`/companies`, {
        params: {
            ...withLocale(),
            populate: companyPopulation,
            filters: {
                slug: {
                    $eq: slug
                }
            }
        },
    });

    if (response.data.data) {
        response.data.data = response.data.data[0];
    }

    return response.data;
}