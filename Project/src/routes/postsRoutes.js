const controller = require("../controller/postController");
const express = require("express");

const route = express.Router();


route.post("/new/:id", controller.newPost);

route.patch("/edit/:id", controller.updatePost);

route.delete("/delete/:id", controller.deletePost);

module.exports = route