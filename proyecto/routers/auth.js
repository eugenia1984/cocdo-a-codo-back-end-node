const express = require('express');
const router = express.Router();
const bcryptjs = require('bycryptjs');

const connection = require('../db');

router.get('/register', (req, res) => {
  res.render('auth/register', {lauout: 'layout-auth'})
});

// para la parte dle registro
router.post('/register', async (req, res) => {
  const hash = await bcryptjs.hash(req.body.password, 8);

  connection.query('INSET INTO usuarios SET =?', { email: req.body.email, password: req.body.password}, error => {
    if (error) { throw error }

    res.redirect('/');
  });
});