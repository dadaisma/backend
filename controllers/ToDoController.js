// our calls to mongodb
//our scheme
const ToDoModel = require("../models/ToDoModel");
const {validateTodo, addDateMiddleware} = require('../middleware')



const getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.json(todo);
  }
  
  const saveToDo = async  (req, res) => {
    const body = req.body
    const {text,done,priority}  = body  // cuando se desectructura se elimina de la derecha el caracter que remos en la izquierda
    // si queremos el text body.text tenemos que sacarlo const {text} = body
    
   
    const data = {
        text : text,
        done : done,
        priority : priority
        //Mas propiedades.
    }
    const newTodo = new ToDoModel(data)
    await newTodo.save()
    res.json(newTodo);
  }
  
  const updateToDo = async (req, res) => {
    console.log(req)
    const {id} = req.params 
    const todo = await ToDoModel.findByIdAndUpdate(id, req.body);
    res.json(todo);
  };

const deleteToDo = (req, res) => {
    ToDoModel.findByIdAndDelete(req.params.id, (err, todo ) =>{
        if(err){
            return res.status(500).json(err)
        }
       
        res.status(200).json(todo)
    })
}
  module.exports = {getToDo, saveToDo, updateToDo, deleteToDo}