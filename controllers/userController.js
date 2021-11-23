const User = require('../models/User');

class UserController {
  static getAllUser = async (req, res) => {
    try {
      const users = await User.findAllUsers();

      res.status(200).json(users);
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = UserController;
