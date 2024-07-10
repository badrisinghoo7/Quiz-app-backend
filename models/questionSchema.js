const mongoose = require("mongoose");
const { Schema } = mongoose;

/** question model */
const questionSchema = new Schema({
  questions: { type: Array, default: [] }, // create question with [] default value
  answers: { type: Array, default: [] },
  options: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});
const QuestionModel = mongoose.model("questions", questionSchema);
module.exports = { QuestionModel };
