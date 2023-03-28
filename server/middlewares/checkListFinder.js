const CheckList = require("../models/checkList");
const ErrorResponse = require("../utils/errorResponse");
const checkListFinder = async (req, res, next) => {
  try {
    const checkList = await CheckList.findById(req.params.id);
    req.reqCheckList = checkList;
    next();
  } catch (error) {
    next(
      new ErrorResponse({
        message: `Cannot find checkList with id ${req.params.id} `,
        statusCode: 404,
      })
    );
  }
};
module.exports = checkListFinder;
