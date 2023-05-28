
const express = require("express");
const mongoose=require("mongoose");
const app= express();
mongoose.connect("mongodb://localhost:27017/orderagro",{
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
    
    city:{
        type:String,
        required:true
    },
    add:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pin:{
        type:Number,
        required:true
    },
    mno:{
        type:Number,
        required:true
    }
   
});

const collection = new mongoose.model("orderdetails",logindesgin);
module.exports=collection;