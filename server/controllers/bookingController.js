const Booking = require("../models/Booking");
const { validateBooking } = require("../utils/validations");

exports.createBooking = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Debug log

    const booking = await Booking.create(req.body);
    console.log('Created Booking:', booking); // Debug log

    if (!booking) {
      return res.status(500).json({ success: false, message: 'Failed to create booking' });
    }

    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    console.error('Error creating booking:', error.message);
    res.status(400).json({ success: false, error: error.message });
  }
};


exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: -1 });
    console.log('Bookings fetched from DB:', bookings); // Debug log
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const { isValid, errors } = validateBooking(req.body);

    if (!isValid) {
      return res.status(400).json({ success: false, errors });
    }

    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }
    res.json(booking);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
