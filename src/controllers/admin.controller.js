const Admin = require("../models/admin.model");

module.exports.addAdmin = async (req, res) => {
    const AdminUser = new Admin({
      email: "admin@admin.com",
      password: "Hello@12345",
    });
    await AdminUser.save();
    return res.status(200).send({
      error: false,
      message: "Admin saved successfully",
    });
  };

module.exports.login = async (req,res) =>{
    try {
      const credentials = req.body;
      const admin = await  Admin.findOne(credentials);
      if (!admin) {
        return res.status(400).send({
          error: true,
          message: "Unauthorised Access, Please try with correct credentials",
        });
      }
      return res
        .status(200)
        .send({ error: false, message: "Admin login successfully", type: "admin" });
    } catch (error) {
        res.send(error);
    }
}
