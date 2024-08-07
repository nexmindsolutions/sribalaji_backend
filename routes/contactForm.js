const express = require('express');
const Contact = require('./../models/contactFormSchema'); 

const router = express.Router();


router.post('/submit-form', async (req, res) => {
    try {
      const { fullname, email, phone, service, message } = req.body;
      
      // Create a new contact document
      const newContact = new Contact({
        fullname,
        email,
        phone,
        service,
        message
      });
  
      // Save the document to MongoDB
      await newContact.save();
      
      res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (err) {
      console.error('Error submitting form:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  




module.exports=router;