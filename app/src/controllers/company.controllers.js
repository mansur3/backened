const express = require("express");
const app = express();

const router = express.Router();


const Company = require("../models/company.model")


router.post("", async(req, res) => {
    var item = await Company.create(req.body);
    res.status(201).send({item});
})

router.get("", async(req, res) => {
    var item = await Company.find().lean().exec();

    res.status(200).send({item});
})

router.get("/:id", async(req, res) => {
    var item = await Company.findById(req.params.id);

    res.status(200).send({item});
})


module.exports = router;