const { Router } = require("express");
const router = Router();

/** import controllers */
const controller = require("../controllers/controller.js");

/** Questions Routes API */

router
  .route("/questions")
  .get(controller.getQuestions) /** GET Request */
  .post(controller.insertQuestions) /** POST Request */
  .delete(controller.dropQuestions); /** DELETE Request */

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);

module.exports = router;
