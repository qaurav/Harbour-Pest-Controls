import axios from 'axios';

const API_URL = (process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/$/, '');

const api = axios.create({
  baseURL: `${API_URL}/api`, // Append /api to the base URL
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
  try{
    const response = await api.post('/bookings', bookingData);
  return Array.isArray(response.data) ? response.data : [];
  } catch(error) {
    console.error('Error creating bookings:', error);
    return []; // Return an empty array in case of error
  
  }
};

export const fetchBookings = async () => {
  try {
    const response = await api.get('/bookings');
    console.log('Bookings fetched successfully:', response.data);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return []; // Return an empty array in case of error
  }
};

export const updateBooking = async (id, bookingData) => {
  try {
    const response = await api.patch(`/bookings/${id}`, bookingData);
    console.log('Booking updated successfully:', response.data);
    return response;
  } catch (error) {
    console.error('Error updating booking:', error);
    return null; // Return null in case of error
  }
};
export const deleteBooking = async (bookingId) => {
  try {
    const response = await api.delete(`/bookings/${bookingId}`);
    console.log('Booking deleted successfully:', response.data);
    return response;
  } catch (error) {
    console.error('Error deleting booking:', error);
    return null; // Return null in case of error
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    console.log('Login successful:', response.data);
    return response;
  } catch (error) {
    console.error('Error logging in:', error);
    return null; // Return null in case of error
  }
};

export default api;
