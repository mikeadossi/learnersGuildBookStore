var express = require('express');
var router = express.Router();
var db = require('../database');


//get the index/landing page
// router.get('/', (req, res, next) => {
//   res.render('index.pug')
// })

router.get('/create', (req, res, next) => {
  res.render('create')
})

// router.post('/new', (req, res, next) => {
//   const title = request.body.title
//   const author = request.body.author

// })
module.exports = router
