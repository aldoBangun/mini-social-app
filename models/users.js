const sql = require("../config/db.config");

const register = (newUser, callback) => {
   sql.query("INSERT INTO users SET ?", newUser, callback);
};

const login = (email, callback) => {
   sql.query("SELECT * FROM users WHERE email = ?", [email], callback);
};

const getUserById = (id, callback) => {
   sql.query("SELECT * FROM users WHERE id = ?", [id], callback);
};

module.exports = { register, login, getUserById };
