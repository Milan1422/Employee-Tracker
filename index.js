// dependencies that will be used with the application
const mysql = require('mysql');
const inquirer = require('inquirer');
const express = require('express');
const consoleTable = require('console.table');

// extablishing a connection to mysql
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootgtboot',
    database: 'employer_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connection succesfull!');
});

// opening question after we run node index 
const promptUser = () => {
    inquirer.prompt({
        name: 'opening',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'Add an Employee',
            'Update an Employee',
            'View All Roles',
            'Add a Role',
            'View All Departments',
            'Add a Department',
            'Quit'
        ]
    })
    // after they answer the app runs a specific function based on their pick
    .then((answer) => {
        switch (answer.opening) {
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add an Employee':
                addEmployee();
                break;
            case 'Update an Employee':
                updateEmployee();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'View All Departments':
                viewDepartments();
                break;
            case 'Add a Department':
                addDepartment();
                break;
            case 'Quit':
                connection.end();
                break;
        
            default:
                console.log(`Invalid Action: ${answer.opening}`);
                break;
        }
    })
}

// function that lets us see all employees
const viewEmployees = () => {
    const query = 'SELECT * FROM employee;';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log(res);
    })
}
promptUser();
