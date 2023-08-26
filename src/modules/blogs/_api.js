const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const {
  getBlogs,
  postBlogs,
  deleteBlog,
  addLike,
  getBlog,
} = require("./_controllers");


const editBlog = require("./edit-blog");
const multer = require("multer");
const { storage } = require("../../cloudinary");
const upload = multer( {storage : storage} );
const router = express.Router();

router.get("/blogs", getBlogs);
router.get("/blogs/:id", isLoggedIn, getBlog);
router.post("/blogs" , isLoggedIn ,   upload.array("pictures"), postBlogs);
router.patch("/blogs/:id", isLoggedIn, editBlog);
router.delete("/blogs/:id", isLoggedIn, deleteBlog);
router.put("/blogs/:id", isLoggedIn, addLike);

module.exports = router;
