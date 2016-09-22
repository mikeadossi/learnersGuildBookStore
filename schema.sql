DROP TABLE IF EXISTS books;
CREATE TABLE books(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  image_url TEXT,
  description TEXT
);

INSERT INTO books (title, author, image_url, description)
VALUES('Outliers','Malcolm Gladwell','https://images-na.ssl-images-amazon.com/images/I/41h5QL0vVEL._SX327_BO1,204,203,200_.jpg','In this stunning new book, Malcolm Gladwell takes us on an intellectual journey through the world of "outliers"--the best and the brightest, the most famous and the most successful. He asks the question: what makes high-achievers different?

His answer is that we pay too much attention to what successful people are like, and too little attention to where they are from: that is, their culture, their family, their generation, and the idiosyncratic experiences of their upbringing. Along the way he explains the secrets of software billionaires, what it takes to be a great soccer player, why Asians are good at math, and what made the Beatles the greatest rock band.

Brilliant and entertaining, Outliers is a landmark work that will simultaneously delight and illuminate.'),

('Blink','Malcolm Gladwell', 'http://media.tumblr.com/tumblr_m1vljysTbD1rn2kl4.jpg','Blink is a book about how we think without thinking, about choices that seem to be made in an instant-in the blink of an eye-that actually arent as simple as they seem. Why are some people brilliant decision makers, while others are consistently inept? Why do some people follow their instincts and win, while others end up stumbling into error? How do our brains really work-in the office, in the classroom, in the kitchen, and in the bedroom? And why are the best decisions often those that are impossible to explain to others?'),

('The Alchemist','Paulo Coelho','https://images-na.ssl-images-amazon.com/images/I/41ybG235TcL._SX329_BO1,204,203,200_.jpg' , 'The Alchemist by Paulo Coelho continues to change the lives of its readers forever. With more than two million copies sold around the world, The Alchemist has established itself as a modern classic, universally admired.

Paulo Coelhos masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.

The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts, learning to read the omens strewn along lifes path, and, above all, following our dreams.');
