require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const morgan = require('morgan');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(morgan('combined'));

// Security and SEO headers
app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=31536000');
  res.set('X-Content-Type-Options', 'nosniff');
  res.set('X-Frame-Options', 'DENY');
  res.set('X-XSS-Protection', '1; mode=block');
  res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  next();
});

// Serve static files
app.use(express.static(--dirname,'public', {
  maxAge: '1y',
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.set('Cache-Control', 'no-cache');
    }
  },
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);


// Sitemap route
app.get('/sitemap.xml', (req, res) => {
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  res.type('application/xml');
  res.sendFile(sitemapPath);
});

// *** IMPORTANT: Catch-all route for SPA ***
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve index.html
});

// Error handling
app.use((req, res) => {
  res.status(404).json({ error: 'Page not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));