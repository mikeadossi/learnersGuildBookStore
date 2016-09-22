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

module.exports = {
  getAllBooks,
  createBook
}
