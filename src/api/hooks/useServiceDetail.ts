import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchService } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { ServiceDetail } from '../types/content-types';



export const useServiceDetail = (
    id: number,
    options?: UseQueryOptions<StrapiResponse<ServiceDetail>>
) => {
    return useQuery({
        queryKey: ['service-detail', id],
        queryFn: () => fetchService(id),
        enabled: !!id,
        ...options,
    });
};
