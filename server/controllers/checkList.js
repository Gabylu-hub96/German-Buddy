const CheckList = require("../models/checkList");
const User = require("../models/user");
const CheckListTemplate = require("../models/checkListTemplate");
const ErrorResponse = require("../utils/errorResponse");

// gets checkLists linked with a certain user
const getCheckListsForUser = async (req, res, next) => {
  try {
    const checkLists = await CheckList.find({ userId: req.params.userId });
    console.log("checklist", checkLists);
    res.status(201).json(checkLists);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

// creates checkLists for a certain user (only if user has no checkLists yet)
const createCheckLists = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });

    // get checkListTemplates for category
    var checkListTemplates = await CheckListTemplate.find({
      category: user.category,
    }).lean();

    // Add userId to each checklist
    var checklistObjects = checkListTemplates.map((template) => {
      template.userId = user._id;
      // remove id to fix duplicate key server crash
      delete template._id;
      return template;
    });

    // foreach checklistTemplate, create a checklist and add it to an array
    CheckList.insertMany(checklistObjects).then(function (docs) {
      // send back (in response) the array of CheckLists
      res.status(201).json(docs);
    });
  } catch (error) {
    next(new ErrorResponse(error));
  }
};
// get all checkLists in the database
const getAllCheckLists = async (req, res, next) => {
  try {
    const checkLists = await CheckList.find();
    res.json(checkLists);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};
// get a certain checkList by Id
const getCheckListById = async (req, res, next) => {
  res.json(req.reqCheckList);
};

// update a certain checkList in the database (e.g. add/remove task, set task completed etc)
const updateCheckList = async (req, res, next) => {
  try {
    const updatedCheckList = await CheckList.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.json(updatedCheckList);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

// delete a certain checkList
const deleteCheckList = async (req, res, next) => {
  try {
    const deletedCheckList = await CheckList.findOneAndDelete({
      _id: req.params.id,
    });
    res.json(deletedCheckList);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

module.exports = {
  getCheckListsForUser,
  createCheckLists,
  getAllCheckLists,
  getCheckListById,
  updateCheckList,
  deleteCheckList,
};
