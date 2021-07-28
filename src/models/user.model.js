const mongoose = require("mongoose");

const UserModel = mongoose.Schema(
    {
        fullName : String,
        email: String,
        contact: String,
        password:String,
      }
);

module.exports = mongoose.model("users", UserModel);
