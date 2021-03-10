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
}

promptUser();