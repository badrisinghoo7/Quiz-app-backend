const { Router } = require("express");
const { getQuestions, getResults } = require("../controllers/controller");
const router = Router();

/** import controllers */

/** Questions Routes API */

router.get("/question", getQuestions);

router.get("/result", getResults);

module.exports = router;
