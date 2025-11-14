const express = require('express');
const router = express.Router();

// Public pages
router.get('/', (req, res) => res.render('index'));
router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));

// Protected pages
router.get('/dashboard', (req, res) => res.render('dashboard'));
router.get('/tasks', (req, res) => res.render('tasks'));
router.get('/categories', (req, res) => res.render('categories'));

module.exports = router;