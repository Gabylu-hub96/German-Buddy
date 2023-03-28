const CheckListTemplate = require("../models/checkListTemplate");
const ErrorResponse = require("../utils/errorResponse");
const checkListTemplateFinder = async (req, res, next) => {
  try {
    const checkListTemplate = await CheckListTemplate.findById(req.params.id);
    req.reqTask = checkListTemplate;
    next();
  } catch (error) {
    next(
      new ErrorResponse({
        message: `Cannot find checkListTemplate with id ${req.params.id} `,
        statusCode: 404,
      })
    );
  }
};
module.exports = checkListTemplateFinder;
