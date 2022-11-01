-- Add your code below and execute file in MySQL Shell --
SELECT favorite_books.id AS BookID, favorite_books.book_name, book_prices.price
FROM favorite_books
JOIN book_prices on book_prices.id = favorite_books.book_price
ORDER BY favorite_books.id;