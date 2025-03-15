import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/';

const api = axios.create({
  baseURL: API_URL,
});

// Request interceptor for adding auth tokens
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createBooking = async (bookingData) => {
  const response = await api.post('api/bookings', bookingData);
  return Array.isArray(response.data) ? response.data : [];
};

export const fetchBookings = async () => {
  try {
    const response = await api.get('api/bookings');
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return []; // Return an empty array in case of error
  }
};

export const updateBooking = async (id, bookingData) => {
  const response = await api.patch(`api/bookings/${id}`, bookingData);
  return response;
};
export const deleteBooking = async (bookingId) => {
  const response = await api.delete(`api/bookings/${bookingId}`);
  return response;
};

export const login = (credentials) => {
  return api.post('api/auth/login', credentials);
};

export default api;
