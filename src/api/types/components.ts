import { NativeLinkEnumeration } from '../../types/components/ClientLink';
import { Article, ArticleCategory, CarBrand, CarFuelType, CarModel, ECommerceFutureProject, Project, Testimonial } from './content-types';
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
    chooices: TextArray[];
}

export interface Partner {
    id: number;
    image: StrapiMedia;
}

export interface Service {
    icon: StrapiMedia;
    title: string;
    description: string;
    link?: Link;
}

export interface ECommerceService {
    service_name: string;
    service_details?: string;
    service_icon: StrapiMedia;

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

}

export interface ServicesSection {
    title?: Title;
    services?: Service[];
}

export interface WhyUs {
    title?: Title;
    description: string;
}

export interface PartnersSection {
    title?: Title;
    description: string;
    partners?: Partner[];
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
    readmore_text: string;
    show_less_text: string;
    show_more_text: string;
}

export interface ContactSection {
    title: Title;
    form?: ContactForm;
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
    title: string;
    type: 'brand' | 'fuel' | 'model';
    brands?: CarBrand[];
    models?: CarModel[];
    fuel_types?: CarFuelType[];
}

export interface TermsOfService {
    title: string;
    sections: TitleContent[];
    last_updated: string;
    last_updated_text: string;
}
