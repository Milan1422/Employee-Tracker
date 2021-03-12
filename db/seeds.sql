-- we utilize the USE keyword to select our database
USE employer_db;

-- we use this block of code to insert new rows to the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 1);

-- we use this block of code to insert new rows to the role table
INSERT INTO role (title, salary, department_id)
VALUES ('Manager', 90000, 1);