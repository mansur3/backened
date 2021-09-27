const express = require("express");
const app = express();

const mongoose = require("mongoose");



const Company = require("./company.model");
// const Job = require("./models/job.model");
const City = require("./city.model");
const Period = require("./period.model");
const Rating = require("./rating.model");
const Status = require("./status.model");
const Type = require("./type.model");
const Skill = require("./skill.model");



const jobSchema = new mongoose.Schema({
    name : {type : String, required : true},
    city : {type : mongoose.Schema.Types.ObjectId, ref : "city", required : true },
    type : {type : mongoose.Schema.Types.ObjectId, ref : "type", required : true },
    period : {type : mongoose.Schema.Types.ObjectId, ref : "period", required : true },
    rating : {type : mongoose.Schema.Types.ObjectId, ref : "rating", required : true },
    skill : {type : mongoose.Schema.Types.ObjectId, ref : "skill", required : true },
    status: {type : mongoose.Schema.Types.ObjectId, ref : "status", required : true },
    company: {type : mongoose.Schema.Types.ObjectId, ref : "company", required : true }
})



const Job = mongoose.model("job", jobSchema);


module.exports = Job;
