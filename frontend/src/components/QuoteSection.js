import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const QuoteSection = () => {
  return (
    <Box sx={{ bgcolor: 'green.700', py: 4, color: 'white' }}>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center"
          >
            <Button
              component={ScrollLink}
              to="booking"
              smooth={true}
              duration={500}
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 4,
                py: 1,
                fontSize: '1.1rem'
              }}
            >
              Book Now
            </Button>
            <Button
              component={ScrollLink}
              to="contact"
              smooth={true}
              duration={500}
              variant="contained"
              color="success"
              size="large"
              sx={{
                px: 4,
                py: 1,
                fontSize: '1.1rem'
              }}
            >
              Get a Quote
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default QuoteSection;
