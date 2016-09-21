var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET home page. */
router.get('/', (req, res, next) => {
  const book = db.getAllBooks()
  res.render('index', { books });
});



module.exports = router;
