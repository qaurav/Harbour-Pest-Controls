const Booking = require("../models/Booking");
const { validateBooking } = require("../utils/validations");

exports.createBooking = async (req, res) => {
  try {
    const { isValid, errors } = validateBooking(req.body);

    if (!isValid) {
      return res.status(400).json({ success: false, errors });
    }

    const booking = await Booking.create(req.body);
    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // HTTP 1.1.
    res.setHeader('Pragma', 'no-cache'); // HTTP 1.0.
    res.setHeader('Expires', '0'); // Proxies.
    const bookings = await Booking.find().sort({ date: -1 });
    // console.log(bookings);
    res.json(bookings);
  } catch (error) {
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
