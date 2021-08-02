const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");

router.post("/addComment",commentController.addComment);

router.post("/getComment",commentController.getComment)

module.exports = router;
