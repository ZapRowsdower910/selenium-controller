var _ = require('lodash'),
    cache = require('../cache'),
    configs = require('../configs'),
    express = require('express'),
    fs = require('fs'),
    log = require('log4js').getLogger('/'),
    router = express.Router();
    
router
  .get('/', function(req, res, next) {
    res.render('index', { 
      title: configs.projectName,
      projectName: configs.projectName 
    });
  })
  
  .get('/client', function(req, res, next) {
    res.render('client', { 
      title: configs.projectName,
      projectName: configs.projectName 
    });
  })
    
module.exports = router;