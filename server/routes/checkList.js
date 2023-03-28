const express = require("express");
const router = express.Router();
const {
  createCheckLists,
  getAllCheckLists,
  getCheckListById,
  getCheckListsForUser,
  updateCheckList,
  deleteCheckList,
} = require("../controllers/checkList");
const checkListFinder = require("../middlewares/checkListFinder");
router.get("/", getAllCheckLists);
router.get("/:id", checkListFinder, getCheckListById);
router.get("/forUser/:userId", getCheckListsForUser);
router.post("/forUser/:userId", createCheckLists);
router.put("/:id", checkListFinder, updateCheckList);
router.delete("/:id", checkListFinder, deleteCheckList);

module.exports = router;
