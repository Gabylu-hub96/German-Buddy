const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const userFinder = require("../middlewares/userFinder");
router.get("/", getAllUsers);
router.get("/:id", userFinder, getUserById);
router.post("/", createUser);
router.put("/:id", userFinder, updateUser);
router.delete("/:id", userFinder, deleteUser);

module.exports = router;
