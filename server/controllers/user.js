const User = require("../models/user");
const ErrorResponse = require("../utils/errorResponse");

const createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};
const getUserById = async (req, res, next) => {
  res.json(req.reqUser);
};
const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
    res.json(deletedUser);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
