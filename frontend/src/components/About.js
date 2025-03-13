import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const About = () => {
  return (
    <Box 
      id="about" 
      sx={{ 
        backgroundColor: '#15803d',  // green-700
        color: 'white',
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://storage.googleapis.com/a1aa/image/cd_-RJypvmAPaVaMIW448K9AcoJ6goe3DmPguF_-HdE.jpg"
              alt="Image of the Harbour Pest Control team"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                boxShadow: 3,
                borderRadius: 2,
                display: 'block',
                mx: 'auto'
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" mb={4}>
              About Us
            </Typography>
            <Typography mb={3}>
              Harbour Pest Control is a leading pest control service provider 
              with years of experience in the industry. Our team of professionals 
              is dedicated to providing safe and effective pest control solutions 
              for both residential and commercial properties.
            </Typography>
            <Typography>
              We use the latest techniques and environmentally friendly products 
              to ensure the safety of your family, pets, and the environment. 
              Our goal is to provide you with peace of mind by keeping your 
              property pest-free.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
