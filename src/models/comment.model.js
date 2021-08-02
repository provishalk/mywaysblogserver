const mongoose = require("mongoose");

const CommentModel = mongoose.Schema(
    {
        blogId: String,
        comments: [{ userId: String, userName: String, comment: String }]
    }
);

module.exports = mongoose.model("comments", CommentModel);
