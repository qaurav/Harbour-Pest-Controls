module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    jwtExpire: '1h',
    port: process.env.PORT || 5000
  };