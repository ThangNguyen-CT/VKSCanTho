const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: { type: String },
  location: { type: String },
  phone: { type: String },
  number: { type: Number, default: 0 },
  answer: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updateddAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", User);
