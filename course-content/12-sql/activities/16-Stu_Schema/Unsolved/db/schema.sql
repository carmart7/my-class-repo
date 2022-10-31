DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    category_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    in_stock BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
    id INT NOT NULL,
    category_name VARCHAR(30) NOT NULL
);

INSERT INTO products (id, product_name, category_name, price, in_stock)
VALUES  (4, "soup", 'food', 3.99, false),
        (5, "soup", 'food', 3.99, false);

SHOW TABLES;
