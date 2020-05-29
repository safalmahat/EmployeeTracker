// import mysql2
const mysql = require('mysql2')

// import inquirer 
const inquirer = require('inquirer'); 

// import console.table
const cTable = require('console.table'); 

// import connection 
const connection = require('./connection')

// inquirer prompt for first action
const promptUser = () => {
  return inquirer.prompt ([
    {
      type: 'list',
      name: 'choices', 
      message: 'What would you like to do?',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee']
    }
  ])
}
promptUser()
  // .then(promptProject)
  // .then(portfolioData => {
  //   return generatePage(portfolioData);
  // })
  // .then(pageHTML => {
  //   return writeFile(pageHTML);
  // })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
  //   return copyFile();
  // })
  // .then(copyFileResponse => {
  //   console.log(copyFileResponse);
  // })
  // .catch(err => {
  //   console.log(err);
  // });