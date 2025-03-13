const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking
} = require('../controllers/bookingController');

router.post('/', createBooking);
router.get('/', auth, getBookings);
router.patch('/:id', auth, updateBooking);
router.delete('/:id', auth, deleteBooking);

module.exports = router;
