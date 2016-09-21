var express = require('express');
var router = express.Router();
var db = require('../database');


router.get('/create', (req, res, next) => {
  res.render('create')
  .catch(error => { res.render('error', {error})
  })
})

router.post('/new', (req, res, next) => {
  //
  // const title = req.body.title
  // const author = req.body.author
  // const image = req.body.image_url
  // const description = req.body.description
  //


  const {book} = req.body
  console.log("book", book)
  db.createBook(book)
    .then(book => {res.redirect('/')
  })
  .catch(error => {res.render('error', {error})
  })
})

module.exports = router
