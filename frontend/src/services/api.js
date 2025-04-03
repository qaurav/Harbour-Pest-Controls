import axios from 'axios';

// console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);

const API_URL = (process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/$/, '');
// console.log(API_URL);

const api = axios.create({
  baseURL: `${API_URL}/api`
});

// console.log(api);


// Add debugging interceptors
api.interceptors.request.use((config) => {
  console.log('Starting Request:', JSON.stringify(config, null, 2));
  return config;
}, (error) => {
  console.error('Request Error:', error);
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  console.log('Response:', JSON.stringify(response, null, 2));
  return response;
}, (error) => {
  console.error('Response Error:', error);
  return Promise.reject(error);
});


export const createBooking = async (bookingData) => {
  try {
    const response = await api.post('/bookings', bookingData);
    if (!response.data || Object.keys(response.data).length === 0) {
      throw new Error('API returned an empty response');
    }
    console.log('Booking created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error.message || error);
    return [];
  }
};

export const fetchBookings = async () => {
  try {
    console.log(`Fetching bookings from URL: ${API_URL}/api/bookings`);
    const response = await api.get('/bookings');
    console.log('Fetched bookings:', response.data);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return [];
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
