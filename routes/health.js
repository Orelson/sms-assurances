const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('health', { title: 'Assurance Santé' });
});

module.exports = router;