const util = require('util');

const db = require('../database');
const {getCurrentDateTime} = require('../utils/helper_functions');

const query = util.promisify(db.query).bind(db);

exports.getUsers = async () => {
  return await query('select * from users');
}

exports.createUser = async (formData) => {
  const {username, email, password} = formData;
  const dateTime = getCurrentDateTime();
  console.log('cDT', dateTime)
  await query('INSERT INTO users (username, email, password, dateJoined) VALUES (?, ?, ?, ?)',
    [username, email, password, dateTime])
  return 'User created'
}
