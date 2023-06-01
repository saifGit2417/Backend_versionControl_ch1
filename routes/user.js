const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

router
  .get("/", userController.getAllUser)
  .get("/:id", userController.getUserById)
  .post("/", userController.addNewUser)
  .put("/:id", userController.putUser)
  .patch("/:id", userController.patchUser)
  .delete("/:id", userController.deleteUserById);

exports.router=router
