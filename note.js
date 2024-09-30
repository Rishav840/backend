const { json } = require("express/lib/response");

console.log("this is from note.js");
console.log("again");

let age = 15;

let name = 'rishav';

const addNumber=(a,b)=>{
    return a+b;
}

module.exports = {
    age,
    name,
    addNumber
}