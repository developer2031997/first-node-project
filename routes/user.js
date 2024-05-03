const express = require("express");
const User = require("../models");
const {
  handleGetJsonData,
  handleCreateUser,
  handleViewHtml,
  handleGetDetailById,
  handleUpdate,
  handleDelete,
  handleAbout,
} = require("../controllers/user");
const router = express.Router();

router.get("/api", handleGetJsonData)

router
.route("/")
.get(handleViewHtml)
.post(handleCreateUser);

router
  .route("/:id")
  .get(handleGetDetailById)
  .patch(handleUpdate)
  .delete(handleDelete);

router.get("/about", handleAbout);

module.exports = router;
