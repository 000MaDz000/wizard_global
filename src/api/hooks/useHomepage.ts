import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchHomepage } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { Homepage } from '../types/content-types';

export const useHomepage = (
  populate?: string | string[],
  options?: UseQueryOptions<StrapiResponse<Homepage>>
) => {
  return useQuery({
    queryKey: ['homepage', populate],
    queryFn: () => fetchHomepage(populate),
    ...options,
  });
};
