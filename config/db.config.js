require("dotenv").config();
const { createConnection } = require("mysql");
const { DB_HOST, DB_USER, DB_PASSWORD, DATABASE } = process.env;

const connection = createConnection({
   host: DB_HOST,
   user: DB_USER,
   password: DB_PASSWORD,
   database: DATABASE,
});

connection.connect((err) => {
   if (err) return console.log(err);
   console.log("Database connected");
});

module.exports = connection;
