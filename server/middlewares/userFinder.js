const User = require("../models/user");
const ErrorResponse = require("../utils/errorResponse");
const userFinder = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    req.reqUser = user;
    next();
  } catch (error) {
    next(
      new ErrorResponse({
        message: `Cannot find user with id ${req.params.id} `,
        statusCode: 404,
      })
    );
  }
};
module.exports = userFinder;
