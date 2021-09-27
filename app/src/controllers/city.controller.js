const express = require("express");
const app = express();
const router = express.Router();

const mongoose = require("mongoose");


const City = require("../models/city.model");


router.post("", async(req, res) => {
    const item = await City.create(req.body);

    res.status(201).send({item});
})

router.get("", async(req, res) => {
    var item = await City.find().lean().exec();

    res.status(200).send({item});
})



module.exports = router;