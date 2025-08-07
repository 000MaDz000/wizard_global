import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchECommerceFutureProjects, fetchECommerceFutureProject } from '../lib/fetchers';
import { StrapiResponse, PaginationParams } from '../types/strapi';
import { ECommerceFutureProject } from '../types/content-types';

export const useECommerceFutureProjects = (
  params?: PaginationParams,
  options?: UseQueryOptions<StrapiResponse<ECommerceFutureProject[]>>
) => {
  return useQuery({
    queryKey: ['e-commerce-future-projects', params],
    queryFn: () => fetchECommerceFutureProjects(params),
    ...options,
  });
};

export const useECommerceFutureProject = (
  id: number,
  populate?: string | string[],
  options?: UseQueryOptions<StrapiResponse<ECommerceFutureProject>>
) => {
  return useQuery({
    queryKey: ['e-commerce-future-project', id, populate],
    queryFn: () => fetchECommerceFutureProject(id, populate),
    enabled: !!id,
    ...options,
  });
};
