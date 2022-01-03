const express = require("express");
require("dotenv").config();
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
const authenticationRoutes = require("./routes/authenticationRoutes");
const { centralErrorHandler } = require("./controllers/errorController");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route middleware
app.use("/api/blog", blogRoutes);
app.use("/api/authentication", authenticationRoutes);

// Handling non matching request from the client
app.use((req, res, next) => {
  res.status(404).send("<h1> 404! Page not found on the server</h1>");
});

// central error handler middleware
app.use(centralErrorHandler);


module.exports = app;
