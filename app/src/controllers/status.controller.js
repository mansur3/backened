const express = require("express");
const app = express();
const router = express.Router();

const mongoose = require("mongoose");


const Status = require("../models/status.model");


router.post("", async(req, res) => {
    const item = await Status.create(req.body);

    res.status(201).send({item});
})

router.get("", async(req, res) => {
    var item = await Status.find().lean().exec();

    res.status(200).send({item});
})



module.exports = router;