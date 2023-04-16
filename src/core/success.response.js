const httpCode = require("../constant/http.code");
const httpStatus = require("../constant/http.status");

class SuccessResponse {
  constructor({ message, code, status, data = {} }) {
    this.message = !message ? status : message;
    this.code = code;
    this.data = data;
  }

  send(res, headers = {}) {
    return res.status(this.code).json(this);
  }
}

class OK extends SuccessResponse {
  constructor({ message, data }) {
    super({ message, data, code: httpCode.OK, status: httpStatus.OK });
  }
}

module.exports = {
  OK,
};
