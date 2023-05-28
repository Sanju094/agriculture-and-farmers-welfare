
const express = require("express");
const mongoose=require("mongoose");
const app= express();
mongoose.connect("mongodb://localhost:27017/loginfarm",{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  family:4
})
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log(Error);
})
const logindesgin=new mongoose.Schema({
    mail:{
        type:String,
        required:true
    },
    
    pwd:{
        type:String,
        required:true
    },
    
   
});

const collection = new mongoose.model("farmlog",logindesgin);
module.exports=collection;