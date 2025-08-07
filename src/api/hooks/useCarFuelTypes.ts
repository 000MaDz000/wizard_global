import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchCarFuelTypes, fetchCarFuelType } from '../lib/fetchers';
import { StrapiResponse, PaginationParams } from '../types/strapi';
import { CarFuelType } from '../types/content-types';

export const useCarFuelTypes = (
  params?: PaginationParams,
  options?: UseQueryOptions<StrapiResponse<CarFuelType[]>>
) => {
  return useQuery({
    queryKey: ['car-fuel-types', params],
    queryFn: () => fetchCarFuelTypes(params),
    ...options,
  });
};

export const useCarFuelType = (
  id: number,
  populate?: string | string[],
  options?: UseQueryOptions<StrapiResponse<CarFuelType>>
) => {
  return useQuery({
    queryKey: ['car-fuel-type', id, populate],
    queryFn: () => fetchCarFuelType(id, populate),
    enabled: !!id,
    ...options,
  });
};
