const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    username: String,
    email: String,
    phone: Number,
    type: String
});

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;