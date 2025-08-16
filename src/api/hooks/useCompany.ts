import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchCompany } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { Company } from '../types/content-types';

export const useCompany = (
    slug: string,
    options?: UseQueryOptions<StrapiResponse<Company>>
) => {
    return useQuery({
        queryKey: ['company', slug],
        queryFn: () => fetchCompany(slug),
        ...options,
    });
};
