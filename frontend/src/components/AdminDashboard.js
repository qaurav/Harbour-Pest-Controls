import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Container,
  Button,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import PendingIcon from '@mui/icons-material/Pending';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import BookingList from './BookingList';
import BookingForm from './BookingForm';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { fetchBookings, createBooking, updateBooking, deleteBooking } from '../services/api';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    loadBookings();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const loadBookings = async () => {
    try {
      const data = await fetchBookings();
      setBookings(data);
    } catch (error) {
      console.error('Error loading bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBooking = async (bookingData) => {
    try {
      const response = await createBooking(bookingData);
      if(response.data){
        await loadBookings();
        setOpenForm(false);
      }
     
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  const handleEditBooking = async (bookingData) => {
    try {
      await updateBooking(bookingData._id, bookingData);
      loadBookings();
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  const handleFormSubmit = (bookingData) => {
    if (selectedBooking) {
      handleEditBooking(bookingData);
    } else {
      handleCreateBooking(bookingData);
    }
  };

  const handleOpenCreate = () => {
    setSelectedBooking(null);
    setOpenForm(true);
  };

  const handleOpenEdit = (booking) => {
    setSelectedBooking(booking);
    setOpenForm(true);
  };

  const StatsCard = ({ title, value, icon, color }) => (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        display: 'flex',
        alignItems: 'center',
        bgcolor: color,
        color: 'white',
      }}
    >
      <Box sx={{ mr: 2 }}>{icon}</Box>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </Box>
    </Paper>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Admin Dashboard
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenCreate}
        >
          Create New Booking
        </Button>
        <Button
            variant="outlined"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatsCard
            title="Total Bookings"
            value={bookings.length}
            icon={<DashboardIcon fontSize="large" />}
            color={theme.palette.primary.main}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatsCard
            title="Pending Bookings"
            value={bookings.filter(b => b.status === 'Pending').length}
            icon={<PendingIcon fontSize="large" />}
            color={theme.palette.warning.main}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatsCard
            title="Today's Bookings"
            value={bookings.filter(b => new Date(b.date).toDateString() === new Date().toDateString()).length}
            icon={<EventIcon fontSize="large" />}
            color={theme.palette.success.main}
          />
        </Grid>
        <Grid item xs={12}>
          <BookingList 
            bookings={bookings} 
            onBookingUpdate={loadBookings}
            onEdit={handleOpenEdit}
          />
        </Grid>
      </Grid>

      <BookingForm
        open={openForm}
        handleClose={() => setOpenForm(false)}
        booking={selectedBooking}
        onSubmit={handleFormSubmit}
      />
    </Container>
  );
};

export default AdminDashboard;
