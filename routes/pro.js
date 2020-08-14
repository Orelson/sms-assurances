const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pro', { title: 'Assurance professionnelle' });
});

module.exports = router;