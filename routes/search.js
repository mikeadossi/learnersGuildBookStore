var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/', (req, res, next) => {
  const query = req.query
  db.findBooks(query)
    .then(query => {res.render('search', {query})
  }).catch(error => {res.render('error', {error})
    })
})

module.exports = router;
