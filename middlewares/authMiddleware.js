var jwt = require('jsonwebtoken');
const path  = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
exports.isAuthenticated = function (req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {

    var jwtToken = req.headers.authorization.split(' ')[1];
    if(jwtToken === process.env.JWT_TOKEN_DEFAULT){
      req.jwtToken = jwtToken;
      next();
    }else {
      res.status(403).json({
        message: 'Invalid token!'
      })
    }
    // jwt.verify(jwtToken, process.env.JWT_SECRET, function (err, payload) {
    //   if (err) {
    //     res.status(401).json({
    //       message: 'Unauthorized user!'
    //     });
    //   } else {
    //     req.user = { ...payload
    //     };
    //     next();
    //   }
    // });
  } else {
    res.status(401).json({
      message: 'Unauthorized user!'
    });
  }
};