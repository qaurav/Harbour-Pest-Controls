import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const TopBar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <AppBar position="static" sx={{ bgcolor: 'green.800' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon fontSize="small" />
              <Typography
                component="a"
                href="mailto:info@harbourpestcontrol.com"
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': { color: 'grey.300' },
                }}
              >
                info@harbourpestcontrol.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon fontSize="small" />
              <Typography
                component="a"
                href="tel:+61234567890"
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': { color: 'grey.300' },
                }}
              >
                +61 234 567 890
              </Typography>
            </Box>
          </Box>

          <Button
            component={Link}
            to={isAuthenticated ? '/admin' : '/login'}
            variant="contained"
            color="success"
            sx={{ bgcolor: 'green.500', '&:hover': { bgcolor: 'green.600' } }}
          >
            Admin
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;
