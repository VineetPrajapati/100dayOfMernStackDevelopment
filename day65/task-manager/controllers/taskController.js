const Task = require("../models/task");

// get all task
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// get task by id
exports.getTasksById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: `Task not found` });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// create new task
exports.createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const saveTask = await newTask.save();
    res.status(201).json(saveTask);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

// Update a task by ID
exports.updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateTask) return res.status(400).json({ error: `Task not found` });
    res.status(200).json(updateTask);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

// delete a task by Id
exports.deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask) return res.status(404).json({ error: `Task not found` });
    res.status(200).json({ message: `Task deleted successfully` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
