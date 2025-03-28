import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper
} from '@mui/material';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    
    const mailtoLink = `mailto:info@harbourpestcontrols.com.au?subject=Contact%20Form%20Submission&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography 
          variant="h3" 
          component="h2" 
          textAlign="center" 
          fontWeight="bold" 
          mb={4}
        >
          Contact Us
        </Typography>

        <Paper 
          component="form" 
          onSubmit={handleSubmit} 
          elevation={3} 
          sx={{ p: 4 }}
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            placeholder="Your Name"
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            placeholder="Your Email"
            type="email"
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            id="message"
            name="message"
            label="Message"
            placeholder="Your Message"
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: '#22c55e',
              '&:hover': {
                backgroundColor: '#16a34a'
              }
            }}
          >
            Send Message
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
