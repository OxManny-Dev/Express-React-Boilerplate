const findAllUsers = 'SELECT * FROM users;';
const findUserByIdQuery = 'SELECT * FROM users WHERE id = ?;';
const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?);';
const deleteUserByIdQuery = 'DELETE FROM users WHERE ID = ?;';

// Create queries
// for getting 1 data from a table
// for getting all data from a table
// updating data from a table
// deleting data from a table


module.exports = {
  findAllUsers,
  findUserByIdQuery,
  insertUserQuery,
  deleteUserByIdQuery,
};
