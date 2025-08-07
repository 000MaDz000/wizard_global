import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchTerm } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { Term } from '../types/content-types';

export const useTerm = (
  populate?: string | string[],
  options?: UseQueryOptions<StrapiResponse<Term>>
) => {
  return useQuery({
    queryKey: ['term', populate],
    queryFn: () => fetchTerm(populate),
    ...options,
  });
};
