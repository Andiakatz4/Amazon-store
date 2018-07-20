DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products
(
  id INT NOT NULL
  AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INT NULL,
  PRIMARY KEY(id)
);

  INSERT INTO products
    (name, department, price, quantity)
  VALUES
    ("Miniature Pincher", "animals", 1000.00, 50);

  INSERT INTO products
    (name, department, price, quantity)
  VALUES
    ("Collar", "accessories", 25.00, 120);

  INSERT INTO products
    (name, department, price, quantity)
  VALUES
    ("Water Bowl", "home appliances", 19.99, 75);

  INSERT INTO products
    (name, department, price, quantity)
  VALUES
    ("Food Bowl", "home appliances", 19.99, 50);

  INSERT INTO products
    (name, department, price, quantity)
  VALUES
    ("Leash", "accessories", 15.65, 50);

  INSERT INTO products
    (name, department, price, quantity)
  VALUES
    ("Black Lab", "animals", 1500.00, 15);

  INSERT INTO products
    (name, department, price, quantity)
  VALUES
    ("Dog Bed", "home furnishing", 65.00, 85);

  INSERT INTO products
    (name, department, price, quantity)
  VALUES
    ("Dog Treats", "food", 10.99, 200);

  INSERT INTO products
    (name, department, price, quantity)
  VALUES
    ("Dog Chow", "food", 22.00, 18);

  INSERT INTO products
    (name, department, price, quantity)
  VALUES
    ("Chew Toy", "toys", 16.00, 250);

  SELECT *
  FROM products 