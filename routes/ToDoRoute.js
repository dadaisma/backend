 const { Router } = require("express");
 


 //myschema
 const ToDoModel = require("../models/ToDoModel");
 const User = require("../mongo/schema/user/user")

 const { getToDo, saveToDo, updateToDo, deleteToDo, registerUser, getUserList } = require("../controllers/ToDoController");
const { validate } = require("../models/ToDoModel");

 //const { getToDo } = require("../models/ToDoModel");
// //here we set the path where to check/perform in insomnia

 const router = Router();

  router.get("/", getToDo);

  router.post("/", saveToDo);

  router.patch("/:id", updateToDo);

  router.delete("/:id", deleteToDo);
  
  router.post("/user", registerUser);

  router.get("/user", getUserList);

  

module.exports = router;