
const express = require("express");
const mongoose=require("mongoose");
const app= express();
mongoose.connect("mongodb://localhost:27017/farmregis",{
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
    fname:{
        type:String,
        required:true
    },
    
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    land:{
        type:Number,
        required:true
    },
    cattle:{
        type:String,
        required:true
    },
    cro:{
        type:String,
        required:true
    },
    phno:{
        type:Number,
        required:true
    }
   
});

const collection = new mongoose.model("regis",logindesgin);
module.exports=collection;