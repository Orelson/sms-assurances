const express = require('express'),
    router = express.Router(),
    Form = require('../database/models/Form');
    getDate = require('../getDate');

router.get('/', (req, res, next) => {
    res.render('life', { title: 'Assurance Individuelle Accident | SMS ASSURANCES - Le site web officiel', currentDate: getDate });
});

// POST data
router.post('/', (req, res) => {
    if (req.body.username && req.body.email && req.body.phone && req.body.type) {
        Form.create(req.body, (error, post) => {
            res.redirect('/life');
        });
    } else {
        console.error(error);
    }
});

module.exports = router;