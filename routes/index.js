const express = require('express'),
  router = express.Router(),
  Form = require('../database/models/Form'),
  UserNewsletter = require('../database/models/UserNewsletter');

let infoMessage = ''; 

// POST data
router.post('/', (req, res) => {
  if (req.body.username && req.body.email && req.body.phone && req.body.type) {
    Form.create(req.body, (error, post) => {
      infoMessage = 'Merci pour votre réponse ! Nous vous contacterons rapidement.'
      res.redirect('/');
    });
  } else {
    infoMessage = 'Erreur ! Veuillez bien renseigner tous les champs !';
  }

  if (req.body.newsletter_user_email) {
    UserNewsletter.create(req.body, (error, post) => {
      res.redirect('/');
    });
  }
});

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'SMS Assurances - Bienvenue', infoMessage });
});

module.exports = router;