import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchAboutDetails } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { AboutDetails } from '../types/content-types';

export const useAboutDetails = (
    options?: UseQueryOptions<StrapiResponse<AboutDetails>>
) => {
    return useQuery({
        queryKey: ['aboutDetails'],
        queryFn: () => fetchAboutDetails(),
        ...options,
    });
};
