// import mysql2
const mysql = require('mysql2')
// import inquirer 
const inquirer = require('inquirer'); 
// import console.table
const cTable = require('console.table'); 

// connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Champion1!',
  database: 'employee_db'
});

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
                'Update an employee',
                'No Action']
    }
  ])
  .then((answers) => {
    const { choices } = answers; 

    if (choices === "View all departments") {
      showDepartments()
    }

    if (choices === "View all roles") {
      showRoles()
    }

    if (choices === "View all employees") {
      showEmployees()
    }

    if (choices === "Add a department") {
      addDepartment()
    }
    if (choices === "No Action") {
      connection.end()
    }
  })
};

// function to show all departments 
showDepartments = () => {
  console.log('Showing all departments...\n');
  const sql = `SELECT * FROM department`; 

  connection.promise().query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    connection.end() 
  })
};

// function to show all roles 
showRoles = () => {
  console.log('Showing all roles...\n');
  const sql = `SELECT role.*, department.name 
               AS department
               FROM role
               LEFT JOIN department
               ON role.department_id = department.id
               WHERE role.id = ?`; 
  
  connection.promise().query(sql, (err, rows) => {
    if (err) throw err; 
    console.table(rows); 
    connection.end()
  })
};

// function to show all employees 
showEmployees = () => {
  console.log('Showing all employees...\n'); 
  const sql = `SELECT * FROM employee`; 

  connection.promise().query(sql, (err, rows) => {
    if (err) throw err; 
    console.table(rows);
    connection.end()
  })
}

// function to add a department 
addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input', 
      name: 'addDept',
      message: "What department do you want to add?"
    }
  ])
  .then(answer => {
    const sql = `INSERT INTO department (name)
                 VALUES (?)`;
    connection.query(sql, answer.addDept, (err, result) => {
      if (err) throw err;
      console.log('Added' + answer.addDept + " to departments!"); 

      showDepartments();
    })
  })
};

// function to add a role 
addRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'addRole',
      message: "What is the employee's first name?"
    }
  ])
  .then(answer => {

  })
}

// function to add an employee
addEmployee = () => {

}

// function to update an employee 
updateEmployee = () => {

}
