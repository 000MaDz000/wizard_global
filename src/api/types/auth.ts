export interface AuthCredentials {
    identifier: string;
    password: string;
}

export interface AuthSignupData {
    username: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    jwt: string;
    user: {
        id: number;
        username: string;
        email: string;
        confirmed: boolean;
        blocked: boolean;
        createdAt: string;
        updatedAt: string;
    };
}

export interface AuthUser {
    id: number;
    username: string;
    email: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
}
