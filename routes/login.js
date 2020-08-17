const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', (req, res) => {
    if (req.body.username == 'smsassureur7' && req.body.password == 'darkweb') {
        res.render('about');
    }
})

module.exports = router;