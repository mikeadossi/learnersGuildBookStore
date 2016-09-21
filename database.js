const databaseName = 'bookstore'
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')()
const database = pgp(connectionString)


const getAllBooks = () => {
  const sql = 'SELECT * FROM books'

  return database.any(sql)
}

const createBook = (attributes) => {
  const sql = 'INSERT INTO books (title, author, image_url, description) VALUES ($1, $2, $3, $4)'
  const variables = [attributes.title, attributes.author, attributes.image_url, attributes.description]

  return database.one(sql, variables)
}

module.exports = {
  getAllBooks,
  createBook
}
