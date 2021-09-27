const express = require("express");
const app = express();

const mongoose = require("mongoose");


const periodSchema = new mongoose.Schema({
    
    period : {type : Number, required : true},
  
})



const Period = mongoose.model("period", periodSchema);


module.exports = Status;