import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createBooking = async (bookingData) => {
  const response = await api.post('/bookings', bookingData);
  return response;
};

export const fetchBookings = () => {
  return api.get('/bookings').then(response => response.data);
};

export const updateBooking = async (id, bookingData) => {
  const response = await axios.patch(`/bookings/${id}`, bookingData);
  return response;
};
export const deleteBooking = async (bookingId) => {
  const response = await api.delete(`/bookings/${bookingId}`);
  return response;
};

export const login = (credentials) => {
  return api.post('/auth/login', credentials);
};

export default api;
