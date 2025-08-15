import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { StrapiResponse } from "../types/strapi";
import { WhyUsPage } from "../types/content-types";
import { fetchWhyUsPage } from "../lib/fetchers";


export const useWhyUsPage = (
    options?: UseQueryOptions<StrapiResponse<WhyUsPage>>
) => {
    return useQuery({
        queryKey: ['whyUs'],
        queryFn: () => fetchWhyUsPage(),
        ...options,
    });
};