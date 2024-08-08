const express = require('express');
const userController= require('./../controllers/userController');
const checkFormValidMiddleware = require('./../middlewares/userMiddleware')
const router =express.Router();


///////// routes Decler /////////


router
.route('/')
.post(checkFormValidMiddleware.checkFormValid,userController.userForm);




////////  Router Exports /////////
module.exports = router;