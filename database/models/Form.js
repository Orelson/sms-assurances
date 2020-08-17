const mongoose = require('mongoose')
    Schema = mongoose.Schema;

const FormSchema = new Schema({
    username: String,
    email: String,
    phone: Number,
    type: String,
    message: String,
    date: String
});

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;