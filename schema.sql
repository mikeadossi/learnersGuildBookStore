DROP TABLE IF EXISTS books;
CREATE TABLE books(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  wanted BOOLEAN,
  image_url VARCHAR(255),
  created_at DATE
);
