const Todo = require("../models/todoModel");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.userId });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

exports.addTodo = async (req, res) => {
  const { task } = req.body;

  try {
    const newTodo = new Todo({
      userId: req.userId,
      task,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to add task" });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { task, completed }, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
