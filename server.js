// function add(a,b){
//     return a+b;
// }

const req = require("express/lib/request");
const { json } = require("express/lib/response.js");

// let add = (a,b)=>{
//     return a+b;
// }

// let ans =add(9, 7);

// console.log(ans);


// (function(){
//     console.log("hello my name is Rishav");
// })();


// function callback(){
//     console.log("hello world");
// }

// const add = (a,b, callback)=>{
//     let res =  a+b;
//     console.log(res);
//     callback();
// }

// add(1,6,callback);



// const add = (a,b,callback)=>{
//     let res = a+b;
//     console.log(res);
//     callback();
// }

// add(2, 5 , function(){
    
//     console.log("heloll");
// });


// add(4,6,()=>{
//     console.log("I know");
// });


// var fs = require ('fs');
// const { request } = require("http");
// var os = require ('os');

// let user = os.userInfo();
// console.log(user.username);
// console.log(user.uid);

// fs.appendFile('greeting.txt','hi'+ user.username+'!\n', ()=>{
//     console.log("file is created");
// })


var _ = require('lodash');
// const notes = require('./note.js');

// console.log("hllo");

// console.log(notes.age);
// console.log(notes.name);

// let result= notes.addNumber(notes.age ,5);
// console.log(result);

// var low = ['rishav','rishav','ravi','rahul','rishav','rahul'];

// var filter =_.uniq[low];

// console.log(filter);

// const jsonString= '{"name":"gruto", "age":22, "city":"Mohali"}';

// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.city);


const express = require('express');
const { name } = require("./note");
const app = express();
const db =require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser. json()); 

const res = require("express/lib/response.js");
const person = require("./models/person");


require('dotenv').config();

const PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
    res.send('local host 3000')
  });
  
  

const personRoutes = require('./routes/personRoutes');
const menuItemsRoutes = require('./routes/menuItemsRoutes');
app.use('/person', personRoutes); 
app.use('/menu', menuItemsRoutes); 








app.listen(3000 , ()=>{
    console.log("listening on port 3000")
})

// app.get('/dd', (req, res)=>{
    
//     const food={
//         name:"paneer",
//         price:20,
//         roti:1,
//         puri: false,
//     }

//     res.send(food);
// })




// app.post('/person', (req, res)=>{
//     res.send('My name is Rishav');
// })