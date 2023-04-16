const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var keySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    publicKey: {
      type: String,
      require: true,
    },
    privateKey: {
      type: String,
      require: true,
    },
    refreshToken: {
      type: Array,
      require: true,
      default: [],
    },
  },
  {
    timestamps: true,
    collection: "Keys",
  }
);

//Export the model
module.exports = mongoose.model("Key", keySchema);
