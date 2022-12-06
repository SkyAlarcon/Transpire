const controller = require("../controller/postController");
const express = require("express");

const route = express.Router();


route.post("/new/:id", controller.newPost);

route.delete("/delete/:id", controller.deletePost);

module.exports = route