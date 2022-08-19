const express = require("express");
const router = express.Router();

const {
  createLecture,
  getAllLectures,
  deleteAll,
  deleteOneLecture,
  getOneLecture,
  updateLecture,
} = require("../controllers/lectureController");

router.route("/").post(createLecture).get(getAllLectures).delete(deleteAll);
router
  .route("/:id")
  .get(getOneLecture)
  .delete(deleteOneLecture)
  .patch(updateLecture);

module.exports = router;
