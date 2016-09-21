const databaseName = 'bookstore'
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')()
const database = pgp(connectionString)


const getAllBooks = () => {
  const sql = `SELECT * FROM books`

  return database.any(sql)
}

module.export = {
  getAllBooks
}
