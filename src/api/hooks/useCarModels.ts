import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchCarModels, fetchCarModel } from '../lib/fetchers';
import { StrapiResponse, PaginationParams } from '../types/strapi';
import { CarModel } from '../types/content-types';

export const useCarModels = (
  params?: PaginationParams,
  options?: UseQueryOptions<StrapiResponse<CarModel[]>>
) => {
  return useQuery({
    queryKey: ['car-models', params],
    queryFn: () => fetchCarModels(params),
    ...options,
  });
};

export const useCarModel = (
  id: number,
  populate?: string | string[],
  options?: UseQueryOptions<StrapiResponse<CarModel>>
) => {
  return useQuery({
    queryKey: ['car-model', id, populate],
    queryFn: () => fetchCarModel(id, populate),
    enabled: !!id,
    ...options,
  });
};
