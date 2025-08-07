import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchECommerce } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { ECommerce } from '../types/content-types';

export const useECommerce = (
  populate?: string | string[],
  options?: UseQueryOptions<StrapiResponse<ECommerce>>
) => {
  return useQuery({
    queryKey: ['e-commerce', populate],
    queryFn: () => fetchECommerce(populate),
    ...options,
  });
};
