// import sqlite3 
const sqlite3 = require('sqlite3').verbose();

// import inquirer 
const inquirer = require('inquirer'); 

// importing inputCheck
// const inputCheck = require('./utils/inputCheck');

// port destination 
const PORT = process.env.PORT || 3001; 

// app expression
const app = express(); 

// express middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

// connect to database
const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the election database.');
  });
