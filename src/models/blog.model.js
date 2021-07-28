const mongoose = require("mongoose");

const BlogModel = mongoose.Schema(
    {
        heading: String,
        imgLink: String,
        htmlContent: String,
        publishedOn: String
      }
);

module.exports = mongoose.model("blogs", BlogModel);
