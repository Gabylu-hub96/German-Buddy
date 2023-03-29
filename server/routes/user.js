const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  getLoggedInUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const userFinder = require("../middlewares/userFinder");
const authenticate = require("../middlewares/auth");
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/loggedin-user", authenticate, getLoggedInUser);
router.get("/", getAllUsers);
router.get("/:id", userFinder, getUserById);
router.put("/:id", userFinder, updateUser);
router.delete("/:id", userFinder, deleteUser);

module.exports = router;
