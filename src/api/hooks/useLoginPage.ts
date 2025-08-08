import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchLoginPage } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { LoginPage } from '../types/content-types';

export const useLoginPage = (
    options?: UseQueryOptions<StrapiResponse<LoginPage>>
) => {
    return useQuery({
        queryKey: ['loginPage'],
        queryFn: () => fetchLoginPage(),
        ...options,
    });
};
