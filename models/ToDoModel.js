// our template for the inputs we need

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
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