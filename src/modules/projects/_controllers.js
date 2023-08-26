const express = require("express");
const httpValidator = require("../../shared/http-validator");
const removeBlog = require("./remove-project");
const editBlog = require("./edit-project");
const {  ondeIdSchema, postProjectsSchema, patchProjectSchema } = require("./_schemas");
const listProjects = require("./list-project");
const addProject = require("./add-project");
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getProjects = async (_, res, next) => {
  try {
    const result = await listProjects();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// !PostBlogs!
const postProject = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postProjectsSchema );
    const {path} =  req.file
    const result = await addProject({
      ...req.body,
      pictures: path,
    });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};




const editProject = async (req, res, next) => {
  try {
    httpValidator({ body: req.body , params : req.params }, patchProjectSchema);
    const { id } = req.params;
    const result = await editBlog({ id: id, ...req.body });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    httpValidator({ params :req.params.id }, ondeIdSchema);
    const { id } = req.params;
    const result = await removeBlog({ id: id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
 getProjects ,
 postProject ,
 editProject ,
 deleteProject
};
