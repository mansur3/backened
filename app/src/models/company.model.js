const express = require("express");
const app = express();
const mongoose = require("mongoose");



const companySchema = new mongoose.Schema({
    name : {type : String, required : true},
    founded : {type : Number, required : true},
    founder : {type: String, required: true}

})

const Company = mongoose.model("company", companySchema);

module.exports = Company;