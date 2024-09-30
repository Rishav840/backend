
require('dotenv').config();
const mongoose = require('mongoose');

// const MongoUrl= process.env.MONGODB_URL_LOCAL;
// const MongoUrl= 'mongodb+srv://rishavarsh1:45TSQkKMdgQWiDNF@cluster0.qh5ik.mongodb.net/';
const MongoUrl= process.env.MONGODB_URL;



mongoose.connect(MongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connect to mongodb server");
})
db.on('error',(e)=>{
    console.log("server error",e);
})
db.on('disconnected',()=>{
    console.log("server disconnected");
})


module.exports=db;