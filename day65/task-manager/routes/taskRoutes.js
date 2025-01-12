const express = require("express");
const router = express.Router();

// import controller
const taskController = require("../controllers/taskController");

router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTasksById);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
