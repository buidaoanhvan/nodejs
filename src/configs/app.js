const dev = require("./dev.config");
const prod = require("./prod.config");

const env = process.env.NODE_ENV;
const config = { dev, prod };

module.exports = config[env];
