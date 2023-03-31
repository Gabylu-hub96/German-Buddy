const CheckListTemplate = require("../models/checkListTemplate");
const ErrorResponse = require("../utils/errorResponse");

const getAllCheckListTemplates = async (req, res, next) => {
  try {
    const checkListTemplates = await CheckListTemplate.find();
    res.json(checkListTemplates);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};
const getCheckListTemplateById = async (req, res, next) => {
  try {
    const checkListTemplates = await CheckListTemplate.find({
      _id: req.params.id,
    });
    res.json(checkListTemplates);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const getCheckListTemplateByCategory = async (req, res, next) => {
  try {
    const checkListTemplates = await CheckListTemplate.find({
      category: req.params.category,
    });
    res.json(checkListTemplates);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const updateCheckListTemplate = async (req, res, next) => {
  try {
    const updateCheckListTemplate = await CheckListTemplate.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.json(updateCheckListTemplate);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};
const deleteCheckListTemplate = async (req, res, next) => {
  try {
    const deletedCheckListTemplate = await CheckListTemplate.findOneAndDelete({
      _id: req.params.id,
    });
    res.json(deletedCheckListTemplate);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

module.exports = {
  getAllCheckListTemplates,
  getCheckListTemplateById,
  getCheckListTemplateByCategory,
  updateCheckListTemplate,
  deleteCheckListTemplate,
};
