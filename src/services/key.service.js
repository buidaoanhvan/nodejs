const keyModel = require("../models/key.model");
const crypto = require("crypto");

class KeyService {
  static createdUserKey = async (id) => {
    const privateKey = crypto.randomBytes(64).toString("hex");
    const publicKey = crypto.randomBytes(64).toString("hex");

    return await keyModel.create({
      user: id,
      publicKey,
      privateKey,
    });
  };
}

module.exports = KeyService;
