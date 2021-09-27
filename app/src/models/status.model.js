const express = require("express");
const app = express();

const mongoose = require("mongoose");


const statusSchema = new mongoose.Schema({
    
    status : {type : String, required : true},
  
})



const Status = mongoose.model("status", statusSchema);


module.exports = Status;