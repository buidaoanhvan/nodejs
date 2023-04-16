require("dotenv").config();
const express = require("express");
const { env } = require("./configs/app");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const { NOT_FOUND } = require("./core/error.response");
const handlerTimeOut = require("./helpers/timeout.handler");
const app = express();

require("./database/mongodb");

app.use(express.json());
app.use("/favicon.ico", express.static("images/favicon.ico"));
app.use(morgan(env == "dev" ? "dev" : "combined"));
app.use(helmet());
app.use(compression());
app.use(handlerTimeOut);
app.use("/", require("./routers/index"));
app.use((req, res, next) => {
  const error = new NOT_FOUND("Không tìm thấy yêu cầu!");
  next(error);
});

app.use((error, req, res, next) => {
  const code = error.code || 500;
  return res.status(code).json({
    status: "error",
    code,
    message: error.message,
  });
});

module.exports = app;
