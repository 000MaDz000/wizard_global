import { StrapiEntity, StrapiMedia } from './strapi';
import {
    Hero,
    About,
    ServicesSection,
    WhyUs,
    ClientsPartners,
    Articles,
    ContactSection,
    Title,
    ECommerceService,
    CTA,
    ECommerceFutureProjects,
    Video,
    ITService,
    ProjectComponent,
    TextArray,
    Filters,
    TermsOfService,
    CarService,
    ECommerceContactSection
} from './components';

// Content Type Interfaces
export interface Article extends StrapiEntity {
    title: string;
    summary: string;
    image: StrapiMedia;
    article_category?: ArticleCategory;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface ArticleCategory extends StrapiEntity {
    name: string;
    description?: string;
    thumbnail?: StrapiMedia;
    articles?: Article[];
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface Car extends StrapiEntity {
    brand?: CarBrand;
    fuel_type?: CarFuelType;
    safety_features?: TextArray[];
    model?: CarModel;
    description: string;
    images: StrapiMedia[];
    thumbnail: StrapiMedia;
    year: number;
    price: number;
    overview
    features: TextArray[]
    mileage: string;
    color: string;
    transmission: string;
    engine: string;
    horsepower: string;
    seating_capacity: string;
    condition: 'used' | 'new';
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface CarBrand extends StrapiEntity {
    name: string;
    cars?: Car[];
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface CarFuelType extends StrapiEntity {
    name: string;
    cars?: Car[];
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface CarModel extends StrapiEntity {
    name: string;
    cars?: Car[];
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface Project extends StrapiEntity {
    name: string;
    description: string;
    image: StrapiMedia;
    features: TextArray[];
    details: string;
    demo_url: string;
    technologies?: TextArray[];
    screenshots?: StrapiMedia[];
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface ECommerceFutureProject extends StrapiEntity {
    project_name: string;
    project_description: string;
    details: string;
    features: TextArray[];
    images: StrapiMedia[];
    expected_launch: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface Testimonial extends StrapiEntity {
    name: string;
    job: string;
    image: StrapiMedia;
    rating: number;
    feedback: string;
    user?: StrapiEntity;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

// Single Type Interfaces
export interface Homepage {
    id: number;
    hero: Hero;
    about?: About;
    services?: ServicesSection;
    why_us?: WhyUs;
    clients_partners?: ClientsPartners;
    newest_articles?: Articles;
    contact?: ContactSection;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface CarsPage {
    id: number;
    hero_title: string;
    filters?: Filters[];
    loading_text: string;
    no_results_text: string;
    reset_filters_text: string;
    categories_section_title: string;
    categories?: TextArray[];
    services_section?: {
        title: string;
        description?: string;
        services?: CarService[];
    }
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface ECommerce {
    id: number;
    hero_title: string;
    intro: string;
    services: ECommerceService[];
    cta: CTA;
    future_projects_section?: ECommerceFutureProjects;
    services_section_title: string;
    hero_contact_button_text: string;
    click_for_more_details_button_text: string;
    video_section?: Video;
    contact_section: ECommerceContactSection;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface IT {
    id: number;
    hero_title: string;
    intro: string;
    services: ITService[];
    technologies: ITService[];
    projects?: ProjectComponent[];
    hero_contact_text: string;
    services_section_title: string;
    technologies_section_title: string;
    projects_section_title: string;
    live_demo_text: string;
    learn_more_text: string;
    footer_cta_title: string;
    footer_cta_text: string;
    footer_cta_link_text: string;

    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface Term {
    id: number;
    page_title: string;
    back_to_home_text: string;
    terms_of_service: TermsOfService;
    privacy_policy: TermsOfService;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}
