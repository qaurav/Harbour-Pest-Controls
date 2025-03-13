const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcryptjs'); // Import bcrypt

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
          return res.status(400).json({ message: 'User already exists' });
      }

      // Create new user
      user = new User({
          email,
          password
      });

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save user to database
      await user.save();

      const payload = {
        user: {
            id: user.id
        }
    };

    jwt.sign(
        payload,
        config.jwtSecret,
        { expiresIn: config.jwtExpire },  // e.g., '1h' or '1d'
        (err, token) => {
            if (err) throw err;
            res.status(201).json({ token }); // Send the token back
        }
    );
  } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !await user.matchPassword(password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, config.jwtSecret, {
      expiresIn: config.jwtExpire
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
