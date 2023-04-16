const AccessService = require("../services/access.service");

const { OK } = require("../core/success.response");

class AccessController {
  signUp = async (req, res, next) => {
    new OK({
      message: "Thành Công",
      data: await AccessService.signUp(req.body),
    }).send(res);
  };
}

module.exports = new AccessController();
