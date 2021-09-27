const express = require("express");
const app = express();

const mongoose = require("mongoose");


// const Company = require("./models/company.model");
// const Job = require("./models/job.model");
const City = require("./models/city.model");
const Period = require("./models/period.model");
const Rating = require("./models/rating.model");
const Status = require("./models/status.model");
const Type = require("./models/type.model");
const Skill = require("./models/skill.model");


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