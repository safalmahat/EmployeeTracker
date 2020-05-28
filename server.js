// import mysql2
const mysql = require('mysql2')

// import inquirer 
const inquirer = require('inquirer'); 

// import console.table
const cTable = require('console.table'); 

// connection to database
const connection = mysql.creatConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
}); 

// port destination 
const PORT = process.env.PORT || 3001; 

// app expression
const app = express(); 

// express middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 