const express = require('express'),
    router = express.Router();

/* Get contact page */
router.get('/', (req, res, next) => {
    res.render('faq', { title: 'Termes et conditions | SMS ASSURANCES - Le site web officiel' });
});

module.exports = router;