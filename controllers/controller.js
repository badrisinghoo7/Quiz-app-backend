const { QuestionModel } = require("../models/questionSchema");
const { resultModel } = require("../models/resultSchema");

/** get all questions */
// GET /api/questions
getQuestions = async (req, res) => {
  try {
    const questions = await QuestionModel.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/questions
createQuestion = async (req, res) => {
  const { question, options, answer } = req.body;
  const newQuestion = new QuestionModel({ question, options, answer });

  try {
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/** post all result */

// GET /api/results
getResults = async (req, res) => {
  try {
    const results = await resultModel.find().populate("user");
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/results
createResult = async (req, res) => {
  const { user, score } = req.body;
  const newResult = new ResultModel({ user, score });

  try {
    await newResult.save();
    res.status(201).json(newResult);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getQuestions,
  createQuestion,
  getResults,
  createResult,
};
