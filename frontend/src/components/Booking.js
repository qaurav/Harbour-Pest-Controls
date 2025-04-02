import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { format } from 'date-fns';
import { createBooking } from '../services/api'; // Import createBooking from api.js

const Booking = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    date: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formattedDate = format(new Date(formData.date), "yyyy-MM-dd");
      const payload = {
        ...formData,
        date: formattedDate,
      };

      // Use createBooking from api.js instead of axios.post
      const result = await createBooking(payload);

      // Adjust response handling based on backend response
      // Assuming the backend returns the created booking object or an array
      if (result) {
        alert("Booking successful!");
        setFormData(initialState);
      } else {
        throw new Error("No booking data returned");
      }
    } catch (error) {
      alert("Booking failed. Please try again.");
      console.error("Booking error:", error);
    }
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

  return (
    <Box id="booking" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          mb={4}
        >
          Book a Service
        </Typography>

        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={3}
          sx={{ p: 4 }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                name="name"
                fullWidth
                label="Name"
                placeholder="Your Name"
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                name="email"
                fullWidth
                label="Email"
                type="email"
                placeholder="Your Email"
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                name="phone"
                fullWidth
                label="Phone"
                placeholder="Your Phone Number"
                margin="normal"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <TextField
                name="address"
                fullWidth
                label="Address"
                placeholder="Your Address"
                margin="normal"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Service</InputLabel>
                <Select
                  name="service"
                  label="Service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                name="date"
                label="Date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                inputProps={{ min: getCurrentDate() }}
                required
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  backgroundColor: "#22c55e",
                  "&:hover": {
                    backgroundColor: "#16a34a",
                  },
                }}
              >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Booking;