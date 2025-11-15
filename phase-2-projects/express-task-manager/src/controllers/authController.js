const User = require('../models/User');
const { generateToken } = require('../utils/jwt');
const { comparePassword } = require('../utils/bcrypt');

// Register user
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email and password' 
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({ 
        success: false, 
        message: 'Email already registered' 
      });
    }

    // Create user
    const user = await User.create({ 
      name, 
      email: email.toLowerCase(), 
      password 
    });

    // Generate token
    const token = generateToken({ id: user._id });

    // Set HTTP-Only Cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    // Return response
    res.status(201).json({ 
      success: true, 
      data: { 
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        },
        token // Still send in response for backward compatibility
      } 
    });
  } catch (err) {
    next(err);
  }
};

// Login user
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide email and password' 
      });
    }

    // Find user with password
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');
    
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Check password
    const isMatch = await comparePassword(password, user.password);
    
    if (!isMatch) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Generate token
    const token = generateToken({ id: user._id });

    // Set HTTP-Only Cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({ 
      success: true, 
      data: { 
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        },
        token // Still send in response for backward compatibility
      } 
    });
  } catch (err) {
    next(err);
  }
};

// Get current user profile
const getProfile = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Unauthorized' 
      });
    }

    res.json({ 
      success: true, 
      data: { 
        user: {
          id: req.user._id,
          name: req.user.name,
          email: req.user.email
        }
      } 
    });
  } catch (err) {
    next(err);
  }
};

// Logout user
const logoutUser = (req, res) => {
  try {
    // Clear the HTTP-Only cookie
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    res.json({ 
      success: true, 
      message: 'Logged out successfully' 
    });
  } catch (err) {
    res.status(500).json({ 
      success: false, 
      message: 'Error logging out' 
    });
  }
};

module.exports = { registerUser, loginUser, getProfile, logoutUser };