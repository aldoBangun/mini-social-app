const express = require("express");
const router = express.Router();
const {
   userRegistration,
   userLogin,
   pageUserRegister,
   pageUserLogin,
} = require("../controllers/users");
const { homePage, addPost } = require("../controllers/posts");

router.route("/").get(homePage).post(addPost);
router.route("/register").get(pageUserRegister).post(userRegistration);
router.route("/login").get(pageUserLogin).post(userLogin);

module.exports = router;
