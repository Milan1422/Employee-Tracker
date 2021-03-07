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
})