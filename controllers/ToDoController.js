// our calls to mongodb
//our scheme
//const ToDoModel = require("../models/ToDoModel");

// module.exports.getToDo = async (req, res) => {
//     const todo = await ToDoModel.find();
//     res.send(todo);
// }

// //find by id
// // module.exports.findToDo =  async (req, res)=>{
// //     const todo = await ToDoModel.find(req.body);
   
// //     res.json(todo);
// // }



// module.exports.saveToDo = (req, res) => {
//     const { text } = req.body;

//     ToDoModel
//         .create({ text })
//         .then((data) =>{ 
//             console.log("Added Successfully...")
//             console.log(data)
//             res.send(data)
//         })
//         .catch((err) => console.log(err));
// }

// module.exports.deleteToDo = (req, res) => {
//     const { _id } = req.body;

//     console.log('id ---> ', _id);

//     ToDoModel
//         .findByIdAndDelete(_id)
//         .then(() => res.set(204).send("Deleted Successfully..."))
//         .catch((err) => console.log(err));
// }

// module.exports.updateToDo = (req, res) => {
//     const { _id, text } = req.body;
//     console.log('you have modified',_id, text)
//     ToDoModel
//         .findByIdAndUpdate(_id, { text })
//         .then(() => res.set(200).send("Updated Successfully..."))
//         .catch((err) => console.log(err));
// }


//------------------------------

// const ToDoModel = require("../models/ToDoModel");

// module.exports.getToDo = async (req, res) => {
//     const todo = await ToDoModel.find();
//     res.send(todo);
// }

// module.exports.saveToDo = (req, res) => {
//     const { text } = req.body;

//     ToDoModel
//         .create({ text })
//         .then((data) =>{ 
//             console.log("Added Successfully...")
//             console.log(data)
//             res.send(data)
//         })
//         .catch((err) => console.log(err));
// }

// module.exports.deleteToDo = (req, res) => {
//     const { _id } = req.body;

//     console.log('id ---> ', _id);

//     ToDoModel
//         .findByIdAndDelete(_id)
//         .then(() => res.set(201).send("Deleted Successfully..."))
//         .catch((err) => console.log(err));
// }

// module.exports.updateToDo = (req, res) => {
//     const { _id, text } = req.body;

//     ToDoModel
//         .findByIdAndUpdate(_id, { text })
//         .then(() => res.set(201).send("Updated Successfully..."))
//         .catch((err) => console.log(err));
// }