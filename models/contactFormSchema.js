const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    match: /^[a-zA-Z ]+$/
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
  },
  service: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: ''
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

