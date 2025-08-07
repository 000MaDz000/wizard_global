import { axios } from '../lib/axios';

const CONTACT_ENDPOINT = '/contact/submit';

export async function submitHomeContact(data: {
    name: string;
    email: string;
    country: string;
    service: string;
    message: string;
}) {
    return axios.post(CONTACT_ENDPOINT, {
        type: 'home',
        data,
    });
}

export async function submitEcommerceContact(data: {
    name: string;
    email: string;
    phone: string;
    business_type: string;
    budget: string;
    other_requirements?: string;
}) {
    return axios.post(CONTACT_ENDPOINT, {
        type: 'ecommerce',
        data,
    });
}

export async function submitItContact(data: {
    name: string;
    email: string;
    country: string;
    message?: string;
}) {
    return axios.post(CONTACT_ENDPOINT, {
        type: 'it',
        data,
    });
}

export async function submitCarContact(data: {
    car_type: string;
    country: string;
    budget: string;
    contact_method: 'whatsapp' | 'email' | 'phone';
    contact_info: string;
}) {
    return axios.post(CONTACT_ENDPOINT, {
        type: 'car',
        data,
    });
}
