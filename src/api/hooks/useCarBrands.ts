import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchCarBrands, fetchCarBrand } from '../lib/fetchers';
import { StrapiResponse, PaginationParams } from '../types/strapi';
import { CarBrand } from '../types/content-types';

export const useCarBrands = (
  params?: PaginationParams,
  options?: UseQueryOptions<StrapiResponse<CarBrand[]>>
) => {
  return useQuery({
    queryKey: ['car-brands', params],
    queryFn: () => fetchCarBrands(params),
    ...options,
  });
};

export const useCarBrand = (
  id: number,
  populate?: string | string[],
  options?: UseQueryOptions<StrapiResponse<CarBrand>>
) => {
  return useQuery({
    queryKey: ['car-brand', id, populate],
    queryFn: () => fetchCarBrand(id, populate),
    enabled: !!id,
    ...options,
  });
};
