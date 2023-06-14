var express = require('express');

var Controller = require('../src/users/userController');
const router = express.Router();

router.route('/user/login').get(Controller.loginUserControllerFn);

router.route('/user/create').get(Controller.createUserControllerFn);

module.exports=router;
