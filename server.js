// import mysql2
const mysql = require('mysql2')
// import inquirer 
const inquirer = require('inquirer'); 
// import console.table
const cTable = require('console.table'); 
// import connection 
const connection = require('./connection')

// connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Champion1!',
  database: 'employee_db'
});

connection.promise().query("SELECT 1")
.then( ([rows,fields]) => {
  console.log(rows);
})
.catch(console.log)
.then( () => con.end());

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  afterConnection();
});


afterConnection = () => {
  promptUser()
};

// inquirer prompt for first action
const promptUser = () => {
  inquirer.prompt ([
    {
      type: 'list',
      name: 'choices', 
      message: 'What would you like to do?',
      choices: ['View all departments', 
                'View all roles', 
                'View all employees', 
                'Add a department', 
                'Add a role', 
                'Add an employee', 
                'Update an employee']
    }
  ])
};

// function to add a department 
addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input', 
      name: 'addDept',
      message: "What department do you want to add?"
    }
  ])

}
