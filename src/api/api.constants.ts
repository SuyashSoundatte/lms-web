import type { Method } from 'axios';

export const API = {
    BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
    VERSION: import.meta.env.VITE_API_VERSION || '/api/v1',
};

export const METHOD = {
    GET: 'GET' as Method,
    POST: 'POST' as Method,
    PUT: 'PUT' as Method,
    PATCH: 'PATCH' as Method,
    DELETE: 'DELETE' as Method,
};
