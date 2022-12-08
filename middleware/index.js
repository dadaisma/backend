const express= require('express')

const validateTodo = (require, res, next) =>{
    const newTodo=require.body;
    if(newTodo.text === undefined || newTodo.text.length <3){
        
       return res.status(400).send({message:'Ouch, text required'})
    }
    next();
}

const addDateMiddleware =(req, res, next) =>{
    const newTodo=req.body;
    // const fecha= req.requestInstant = new Date()
    const fecha = new Date()
    const fechadisplay =fecha.toLocaleDateString()
   newTodo.fecha = fechadisplay;
    
    next();
}


module.exports = {
    validateTodo, addDateMiddleware
}