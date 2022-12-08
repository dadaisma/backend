 const { Router } = require("express");
 


 //myschema
 const ToDoModel = require("../models/ToDoModel");

 const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");
const { validate } = require("../models/ToDoModel");

 //const { getToDo } = require("../models/ToDoModel");
// //here we set the path where to check/perform in insomnia

 const router = Router();

  router.get("/", getToDo);

  router.post("/", saveToDo);

  router.patch("/:id", updateToDo);

  router.delete("/:id", deleteToDo);
  

module.exports = router;