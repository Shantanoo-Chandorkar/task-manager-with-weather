const express = require("express");
const TaskController = require("../controllers/TaskController");
const validateResource = require("../middlewares/validateResources");
const {
  createTaskValidationSchema,
  updateTaskValidationSchema,
  deleteTaskValidationSchema,
  searchTaskValidationSchema,
} = require("../middlewares/validationSchemas");
const taskController = new TaskController();

const router = express.Router();

router.get("/", taskController.getAllTasksController);
router.post(
  "/",
  validateResource(createTaskValidationSchema),
  taskController.createTaskController
);

router.get(
  "/search",
  validateResource(searchTaskValidationSchema),
  taskController.searchTaskController
);
router.get("/:id", taskController.getTaskByIdController);
router.put(
  "/:id",
  validateResource(updateTaskValidationSchema),
  taskController.updateTaskController
);
router.delete(
  "/:id",
  validateResource(deleteTaskValidationSchema),
  taskController.deleteTaskController
);

module.exports = router;
