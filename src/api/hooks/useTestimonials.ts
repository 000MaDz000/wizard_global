import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchTestimonials, fetchTestimonial } from '../lib/fetchers';
import { StrapiResponse, PaginationParams } from '../types/strapi';
import { Testimonial } from '../types/content-types';

export const useTestimonials = (
  params?: PaginationParams,
  options?: UseQueryOptions<StrapiResponse<Testimonial[]>>
) => {
  return useQuery({
    queryKey: ['testimonials', params],
    queryFn: () => fetchTestimonials(params),
    ...options,
  });
};

export const useTestimonial = (
  id: number,
  populate?: string | string[],
  options?: UseQueryOptions<StrapiResponse<Testimonial>>
) => {
  return useQuery({
    queryKey: ['testimonial', id, populate],
    queryFn: () => fetchTestimonial(id, populate),
    enabled: !!id,
    ...options,
  });
};
