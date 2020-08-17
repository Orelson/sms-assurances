const express = require('express'),
    router = express.Router(),
    Form = require('../database/models/Form'),
    getDate = require('../getDate');

router.get('/', (req, res, next) => {
    res.render('health', { title: 'Assurance Santé | SMS ASSURANCES - Le site web officiel',  currentDate: getDate});
});

// POST data
router.post('/', (req, res) => {
    if (req.body.username && req.body.email && req.body.phone && req.body.type && req.body.date) {
        Form.create(req.body, (error, post) => {
            res.redirect('/health');
        });
    } else {
        console.error(error);
    }
});

module.exports = router;