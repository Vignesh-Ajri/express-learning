const { verifyToken } = require('../utils/jwt');

const protectView = (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.redirect('/login');
  }
  
  try {
    verifyToken(token);
    next();
  } catch (error) {
    res.clearCookie('token');
    return res.redirect('/login');
  }
};

const redirectIfAuth = (req, res, next) => {
  const token = req.cookies.token;
  
  if (token) {
    try {
      verifyToken(token);
      return res.redirect('/dashboard');
    } catch (error) {
      res.clearCookie('token');
    }
  }
  next();
};

module.exports = { protectView, redirectIfAuth };