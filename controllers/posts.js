const {
   create,
   getAllPosts,
   getPostById,
   getPostByUserId,
   update,
   destroy,
} = require("../models/posts");
const { getUserById } = require("../models/users");

const errOpt = { message: "Internal Server Error" };

const addPost = (req, res) => {
   if (!req.session.uid) {
      res.redirect("/login");
   }

   create(req.body, () => {
      res.redirect("/");
   });
};

const editPost = (req, res) => {
   update(req.body, (err, result) => {
      if (err) return res.render("posts/edit", errOpt);
      if (result.affectedRows === 0)
         return res.render("posts/edit", { message: "Failed to update posts" });
      res.redirect("posts");
   });
};

const deletePost = (req, res) => {
   destroy(req.params.id, (err) => {
      if (err) return res.redirect("/");
      res.redirect("posts");
   });
};

const homePage = (req, res) => {
   const { uid } = req.session;

   if (!uid) return res.redirect("/login");

   getUserById(uid, (err, result) => {
      getAllPosts((err, results) => {
         res.render("index", { posts: results, user: result[0] });
      });
   });
};

const postDetailsPage = (req, res) => {
   getPostById(req.params.id, (err, result) => {
      res.render("posts/details", { post: result[0] });
   });
};

const userPostsPage = (req, res) => {
   getPostByUserId(req.session.uid, (err, results) => {
      res.render("posts/posts", { posts: results });
   });
};

module.exports = {
   addPost,
   editPost,
   deletePost,
   homePage,
   postDetailsPage,
   userPostsPage,
};
