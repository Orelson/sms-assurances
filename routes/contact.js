const express = require('express'),
    router = express.Router(),
    Contact = require('../database/models/Contact');    

/* Get contact page */
router.get('/', (req, res) => {
    res.render('contact', { title: 'Contactez-nous | SMS ASSURANCES - Le site web officiel' });
});

router.post('/', (req, res, next) => {
    if (req.body.name && req.body.email && req.body.phone_number && req.body.message) {
        db.collection('contact').insertOne(req.body);
    };
});

module.exports = router;