const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String
});


const UserNewsletter = mongoose.model('Post', UserSchema);

module.exports = UserNewsletter;