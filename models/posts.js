const sql = require("../config/db.config");

const create = (post, callback) => {
   const { content, userId } = post;
   sql.query(
      "INSERT INTO posts(content, user_id) VALUES(?, ?)",
      [content, userId],
      callback
   );
};

const getAllPosts = (callback) => {
   sql.query(
      "SELECT users.firstName, users.lastName, content, users.photo FROM posts JOIN users ON posts.user_id = users.id",
      callback
   );
};

const getPostById = (id, callback) => {
   sql.query(
      "SELECT users.firstName, users.lastName, content, users.photo FROM posts JOIN users ON posts.user_id = users.id WHERE id = ?",
      [id],
      callback
   );
};

const getPostByUserId = (id, callback) => {
   sql.query(
      "SELECT users.firstName, users.lastName, content, users.photo FROM posts JOIN users ON posts.user_id = users.id WHERE user_id = ?",
      [id],
      callback
   );
};

const update = (newData, callback) => {
   sql.query("UPDATE posts SET ?", newData, callback);
};

const destroy = (id, callback) => {
   sql.query("DELETE FROM posts WHERE id = ?", [id], callback);
};

module.exports = {
   create,
   getAllPosts,
   getPostById,
   getPostByUserId,
   update,
   destroy,
};
