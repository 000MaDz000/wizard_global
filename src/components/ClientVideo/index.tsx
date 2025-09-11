'use client';
import React from 'react'
import ReactPlayer from "react-player";
import { STRAPI_BASE_URL } from '../../api/lib/axios';
import { StrapiMedia } from '../../api/types/strapi';

function getFullMediaURL(path: string, backend = STRAPI_BASE_URL) {
    if (/^https?:\/\//i.test(path)) {
        return path;
    }

    return `${backend}${path}`;
}




function ClientVideo({ src, ...rest }: { src: StrapiMedia } & Omit<Parameters<typeof ReactPlayer>['0'], "src">) {
    return (
        <ReactPlayer src={getFullMediaURL(src.url)} {...rest} />
    )
}

export default ClientVideo