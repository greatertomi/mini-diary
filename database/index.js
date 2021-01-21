const mysql = require('mysql')

const {host, user, database, password} = require('./config')

const db = mysql.createPool({
  host,
  user,
  password,
  database
})

db.getConnection((err) => {
  if (err) throw err;
  console.log('MySQL is connected...')
})

module.exports = db;
