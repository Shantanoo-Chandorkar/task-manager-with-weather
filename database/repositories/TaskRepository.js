const Task = require("../models/TaskModel");

const handlePagination = async (page) => {
  const pageSize = 4;
  const pageNumber = parseInt(page) || 1;
  const skip = (page - 1) * pageSize;
  const totalResults = await Task.countDocuments();
  const totalPages = Math.ceil(totalResults / pageSize);
  return { pageSize, pageNumber, totalPages, skip };
};

class TaskRepo {
  async createTaskRepository({ title, description, status }) {
    try {
      const taskToAdd = {
        title: title,
        description: description,
        status: status,
      };

      const task = await Task.create(taskToAdd);
      return task;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllTasksRepository() {
    try {
      const tasks = await Task.find({}).limit(20);
      return tasks;
    } catch (error) {
      console.log(error);
    }
  }

  async getTasksByIdRepository(id) {
    try {
      const task = await Task.findById(id);
      return task;
    } catch (error) {
      console.log(error);
    }
  }

  async updateTaskRepository(id, body) {
    try {
      const existingTask = await this.getTasksByIdRepository(id);
      const updatedTask = await Task.findByIdAndUpdate(
        { _id: id },
        {
          title: body.title || existingTask.title,
          description: body.description || existingTask.description,
          status: body.status || existingTask.status,
        },
        { new: true }
      );

      return updatedTask;
    } catch (error) {
      console.log(error);
    }
  }

  async searchTaskRepository(page, input) {
    try {
      const { pageSize, pageNumber, totalPages, skip } = await handlePagination(
        page
      );
      const results = await Task.find({
        $or: [{ title: { $regex: input } }, { description: { $regex: input } }],
      })
        .skip(skip)
        .limit(pageSize)
        .sort({ createdAt: -1 });

      return { results, totalPages, pageNumber };
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTaskRepository(id) {
    try {
      const result = await Task.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TaskRepo;
