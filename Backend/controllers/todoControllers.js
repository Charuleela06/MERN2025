const todo = require('../models/todoModel');

exports.getTodo = async (req, res) => {
  try {
    const response = await todo.find();
    res.status(200).json({ data: response });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const TaskData = await todo.findById(req.params.id);
    res.status(200).json(TaskData);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.postTodo = async (req, res) => {
  try {
    const { task, status } = req.body;
    const exist = await todo.findOne({ task });
    if (exist) {
      return res.status(409).json({ message: "Task already exists" });
    }
    const newTask = new todo({ task, status });
    await newTask.save();
    res.status(201).json({ todo: newTask });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.putTodo = async (req, res) => {
  try {
    const update = await todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!update) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ update });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deleteTask = await todo.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ deleteTask });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
