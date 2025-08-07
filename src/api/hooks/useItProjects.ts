import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchItProjects, fetchItProject } from '../lib/fetchers';
import { StrapiResponse, PaginationParams } from '../types/strapi';
import { Project } from '../types/content-types';

export const useItProjects = (
    params?: PaginationParams,
    options?: UseQueryOptions<StrapiResponse<Project[]>>
) => {
    return useQuery({
        queryKey: ['projects', params],
        queryFn: () => fetchItProjects(params),
        ...options,
    });
};

export const useItProject = (
    id: number,
    options?: UseQueryOptions<StrapiResponse<Project>>
) => {
    return useQuery({
        queryKey: ['project', id],
        queryFn: () => fetchItProject(id),
        enabled: !!id,
        ...options,
    });
};
