const express = require("express");
const User = require("../models/users");

const router = express.Router();

const {
  handleGetAllUser,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");

// router.get("/users", async (req, res) => {
//   const allDbUsers = await User.find({});

//   const html = `<h1>Hello</h1>`;

//   res.send(html);
// });

router.route("/").get(handleGetAllUser).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetAllUser)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
