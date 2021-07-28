const User = require("../models/user.model");
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
    const email = req.body.email;
    const user = new User(req.body);
    if (await User.findOne({ email })) {
        return res.status(404).send("User already exist");
    }
    else {
        user.save();
        return res.send("User Added");
    }
}
module.exports.login = async (req, res) => {
    const user = await User.findOne(req.body);
    if (user) {
        const token = jwt.sign({ _id: user._id }, '1234567891011121314151617181920');
        return res.send(
            {
                jwt: token,
                fullName:user.fullName
            }
        );
    }
    else {
        return res.status(400).send({
            error: true,
            message: "Unauthorised Access, Please try with correct credentials",
          });
    }
}