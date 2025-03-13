const validateBooking = (booking) => {
    const errors = [];
  
    if (!booking.name) errors.push('Name is required');
    if (!booking.email) errors.push('Email is required');
    if (!booking.phone) errors.push('Phone is required');
    if (!booking.service) errors.push('Service is required');
    if (!booking.date) errors.push('Date is required');
  
    return {
      isValid: errors.length === 0,
      errors
    };
  };
  
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  module.exports = {
    validateBooking,
    validateEmail
  };
  