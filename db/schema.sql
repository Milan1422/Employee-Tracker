-- deletes database if the same name is already used
DROP DATABASE IF EXISTS employer_db;

-- Creates new database
CREATE DATABASE employer_db;

-- selects the database to be worked with
USE employer_db;

-- creates department table
CREATE TABLE department (
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

-- creates role table in employer database
CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (8,2) NOT NULL,
    department INT,
    PRIMARY KEY(id),
    FOREIGN KEY (department) REFERENCES department(id)
);

-- creates employee table in employer database
CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title INT,
    manager INT,
    PRIMARY KEY(id),
    FOREIGN KEY (title) REFERENCES role(id),
	FOREIGN KEY (manager) REFERENCES employee(id)
);


