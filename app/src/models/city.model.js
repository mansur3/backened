const express = require("express");
const app = express();

const mongoose = require("mongoose");


const citySchema = new mongoose.Schema({
    
    city : {type : String, required : true},
  
})



const City = mongoose.model("city", citySchema);


module.exports = City;