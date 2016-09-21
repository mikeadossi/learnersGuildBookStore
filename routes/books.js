var express = require('express');
var router = express.Router();
var db = require('../database');


router.get('/create', (req, res, next) => {
  res.render('create', { book: {} })
})

router.post('/new', (req, res, next) => {
  const {title, author, image_url, description} = req.body
  db.createBook(title, author, image_url, description)
    .then(book => res.redirect('/') )
    .catch(error => { res.render('error', {error})
  })
})

module.exports = router
