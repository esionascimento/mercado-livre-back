const express = require('express');

const { routerAuthentication } = require('../controllers/Auth');

const routers = express.Router();

routers.use('/', routerAuthentication);


module.exports = routers;