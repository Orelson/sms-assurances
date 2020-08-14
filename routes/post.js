const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post');
const bodyParser = require('body-parser');

bodyParser.urlencoded({ extended: true });

/* Get contact page */
router.get('/', async (req, res) => {
    const currentPost = req.params.id;
    let post = await Post.findOne({ id: currentPost });

    // let article = await Post.find({ id: req.params.id });
    console.log(currentPost);

    res.render('post', {
        // article,
        post,
        title: 'Hello World'
    });
});

module.exports = router;