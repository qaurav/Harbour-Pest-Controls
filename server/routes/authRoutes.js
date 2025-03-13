const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

router.post('/register', register); // Add the register route
router.post('/login', login);

module.exports = router;