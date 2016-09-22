const databaseName = 'bookstore'
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')()
const database = pgp(connectionString)


const getAllBooks = () => {
  const sql = 'SELECT * FROM books'

  return database.any(sql)
}

const createBook = (title, author, image_url, description) => {
  const sql = 'INSERT INTO books (title, author, image_url, description) VALUES ($1, $2, $3, $4) RETURNING *'

  return database.one(sql, [title, author, image_url, description] )
}

const getBookById = (book_id) => {
  const sql = 'SELECT * FROM books WHERE books.id = $1'

  return database.one(sql, [book_id])
}

const findBooks = (options) => {
  const sql = 'SELECT * FROM books WHERE LOWER(title) LIKE $1 OR LOWER(description) LIKE $1 OR LOWER(author) LIKE $1'
  let variables = []
  if (options.q) {
    let q = options.q
      .toLowerCase()
      .replace(/^ */, '%')
      .replace(/ *$/, '%')
      .replace(/ +/g, '%')

    variables.push(q)

  return database.any(sql, variables)
  }
}

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  findBooks
}
