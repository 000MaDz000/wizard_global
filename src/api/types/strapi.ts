// Base Strapi types
export interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface StrapiEntity {
    id: number;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
}

export interface StrapiMedia {
    id: number;
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
}

export interface PaginationParams {
    page?: number;
    pageSize?: number;
    sort?: string;
    filters?: Record<string, any>;
    populate?: string | string[] | Record<string, any>;
}
