require("dotenv-safe").config();

const express = require("express");
const cors = require("cors");
const mongoDB = require("./database/dbConnect");

const app = express();

app.use(express.json());
app.use(cors());
mongoDB.connect();

const athleteRoutes = require("./routes/athleteRoutes");
app.use("/transpire/athletes", athleteRoutes);

const teamRoutes = require("./routes/teamRoutes");
app.use("/transpire/teams", teamRoutes);

module.exports = app;