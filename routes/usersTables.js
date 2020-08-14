const express = require('express');
const router = express.Router();
const Form = require('../database/models/Form');

router.get('/', async (req, res, next) => {
    const users = await Form.find({});
    res.render('usersTable', { users });
});

module.exports = router;