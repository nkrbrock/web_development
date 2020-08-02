CREATE TABLE products(
  id INT NOT NULL, --makes it so id can't be blank
  name STRING,
  price MONEY,
  PRIMARY KEY (id) --uniquely identifies each id
)

INSERT INTO products
VALUES (1, "21", 1.20)

INSERT INTO products (id, name)
VALUES (2, "Pencil")

SELECT * FROM products WHERE id=1 --selects everything with id of 1
SELECT name, price FROM products --selects certain categories

UPDATE products
SET price = 0.80
WHERE id = 2

ALTER TABLE products
ADD stock INT

DELETE FROM products
where id = 2 --use a conditional to avoid deleting everything

CREATE TABLE orders (
    id INT NOT NULL,
    order_number INT,
    customer_id INT,
    product_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (product_id) REFERENCES products(id) --links product_id to id in the products table
)

INSERT INTO orders
VALUES (1, 4362, 2, 1)

SELECT orders.order_number, customers.first_name, cusomers.last_name, customers.address
FROM orders
INNER JOIN cusomers on orders.cusomer_id = customer.id --joins tables in relavent categories