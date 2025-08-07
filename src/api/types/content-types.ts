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
    ECommerceContactSection,
    ContactInfo
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
    currency_sign: string;
    features: TextArray[]
    mileage: string;
    color: string;
    transmission: string;
    engine: string;
    horsepower: string;
    seating_capacity: string;
    condition: 'used' | 'new';
    back_to_previous_page_text?: string;
    car_specifications_title: string;
    price_field_text: string;
    condition_field_text: string;
    model_field_text: string;
    year_field_text: string;
    covered_distances_field_text: string;
    color_field_text: string;
    fuel_type_field_text: string;
    transmission_field_text: string;
    features_title: string;
    safety_features_title: string;
    overview_section_title: string;
    engine_field_text: string;
    horsepower_field_text: string;
    capacity_field_text: string;
    cta_button_text: string;
    details_button_text: string;
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
    back_to_previous_page_text?: string;
    live_preview_text: string;
    details_title: string;
    main_features_title: string;
    used_technologies_title: string;
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
    back_to_previous_page_title?: string;
    gallery_title: string;
    main_features_title: string;
    overview_title: string;
    details: string;
    features: TextArray[];
    images: StrapiMedia[];
    expected_launch: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface Footer extends StrapiEntity {
    privacy_policy_text: string;
    terms_of_service_text: string;
    address?: string;
    copyright?: string;
    contact_info?: ContactInfo;

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


export interface TestimonialInput {
    name: string;
    job: string;
    rating: number;
    feedback: string;
}
