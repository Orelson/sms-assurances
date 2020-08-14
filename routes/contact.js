const express = require('express');
const router = express.Router();

/* Get contact page */
router.get('/', (req, res, next) => {
    res.render('contact', { title: 'Contactez-nous' });
});

module.exports = router;