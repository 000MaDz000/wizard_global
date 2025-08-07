import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchIT } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { IT } from '../types/content-types';

export const useIT = (
  populate?: string | string[],
  options?: UseQueryOptions<StrapiResponse<IT>>
) => {
  return useQuery({
    queryKey: ['it', populate],
    queryFn: () => fetchIT(populate),
    ...options,
  });
};
