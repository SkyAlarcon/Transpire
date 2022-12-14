const controller = require("../controller/athleteController");
const express = require("express");

const route = express.Router();

route.post("/new", controller.createAtlhete);
route.post("/login", controller.login);

route.get("/all", controller.allAtlhetes);
route.get("/find/:id", controller.findAthleteById);
route.get("/feed/:id", controller.athleteFeed);
route.get("/message/:recieverID", controller.viewMessages);
route.get("/", controller.findAthleteByQuery);

route.patch("/update/:id", controller.updateAtlhete);
route.patch("/followUnfollow/:id", controller.follow_Unfollow)
route.patch("/message/:id", controller.sendMessage);

route.delete("/delete/:id", controller.deleteAthlete);


module.exports = route;