

const mongoose = require('mongoose');

const MongoUrl= 'mongodb://localhost:27017/hotels';

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