const express = require("express");
const app = express();

const mongoose = require("mongoose");


const skillSchema = new mongoose.Schema({
    
    skill : {type : String, required : true},
  
})



const Skill = mongoose.model("skill", skillSchema);


module.exports = Skill;