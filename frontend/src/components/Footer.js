import React from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#15803d', // green-700
        color: 'white',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="body1">
            © 2023 Harbour Pest Control. All rights reserved.
          </Typography>
          
          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center" 
            mt={2}
          >
            <IconButton 
              color="inherit" 
              sx={{ '&:hover': { color: 'grey.300' } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton 
              color="inherit"
              sx={{ '&:hover': { color: 'grey.300' } }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton 
              color="inherit"
              sx={{ '&:hover': { color: 'grey.300' } }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton 
              color="inherit"
              sx={{ '&:hover': { color: 'grey.300' } }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
