// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
  withCredentials: true,
});

// Optional: attach token from localStorage to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

// Public
export const sendMessage = (messageData) => API.post('/messages', messageData);

// Auth
export const loginAdmin = (credentials) => API.post('/auth/login', credentials);

// Admin
export const getAdminMessages = () => API.get('/admin/messages');

