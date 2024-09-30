const express = require('express');
const router = express.Router();

const menuItems = require("../models/menu");


router.post('/', async(req, res)=>{
    try{
        const data =req.body;
        const newMenu = new menuItems(data);
        const response =await newMenu.save();
        res.status(200).json(response);
        
    }catch(err){
        console.log(err);
        res.status(500).json({error:"error"});
    }
})


router.get('/', async(req, res)=>{
    try{
        const data = await menuItems.find();
        console.log("fetching...");
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"error"});
    }
})



module.exports =router;