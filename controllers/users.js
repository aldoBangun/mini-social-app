const { register, login } = require("../models/users");

const userRegistration = (req, res) => {
   register(req.body, (err) => {
      if (err) {
         res.render("users/register");
      } else {
         res.redirect("login");
      }
   });
};

const userLogin = (req, res) => {
   const { email, password } = req.body;

   login(email, (err, result) => {
      if (err) {
         return res.render("users/login", { message: "Something went wrong" });
      }

      if (!result.length) {
         return res.render("users/login", { message: "Invalid Email" });
      }

      if (result[0].password !== password) {
         return res.render("users/login", { message: "Invalid Password" });
      }

      req.session.uid = results[0].id;
      res.render("index", { isAuth: true, uid });
   });
};

const pageUserRegister = (req, res) => {
   res.render("users/register");
};

const pageUserLogin = (req, res) => {
   res.render("users/login");
};

module.exports = {
   userRegistration,
   userLogin,
   pageUserRegister,
   pageUserLogin,
};
