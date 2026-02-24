module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);


  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  app.use("/api/tutorials", router);
};
