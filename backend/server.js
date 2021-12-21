const express =require('express')
const app=express()


const db =require('./db')
const Todo =require('./todo')
//console.log (Todo)

app.use(express.json())

app.get('/',(req,res)=>{
    res.json('get is working ')

});

app.get('/tasks',(req,res)=>{
});

app.post('/tasks',(req,res)=>{
    console.log('25:',req.body);

  Todo.create(req.body,(err,newtask)=>{
        if (err){
            console.log("ERROR : ",err);

      }
     else {
            res.status(201).json(newtask);
       }
    });
});

app.listen(5000,()=>{
    console.log('server working')
})