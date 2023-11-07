const validateResource = (schema) => {
  return (req, res, next) => {
    // const { body, query, params } = req;
    const { body, params, query } = req;
    const dataToValidate = {};

    if (body) dataToValidate.body = body;
    if (query) dataToValidate.query = query;
    if (params) dataToValidate.params = params;

    if (
      dataToValidate.body.length === 0 ||
      dataToValidate.params.length === 0 ||
      dataToValidate.query.length === 0
    ) {
      // No data to validate
      return res
        .status(400)
        .json({ error: "At least one field should be filled." });
    }

    const { error } = schema.validate(dataToValidate);

    if (error) {
      console.log(error.details);
      return res.status(400).send(error.details);
    } else {
      next();
    }
  };
};

module.exports = validateResource;
