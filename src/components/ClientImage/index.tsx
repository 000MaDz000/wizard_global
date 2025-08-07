'use client';
import React, { ImgHTMLAttributes } from 'react';
import { StrapiMedia } from '../../api/types/strapi';

function ClientImage({
    src,
    ...rest
}: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & { src?: StrapiMedia }) {
    if (!src) return null;


    const baseUrl = (import.meta as any).env.VITE_PUBLIC_STRAPI_URL;

    if (!baseUrl) {
        console.warn('PUBLIC_STRAPI_URL is not defined in window.env');
        return null;
    }

    const imageUrl = src.url.startsWith('http')
        ? src.url
        : `${baseUrl}${src.url}`;

    return (
        <img
            {...rest}
            src={imageUrl}
        />
    );
}

export default ClientImage;
