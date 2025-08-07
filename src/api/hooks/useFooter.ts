import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchFooter } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { Footer } from '../types/content-types';

export const useFooter = (
    options?: UseQueryOptions<StrapiResponse<Footer>>
) => {
    return useQuery({
        queryKey: ['site_footer'],
        queryFn: () => fetchFooter(),
        ...options,
    });
};