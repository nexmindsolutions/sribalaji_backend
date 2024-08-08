const express = require('express');
const contactRouter = require('./routes/userRoutes');
const connectDB = require('./Db');
const cors = require('cors');
const app = express();

//////// 1) middlewares ///////////////

app.use(express.json());
app.use(cors());

//////// 2) Db connecton ///////////////

connectDB();


////////// 3) Routes ////////////////////

app.use('/api/user', contactRouter);

///////// 4) Server /////////////////////

module.exports = app;
