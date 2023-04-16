const httpCode = require("../constant/http.code");
const httpStatus = require("../constant/http.status");

class ErrorResponse extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

class NOT_FOUND extends ErrorResponse {
  constructor(message) {
    super(httpStatus.NOT_FOUND, httpCode.NOT_FOUND);
    this.message = message;
  }
}

class REQUEST_TIMEOUT extends ErrorResponse {
  constructor(message) {
    super(httpStatus.REQUEST_TIMEOUT, httpCode.REQUEST_TIMEOUT);
    this.message = message;
  }
}

class SERVICE_UNAVAILABLE extends ErrorResponse {
  constructor(message) {
    super(httpStatus.SERVICE_UNAVAILABLE, httpCode.SERVICE_UNAVAILABLE);
    this.message = message;
  }
}

class BAD_REQUEST extends ErrorResponse {
  constructor(message) {
    super(httpStatus.BAD_REQUEST, httpCode.BAD_REQUEST);
    this.message = message;
  }
}

module.exports = {
  NOT_FOUND,
  REQUEST_TIMEOUT,
  SERVICE_UNAVAILABLE,
  BAD_REQUEST,
};
