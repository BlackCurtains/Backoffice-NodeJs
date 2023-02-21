const mongoose = require("mongoose");

const UserModelsSchema = new mongoose.Schema(
 {
  email: {
   type: String,
   required: true,
   unique: true,
  },
  password: {
   type: String,
   required: true,
  },
 },
 { timestamps: true }
);

const UserModels = mongoose.model("UserModel", UserModelsSchema);

module.exports = UserModels;
