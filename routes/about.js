const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('about', { title: 'A propos de nous' });
});

module.exports = router;