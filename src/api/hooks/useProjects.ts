import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchProjects, fetchProject } from '../lib/fetchers';
import { StrapiResponse, PaginationParams } from '../types/strapi';
import { Project } from '../types/content-types';

export const useProjects = (
  params?: PaginationParams,
  options?: UseQueryOptions<StrapiResponse<Project[]>>
) => {
  return useQuery({
    queryKey: ['projects', params],
    queryFn: () => fetchProjects(params),
    ...options,
  });
};

export const useProject = (
  id: number,
  populate?: string | string[],
  options?: UseQueryOptions<StrapiResponse<Project>>
) => {
  return useQuery({
    queryKey: ['project', id, populate],
    queryFn: () => fetchProject(id, populate),
    enabled: !!id,
    ...options,
  });
};
