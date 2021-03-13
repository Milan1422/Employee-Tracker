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
        console.table(res);
        promptUser();
    })
}
// function that lets us create a new instance of employee
const addEmployee = () => {
    inquirer.prompt([
        {
            name: 'firstname',
            type: 'input',
            message: 'What is the first name of the new employee?'
        },
        {
            name: 'lastname',
            type: 'input',
            message: 'What is the last name of the new employee?'
        },
        {
            name: 'role',
            type: 'list',
            message: 'What is the role of the new employee?',
            choices: [
                'Sales Lead',
                'Salesperson',
                'Lead Engineer',
                'Software Engineer',
                'Account Manager',
                'Legal Team Lead',
                'Lawyer'
            ]
        },
        {
            name: 'manager',
            type: 'list',
            message: 'Who is the manager of the new employee?',
            choices: [
                'James P. Sullivan',
                'Randal Boggs',
                'Mike Wazowski',
                'George Sanderson',
                'Boo Gibbs',
                'Celia Tilly',
                'None'
            ]
        }
    ])
// after user is done with the prompts we use the answers to update employees table
.then((answer) => {
    connection.query(
        'INSERT INTO employee SET ?',
        {
            first_name: answer.firstname,
            last_name: answer.lastname,
            role_id: answer.role,
            manager_id: answer.manager
        },
        (err) => {
            if (err) throw err;
            console.log('success!');
            promptUser();
        }
    )
})
}

// function that displays roles
const viewRoles = () => {
    const query = 'SELECT * FROM role;';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
    })
}

// function to add a role
const addRole = () => {
    inquirer.prompt([
        {
            name: 'rolename',
            type: 'input',
            message: 'What is the name of the role?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of the role?'
        },
        {
            name: 'department',
            type: 'list',
            message: 'TO which department does the role belong to?',
            choices: [
                'Sales',
                'Engineering',
                'Finance',
                'Legal'
            ]
        },
    ])
    // after we are done with prompts add answers as a seed for role table
    .then((answer) => {
        connection.query(
            'INSERT INTO role SET ?', 
            {
                title: answer.rolename,
                salary: answer.salary,
                department: answer.department
            },
            (err) => {
                if (err) throw err;
                console.log('success!');
                promptUser();
            }
        )
    })
}

// function that displays department
const viewDepartments = () => {
    const query = 'SELECT * FROM department;';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
    })
}

// function to add a new department
const addDepartment = () => {
    inquirer.prompt(
        {
            name,
            type: 'input',
            message: 'what is the name of the department'
        }
    )
    // the user input then gets added as a new row in deparment table
    .then((answer) => {
        connection.query(
            'INSERT INTO department SET ?', 
            {
                name: answer.name,
            },
            (err) => {
                if (err) throw err;
                console.log('success!');
                promptUser();
            }
        )
    })
}


// runs app onces user uses node index,js
promptUser();
