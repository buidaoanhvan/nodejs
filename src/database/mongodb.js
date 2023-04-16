const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect("mongodb://127.0.0.1:27017/devnode")
      .then(() => console.log("Connected!"));
  }

  static start() {
    if (!Database.mongo) {
      Database.mongo = new Database();
    }

    return Database.mongo;
  }
}

module.exports = Database.start();
