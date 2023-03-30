const express = require("express");
const router = express.Router();
const {
  getAllCheckListTemplates,
  getCheckListTemplateById,
  getCheckListTemplateByCategory,
  updateCheckListTemplate,
  deleteCheckListTemplate,
} = require("../controllers/checkListTemplate");
const checkListTemplateFinder = require("../middlewares/checkListTemplateFinder");
const authenticate = require("../middlewares/auth");
router.use(authenticate);
router.get("/", getAllCheckListTemplates);
router.get("/:id", checkListTemplateFinder, getCheckListTemplateById);
router.get(
  "/byCategory/:category",
  checkListTemplateFinder,
  getCheckListTemplateByCategory
);
router.put("/:id", checkListTemplateFinder, updateCheckListTemplate);
router.delete("/:id", checkListTemplateFinder, deleteCheckListTemplate);

module.exports = router;
