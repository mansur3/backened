const express = require("express");
const app = express();
const router = express.Router();

const mongoose = require("mongoose");


const Job = require("../models/job.model");
const Company = require("../models/company.model");

router.post("", async(req, res) => {
    const item = await Job.create(req.body);

    res.status(201).send({item});
})

router.get("", async(req, res) => {
    var item = await Job.find().lean().exec();

    res.status(200).send({item});
})

router.get("/city/:city/skill/:skill", async(req, res) => {
    const item = await Job.findById({city: req.params.city, skill: req.params.skill}).lean().exec();

    res.status(200).send({item});
})

router.get("/type/:check", async(req, res) => {
    const item = await Job.findById({type : req.params.check}).lean().exec();

    res.status(200).send({item});
})

router.get("/period/:month", async(req, res) => {
    const item = await Job.findById({period: req.parms.month}).lean().exec();

    res.status(200).send({item});
})

router.get("/rating/:rate", async(req, res) => {
    const item = await Job.findById({rating : req.params.rate}).sort(asc).lean().exec();

    res.status(200).send({item});
})

router.get("/status/:open", async (req, res) => {
    const item = await Job.findById({status: req.params.open}).lean().exec();

    res.status(200).send({item});
})


module.exports = router;