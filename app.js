const express = require('express');
const app = express();
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const routes = require('./routes');

const port = process.env.PORT || 5000;
const server = http.createServer(app);
require('dotenv');

// Cors header
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

server.listen(port, process.env.IP || "0.0.0.0", () => console.log(`Listening on port ${port}`));
