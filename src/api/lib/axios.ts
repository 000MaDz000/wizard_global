import axiosBase from "axios";

const token = (window as any).env.STRAPI_TOKEN;

export const axios = axiosBase.create({
    headers: {
        Authorization: `Bearer ${token}`
    }
});

// Base URL - you should set this to your Strapi instance URL
export const STRAPI_BASE_URL = (window as any).env.PUBLIC_STRAPI_URL || 'http://localhost:1337';

axios.defaults.baseURL = `${STRAPI_BASE_URL}/api`;
