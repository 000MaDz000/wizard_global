import { NativeLinkEnumeration } from '../../types/components/ClientLink';
import { Article, ArticleCategory, CarBrand, CarFuelType, CarModel, Company, ECommerceFutureProject, Project, ServiceDetail, Testimonial } from './content-types';
import { StrapiEntity, StrapiMedia } from './strapi';

// Component Types
export interface Title {
    title_start: string;
    title_end?: string;
}

export interface Link {
    href?: NativeLinkEnumeration;
    text: string;
    custom_href?: string;
}

export interface TextArray {
    text: string;
}

export interface TitleContent {
    id: number;
    title: string;
    content: string;
}

export interface FormItemGroup {
    label?: string;
    placeholder?: string;
}

export interface Budget {
    title: string;
    placeholder?: string;
    chooices: TextArray[];
}

export interface Service {
    icon: StrapiMedia;
    title: string;
    description: string;
    link?: Link;
}

export interface ECommerceService {
    id: number;
    service_name: string;
    service_details?: string;
    service_icon: StrapiMedia;
    service_detail?: ServiceDetail;
}

export interface ITService {
    id: number;
    name: string;
    icon: StrapiMedia;

}

export interface ProjectComponent {
    project: Project;
}

// Form Components
export interface ContactForm {
    name: FormItemGroup;
    email: FormItemGroup;
    country: FormItemGroup;
    message: FormItemGroup;
    submit_button_text: string;
    choose_service_text: string;
    budget?: Budget;
    service: Budget;
}

export interface ECommerceContactForm {
    name: FormItemGroup;
    email: FormItemGroup;
    phone: FormItemGroup;
    requirements: FormItemGroup;
    budget?: Budget;
    business_type: Budget;
    submit_button_text: string;
}

export interface AddTestimonialForm {
    title: string;
    name_label_text: string;
    job_label_text: string;
    rating_label_text: string;
    opinion_label_text: string;
    submit_button_text: string;
    cancel_button_text: string;
}

// Section Components
export interface Hero {
    title: string;
    subtitle?: string;
    cta: Link;
}

export interface About {
    title?: Title;
    description: string;
    image: StrapiMedia;
    learn_more_cta_text: string;
}

export interface ServicesSection {
    title?: Title;
    services?: Service[];
}

export interface WhyUs {
    title?: Title;
    description: string;
    learn_more_cta_text: string;
}

export interface PartnersSection {
    title?: Title;
    description: string;
    partners?: Company[];
}

export interface Testimonials {
    title: Title;
    add_opinion_text: string;
    testimonials?: Testimonial[];
    show_all_text: string;
    show_less_text: string;
    form: AddTestimonialForm;
}

export interface ClientsPartners {
    partners_section?: PartnersSection;
    testimonials_section?: Testimonials;
}

export interface Articles {
    title: Title;
    categories?: ArticleCategory[];
    articles?: Article[];
    all_categories_text: string;
    readmore_text: string;
    show_less_text: string;
    show_more_text: string;
}

export interface ContactInfo {
    instagram_username?: string;
    facebook_username?: string;
    twitter_username?: string;
    linkedin_username?: string;

    whatsapp_number?: string;
    telegram_number?: string;

    botim_number?: string;
    email?: string;
    phone?: string;

}

export interface ContactSection {
    title: Title;
    form?: ContactForm;
    social_media_contact_title: string;
    direct_contact_title: string;
    contact_info: ContactInfo;
}

export interface ECommerceContactSection {
    title: Title;
    form?: ECommerceContactForm;
}

export interface CTA {
    title: string;
    description: string;
    link: Link;
}

export interface Video {
    video_title: string;
    thumbnail: StrapiMedia;
    video: StrapiMedia;
}

export interface ECommerceFutureProjects {
    title: string;
    projects?: ECommerceFutureProject[];
}

export interface Filters {
    id: number;
    title: string;
    type: 'brand' | 'fuel' | 'model' | "condition";
    brands?: CarBrand[];
    fuel_types?: CarFuelType[];
    all_condition_text?: string;
    used_condition_text?: string;
    new_condition_text?: string;
    choose_model_filter_title?: string;
}

export type CarService = ECommerceService;
export interface TermsOfService {
    title: string;
    sections: TitleContent[];
    last_updated: string;
    last_updated_text: string;
}

// ==============================
// Component: sections.text-array-with-title
// ==============================
export interface TextArrayWithTitle {
    title: string;
    texts: TextArray[];
}