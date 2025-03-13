import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Grid
} from '@mui/material';
import axios from 'axios';
import { format } from 'date-fns';

const BookingForm = ({ open, handleClose, booking, onSubmit }) => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    status: 'Pending'
  };

  const services = [
    "Beetle Treatment",
    "Cockroach Treatment",
    "Bed Bugs Treatment",
    "Rodent Treatment",
    "Wasps Removal",
    "Maggot Treatment",
    "Ant Control",
    "Tick Removal",
    "Rats Control",
    "Spider Control",
    "Termites Treatment",
    "Possum Removal",
  ];

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (booking) {
      setFormData({
        ...booking,
        date: booking.date.split('T')[0]
      });
    } else {
      setFormData(initialState);
    }
  }, [booking]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = format(new Date(formData.date), "yyyy-MM-dd");
      const payload = {
        ...formData,
        date: formattedDate,
      };
      
      // const response = await axios.post(
      //   "http://localhost:5000/api/bookings",
      //   payload
      // );
      let response;
      if (booking) {
        // Handle edit
        response = await axios.patch(
          `http://localhost:5000/api/bookings/${booking._id}`,
          payload,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
      } else {
        // Handle create
        response = await axios.post(
          "http://localhost:5000/api/bookings",
          payload
        );
      }

      if (response.data) {
        alert(booking ? "Booking updated successfully!" : "Booking successful!");
        onSubmit(response.data);
        handleClose();
      }
    } catch (error) {
      console.error('Error details:', error);
      alert("Booking failed. Please try again.");
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{booking ? 'Edit Booking' : 'Create New Booking'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="phone"
                label="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="address"
                label="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                name="service"
                label="Service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                {services.map((service) => (
                  <MenuItem key={service} value={service}>
                    {service}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="date"
                label="Date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                inputProps={{ min: getCurrentDate() }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                name="status"
                label="Status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Confirmed">Confirmed</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {booking ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BookingForm;
