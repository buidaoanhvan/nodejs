const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: Array,
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
    collection: "Users",
  }
);

//Export the model
module.exports = mongoose.model("User", userSchema);
