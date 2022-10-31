DROP DATABASE IF EXISTS restuarant_db;
CREATE DATABASE restuarant_db;

USE restuarant_db;

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

CREATE TABLE customers_orders (
    id INT NOT NULL,
    customer_id INT,
    order_details TEXT,
    FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);

INSERT INTO customers (first_name, last_name)
VALUE   ('maria', 'carey'),
        ('bob', 'stevenson');

SELECT * FROM customers;

INSERT INTO customers_orders (id, customer_id, order_details)
VALUES  ('1', 1, '');

SELECT first_name, last_name, order_details FROM customers 
INNER JOIN customers_orders ON customers.id = customers_orders.customer_id;