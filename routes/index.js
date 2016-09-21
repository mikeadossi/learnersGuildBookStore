var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET home page. */
router.get('/', (req, res, next) => {
  db.getAllBooks()
    .then(books => res.render('index', { books }));
});


module.exports = router;
