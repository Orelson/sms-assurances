const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post');

/* GET home page. */
router.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render(
    'blog', 
    { 
      title: 'SMS Assurances - Blog',
      posts
    });
});

module.exports = router;