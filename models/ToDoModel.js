// our template for the inputs we need
const {Schema, model}= require('mongoose')
const mongoose = require('mongoose');
const { validateTodo } = require("../middleware");

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true},
    done:{
         type: Boolean
    },
        priority:{
            type: String,
            enum:['high','mid','low'],
        default:'low'
        },
        fecha: {type: String}
        
        // priority:{type: String,
        //     enum:['high','mid','low'] } 
        
});

module.exports = mongoose.model('ToDo', todoSchema);



// const { Schema, model }  = require('mongoose');

// const userSchema = new Schema({
//     name:  {type: String, required: true}, 
//     email: {type: String},
//     lastName:   String // String is shorthand for {type: String}
// });

// const User = model('user', userSchema);

// module.exports = User;