const express = require('express');
const contactRouter =require('./routes/contactForm')
const connectDB = require('./Db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));




connectDB();



app.use('/api',contactRouter);



///////////// Server /////////////////

module.exports = app;
