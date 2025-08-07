import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchCarsPage } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { CarsPage } from '../types/content-types';

export const useCarsPage = (
  populate?: string | string[],
  options?: UseQueryOptions<StrapiResponse<CarsPage>>
) => {
  return useQuery({
    queryKey: ['cars-page', populate],
    queryFn: () => fetchCarsPage(populate),
    ...options,
  });
};
