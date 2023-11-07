const Joi = require("joi");

// const createBookValidationSchema = Joi.object({
//   isbn: Joi.string().required(),
//   title: Joi.string().required(),
//   author: Joi.string().required(),
//   publisher: Joi.string().required(),
//   image: Joi.string(),
//   yearOfPublication: Joi.number(),
// });

const customMessages = {
  "string.base": "The field {#label} must be a string",
  "string.empty": "The field {#label} cannot be empty",
  "any.required": "The field {#label} is required",
  "number.base": "The field {#label} must be a number",
};

const createTaskValidationSchema = Joi.object({
  body: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().required(),
  },
  params: {},
  query: {},
}).messages(customMessages);

const updateTaskValidationSchema = Joi.object({
  params: { id: Joi.string().required() },
  body: {
    title: Joi.string(),
    description: Joi.string(),
    status: Joi.string(),
  },
  query: {},
}).messages(customMessages);

const deleteTaskValidationSchema = Joi.object({
  params: { id: Joi.string().required() },
  body: {},
  query: {},
}).messages(customMessages);

const searchTaskValidationSchema = Joi.object({
  body: {
    input: Joi.string(),
  },
  params: {},
  query: {
    page: Joi.string(),
  },
});

// const getDataByPaginationSchema = Joi.object({
//   body: {},
//   params: {},
//   query: {
//     page: Joi.string(),
//   },
// });

module.exports = {
  createTaskValidationSchema,
  updateTaskValidationSchema,
  deleteTaskValidationSchema,
  searchTaskValidationSchema,
};
