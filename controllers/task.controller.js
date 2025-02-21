import Task from '../models/Task.js'; // Certifique-se de que o modelo Task está correto

// Método para criar uma tarefa
export const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Método para buscar todas as tarefas
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Método para atualizar uma tarefa
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID da tarefa a ser atualizada
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Método para deletar uma tarefa
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID da tarefa a ser deletada
    const deletedTask = await Task.findByIdAndDelete(id);
    
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
