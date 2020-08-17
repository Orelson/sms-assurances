const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String,
    email: String,
    phone_number: Number,
    message: String
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;