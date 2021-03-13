-- we utilize the USE keyword to select our database
USE employer_db;

-- we use this block of code to insert new rows to the department table
INSERT INTO department (name)
VALUES ('Sales');

INSERT INTO department (name)
VALUES ('Engineering');

INSERT INTO department (name)
VALUES ('Finance');

INSERT INTO department (name)
VALUES ('Legal');

-- we use this block of code to insert new rows to the role table
INSERT INTO role (title, salary)
VALUES ('Sales Lead', 100000);

INSERT INTO role (title, salary)
VALUES ('Salesperson', 80000);

INSERT INTO role (title, salary)
VALUES ('Lead Engineer', 150000);

INSERT INTO role (title, salary)
VALUES ('Software Engineer', 120000);

INSERT INTO role (title, salary)
VALUES ('Account Manager', 160000);

INSERT INTO role (title, salary)
VALUES ('Accountant', 125000);

INSERT INTO role (title, salary)
VALUES ('Legal Team Lead', 250000);

INSERT INTO role (title, salary)
VALUES ('Lawyer', 190000);

-- we use this block of code to insert new rows to the employee table
INSERT INTO employee (first_name, last_name)
VALUES ('James P.', 'Sullivan');

INSERT INTO employee (first_name, last_name)
VALUES ('Randal', 'Boggs');

INSERT INTO employee (first_name, last_name)
VALUES ('Mike', 'Wazowski');

INSERT INTO employee (first_name, last_name)
VALUES ('George', 'Sanderson');

INSERT INTO employee (first_name, last_name)
VALUES ('Boo', 'Gibbs');

INSERT INTO employee (first_name, last_name)
VALUES ('Celia', 'Tilly');
