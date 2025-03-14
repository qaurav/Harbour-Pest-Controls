import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import { theme } from './theme/theme';

// Existing Components
// import Navbar from './components/Navbar';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import BookingForm from './components/BookingForm';
import ProtectedRoute from './components/ProtectedRoute';

// New Components
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import Procedure from './components/Procedure';
import Services from './components/Services';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';
import Footer from './components/Footer';


function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app">
            <TopBar />
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <QuoteSection />
                  <Procedure />
                  <Services />
                  <Booking />
                  <About />
                  <Contact />
                </>
              } />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/admin/*" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
            </Routes>
            {/* <AdminLogin /> */}
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
