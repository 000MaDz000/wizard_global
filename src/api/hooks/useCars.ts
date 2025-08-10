import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchCars, fetchCar } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { Car } from '../types/content-types';

export const useCars = (
    options?: UseQueryOptions<StrapiResponse<Car[]>>
) => {
    return useQuery({
        queryKey: ['cars'],
        queryFn: () => fetchCars(),
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
