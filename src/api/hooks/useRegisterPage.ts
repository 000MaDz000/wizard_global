import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchRegisterPage } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { RegisterPage } from '../types/content-types';

export const useRegisterPage = (
    options?: UseQueryOptions<StrapiResponse<RegisterPage>>
) => {
    return useQuery({
        queryKey: ['registerPage'],
        queryFn: () => fetchRegisterPage(),
        ...options,
    });
};
