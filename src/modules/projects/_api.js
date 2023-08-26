const express = require('express');
const isLoggedIn = require('../../shared/auth/is-loggedin');
const {  getProjects, postProject, editProject, deleteProject } = require('./_controllers');


const multer = require("multer");
const { storage } = require("../../cloudinary");
const upload = multer( {storage : storage} );





const router = express.Router();

router.get('/projects'   , getProjects );
router.post('/projects'  ,  isLoggedIn , upload.single("pictures"), postProject );
router.patch('/projects/:id'  ,  isLoggedIn , editProject );
router.delete('/projects/:id'  ,  isLoggedIn , deleteProject );

module.exports = router;
