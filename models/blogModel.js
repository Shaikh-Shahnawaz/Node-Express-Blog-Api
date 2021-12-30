const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: new Date().toLocaleString(),
  },
});

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;
