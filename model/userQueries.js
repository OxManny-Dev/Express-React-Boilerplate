const findAllUsers = 'SELECT * FROM users;';
const findUserByIdQuery = 'SELECT * FROM users WHERE id = ?;';
const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?);';
const deleteUserByIdQuery = 'DELETE FROM users WHERE ID = ?;';

module.exports = {
  findAllUsers,
  findUserByIdQuery,
  insertUserQuery,
  deleteUserByIdQuery,
};
