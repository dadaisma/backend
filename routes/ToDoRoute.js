 const { Router } = require("express");
 


 //myschema
 const ToDoModel = require("../models/ToDoModel");
 const UserModel = require("../mongo/schema/user/user")

 const { getToDo, saveToDo, updateToDo, deleteToDo, registerUser, getUserList, editUser, deleteUser } = require("../controllers/ToDoController");

const { validateTodo, addDateMiddleware } = require("../middleware");

 //const { getToDo } = require("../models/ToDoModel");
// //here we set the path where to check/perform in insomnia

 const router = Router();

  router.get("/", getToDo);

  router.post("/", validateTodo, addDateMiddleware, saveToDo);

  router.patch("/:id", validateTodo, updateToDo);

  router.delete("/:id", deleteToDo);
  
// ----------------------------------

  router.post("/user", registerUser);

  router.get("/user", getUserList);

  router.patch/("/user/:id", editUser);

  router.delete/("/user/:id", deleteUser);

  

module.exports = router;