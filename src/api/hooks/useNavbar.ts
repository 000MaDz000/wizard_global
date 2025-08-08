import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchNavbar } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { Navbar } from '../types/content-types';

export const useNavbar = (
    options?: UseQueryOptions<StrapiResponse<Navbar>>
) => {
    return useQuery({
        queryKey: ['navbar'],
        queryFn: () => fetchNavbar(),
        ...options,
    });
};
