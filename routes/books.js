var express = require('express');
var router = express.Router();
var db = require('../database');


//get the index/landing page
router.get('/', (req, res, next) => {
  res.render('index.js')
})
