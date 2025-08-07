import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchArticles, fetchArticle } from '../lib/fetchers';
import { StrapiResponse, PaginationParams } from '../types/strapi';
import { Article } from '../types/content-types';

export const useArticles = (
    params?: PaginationParams,
    options?: UseQueryOptions<StrapiResponse<Article[]>>
) => {
    return useQuery({
        queryKey: ['articles', params],
        queryFn: () => fetchArticles(params),
        ...options,
    });
};

export const useArticle = (
    id: number,
    options?: UseQueryOptions<StrapiResponse<Article>>
) => {
    return useQuery({
        queryKey: ['article', id],
        queryFn: () => fetchArticle(id),
        enabled: !!id,
        ...options,
    });
};
