const User = require('../models/User');
const { generateToken } = require('../utils/jwt');
const { comparePassword } = require('../utils/bcrypt'); // We'll use bcrypt for login compare

// Register user
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email and password are required' });
    }

    // existing user
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }

    // create user -> password will be hashed by pre-save hook
    const user = await User.create({ name, email: email.toLowerCase(), password });

    // generate token
    const token = generateToken({ id: user._id });

    // return user (without password)
    const userSafe = {
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    return res.status(201).json({ success: true, data: { user: userSafe, token } });
  } catch (err) {
    next(err);
  }
};

// Login user
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    // need to select password because schema excludes it by default
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // compare
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken({ id: user._id });

    const userSafe = {
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    return res.json({ success: true, data: { user: userSafe, token } });
  } catch (err) {
    next(err);
  }
};

// Get profile (protected)
const getProfile = async (req, res, next) => {
  try {
    // auth middleware attaches req.user
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const userSafe = {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      createdAt: req.user.createdAt,
      updatedAt: req.user.updatedAt
    };

    return res.json({ success: true, data: { user: userSafe } });
  } catch (err) {
    next(err);
  }
};

module.exports = { registerUser, loginUser, getProfile };
