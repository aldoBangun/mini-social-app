require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3000;
const sessionConfiguration = {
   secret: "test",
   resave: true,
   saveUninitialized: true,
};

const UserRoute = require("./routes/users");

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session(sessionConfiguration));

app.use("/auth", UserRoute);

app.listen(PORT, console.log(`App is running on http://localhost:3000`));
