var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET home page. */
router.get('/', (request, response, next) => {
  db.getAllBooks()
  .then(books => {
    response.render('index', {books})
  })
})

module.exports = router;
