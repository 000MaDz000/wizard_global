import axiosBase from "axios";

const token = "3b10bf9204d5d199f2b16e148820b8dd79de2697cfdb68f6978b01d73c881beeef47d0cd188be61eb461083e843f94e86ee037c6b2fb40372bd5fbd9f21a28d51c89584173cb6628615b22bdfbf2e5fcdbc7ff6066257ee04a7c1c81011cc92c35c5a36591b0a9592535d2cb2cc9e96fc05f292d1bff9dfd673a0744722b9198";

export const axios = axiosBase.create({
    headers: {
        Authorization: `Bearer ${token}`
    }
});

// Base URL - you should set this to your Strapi instance URL
export const STRAPI_BASE_URL = (window as any).env.PUBLIC_STRAPI_URL || 'http://localhost:1337';

axios.defaults.baseURL = `${STRAPI_BASE_URL}/api`;
