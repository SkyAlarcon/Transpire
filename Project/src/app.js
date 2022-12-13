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

app.get("/", (req, res) => {
    res.send({ message: `Boas-vindas à Transpire!\nO local para começar a se exercitar.\n\nToda e qualquer pessoa trans é bem-vinda a participar e compor nossa comunidade para que mais pessoas possam ter uma mudança no estilo de vida e se tornarem mais ativas fisicamente!`})
});

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const athleteRoutes = require("./routes/athleteRoutes");
app.use("/athletes", athleteRoutes);

const teamRoutes = require("./routes/teamRoutes");
app.use("/teams", teamRoutes);

const postRoutes = require("./routes/postsRoutes");
app.use("/post", postRoutes);

module.exports = app;