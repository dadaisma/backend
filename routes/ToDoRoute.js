 const { Router } = require("express");
 
 //myschema
 const ToDoModel = require("../models/ToDoModel");

// const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");
 const { updateToDo } = require("../models/ToDoModel");
// //here we set the path where to check/perform in insomnia

 const router = Router();

// router.get("/", getToDo);

// router.post("/save", saveToDo);

// router.put("/update", updateToDo);

// router.delete("/delete", deleteToDo);

// //router.post("/search", findToDo);


router.get('/', async (req, res) => {
    const todo = await ToDoModel.find();
    res.json(todo);
  })
  
  
  router.get('/:id', async (req, res) => {
    const todo = await ToDoModel.findById(req.params.id);
    res.json(todo);
  })
  
  router.post('/search', async (req, res) => {
    const todo = await ToDoModel.find(req.body);
    res.json(todo);
  })
  
  router.patch('/:id', async (req, res) => {
    const todo = await ToDoModel.findByIdAndUpdate(req.params.id, req.body);
    res.json(todo);
  });
  
  router.patch('/query/:text', async (req, res) => {
    const filter = {
        text: req.params.text
    };
    const todo = await ToDoModel.findOneAndUpdate(filter, req.body);
    res.json(todo);
  })
  
  router.delete('/:id', async (req, res) => {
    const todo = await ToDoModel.findByIdAndDelete(req.params.id);
    res.json(todo);
  })
  
  router.post("/", async(req, res) => {
    //recogemos el body de la request
    const body = req.body;
  
    console.log(body);
  
    const data = {
        text: body.text,
        email: body.email,
        
    };
  
    //creamos una nueva instancia de ToDoModel,
    const newToDoModel = new ToDoModel(data);
  
    //lo guardamos en mongo
    await newToDoModel.save()
  
    //devolvemos respuesta
    res.json(newToDoModel);
  });


module.exports = router;