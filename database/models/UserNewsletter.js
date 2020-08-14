const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String
});


const UserNewsletter = mongoose.model('UserNewsletter', UserSchema);

module.exports = UserNewsletter;