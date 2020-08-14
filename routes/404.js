const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('404', { title: 'Page Non Trouvée' });
});

module.exports = router;