const User = require("../models/UserModel");

class UserCotroller {
  async getAll(req, res) {
    try {
      const getuser = await User.find();
      res.json(getuser);
    } catch (error) {
      console.log(error);
    }
  }
  async postUser(req, res) {
    try {
      const newuser = await User.create(req.body);
      await newuser.save();
      res.status(200).json(newuser);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserCotroller();
