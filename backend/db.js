const mongoose =require('mongoose');
const dbURI ='mongodb://localhost:27017/TodoListV01';

mongoose.connect(dbURI);

const db =mongoose.connection;

db.on('error',(err)=>{
    console.log('ERROR IN MONGODB');

});

db.on('connected',(err)=>{
    console.log('mongodb connected');

});

