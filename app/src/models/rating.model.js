const express = require("express");
const app = express();

const mongoose = require("mongoose");


const ratingSchema = new mongoose.Schema({
    
    rating : {type : Number, required : true},
  
})



const Rating = mongoose.model("rating", ratingSchema);


module.exports = Rating;