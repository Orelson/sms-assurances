const express = require('express'),
  router = express.Router(),
  Form = require('../database/models/Form'),
  getDate = require('../getDate'),
  Post = require('../database/models/Post');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'SMS ASSURANCES - Bienvenue sur le site web officiel', currentDate: getDate });
});

// POST data
router.post('/', (req, res, next) => {
  if (req.body.username && req.body.email && req.body.phone && req.body.type) {
    Form.create(req.body, (error, post) => {
        res.redirect('/');
    });
  };
});

module.exports = router;