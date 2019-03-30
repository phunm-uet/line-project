var express = require('express');
var router = express.Router();

var userController = require('./controller/userController');
var auth_middleware = require('./middlewares/authMiddleware');


// GET user
router.get('/api/User/Get', auth_middleware.isAuthenticated, userController.getUser);


module.exports = router;