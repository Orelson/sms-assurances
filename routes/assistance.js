const express = require('express'),
    router = express.Router();

/* Get contact page */
router.get('/', (req, res) => {
    res.render('assistance', { title: 'Assistance Automobile | SMS ASSURANCES - Le site web officiel' });
});

module.exports = router;