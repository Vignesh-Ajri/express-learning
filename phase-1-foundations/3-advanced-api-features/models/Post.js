const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Post must have a title"]
  },
  content: {
    type: String,
    required: [true, "Post must have content"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User", // reference to the User model
    required: [true, "Post must belong to a user"]
  }
});

module.exports = mongoose.model("Post", postSchema);
