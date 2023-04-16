const {
  REQUEST_TIMEOUT,
  SERVICE_UNAVAILABLE,
} = require("../core/error.response");

const handlerTimeOut = (req, res, next) => {
  req.setTimeout(2000, () => {
    let error = new REQUEST_TIMEOUT("Request Timeout");
    next(error);
  });
  res.setTimeout(2000, () => {
    let error = new SERVICE_UNAVAILABLE("Service Unavailable");
    next(error);
  });
  next();
};

module.exports = handlerTimeOut;
