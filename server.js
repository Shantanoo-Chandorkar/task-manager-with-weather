const config = require("./config");
const express = require("express");
const connectDb = require("./database/connection");
const taskRoutes = require("./routes/TaskRoutes");
const locationRoutes = require("./routes/LocationRoutes");

const app = express();

const PORT = config.PORT;

// database connection

// middlewares
app.use(express.json());

// route middlewares
app.use("/tasks", taskRoutes);
app.use("/location", locationRoutes);

// healthcheck
app.get("/", (req, res) => {
  res.json({
    message: "Task Manager application.",
  });
});

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
