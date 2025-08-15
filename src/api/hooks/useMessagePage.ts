import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { StrapiResponse } from "../types/strapi";
import { MessagePage } from "../types/content-types";
import { fetchMessagePage } from "../lib/fetchers";

export const useMessagePage = (
    options?: UseQueryOptions<StrapiResponse<MessagePage>>
) => {
    return useQuery({
        queryKey: ['messagePage'],
        queryFn: () => fetchMessagePage(),
        ...options,
    });
};