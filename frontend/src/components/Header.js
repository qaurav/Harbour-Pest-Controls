import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
// import logo from '../../public/expertpestlogo.jpg'; 


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: 'Home', link: 'home' },
    { text: 'Services', link: 'services' },
    { text: 'Procedure', link: 'procedure' },
    { text: 'About Us', link: 'about' },
    { text: 'Contact', link: 'contact' },
    { text: 'Booking', link: 'booking' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{ bgcolor: 'green.700', color: 'white', height: '100%' }}>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          component={ScrollLink}
          to={item.link}
          smooth={true}
          duration={500}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'green.700' }}>
      <Container maxWidth="lg">
        <Toolbar>
        <Box
  component={ScrollLink}
  to="home"
  sx={{
    flexGrow: 1,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <img 
    src="/Logo.jpg"
    alt="Harbour Pest Control" 
    style={{
      height: '50px', // Adjust height as needed
      width: 'auto',
      // maxWidth: '200px',
      objectFit: 'cover'
    }}
  />
</Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={ScrollLink}
                to={item.link}
                smooth={true}
                duration={500}
                color="inherit"
                sx={{ '&:hover': { color: 'grey.300' } }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            width: 240,
            backgroundColor: '#15803d', // Adding green background
            color: 'white'
           },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
