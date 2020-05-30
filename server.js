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
  promptUser();
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
                'Update an employee role',
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

    if (choices === "Add a role") {
      addRole()
    }

    if (choices === "Add an employee") {
      addEmployee()
    }

    if (choices === "Update an employee") {
      updateEmployee()
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
    promptUser();
  })
};

// function to show all roles 
showRoles = () => {
  console.log('Showing all roles...\n');
  const sql = `SELECT * FROM role`; 
              // `SELECT role.*, department.name 
              //  AS department
              //  FROM role
              //  LEFT JOIN department
              //  ON role.department_id = department.id
              //  WHERE role.id = ?`; 
  
  connection.promise().query(sql, (err, rows) => {
    if (err) throw err; 
    console.table(rows); 
    promptUser();
  })
};

// function to show all employees 
showEmployees = () => {
  console.log('Showing all employees...\n'); 
  const sql = `SELECT * FROM employee`; 

  connection.promise().query(sql, (err, rows) => {
    if (err) throw err; 
    console.table(rows);
    promptUser();
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
      name: 'role',
      message: "What role do you want to add?"
    },
    {
      type: 'input', 
      name: 'salary',
      message: "What is the salary of this role?"
    },
    {
      type: 'input', 
      name: 'dept',
      message: "What department is this role in?"
    }
  ])
  .then(answer => {
    const sql = `INSERT INTO role (title, salary, department_id)
                 VALUES (?, ?, ?)`;
    const params = [ answers.role, answer.salary, answer.dept]
    connection.query(sql, params, (err, result) => {
      if (err) throw err;
      console.log('Added' + answer.role + " to roles!"); 

      showRoles();
    })
  })
};

// function to add an employee 
addEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'fistName',
      message: "What is the employee's first name?"
    },
    {
      type: 'input',
      name: 'lastName',
      message: "What is the employee's last name?"
    },
    {
      type: 'input',
      name: 'role',
      message: "What is the employee's role?"
    },
    {
      type: 'input',
      name: 'manager',
      message: "Who is the employee's manager?"
    }
  ])
  .then(answer => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                 VALUES (?, ?, ?, ?)`;
    const params = [answer.fistName, answer.lastName, answer.role, answer.manager]

    connection.query(sql, params, (err, result) => {
    if (err) throw err;
    console.log("Added" + answer.firstName + "" + answer.lastName + " to list of employees!")
  
    showEmployees();
    promptUser();
    })
  })
};


// function to update an employee 
// updateEmployee = () => {
//   inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: "Which employee would you like to update?"
//     },
//     {
//       type: 'input',
//       name: 'updateRole',
//       message: "What is the employee's new role?"
//     }
//   ])
//   .then(answer => {
//     const sql = `UPDATE 
//                  VALUES (?, ?)`;
//     const params = [answer.fistName, answer.lastName, answer.role, answer.manager]

//     connection.query(sql, params, (err, result) => {
//     if (err) throw err;
//     console.log("Updated" + answer.firstName + "" + answer.lastName +")
  
//     showEmployees();
//     promptUser();
//     })
//   })
// };











//BONUS

// update employee managers
// view employees by manager
// SELECT first_name, last_name,  manager_id FROM employee;
// view employees by department
// delete department, roles, employees 
// total budget 