const { USER } = require("../constant/roles");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

class UserService {
  static findUserByEmail = async (email) => {
    return await userModel.findOne({ email }).lean();
  };

  static createUser = async ({ email, password, name }) => {
    const hashPassword = await bcrypt.hash(password, 10);
    return await userModel.create({
      email,
      password: hashPassword,
      name,
      roles: [USER],
    });
  };
}

module.exports = UserService;
