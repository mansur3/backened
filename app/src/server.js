const express = require("express");
const app = express();

app.use(express.json());

const connect = require("./configs/db")


app.use(express.urlencoded())

///models
const Company = require("./models/company.model.js");
const Job = require("./models/job.model");
const City = require("./models/city.model");
const Period = require("./models/period.model");
const Rating = require("./models/rating.model");
const Status = require("./models/status.model");
const Type = require("./models/type.model");
const Skill = require("./models/skill.model");







///controllers

const companyController = require("./controllers/company.controllers");
const jobController = require("./controllers/job.controller");
const cityController = require("./controllers/city.controller");
const periodController = require("./controllers/period.controller");
const ratingController = require("./controllers/rating.controller");
const statusController = require("./controllers/status.controller");
const typeController = require("./controllers/type.controller");
const skillController = require("./controllers/skill.controller");








app.use("/company", companyController);
app.use("/job", jobController);
app.use("/city", cityController);
app.use("/period", periodController);
app.use("/rating", ratingController);
app.use("/status", statusController);
app.use("/type", typeController);
app.use("/skill", skillController);










app.listen(1234, async function() {
    await connect();
    console.log("Listening on port 1234");
})