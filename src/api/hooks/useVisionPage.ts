import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { StrapiResponse } from "../types/strapi";
import { VisionPage } from "../types/content-types";
import { fetchVisionPage } from "../lib/fetchers";

export const useVisionPage = (
    options?: UseQueryOptions<StrapiResponse<VisionPage>>
) => {
    return useQuery({
        queryKey: ['visionPage'],
        queryFn: () => fetchVisionPage(),
        ...options,
    });
};