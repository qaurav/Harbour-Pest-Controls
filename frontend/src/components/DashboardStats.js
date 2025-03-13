import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const DashboardStats = ({ stats }) => {
  const statCards = [
    {
      title: "Today's Bookings",
      value: stats.todayBookings || 0,
      icon: <TodayIcon sx={{ fontSize: 40 }}/>,
      color: '#4CAF50'
    },
    {
      title: 'Pending Bookings',
      value: stats.pendingBookings || 0,
      icon: <PendingActionsIcon sx={{ fontSize: 40 }}/>,
      color: '#FF9800'
    },
    {
      title: 'Completed Jobs',
      value: stats.completedBookings || 0,
      icon: <CheckCircleIcon sx={{ fontSize: 40 }}/>,
      color: '#2196F3'
    },
    {
      title: 'Monthly Revenue',
      value: `$${stats.monthlyRevenue || 0}`,
      icon: <MonetizationOnIcon sx={{ fontSize: 40 }}/>,
      color: '#673AB7'
    }
  ];

  return (
    <Grid container spacing={3}>
      {statCards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              height: '100%',
              borderTop: `4px solid ${card.color}`,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ color: card.color }}>
                {card.icon}
              </Box>
              <Typography variant="h6" sx={{ ml: 2 }}>
                {card.title}
              </Typography>
            </Box>
            <Typography variant="h4" component="div">
              {card.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardStats;
