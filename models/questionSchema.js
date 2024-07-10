const mongoose = require("mongoose");
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
  questions: { type: Array, default: [] }, // create question with [] default value
  answers: { type: Array, default: [] },
  options: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Question", questionModel);
