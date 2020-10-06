const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password123',
  database: 'movies'})
con.connect(function(err) {
  if(err) throw err;
  console.log("successfully connected to the database!")
})
module.exports = con;