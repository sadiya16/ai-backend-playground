const express = require('express');
const app = express();

const routes = require("./routes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use(logger);

app.use("/", routes);

app.use(errorHandler);

module.exports = app;
