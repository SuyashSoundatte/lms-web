import axios, { type AxiosRequestConfig } from 'axios';
import api from './axios.instance';
import type { ApiRequestOptions, ApiResponse } from './api.types';

export const apiRequest = async <T = any>({
    method,
    url,
    data,
    params,
    customHeaders = {},
}: ApiRequestOptions): Promise<ApiResponse<T>> => {
    try {
        const config: AxiosRequestConfig = {
            method,
            url,
            params,
            headers: customHeaders,
        };

        if (data && ['POST', 'PUT', 'PATCH'].includes(method)) {
            config.data = data;
        }

        const response = await api.request<ApiResponse<T>>(config);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data?.message || 'API request failed';
            throw new Error(message);
        }
        throw new Error('Unexpected API error');
    }
};
