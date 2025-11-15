const express = require('express');
const router = express.Router();
const { protectView, redirectIfAuth } = require('../middleware/viewAuth');

// Public pages
router.get('/', (req, res) => res.render('index'));
router.get('/login', redirectIfAuth, (req, res) => res.render('login'));
router.get('/register', redirectIfAuth, (req, res) => res.render('register'));

// Protected pages
router.get('/dashboard', protectView, (req, res) => res.render('dashboard'));
router.get('/tasks', protectView, (req, res) => res.render('tasks'));
router.get('/categories', protectView, (req, res) => res.render('categories'));

module.exports = router;