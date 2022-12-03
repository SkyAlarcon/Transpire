require("dotenv-safe").config();

const express = require("express");
const cors = require("cors");
const mongoDB = require("./database/dbConnect");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

const app = express();

app.use(express.json());
app.use(cors());
mongoDB.connect();

app.use('/transpire/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const athleteRoutes = require("./routes/athleteRoutes");
app.use("/transpire/athletes", athleteRoutes);

const teamRoutes = require("./routes/teamRoutes");
app.use("/transpire/teams", teamRoutes);

module.exports = app;