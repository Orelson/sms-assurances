const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('services', { title: 'Toutes Les Assurances | SMS ASSURANCES - Le site web officiel' });
});

module.exports = router;