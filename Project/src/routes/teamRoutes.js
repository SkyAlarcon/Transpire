const controller = require("../controller/teamController");
const express = require("express");

const route = express.Router();

route.post("/new", controller.createTeam);

route.get("/all", controller.allTeams);
route.get("/find/:id", controller.findTeamById);
route.get("/feed/:id", controller.teamFeed);
route.get("/", controller.findTeamByQuery);

route.patch("/update/:id", controller.updateTeam);
route.patch("/admin/:id", controller.addRemoveAdministrator);
route.patch("/removeAthlete/:id", controller.removeAthleteFromTeam);
route.patch("/enterLeave/:id", controller.enter_LeaveTeam);

route.delete("/delete/:id", controller.deleteTeam);

module.exports = route;