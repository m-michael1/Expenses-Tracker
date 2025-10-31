import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const authAPI = {
  getUser: () => api.get('/auth/user'),
  logout: () => api.post('/auth/logout'),
};

export const expensesAPI = {
  getAll: (startDate?: string, endDate?: string) => 
    api.get('/api/expenses', { params: { startDate, endDate } }),
  getRecent: () => api.get('/api/expenses/recent'),
  getComparison: () => api.get('/api/expenses/comparison'),
  getByCategory: (startDate?: string, endDate?: string) => 
    api.get('/api/expenses/by-category', { params: { startDate, endDate } }),
  create: (data: any) => api.post('/api/expenses', data),
  delete: (id: number) => api.delete(`/api/expenses/${id}`),
};

export const categoriesAPI = {
  getAll: () => api.get('/api/categories'),
  create: (name: string) => api.post('/api/categories', { name }),
  delete: (id: number) => api.delete(`/api/categories/${id}`),
};

export default api;
