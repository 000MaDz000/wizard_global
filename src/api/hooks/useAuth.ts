import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { login, signup, getMe } from '../lib/fetchers';
import { AuthCredentials, AuthSignupData, AuthResponse, AuthUser } from '../types/auth';

const TOKEN_KEY = 'jwt_token';

export const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation<AuthResponse, Error, AuthCredentials>({
        mutationFn: login,
        onSuccess: (data) => {
            localStorage.setItem(TOKEN_KEY, data.jwt);
            queryClient.invalidateQueries({ queryKey: ['me'] });
        },
    });
};

export const useSignup = () => {
    const queryClient = useQueryClient();

    return useMutation<AuthResponse, Error, AuthSignupData>({
        mutationFn: signup,
        onSuccess: (data) => {
            localStorage.setItem(TOKEN_KEY, data.jwt);
            queryClient.invalidateQueries({ queryKey: ['me'] });
        },
    });
};

export const useAuth = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null;

    return useQuery<AuthUser, Error>({
        queryKey: ['me'],
        queryFn: () => getMe(token!),
        enabled: !!token,
        staleTime: 1000 * 60 * 60, // 60 minutes
    });
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};


const getToken = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
};

const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const useJWT = () => {
    const queryClient = useQueryClient();
    const token = getToken();

    const { data: user, isLoading, isError, refetch } = useQuery<AuthUser, Error>({
        queryKey: ['me'],
        queryFn: () => getMe(token!),
        enabled: !!token,
        staleTime: 1000 * 60 * 60,
    });

    const loginMutation = useMutation<AuthResponse, Error, AuthCredentials>({
        mutationFn: login,
        onSuccess: (data) => {
            setToken(data.jwt);
            queryClient.invalidateQueries({ queryKey: ['me'] });
        },
    });

    const signupMutation = useMutation<AuthResponse, Error, AuthSignupData>({
        mutationFn: signup,
        onSuccess: (data) => {
            setToken(data.jwt);
            queryClient.invalidateQueries({ queryKey: ['me'] });
        },
    });

    const logout = () => {
        removeToken();
        queryClient.removeQueries({ queryKey: ['me'] });
    };

    return {
        token,
        user,
        isLoading,
        isError,
        login: loginMutation.mutate,
        loginAsync: loginMutation.mutateAsync,
        signup: signupMutation.mutate,
        signupAsync: signupMutation.mutateAsync,
        logout,
        refetchUser: refetch,
        isLoggedIn: !!user,
    };
};