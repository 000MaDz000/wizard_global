import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchArticleCategories, fetchArticleCategory } from '../lib/fetchers';
import { StrapiResponse, PaginationParams } from '../types/strapi';
import { ArticleCategory } from '../types/content-types';

export const useArticleCategories = (
  params?: PaginationParams,
  options?: UseQueryOptions<StrapiResponse<ArticleCategory[]>>
) => {
  return useQuery({
    queryKey: ['article-categories', params],
    queryFn: () => fetchArticleCategories(params),
    ...options,
  });
};

export const useArticleCategory = (
  id: number,
  populate?: string | string[],
  options?: UseQueryOptions<StrapiResponse<ArticleCategory>>
) => {
  return useQuery({
    queryKey: ['article-category', id, populate],
    queryFn: () => fetchArticleCategory(id, populate),
    enabled: !!id,
    ...options,
  });
};
