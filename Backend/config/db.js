import mongoose from "mongoose";

 mongoose.connect('mongodb://127.0.0.1:27017/HealthApp');

 const db = mongoose.connection;

 db.on('error',(err)=>{
    return console.log("there is error ",err);
 });

 db.once('open',()=>console.log("DB connected"));

 export default db;
