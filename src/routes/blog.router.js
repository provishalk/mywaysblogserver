const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");


router.post("/addBlog", blogController.addBlog);

router.get("/allBlogs",blogController.allBlogs);

router.post("/oneBlog",blogController.oneBlog);

module.exports = router;
