// connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'process.env.MYSQL_PASSWORD',
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
    // afterConnection();
});

module.exports = connection; 