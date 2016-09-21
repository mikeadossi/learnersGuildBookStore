var express = require('express');
var router = express.Router();
var db = require('../database');


router.get('/create', (req, res, next) => {
  res.render('create', { book: {} })
})

router.post('/new', (req, res, next) => {

  const {title, author, image, description} = req.body



  // const {book} = req.body

  // console.log("books title", books.title)
  db.createBook(title, author, image, description)
    .then(book => res.redirect('/') )
    .catch(error => { res.render('error', {error})
  })
})

module.exports = router
