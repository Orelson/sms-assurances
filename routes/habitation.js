const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('habitation', { title: 'MULTIRISQUES HABITATION | SMS Assurances - Le site web officiel' });
});

module.exports = router;