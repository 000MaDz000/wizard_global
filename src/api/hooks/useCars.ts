import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchCars, fetchCar } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { Car } from '../types/content-types';

export const useCars = (
    filters?: Parameters<typeof fetchCars>[0],
    options?: UseQueryOptions<StrapiResponse<Car[]>>,
) => {
    return useQuery({
        queryKey: ['cars', filters],
        queryFn: () => fetchCars(filters || {}),
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
