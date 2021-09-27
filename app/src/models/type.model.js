const express = require("express");
const app = express();

const mongoose = require("mongoose");


const typeSchema = new mongoose.Schema({
    
    type : {type : String, required : true},
  
})



const Type = mongoose.model("type", typeSchema);


module.exports = Type;