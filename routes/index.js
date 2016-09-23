var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET home page. */
router.get('/', (request, response, next) => {
  db.getAllBooks()
    .then(books => {
      // const indexBooks = books.map( book =>
      //   Object.assign( {}, book,
      //     { description: book.description.slice( 0, 20 ) }
      //   )
      // )

      response.render('index', { books }
    )
  })
})

module.exports = router;
