import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchCars, fetchCar } from '../lib/fetchers';
import { StrapiResponse, PaginationParams } from '../types/strapi';
import { Car } from '../types/content-types';

export const useCars = (
    params?: PaginationParams,
    options?: UseQueryOptions<StrapiResponse<Car[]>>
) => {
    return useQuery({
        queryKey: ['cars', params],
        queryFn: () => fetchCars(params),
        ...options,
    });
};

export const useCar = (
    id: number,
    options?: UseQueryOptions<StrapiResponse<Car>>
) => {
    return useQuery({
        queryKey: ['car', id],
        queryFn: () => fetchCar(id),
        enabled: !!id,
        ...options,
    });
};
