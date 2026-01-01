import type { Method } from 'axios';

export interface ApiResponse<T = any> {
    statuscode: number;
    data: T;
    message: string;
    status: boolean;
}

export interface ApiRequestOptions<TData = any> {
    method: Method;
    url: string;
    data?: TData;
    params?: Record<string, any>;
    requiresAuth?: boolean;
    customHeaders?: Record<string, string>;
}
