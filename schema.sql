-- deletes database if the same name is already used
DROP DATABASE IF EXISTS employer_db;

-- Creates new database
CREATE DATABASE employer_db;

-- selects the database to be worked with
USE employer_db;

-- creates employee table in employer database
CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY(id)
)