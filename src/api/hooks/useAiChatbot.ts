import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchAiChatbot } from '../lib/fetchers';
import { StrapiResponse } from '../types/strapi';
import { AiChatbot } from '../types/content-types';

export const useAiChatbot = (
    options?: UseQueryOptions<StrapiResponse<AiChatbot>>
) => {
    return useQuery({
        queryKey: ['aiChatbot'],
        queryFn: () => fetchAiChatbot(),
        ...options,
    });
};
