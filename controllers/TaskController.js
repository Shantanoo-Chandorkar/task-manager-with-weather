const TaskRepository = require("../database/repositories/TaskRepository");
const getLocation = require("../utils/weatherApi");

const taskRepo = new TaskRepository();

class TaskController {
  async createTaskController(req, res) {
    const { title, description, status } = req.body;
    const task = await taskRepo.createTaskRepository({
      title,
      description,
      status,
    });
    return res.status(201).json({
      message: "success",
      task,
    });
  }

  async getAllTasksController(req, res) {
    const tasks = await taskRepo.getAllTasksRepository();
    return res.status(200).json({
      message: "success",
      tasks,
    });
  }

  async getTaskByIdController(req, res) {
    const { id } = req.params;
    console.log(id);
    const tasks = await taskRepo.getTasksByIdRepository(id);
    return res.status(200).json({
      message: "success",
      tasks,
    });
  }

  async updateTaskController(req, res) {
    const { id } = req.params;
    const body = req.body;
    const task = await taskRepo.updateTaskRepository(id, body);
    return res.status(200).json({
      message: "success",
      task,
    });
  }

  async searchTaskController(req, res) {
    const page = req.query.page;
    const { input } = req.body;
    const result = await taskRepo.searchTaskRepository(page, input);

    return res.status(200).json({
      message: "success",
      tasks: result.results,
      totalPages: result.totalPages,
      currentPage: result.pageNumber,
    });
  }

  async deleteTaskController(req, res) {
    const { id } = req.params;
    const result = await taskRepo.deleteTaskRepository(id);

    return res.status(200).json({
      message: "success",
      result,
    });
  }

  async getLocationController(req, res) {
    const { location } = req.query;
    const locationData = await getLocation(location);
    console.log(locationData);
    return res.json("Wait for a bit");
  }
}

module.exports = TaskController;
