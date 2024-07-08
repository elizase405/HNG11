const express = require('express');
const { register, login } = require('../auth/auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
