const User = require('../models/User');

class UserController {
  static getAllUser = async (req, res, next) => {
    try {
      const users = await User.findAllUsers();

      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UserController;
