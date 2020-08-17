const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const PostSchema = new Schema({
    email: String
});


const Post = mongoose.model('Post', PostSchema);

module.exports = Post;